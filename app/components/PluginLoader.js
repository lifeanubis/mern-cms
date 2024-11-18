"use client"

import { useEffect, useState } from "react"
import { BASE_LOCAL_URL } from "../lib/utils/constants"

const PluginLoader = () => {
  const [pluginComponents, setPluginComponents] = useState([])
  const postUrl = BASE_LOCAL_URL

  useEffect(() => {
    const loadPlugins = async () => {
      try {
        const response = await fetch(`${postUrl}/api/plugins`)
        if (!response.ok) throw new Error("Failed to fetch plugins")
        const plugins = await response.json()

        const loadedComponents = await Promise.all(
          plugins?.flat()?.map(async (plugin) => {
            if (plugin.frontend?.componentPath) {
              const moduleVar = await import(
                `@/pluginsw/${plugin?.name}/${plugin?.frontend?.componentPath}`
              )
              return { name: plugin?.name, Component: moduleVar?.default }
            }
          })
        )

        setPluginComponents(loadedComponents.filter(Boolean))
      } catch (error) {
        console.log("Error loading plugins:", error)
      }
    }
    loadPlugins()
  }, [])

  return (
    <div>
      {pluginComponents?.map(({ name, Component }, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{name}</h3>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default PluginLoader

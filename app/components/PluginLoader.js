"use client"

import { useEffect, useState } from "react"

const PluginLoader = () => {
  const [pluginComponents, setPluginComponents] = useState([])

  useEffect(() => {
    const loadPlugins = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/plugins")
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
        <div
          key={index}
          style={{ marginBottom: "20px", backgroundColor: "red" }}
        >
          {/* {console.log(pluginComponents, "--------")} */}
          <h3>{name}</h3>
          <Component />
        </div>
      ))}
    </div>
  )
}

export default PluginLoader

import connect from "@/app/lib/db"
import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

export const GET = async (req, res) => {
  // try {
  //   await connect()
  //   const diamond = await DiamondInfo.find()
  //   return new NextResponse(JSON.stringify(diamond), { status: 200 })
  // } catch (error) {
  //   console.log(error)
  //   return new NextResponse("Failed to fetch diamond data", { status: 500 })
  //   // return new NextResponse("this is no spaZxZrta", error)
  // }

  try {
    // Path to the plugins directory
    // await connect()

    const pluginDir = path.join(process.cwd(), "pluginsw")
    const plugins = []

    // Read all plugin folders
    fs.readdirSync(pluginDir).forEach((folder) => {
      const pluginPath = path.join(pluginDir, folder, "plugin.json")
      if (fs.existsSync(pluginPath)) {
        const pluginConfig = JSON.parse(fs.readFileSync(pluginPath, "utf8"))
        plugins.push(pluginConfig)
      }
    })
    console.log(plugins?.flat(), "--asdas------")

    return new NextResponse(JSON.stringify(plugins), { status: 200 })

    // Return the plugins
    // res.status(200).json(plugins)
  } catch (error) {
    console.error("Error reading plugins:", error)
    return new NextResponse(error, { status: 500 })
  }
}

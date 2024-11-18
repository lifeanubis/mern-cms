"use client"
import Image from "next/image"
import { Card, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import PluginLoader from "./components/PluginLoader"
import { BASE_LOCAL_URL } from "./lib/utils/constants"
import DiamondTable from "./components/DiamondTable"
import { ImageCarousel } from "./components/ImageCarousel"
import { MyCalendar } from "./components/BigCalander"
import Link from "next/link"

export default function Home() {
  const [diamondData, setDiamondData] = useState()
  const [user, setUser] = useState("")

  const [heroImageData, setHeroImageData] = useState()
  const postUrl = BASE_LOCAL_URL
  const imageGlobal =
    "https://thumbs.dreamstime.com/z/banner-brilliant-cut-diamonds-flawless-perfect-jewelry-136807281.jpg"

  useEffect(() => {
    if (postUrl === undefined || postUrl === null) {
      return null
    }

    if (postUrl !== undefined && postUrl !== null) {
      const getDiamondData = async () => {
        try {
          const diamondDataFetch = await axios.get(`${postUrl}/api/diamonds`)
          const heroImageDataFetch = await axios.get(`${postUrl}/api/banner`)
          setDiamondData(diamondDataFetch?.data)
          setHeroImageData(heroImageDataFetch?.data[0]?.url)
        } catch (error) {
          console.log(error)
        }
      }
      getDiamondData()
    }
  }, [postUrl])

  return (
    <div>
      <div className="flex gap-10 w-full h-full justify-center absolute top-52 left-52 ">
        <Link href={"/dashboard"}>
          <button className="p-4 bg-slate-600 ">Enter as Admin</button>
        </Link>

        <Link href={"/user"}>
          <button className="p-4 bg-slate-600 ">Enter as User</button>
        </Link>
      </div>
    </div>
  )
}

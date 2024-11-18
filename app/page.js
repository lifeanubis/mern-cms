"use client"
import Image from "next/image"
import Header from "./components/Header"
import { Card, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import PluginLoader from "./components/PluginLoader"
import { BASE_LOCAL_URL } from "./lib/utils/constants"

export default function Home() {
  const [diamondData, setDiamondData] = useState()
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

  const CardUI = () => {
    return (
      <div className="grid grid-cols-3 gap-10 ">
        {diamondData?.map((diamond, index) => {
          return (
            <div
              id="diamond-container"
              className=" p-1  min-h-52 items-center text-center content-center   bg-neutral-700 rounded-lg  "
              key={index}
            >
              <div className="">
                <div id="image">
                  {/* <Image src={diamond?.image} /> */}
                  {diamond?.name}
                </div>
                <div id="diamond-name">{diamond?.name}</div>
                <div id="diamond-about">{diamond?.price}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="">
      <div
        id="diamond-container1"
        className="grid  w-full h-full bg-emerald-800  "
      >
        <div className="col-span-1">
          <div
            alt="broken-img"
            className={`bg-cover bg-center  h-[70vh] min-w-[100vw] `}
            style={{
              backgroundImage: `url('${heroImageData || imageGlobal}')`,
            }}
          />
        </div>
        <div className="bg-yellow-800">
          <PluginLoader />
          {/* <CardUI /> */}
        </div>
      </div>
      {/* // <div>footer</div> */}
    </div>
  )
}

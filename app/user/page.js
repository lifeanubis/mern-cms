"use client"
import Image from "next/image"
import { Card, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import PluginLoader from "../components/PluginLoader"
import { BASE_LOCAL_URL } from "../lib/utils/constants"

export default function Uer() {
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
      <div
        className="grid lg:grid-cols-3 gap-10 p-5 content-center w-full "
        key={Math.random()}
      >
        <>
          {diamondData?.map((diamond, index) => {
            return (
              <Link href={"/about"} key={Math.random(index)}>
                <div
                  id="diamond-container"
                  className=" p-1  min-h-52  text-center content-center   bg-neutral-700 rounded-lg  "
                >
                  <div className=" ">
                    <div
                      id="image"
                      className="flex justify-center w-full gap-x-2"
                    >
                      <h1> NAME -</h1>
                      <p>{diamond?.name}</p>
                    </div>
                    <div
                      id="diamond-name"
                      className="flex justify-center w-full gap-x-2"
                    >
                      <h1> RARITY -</h1>
                      <p>{diamond?.rarity}</p>
                    </div>
                    <div
                      id="diamond-about"
                      className="flex justify-center w-full gap-x-2"
                    >
                      <h1> PRICE -</h1>
                      <p>{diamond?.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </>
      </div>
    )
  }
  const PublicView = () => {
    return (
      <div id="diamond-container1" className="grid  w-full h-full">
        <div className="col-span-1">
          <div
            alt="broken-img"
            className={`bg-cover bg-center  h-[70vh] min-w-[100vw] `}
            style={{
              backgroundImage: `url('${heroImageData || imageGlobal}')`,
            }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold p-1"> Diamond Cards </h1>
        </div>
        <div className="">
          <CardUI />
          <PluginLoader />
        </div>
      </div>
    )
  }
  return (
    <div className="flex  w-full h-full   ">
      <PublicView />
    </div>
  )
}

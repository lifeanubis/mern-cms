"use client"
import Image from "next/image"
import Header from "./components/Header"
import { Card, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
  const [diamondData, setDiamondData] = useState()
  const [heroImageData, setHeroImageData] = useState()

  const imageGlobal =
    "https://thumbs.dreamstime.com/z/banner-brilliant-cut-diamonds-flawless-perfect-jewelry-136807281.jpg"

  const getDiamondData = async () => {
    const diamondDataFetch = await axios.get(
      "http://localhost:3000/api/diamonds"
    )
    // console.log(diamondData.data, "header-=------")
    const heroImageDataFetch = await axios.get(
      "http://localhost:3000/api/banner"
    )
    setDiamondData(diamondDataFetch?.data)
    setHeroImageData(heroImageDataFetch?.data[0]?.url)
  }

  useEffect(() => {
    getDiamondData()
  }, [])

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
        <div className="">
          <CardUI />
        </div>
      </div>
      {/* // <div>footer</div> */}
    </div>
  )
}

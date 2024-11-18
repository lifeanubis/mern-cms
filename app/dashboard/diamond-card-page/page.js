"use client"

import AddCardModal from "@/app/components/AddCardModal"
import CardEditModal from "@/app/components/CardEditModal"
import { BASE_LOCAL_URL } from "@/app/lib/utils/constants"
import { AddCircle, Edit } from "@mui/icons-material"
import axios from "axios"
import React, { useEffect, useState } from "react"

const DiamonCardEditPage = () => {
  const [diamondData, setDiamondData] = useState()
  const postUrl = BASE_LOCAL_URL

  const getDiamondData = async () => {
    const diamondDataFetch = await axios.get(`${postUrl}api/diamonds`)
    // console.log(diamondData.data, "header-=------")
    setDiamondData(diamondDataFetch?.data)
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
              className="relative p-1  min-h-52 items-center text-center content-center   bg-neutral-700 rounded-lg  "
              key={index}
            >
              <div className="absolute top-0 right-0 ">
                <CardEditModal
                  diamondName={diamond?.name}
                  diamondPrice={diamond?.price}
                  diamondRarity={diamond?.rarity}
                  id={diamond?._id}
                  refetch={getDiamondData}
                />
              </div>

              <div className="">
                <div id="image">
                  {/* <Image src={diamond?.image} /> */}
                  {diamond?.name}
                </div>
                <div id="diamond-name">{diamond?.rarity}</div>
                <div id="diamond-about">{diamond?.price}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid   ">
      <div className="col-span-1 p-4  mb-4 mx-auto flex bg-gray-800 items-center">
        <AddCardModal refetch={getDiamondData} />
      </div>
      <div className="">
        <CardUI />
      </div>
    </div>
  )
}

export default DiamonCardEditPage

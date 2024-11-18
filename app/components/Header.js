"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BASE_LOCAL_URL } from "../lib/utils/constants"
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material"

const Header = () => {
  const [headerData, setHeaderData] = useState()
  const [showSideNav, setShowSideNav] = useState(false)

  const postUrl = BASE_LOCAL_URL

  const getHeaderData = async () => {
    try {
      const headerData = await axios.get(`${postUrl}/api/header`)
      setHeaderData(headerData?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (postUrl !== undefined) {
      getHeaderData()
    }
  }, [postUrl])

  const SideNav = () => {
    return (
      <div
        className="bg-gradient-to-r p-4 from-blue-500 to-green-500  h-screen    "
        onClick={() => setShowSideNav(false)}
      >
        {headerData?.map((header) => (
          <div key={header?.routePath}>
            <Link href={`/routes/${header?.routePath}`}>{header?.name}</Link>
          </div>
        ))}
        <Link href={`/user`}>Home</Link>
      </div>
    )
  }

  return (
    <div className=" w-full">
      <div className="flex xl:hidden absolute left-0 z-50 ">
        <div className={`w-full ${showSideNav === true ? "block" : "hidden"} `}>
          <SideNav />
        </div>
        <div>
          <ArrowCircleRight
            className={` ${showSideNav === false ? "block" : "hidden"} `}
            fontSize="large"
            onClick={() => setShowSideNav(true)}
          />
          <ArrowCircleLeft
            className={` ${showSideNav === true ? "block" : "hidden"} `}
            fontSize="large"
            onClick={() => setShowSideNav(false)}
          />
        </div>
      </div>
      <div className="lg:grid grid-cols-5 gap-52 p-4 justify-start hidden ">
        {headerData?.map((header) => (
          <div key={header?.routePath}>
            <Link href={`/routes/${header?.routePath}`}>{header?.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header

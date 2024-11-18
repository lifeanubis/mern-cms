"use client"

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BASE_LOCAL_URL } from "../lib/utils/constants"

const Header = () => {
  const [headerData, setHeaderData] = useState()
  const postUrl = BASE_LOCAL_URL

  const getHeaderData = async () => {
    const headerData = await axios.get(`${postUrl}/api/header`)
    // console.log(headerData.data, "header-=------")
    setHeaderData(headerData.data)
  }

  useEffect(() => {
    getHeaderData()
  }, [])

  return (
    <div className="flex justify-end flex-1 bg-green-800 w-full">
      <div className="grid grid-cols-5 gap-52 p-4 justify-start bg-red-800">
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

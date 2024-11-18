"use client"

import { BASE_LOCAL_URL } from "@/app/lib/utils/constants"
import { TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const AddBannerPage = () => {
  const postUrl = BASE_LOCAL_URL

  const [url, setUrl] = useState("")
  const [imageId, setImageId] = useState()

  const getData = async () => {
    try {
      const heroImageData = await axios.get(`${postUrl}/api/banner`)
      setImageId(heroImageData?.data?.[0]?._id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [postUrl])

  const handleSubmit = async () => {
    const body = {
      imageId: imageId,
      url: url,
    }
    if (url !== "") {
      const result = await axios.patch(postUrl, body)
    }
  }

  return (
    <div id="add-header-container" className="w-full h-full">
      <div className=" bg-slate-950">
        <div className="p-4 w-full">
          <h1 className="text-3xl">Hero Image Url </h1>
          <div>
            <TextField
              id="outlined-basic"
              label="url"
              variant="outlined"
              className="bg-slate-400 "
              fullWidth={true}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            className="bg-pink-700 hover:opacity-75 w-full h-full p-4 rounded-xl  mt-10 cursor-pointer "
            onClick={() => handleSubmit()}
          >
            ADD URL
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddBannerPage

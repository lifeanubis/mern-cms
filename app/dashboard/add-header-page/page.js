"use client"

import EditHeaderDialog from "@/app/components/EditHeaderDialog"
import { BASE_LOCAL_URL } from "@/app/lib/utils/constants"
import { TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

const AddHeaderPage = () => {
  const postUrl = BASE_LOCAL_URL

  const [headerData, setHeaderData] = useState()

  const [title, setTitle] = useState("")
  const [pathName, setPathName] = useState("")

  const body = {
    name: title,
    routePath: pathName,
  }
  const handleSubmit = async () => {
    if (title !== "" && pathName !== "") {
      const result = await axios.post(`${postUrl}/api/header`, body)
    }
  }

  const getHeaderData = async () => {
    try {
      const headerData = await axios.get(`${postUrl}/api/header`)
      setHeaderData(headerData.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHeaderData()
  }, [postUrl])

  const CardUI = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 ">
        {headerData?.map((header, index) => {
          return (
            <div
              id="diamond-container"
              className="relative p-1  min-h-52 items-center text-center content-center   bg-neutral-700 rounded-lg  "
              key={index}
            >
              <div className="absolute top-0 right-0 ">
                <EditHeaderDialog
                  headerName={header?.name}
                  headerPath={header?.routePath}
                  id={header?._id}
                  refetch={getHeaderData}
                />
              </div>

              <div className="">
                <div id="header-name">{header?.name}</div>
                <div id="header-path">{header?.routePath}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div id="add-header-container" className="w-full h-full">
      <div className=" bg-slate-950">
        <div className=" p-4  w-full ">
          <h1 className="text-3xl">Header Title </h1>
          <div>
            <TextField
              id="outlined-basic"
              label="Header Title"
              variant="outlined"
              className="bg-slate-400"
              fullWidth={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="p-4 w-full">
          <h1 className="text-3xl">Header Path Name </h1>
          <div>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className="bg-slate-400 "
              fullWidth={true}
              onChange={(e) => setPathName(e.target.value)}
            />
          </div>
          <button
            className="bg-pink-700 hover:opacity-75 w-full h-full p-4 rounded-xl  mt-10 cursor-pointer "
            onClick={() => {
              handleSubmit()
              getHeaderData()
            }}
          >
            ADD HEADER
          </button>
          {/* ADD AddHeaderPage
        </div> */}
        </div>
        <CardUI />
      </div>
    </div>
  )
}

export default AddHeaderPage

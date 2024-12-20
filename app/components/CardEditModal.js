"use client"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import { useEffect, useState } from "react"
import { Delete, Edit } from "@mui/icons-material"
import { TextField } from "@mui/material"
import axios from "axios"
import { BASE_LOCAL_URL } from "../lib/utils/constants"

export default function CardEditModal({
  id,
  diamondRarity,
  diamondName,
  diamondPrice,
  refetch,
}) {
  const [open, setOpen] = useState(false)
  const postUrl = BASE_LOCAL_URL

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen)
  }

  const [editData, setEditData] = useState({
    price: "",
    name: "",
    rarity: "",
  })

  useEffect(() => {
    setEditData({
      price: diamondPrice,
      name: diamondName,
      rarity: diamondRarity,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const body = {
    userId: id,
    price: editData.price,
    name: editData.name,
    rarity: editData.rarity,
  }
  const updateData = async () => {
    try {
      const result = await axios.patch(`${postUrl}/api/diamonds`, body)
    } catch (error) {
      console.error(
        "Error deleting card:",
        error.response?.data || error.message
      )
    }
  }

  const deleteCard = async () => {
    try {
      const result2 = await axios.delete(`${postUrl}/api/diamonds`, {
        data: body,
      })

      console.log(body, result2, "=========-")
    } catch (error) {
      console.error(
        "Error deleting card:",
        error.response?.data || error.message
      )
    }
  }

  const DrawerList = (
    <Box sx={{ width: 700, backgroundColor: "black" }} role="presentation">
      <div id="add-header-container" className="w-1/2 lg:w-full h-full">
        <div className=" bg-slate-950">
          <div className=" p-4  w-full ">
            <h1 className="text-3xl text-white">Diamond Name </h1>
            <div>
              <TextField
                id="outlined-basic"
                label="Header Title"
                variant="outlined"
                className="bg-slate-400"
                fullWidth={true}
                //   defaultValue={}
                defaultValue={diamondName}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />
            </div>
          </div>
          <div className="p-4 w-full">
            <h1 className="text-3xl text-white">Rarity </h1>
            <div>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                className="bg-slate-400 "
                fullWidth={true}
                defaultValue={diamondRarity}
                onChange={(e) =>
                  setEditData({ ...editData, rarity: e.target.value })
                }
              />
            </div>
          </div>
          <div className=" p-4  w-full ">
            <h1 className="text-3xl text-white">Price </h1>
            <div>
              <TextField
                id="outlined-basic"
                label="Header Title"
                variant="outlined"
                className="bg-slate-400"
                fullWidth={true}
                defaultValue={diamondPrice}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex justify-center items-center  ">
              <button
                className="bg-pink-700 text-white hover:opacity-75 w-1/2 h-10 rounded-xl mt-10 cursor-pointer "
                onClick={() => {
                  updateData()
                  refetch()
                  toggleDrawer(false)
                }}
              >
                Edit Details
              </button>

              <button
                onClick={() => {
                  deleteCard()
                  refetch()
                  toggleDrawer(false)
                }}
                className="text-white  mt-10 "
              >
                <h1 className="text-white font-bold flex justify-center items-center p-2 gap-x-2 cursor-pointer">
                  Delete Card
                  <Delete fontSize="medium" />
                </h1>
              </button>
            </div>
            <button
              className="bg-orange-800 text-white hover:opacity-75 w-1/2 h-10 rounded-xl lg:hidden mt-10 cursor-pointer "
              onClick={() => toggleDrawer(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)} className="text-white">
        <h1 className="text-white font-bold flex justify-center items-center p-2 gap-x-2 cursor-pointer">
          Edit Card
          <Edit fontSize="medium" />
        </h1>
      </Button>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

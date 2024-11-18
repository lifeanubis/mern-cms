"use client"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import { useEffect, useState } from "react"
import { AddCircle, Edit } from "@mui/icons-material"
import { TextField } from "@mui/material"
import axios from "axios"
import { BASE_LOCAL_URL } from "../lib/utils/constants"

export default function AddCardModal({
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

  const updateData = async () => {
    try {
      const body = {
        //   userId: id,
        price: editData.price,
        name: editData.name,
        rarity: editData.rarity,
      }
      const result = await axios.post(`${postUrl}/api/diamonds`, body)
      console.log(body, result, "=========-")
    } catch (error) {
      console.error(
        "Error deleting card:",
        error.response?.data || error.message
      )
    }
  }

  const DrawerList = (
    <Box sx={{ width: 700 }} role="presentation">
      <div id="add-card-container" className="w-full h-full">
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
            <div className="flex justify-center">
              <button
                className="bg-pink-700 text-white hover:opacity-75 w-1/2 h-10 rounded-xl mt-10 cursor-pointer "
                onClick={() => {
                  updateData()
                  refetch()
                  toggleDrawer(false)
                }}
              >
                Add Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <div>
      <Button onClick={() => toggleDrawer(true)} className="text-white">
        <h1 className="text-white font-bold flex justify-center items-center p-2 gap-x-2 cursor-pointer">
          Add Daiamond Card
          <AddCircle className="w-20 h-20" />
        </h1>
      </Button>
      <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
// onClick={toggleDrawer(anchor, true)}

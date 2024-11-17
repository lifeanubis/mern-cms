"use client"

import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Button from "@mui/material/Button"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MailIcon from "@mui/icons-material/Mail"
import { useEffect, useState } from "react"
import { Delete, Edit } from "@mui/icons-material"
import { TextField } from "@mui/material"
import axios from "axios"

export default function CardEditModal({
  id,
  diamondRarity,
  diamondName,
  diamondPrice,
  refetch,
}) {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
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
  }, [])

  const body = {
    userId: id,
    price: editData.price,
    name: editData.name,
    rarity: editData.rarity,
  }
  const updateData = async () => {
    try {
      const result = await axios.patch(
        "http://localhost:3000/api/diamonds",
        body
      )
    } catch (error) {
      console.error(
        "Error deleting card:",
        error.response?.data || error.message
      )
    }
  }

  const deleteCard = async () => {
    try {
      const result2 = await axios.delete("http://localhost:3000/api/diamonds", {
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
    <Box sx={{ width: 700 }} role="presentation">
      <div id="add-header-container" className="w-full h-full">
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
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="text-white">
        <h1 className="text-white font-bold flex justify-center items-center p-2 gap-x-2 cursor-pointer">
          Edit Card
          <Edit fontSize="medium" />
        </h1>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

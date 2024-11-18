import { Delete, Edit } from "@mui/icons-material"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import axios from "axios"
import { Fragment, useState } from "react"
import { BASE_LOCAL_URL } from "../lib/utils/constants"

export default function EditHeaderDialog({
  refetch,
  headerPath,
  headerName,
  id,
}) {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [pathName, setPathName] = useState("")

  const postUrl = BASE_LOCAL_URL

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = {
    userId: id,
    name: title,
    routePath: pathName,
  }

  const handleSubmit = async () => {
    try {
      if (title !== "" && pathName !== "") {
        const result = await axios.patch(`${postUrl}/api/header`, body)
        console.log(result, body, "--------")
      }
    } catch (error) {
      console.log(error, "--------")
    }
  }

  // const handleDelete = async () => {
  //   try {
  //     const result = await axios.delete(postUrl, body)
  //     console.log(body, result, "--------")
  //   } catch (error) {
  //     console.log(error, "--------")
  //   }
  // }
  const handleDelete = async () => {
    try {
      const result2 = await axios.delete(`${postUrl}/api/header`, {
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

  return (
    <Fragment>
      <Button onClick={handleClickOpen} className="text-white">
        <h1 className="text-white font-bold flex justify-center items-center p-2 gap-x-2 cursor-pointer">
          Edit Header
          <Edit fontSize="medium" />
        </h1>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <div id="add-header-container" className="w-full h-full">
            <div className=" bg-slate-950">
              <div className=" p-4  w-full ">
                <h1 className="text-3xl text-white">Header Title </h1>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="eg. Diamond Details"
                    variant="outlined"
                    className="bg-slate-400"
                    fullWidth={true}
                    defaultValue={headerName}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-4 w-full">
                <h1 className="text-3xl text-white">Header Path Name </h1>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="route eg. /home or /food-category "
                    variant="outlined"
                    className="bg-slate-400 "
                    fullWidth={true}
                    defaultValue={headerPath}
                    onChange={(e) => setPathName(e.target.value)}
                  />
                </div>
                <button
                  className="bg-pink-700 hover:opacity-75 w-full h-full p-4 rounded-xl  mt-10 cursor-pointer "
                  onClick={() => {
                    handleSubmit()
                    refetch()
                    handleClose()
                  }}
                >
                  Save Changes
                </button>
                <button
                  onClick={() => {
                    handleDelete()
                    refetch()
                    handleClose()
                  }}
                  className="text-white  mt-10 "
                >
                  <h1 className="text-white font-bold flex justify-center items-center p-2 gap-x-2 cursor-pointer">
                    Delete Page
                    <Delete fontSize="medium" />
                  </h1>
                </button>
              </div>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

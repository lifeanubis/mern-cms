import connect from "@/app/lib/db"
import HeaderInfo from "@/app/lib/model/headerData"
import { Types } from "mongoose"
import { NextResponse } from "next/server"

// const { NextResponse } = require("next/server")

export const GET = async () => {
  try {
    await connect()
    const headers = await HeaderInfo.find()
    return new NextResponse(JSON.stringify(headers), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to fetch headers data", { status: 500 })
    // return new NextResponse("this is no spaZxZrta", error)
  }
}

export const POST = async (req) => {
  try {
    const body = await req.json()
    await connect()
    const newHeaders = new HeaderInfo(body)
    await newHeaders.save()
    return new NextResponse(
      JSON.stringify({ message: "headers added", headers: newHeaders }),
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to add new headers data", { status: 500 })
  }
}

export const PATCH = async (req) => {
  try {
    const updateBody = await req.json()
    const { userId, name } = updateBody
    await connect()

    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "id is required" }), {
        status: 400,
      })
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        { message: "id error" },
        {
          status: 400,
        }
      )
    }

    const updateheaders = await HeaderInfo.findByIdAndUpdate(
      { _id: userId },
      { $set: updateBody },
      { new: true }
    )

    if (!updateheaders) {
      return new NextResponse("Failed to update headers data 400", {
        status: 400,
      })
    }
    return new NextResponse("updated headers data", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to update headers data 500", {
      status: 500,
    })
  }
}

export const DELETE = async (req) => {
  try {
    const deleteBody = await req.json()
    const { userId } = deleteBody
    await connect()

    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "id is required" }), {
        status: 400,
      })
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        { message: "id error" },
        {
          status: 400,
        }
      )
    }

    const deleteheaders = await HeaderInfo.findByIdAndDelete(
      { _id: userId },
      { new: true }
    )

    if (!deleteheaders) {
      return new NextResponse("Failed to delete headers data 400", {
        status: 400,
      })
    }
    return new NextResponse("deleted headers data", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to delete headers data 500", {
      status: 500,
    })
  }
}

import connect from "@/app/lib/db"
import DiamondInfo from "@/app/lib/model/diamonds"
import { Types } from "mongoose"
import { NextResponse } from "next/server"

// const { NextResponse } = require("next/server")

export const GET = async () => {
  try {
    await connect()
    const diamond = await DiamondInfo.find()
    return new NextResponse(JSON.stringify(diamond), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to fetch diamond data", { status: 500 })
    // return new NextResponse("this is no spaZxZrta", error)
  }
}
export const POST = async (req) => {
  try {
    const body = await req.json()
    await connect()
    const newDiamond = new DiamondInfo(body)
    await newDiamond.save()
    return new NextResponse(
      JSON.stringify({ message: "diamond added", diamond: newDiamond }),
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to add new diamond data", { status: 500 })
  }
}

export const PATCH = async (req) => {
  try {
    const updateBody = await req.json()
    const { userId, name, rarity, price, color, carat, clarity, cut } =
      updateBody
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

    const updateDiamond = await DiamondInfo.findByIdAndUpdate(
      { _id: userId },
      { $set: updateBody },
      { new: true }
    )

    if (!updateDiamond) {
      return new NextResponse("Failed to update diamond data 400", {
        status: 400,
      })
    }
    return new NextResponse("updated diamond data", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to update diamond data 500", {
      status: 500,
    })
  }
}

export const DELETE = async (req) => {
  try {
    const deleteBody = await req.json()
    const { userId, name, rarity, price, color, carat, clarity, cut } =
      deleteBody
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

    const deleteDiamond = await DiamondInfo.findByIdAndDelete({ _id: userId })

    if (!deleteDiamond) {
      return new NextResponse("Failed to update diamond data 400", {
        status: 400,
      })
    }
    return new NextResponse("updated diamond data", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to update diamond data 500", {
      status: 500,
    })
  }
}

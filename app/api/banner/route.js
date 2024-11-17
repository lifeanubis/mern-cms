import connect from "@/app/lib/db"
import HeroImage from "@/app/lib/model/banner"
import { Types } from "mongoose"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connect()
    const heroImageUrl = await HeroImage.find()
    return new NextResponse(JSON.stringify(heroImageUrl), { status: 200 })
  } catch (error) {
    return new NextResponse("Failed to fetch heroImageUrl data", {
      status: 500,
    })
  }
}

export const POST = async (req) => {
  try {
    const body = await req.json()
    await connect()
    const newImage = new HeroImage(body)
    await newImage.save()

    return new NextResponse(
      JSON.stringify({ message: "heroImageUrl added", heroImageUrl: newImage }),
      { status: 200 }
    )
  } catch (error) {
    return new NextResponse("Failed to add new heroImageUrl data", {
      status: 500,
    })
  }
}

export const PATCH = async (req) => {
  try {
    const updateBody = await req.json()
    const { imageId, url } = updateBody
    await connect()

    if (!imageId) {
      return new NextResponse(JSON.stringify({ message: "id is required" }), {
        status: 400,
      })
    }

    if (!Types.ObjectId.isValid(imageId)) {
      return new NextResponse(
        { message: "id error" },
        {
          status: 400,
        }
      )
    }

    const updateHeroImage = await HeroImage.findByIdAndUpdate(
      { _id: imageId },
      { url: url },
      { new: true }
    )

    if (!updateHeroImage) {
      return new NextResponse("Failed to update hero image data 400", {
        status: 400,
      })
    }
    return new NextResponse("updated hero image data", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Failed to update hero image data 500", {
      status: 500,
    })
  }
}

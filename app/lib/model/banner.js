import { model, models, Schema } from "mongoose"

const HeroImageSchema = new Schema(
  {
    url: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
)

const HeroImage = models.HeroImage || model("HeroImage", HeroImageSchema)

export default HeroImage

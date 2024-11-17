import { model, models, Schema } from "mongoose"

const DiamondInfoSchema = new Schema(
  {
    name: { type: "string", required: true },
    rarity: { type: "string", required: true },
    price: { type: "number", required: true },
    color: { type: "string", required: false },
    carat: { type: "number", required: false },
    clarity: { type: "string", required: false },
    cut: { type: "string", required: false },
    image: { type: "string", required: false },
  },
  {
    timestamps: true,
  }
)

const DiamondInfo =
  models.DiamondInfo || model("DiamondInfo", DiamondInfoSchema)

export default DiamondInfo

import { model, models, Schema } from "mongoose"

const HeaderDataSchema = new Schema(
  {
    name: { type: "string", required: true },
    routePath: { type: "string", required: true },
  },
  {
    timestamps: true,
  }
)

const HeaderInfo = models.HeaderInfo || model("HeaderInfo", HeaderDataSchema)

export default HeaderInfo

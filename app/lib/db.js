import mongoose from "mongoose"

const MONGO_URI = process.env.MONGODB_URI

const connect = async () => {
  const connectionState = mongoose.connection.readyState

  if (connectionState === 1) {
    console.log("already connected")
    return
  }
  if (connectionState === 2) {
    console.log("connecting........")
    return
  }

  if (MONGO_URI !== undefined) {
    try {
      mongoose.connect(MONGO_URI, {
        dbName: "diamondCluster",
        bufferCommands: true,
      })

      console.log("Connected to MongoDB")
    } catch (error) {
      console.log(error.message, "----------")
    }
  }
}

export default connect

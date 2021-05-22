import mongoose from "mongoose";
import { Idetailview } from "../interfaces/Idetailview";

const detailviewSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  reply: [
      {
        replyText: {
            type: String,
            required: true,
        },
        replyIndex: {
            type: Number,
            required: true,
        },
        like: {
            type: Number,
            required: true,
        }
      }
  ]
});

export default mongoose.model<Idetailview & mongoose.Document>("Detailview", detailviewSchema);
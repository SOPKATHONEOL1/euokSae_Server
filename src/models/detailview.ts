import mongoose from "mongoose";
import { Idetailview } from "../interfaces/Idetailview";

const detailviewSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  replyNum: {
    type: Number,
    required: true,
  },
  replyText: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  }
});

export default mongoose.model<Idetailview & mongoose.Document>("Detailview", detailviewSchema);
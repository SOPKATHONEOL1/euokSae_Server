import mongoose from "mongoose";
import { Ilike } from "../interfaces/Ilike";

const likeSchema = new mongoose.Schema({
  replyNum: {
    type: Number,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  }
});

export default mongoose.model<Ilike & mongoose.Document>("Like", likeSchema);
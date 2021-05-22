import mongoose from "mongoose";
import { Ireply } from "../interfaces/Ireply";

const replySchema = new mongoose.Schema({
  replyNum: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});

export default mongoose.model<Ireply & mongoose.Document>("Reply", replySchema);
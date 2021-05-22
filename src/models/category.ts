import mongoose from "mongoose";
import { Icategory } from "../interfaces/Icategory";

const categorySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  detailIdx: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Icategory & mongoose.Document>("Category", categorySchema);
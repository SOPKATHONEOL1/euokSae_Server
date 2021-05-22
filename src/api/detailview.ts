import { Router, Request, Response } from "express";
import Detailview from "../models/detailview";

const router = Router();

/**
 *  @route GET api/detail/:detailIdx
 *  @desc Get detailview
 *  @access Public
 */
router.get("/detail/:detailIdx", async (req: Request, res: Response) => {
  try {
    const detailview = await Detailview.find().populate("replyNum", ["image", "replyText", "like"]);
    res.json(detailview);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});




module.exports = router;
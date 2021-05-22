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
    const detailview = await Detailview.find().sort({ like : -1 }).populate("replyIndex", ["image", "replyText", "like"]);
    //db에 있는 모든 데이터 리스트를 리턴해야하는데 굳이 populate 할 필요가...?
    res.json(detailview);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});




module.exports = router;
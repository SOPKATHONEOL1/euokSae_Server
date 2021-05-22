import { Router, Request, Response } from "express";
import Category from "../models/category";

const router = Router();

/**
 *  @route GET api/category/:name
 *  @desc Get all category
 *  @access Public
 */
router.get("/category/:name", async (req: Request, res: Response) => {
  try {
    const category = await Category.find().populate("detailIdx", ["image", "title"]);
    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
import { Router, Request, Response } from "express";
import Category from "../models/category";

const router = Router();

/**
 *  @route GET api/category/:name
 *  @desc Get all category
 *  @access Public
 */

 router.post(
    "/category/idolidol",
    async (req: Request, res: Response) => {
        const {image, name, title, detailIndex} = req.body;
		//User 객체 생성
        let idol = new Category({
            image,
            name,
            title,
            detailIndex,
        });
        await idol.save();
        res.json(idol);

    });

router.get("/category/idol", async (req: Request, res: Response) => {
  try {

    const category = await Category.find().populate("detailIdx", ["image", "title"]);
    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
import { Router, Request, Response } from "express";
import request from "request";

import Reply from "../models/reply";
import { IreplyInputDTO } from "../interfaces/Ireply";

const router = Router();

/**
 *  @route PUT api/detail/:detailIdx/reply
 *  @desc Add reply
 *  @access Public
 */
 router.put(
    "/detail/:detailIdx/reply",
    async (req: Request, res: Response) => {
        /*
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      */
      const {
        title,
        replyNum
      } = req.body;
  
      try {
        const reply = await Reply.findOne({ replyNum: replyNum});
        profile.education.unshift(newEdu);
        await profile.save();
        res.json(profile);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
      }
    }
  );
  module.exports = router;
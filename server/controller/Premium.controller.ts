import { Request, Response, NextFunction } from "express";
import { UserData } from "../../shared/types";
import Log from "../models/Log.model"
// import axios from "axios";
const ping = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('pong');
  } catch (e: unknown) {
    next(e);
  }
};

const calculateCost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: UserData = req.body
        console.log(user)
        // const calculatedCost = await axios.post("https://api.fwd.co.th/dev-ecommerce/getProduct", user, {headers: {'Authorization: Bearer xxxxxxx'}})
        const calculatedCost = 100000
        const logger = new Log({
          ...user,
          cost:calculatedCost
        })
        await logger.save()
        res.send({
          status:"true",
          cost: calculatedCost
        });
    } catch (e: unknown) {
        next(e);
    }
  };

export default {
  ping,
  calculateCost
};

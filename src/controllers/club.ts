import { Request, Response, NextFunction } from "express";
import ClubService from "../services/clubService";

export default class ClubController {
    private clubService = new ClubService();

    public clubList = async (req: Request, res: Response, next: NextFunction) => {
        const result = await this.clubService.clubList();
        res.status(200).json(result);
    }
}
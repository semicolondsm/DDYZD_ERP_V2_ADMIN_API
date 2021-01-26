import { Request, Response, NextFunction } from "express";
import ClubService from "../services/clubService";

export default class ClubController {
    private clubService = new ClubService();

    public clubList = async (req: Request, res: Response, next: NextFunction) => {
        const result = await this.clubService.clubList();
        res.status(200).json(result);
    }
    
    public setBudget = async (req: Request, res: Response, next: NextFunction) => {
        const { budget }: { budget: number } = req.body;
        this.clubService.setBudget(req.params.club_id as unknown as number, budget)
        .then(() => { res.status(200).json({ message: "Success" }) })
        .catch((err) => { next(err) });
    }
}
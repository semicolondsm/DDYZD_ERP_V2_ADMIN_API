import { Request, Response, NextFunction } from "express";
import TagService from "../services/tagService";

export default class TagController {
    private tagService = new TagService();
    
    public createTag = async (req: Request, res: Response, next: NextFunction) => {
        const { tags }: { tags: number[] } = req.body;
        await this.tagService.createClub(+req.params.club_id, tags);
        return res.status(200).json({ message: "Tag created" });
    }
}
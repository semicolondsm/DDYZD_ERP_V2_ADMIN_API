import { Request, Response, NextFunction } from "express";
import SupplyService from "../services/supplyService";

export default class SupplyController {
    private supplyService = new SupplyService();
    
    public supplyAccept = async (req: Request, res: Response, next: NextFunction) => {
        await this.supplyService.supplyAccept(req.params.supply_id as unknown as number);
        return res.status(200).json({ message: "Accept supply success" });
    }
}
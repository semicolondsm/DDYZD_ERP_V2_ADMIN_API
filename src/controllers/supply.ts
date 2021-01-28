import { Request, Response, NextFunction } from "express";
import SupplyService from "../services/supplyService";

export default class SupplyController {
    private supplyService = new SupplyService();
    
    public supplyAccept = async (req: Request, res: Response, next: NextFunction) => {
        await this.supplyService.supplyAccept(req.params.supply_id as unknown as number);
        return res.status(200).json({ message: "Accept supply success" });
    }

    public supplyDeny = async (req: Request, res: Response, next: NextFunction) => {
        await this.supplyService.supplyDeny(req.params.supply_id as unknown as number);
        return res.status(200).json({ message: "Deny supply success" });
    }

    public supplyInvoice = async (req: Request, res: Response, next: NextFunction) => {
        const invoice = await this.supplyService.supplyInvoice(req.params.supply_id as unknown as number);
        console.log(invoice);
        return res.status(200).json(invoice);
    }

    public supplyList = async (req: Request, res: Response, next: NextFunction) => {
        const list = await this.supplyService.supplyList(req.query.state as unknown as number);
        return res.status(200).json(list);
    }
}
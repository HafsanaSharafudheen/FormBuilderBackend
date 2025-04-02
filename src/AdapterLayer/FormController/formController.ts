import { Request, Response } from "express";
import { createFormEntity } from "../../Entities/formEntity";
import { handleSaveFormData } from "../../ApplicationLayer/UserCases/form/saveFromData";


export const saveFormController = async (req: Request, res: Response) => {
    try {
        const formData = createFormEntity(req.body);
        const result = await handleSaveFormData(formData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ status: false});
    }
};

import { FormEntity } from "../../../Entities/formEntity";
import Form from "../DbModels/fromModel";


export const saveFormData = async (formData: FormEntity): Promise<FormEntity> => {
    const form = new Form(formData);
    return await form.save();
};

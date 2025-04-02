import { FormEntity } from "../../../Entities/formEntity";
import { saveFormData } from "../../../Frameworks/DataBase/Repositories/formRepository";


export const handleSaveFormData = async (formData: FormEntity) => {
    try {
        const savedForm = await saveFormData(formData);
        return {
            status: true,
            message: "Form data saved successfully",
            savedForm,
        };
    } catch (error) {
        throw new Error("Error saving form data");
    }
};

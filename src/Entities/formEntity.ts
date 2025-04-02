export interface FormElement {
    id: string;
    type: string; 
    name: string;
    icon?: string;
    attributes?: {
        placeholder?: string;
        required?: boolean;
        options?: string[];
    };
    style?: {
        backgroundColor?: string;
        border?: string;
        borderRadius?: string;
        padding?: string;
    };
}

export interface FormEntity {
    formName: string;
    createdAt: Date;
    elements: FormElement[];
    tailwindHTML: string;
}

export const createFormEntity = (data: any): FormEntity => {
    return {
        formName: data.formName,
        createdAt: data.createdAt || new Date(),
        elements: data.elements,
        tailwindHTML: data.tailwindHTML,
    };
};

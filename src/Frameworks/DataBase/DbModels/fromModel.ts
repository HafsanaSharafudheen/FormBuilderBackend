import mongoose, { Schema, Document } from "mongoose";

interface FormElement {
    id: string;
    type: string; // 'textbox', 'dropdown', 'checkbox', etc.
    name: string;
    icon?: string;
    attributes?: {
        placeholder?: string;
        required?: boolean;
        options?: string[]; // For dropdowns, radio buttons, etc.
    };
    style?: {
        backgroundColor?: string;
        border?: string;
        borderRadius?: string;
        padding?: string;
    };
}

interface FormDocument extends Document {
    formName: string;
    createdAt: Date;
    elements: FormElement[];
    tailwindHTML: string;
}

const formSchema: Schema = new Schema({
    formName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    elements: [
        {
            id: { type: String, required: true },
            type: { type: String, required: true },
            name: { type: String, required: true },
            icon: { type: String },
            attributes: {
                placeholder: { type: String },
                required: { type: Boolean, default: false },
                options: [{ type: String }],
            },
            style: {
                backgroundColor: { type: String, default: '#ffffff' },
                border: { type: String, default: '1px solid #ccc' },
                borderRadius: { type: String, default: '5px' },
                padding: { type: String, default: '10px' },
            },
        },
    ],
    tailwindHTML: { type: String, required: true },
});

const Form = mongoose.model<FormDocument>('Form', formSchema);

export default Form;

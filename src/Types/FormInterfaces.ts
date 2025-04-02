interface Form {
    formName: string;
    createdAt: Date;
    elements: FormElement[];
    tailwindHTML: string;
}

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

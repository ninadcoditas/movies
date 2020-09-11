export interface Theme {
    name: string;
    properties: any;
}

export const light: Theme = {
    name: "light",
    properties: {
        "--primary-dark": "#24B286",
        "--error-default": "#EF3E36",
        "--text-color": "black",
        "--body-background": "#FFFFFF",
        "--signup": "#3277B3",
        "--list-background": "#E2E4E9",
        "--card-background": "#FFFFFF",
        "--theme": "#3277B3"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--primary-dark": "#24B286",
        "--error-default": "#EF3E36",
        "--text-color": "white",
        "--body-background": "#262626",
        "--signup": "#3277B3",
        "--list-background": "#363C49",
        "--card-background": "#262626"
    }
};
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                fadeOut: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0", display: "hidden" },
                },
                animateArrowLeft: {
                    "0%, 100%": {
                        transform: "translateX(0%)",
                        animation_timing_function: "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        transform: "translatex(-35%)",
                        animation_timing_function: "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
            },
            animation: {
                fadeOut: "fadeOut 3s ease-in",
                animateArrowLeft: "animateArrowLeft 1s infinite",
            },
        },
    },

    plugins: [forms, require("daisyui")],
};

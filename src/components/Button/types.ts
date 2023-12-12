import type {ButtonHTMLAttributes} from "react";

export type Variant = "primary" | "second" | "gray";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}
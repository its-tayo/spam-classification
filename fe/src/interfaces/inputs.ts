import { Field } from "formik";
import { ButtonHTMLAttributes } from "react";

export type TextAreaProps = typeof Field;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
  onClick?: () => void;
}

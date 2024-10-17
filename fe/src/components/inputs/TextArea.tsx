import React from "react";
import { Field, ErrorMessage, useField } from "formik";

import { TextAreaProps } from "@/interfaces/inputs";

const TextArea: TextAreaProps = ({ name = "", placeholder = "", ...props }) => {
  const [, meta] = useField<string>(name);
  const hasError = meta.touched && meta.error;

  const inputStyles = hasError
    ? "border-red-500 focus:ring-2 focus:ring-red-400"
    : "border-gray-300 focus:ring-2 focus:ring-slate-400";

  return (
    <div className="relative">
      <ErrorMessage
        name={name}
        render={(errMsg) => (
          <div className="absolute left-0 -top-7">
            <small className="text-red-500 font-medium">*{errMsg}</small>
          </div>
        )}
      />

      <Field
        rows={5}
        id={name}
        name={name}
        component="textarea"
        placeholder={placeholder}
        className={`border shadow-sm rounded-lg w-full p-2 focus:outline-none transition-all ease-in-out ${inputStyles}`}
        {...props}
      />
    </div>
  );
};

export default TextArea;

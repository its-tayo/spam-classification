import React, { FC } from "react";

import { ButtonProps } from "@/interfaces/inputs";

const Button: FC<ButtonProps> = ({
  label,
  type = "submit",
  loading = false,
  disabled = false,
  onClick = () => null,
}) => {
  return (
    <div className="relative">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm text-white font-semibold h-12 w-full px-6 rounded-lg flex items-center justify-center pointer-events-auto disabled:bg-slate-600 transition-all ease-in-out duration-300"
      >
        {label}
      </button>

      {loading && (
        <div className="absolute top-3.5 left-24 ml-1">
          <svg
            viewBox="0 0 24 24"
            className="motion-reduce:hidden animate-spin h-5 w-5 text-white"
          >
            <circle
              r="10"
              cx="12"
              cy="12"
              strokeWidth="4"
              stroke="currentColor"
              className="opacity-25"
            />
            <path
              fill="currentColor"
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Button;

import { useState } from "react";
import localFont from "next/font/local";
import toast from "react-hot-toast";

import { ClassificationForm } from "@/components";
import { ClassificationFormData } from "@/interfaces/forms";
import { SPAM_CLASSIFICATION_URL } from "@/constants/routes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [result, setResult] = useState("");

  const handleSubmit = async ({ message }: ClassificationFormData) => {
    setResult("");

    try {
      const response = await fetch(SPAM_CLASSIFICATION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const { data = {}, message: errMessage = "Failed to fetch data" } =
        await response.json();

      if (!response.ok) throw new Error(errMessage);

      const { prediction = "" } = data;
      setResult(prediction);
      /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="row-start-2 w-full max-w-sm">
        <div className="relative">
          <div className="absolute -top-16 left-0 w-full">
            {!!result && (
              <h3 className="font-bold text-3xl text-center uppercase">
                {result}
              </h3>
            )}
          </div>

          <ClassificationForm handleSubmit={handleSubmit} />
        </div>
      </main>
    </div>
  );
}

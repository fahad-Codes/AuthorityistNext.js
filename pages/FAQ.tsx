"use client";
import React, { useState } from "react";

export default function FAQ() {
  const [isOpen, setIsOpen] = useState(new Array(2).fill(false)); // Adjust the array size according to the number of sections

  const toggleAnswer = (index: number) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
        <div className="bg-blue-500 text-white rounded-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold p-3 text-center">
            FAQs
          </h2>
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white"></h1>

        <div className="mt-12 space-y-8">
          {Array.from({ length: 2 }, (_, index) => (
            <div
              key={index}
              className={`border-2 border-gray-100 rounded-lg dark:border-gray-700 ${
                isOpen[index] ? "open" : ""
              }`}
            >
              <button
                className="flex items-center justify-between w-full p-8 bg-blue-100"
                onClick={() => toggleAnswer(index)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  How can I pay for my appointment?
                </h1>

                <span className="text-gray-400 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              </button>

              <hr className="border-gray-200 dark:border-gray-700" />

              {isOpen[index] && (
                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
                  ab maxime cum laboriosam recusandae facere dolorum veniam quia
                  pariatur obcaecati illo ducimus?
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

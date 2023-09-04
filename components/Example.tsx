"use client";

import React from 'react';
import { BiSolidCopy } from 'react-icons/bi';

interface ExampleProps {
  title: string;
  explanation: string;
  example: string;
}

const Example: React.FC<ExampleProps> = ({ title, explanation, example }) => {
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(example).then(
      () => {},
      err => {
        console.error('Unable to copy text', err);
      }
    );
  };

  return (
    <div className="flex justify-center py-8">
      <div className="flex flex-col w-[400px] sm:w-[800px] w-full px-4 sm:px-8 py-4">
        <h4 className="text-white text-3xl sm:text-5xl font-bold">{title}</h4>
        <p className="text-gray-200 py-8 text-xl w-[350px] sm:w-[700px]">{explanation}</p>
        <div className="transition duration-500 hover:bg-neutral-700 bg-neutral-900 h-14 px-4 sm:px-6 items-center flex rounded-xl w-full">
          <h5 className="text-gray-200 text-xl py-8 flex-grow">{example}</h5>
          <button className="ml-auto" onClick={copyToClipboard}>
            <BiSolidCopy color="gray" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;

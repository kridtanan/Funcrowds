import React from "react";
 

export default function Accordion({ title, imgPath, i18n }) {
  let imgTag = [];
  imgPath.forEach((path) => {
    imgTag.push(
      <img
        key={path}
        className="w-full my-4"
        src={window.location.origin + path}
        alt={title}
      />
    );
  });

  return (
    <div data-accordion className="first:mt-0 my-4 grid grid-cols-1 relative">
      <div className="flex flex-1 w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="title text-lg text-gray-800" data-i18n={i18n}>
          {title}
        </h2>
      </div>
      <input
        data-trigger
        className="absolute cursor-pointer right-100 opacity-0 h-16 w-full mt-2 mr-6"
        type="checkbox"
      />
      <svg
        data-trigger-symbol
        className="transition duration-200 absolute right-0 pointer-events-none w-6 h-6 mt-7 mr-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        ></path>
      </svg>
      <div
        data-trigger-content
        className="absolute top-20 origin-top-left transition w-full h-auto ease-out transform scale-y-0"
      >
        {imgTag}
      </div>
    </div>
  );
}

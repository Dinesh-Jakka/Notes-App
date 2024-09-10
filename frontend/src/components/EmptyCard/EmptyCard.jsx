import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-6">
      <img
        src={imgSrc}
        alt="No notes"
        className="w-40 md:w-60 transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <p className="text-center text-lg font-semibold text-gray-800 md:text-xl lg:text-2xl leading-8 md:leading-9 px-4 md:px-6">
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;

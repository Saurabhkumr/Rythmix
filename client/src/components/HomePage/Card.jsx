import React from "react";

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 px-4 py-5 rounded-lg flex flex-col">
      <div className="pb-4 pt-2">
        <img
          className="w-full h-32 object-cover rounded-md"
          src={imgUrl}
          alt="label image"
        />
      </div>
      <div className="text-white font-semibold py-3 text-lg">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Card;

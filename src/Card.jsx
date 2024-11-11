import React from "react";

const Card = ({ title }) => {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden hover:text-blue-400 ">
        <img
          src="https://via.placeholder.com/200x300"
          alt="Card Image"
          className="w-full h-48 object-cover"
        />
        <div className="font-bold mb-1 bg-none">
          <p className="text-xs">{title}</p>
        </div>
        <p className="text-xs text-gray-500">19 desember 2019</p>
      </div>
    </>
  );
};

export default Card;

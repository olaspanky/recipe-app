import { useState } from "react";
import React from "react";

const ImageCard = ({ title, calories, image, ingredients }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden ${
        isExpanded ? "h-auto" : "h-auto"
      }`}
    >
      <img className="w-full" src={image} alt={title} />
      {!isExpanded && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            className="px-4 py-2 rounded-lg border-2 border-white text-white font-medium"
            onClick={handleExpandClick}
          >
            Read more
          </button>
        </div>
      )}
      {isExpanded && (
        <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-90">
          <div className="w-full md:w-3/4 lg:w-4/5 p-2 bg-white rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>

            <ol className=''>
            {ingredients.map(ingredient => (
              <li className='text-left text-[8px]'>{ingredient.text}</li>
            ))}
          </ol>
          
            <button
              className="px-4 py-2 rounded-lg border-2 border-black text-black font-medium"
              onClick={handleExpandClick}
            >
              Less
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
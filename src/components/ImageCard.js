import React from "react";
import HashTag from "./HashTag";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(", ");

  const formatNumber = (number) => {
    return number.toLocaleString(navigator.language, {
      minimumFractionDigits: 0,
    });
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-4 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {formatNumber(image.views)}
          </li>
          <li>
            <strong>Downloads: </strong>
            {formatNumber(image.downloads)}
          </li>
          <li>
            <strong>Likes: </strong>
            {formatNumber(image.likes)}
          </li>
        </ul>
      </div>
      <div className="px-4 py-4">
        {tags.map((tag, index) => (
          <HashTag key={`${image.id}_${index}`} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

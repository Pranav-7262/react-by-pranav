import React from "react";
import { Link } from "react-router-dom";

const PlantCard = ({ id, common_name, scientific_name, images }) => {
  // Safely access the image URL
  const imageUrl =
    images && images.length > 0 ? images[0].medium_url : "photo not found";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={common_name || scientific_name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {common_name || "Unknown Plant"}
        </div>
        <p className="text-gray-700 text-base italic mb-2">{scientific_name}</p>

        <Link
          to={`/plants/${id}`}
          className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;

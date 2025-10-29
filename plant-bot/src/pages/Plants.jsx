import React, { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";

const Plants = () => {
  const [plantData, setPlantData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://perenual.com/api/pest-disease-list?key=sk-aKMV689377cf14f2e11719&page=1"
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setPlantData(data.data || []);
    } catch (error) {
      console.error("Failed to fetch pest & disease data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        🐛 Common Plant Diseases
      </h1>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {plantData.map((item) => (
            <PlantCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Plants;

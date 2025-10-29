import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const res = await fetch(
          `https://perenual.com/api/pest-disease-list?key=sk-aKMV689377cf14f2e11719&page=1`
        );

        const data = await res.json();

        const found = data.data.find((item) => item.id === parseInt(id));

        if (!found) {
          throw new Error("Plant not found.");
        }

        setPlant(found);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantDetails();
  }, [id]);

  if (loading)
    return <p className="text-center mt-6">Loading plant details...</p>;
  if (error)
    return <p className="text-center mt-6 text-red-600">Error: {error}</p>;

  const imageUrl =
    plant.images?.[0]?.medium_url || "https://picsum.photos/600/400?blur=2";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow justify-between items-center px-[3vw] md:px-[3vw] lg:px-[10vw] py-[9vh] font-sans">
      <h1 className="text-4xl font-bold mb-4">{plant.common_name}</h1>
      <p className="italic mb-4 text-gray-700">{plant.scientific_name}</p>

      <img
        src={imageUrl}
        alt={plant.common_name}
        className="w-full max-h-96 object-cover rounded mb-6"
      />

      {plant.family && (
        <div className="mb-4">
          <strong>Family:</strong> {plant.family}
        </div>
      )}

      {plant.host && (
        <div className="mb-4">
          <strong>Host:</strong> {plant.host.join(", ")}
        </div>
      )}

      {plant.description && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          {plant.description.map((desc, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-semibold">{desc.subtitle}</h3>
              <p className="text-gray-700">{desc.description}</p>
            </div>
          ))}
        </div>
      )}

      {plant.solution && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Solutions</h2>
          {plant.solution.map((sol, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-semibold">{sol.subtitle}</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {sol.description}
              </p>
            </div>
          ))}
        </div>
      )}

      <Link
        to="/explore"
        className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
      >
        ← Back to Plants
      </Link>
    </div>
  );
};

export default PlantDetails;

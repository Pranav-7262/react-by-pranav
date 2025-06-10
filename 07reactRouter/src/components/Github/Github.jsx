import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom"; // hook for api calls
function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Pranav-7262")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="max-w-2xl mx-auto my-8 bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <div className="flex items-center h-full space-x-4 ">
        {/* Left: Avatar - full height of the parent */}
        <img
          src={data.avatar_url}
          alt="GitHub avatar"
          className="h-full w-1/3 object-cover border-2 border-white"
        />

        {/* Right: Info */}
        <div className="flex-1 space-y-4">
          <p className="text-lg font-bold">
            GitHub ID: <span className="font-normal">{data.id}</span>
          </p>
          <p className="text-lg font-bold">
            Username: <span className="font-normal">{data.login}</span>
          </p>
          <p className="text-md">
            <span className="font-semibold text-gray-300">Followers:</span>{" "}
            {data.followers}
          </p>
          <p className="text-md">
            <span className="font-semibold text-gray-300">Followings:</span>{" "}
            {data.following}
          </p>
          <p className="text-md">
            <span className="font-semibold text-gray-300">Location:</span>{" "}
            {data.location || "N/A"}
          </p>
          <p className="text-md">
            <span className="font-semibold text-gray-300">Bio:</span>{" "}
            {data.bio || "N/A"}
          </p>
          <p className="text-md">
            <span className="font-semibold text-gray-300">Account:</span>{" "}
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {data.html_url}
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Created at: {new Date(data.created_at).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-400">
            Updated at: {new Date(data.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Pranav-7262");
  return response.json();
};

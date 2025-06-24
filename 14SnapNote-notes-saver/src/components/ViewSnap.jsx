import React from "react";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import {
  addToSnaps,
  updateToSnaps,
  removeFromSnaps,
  resetAllSnaps,
  snapSlice,
} from "../redux/snapSlice";

function ViewSnap() {
  const { id } = useParams();

  const allSnaps = useSelector((state) => state.snap.snaps);
  console.log("all snaps : ", allSnaps);
  const snap = allSnaps.filter((p) => p._id === id)[0];
  console.log("final snap :", snap);
  return (
    <div className="max-w-4xl mx-auto px-6 py-6">
      {/* Title (disabled input) */}
      <div className="mb-4">
        <input
          type="text"
          disabled
          placeholder="Enter title here"
          value={snap.title}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 shadow-sm"
        />
      </div>

      {/* Content + Copy Button */}
      <div className="relative">
        <textarea
          value={snap.content}
          disabled
          placeholder="Enter content here"
          rows={16}
          className="w-full px-4 py-4 rounded-xl border border-gray-300 bg-gray-100 text-gray-800 shadow-sm resize-none"
        />

        {/* Copy Button */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(snap?.content);
            toast.success("Copied to clipboard");
          }}
          className="absolute top-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition"
          title="Copy content"
        >
          <MdContentCopy className="text-lg" />
        </button>
      </div>
    </div>
  );
}

export default ViewSnap;

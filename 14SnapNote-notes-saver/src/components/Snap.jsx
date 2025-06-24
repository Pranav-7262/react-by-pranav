import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromSnaps } from "../redux/snapSlice";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function Snap() {
  const snaps = useSelector((state) => state.snap.snaps);
  console.log("snaps are =>", snaps);
  const [searchTerm, setsearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = snaps.filter((snap) =>
    snap.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDelete = (snapid) => {
    dispatch(removeFromSnaps(snapid));
  };
  return (
    <div className="max-w-4xl mx-auto px-6 py-4 text-gray-800">
      <div className="relative w-full max-w-2xl mx-auto mb-6">
        <input
          type="search"
          placeholder="Search your snaps..."
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
        />

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
          🔍
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {filteredData.length > 0 &&
          filteredData.map((snap) => (
            <div
              key={snap._id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-blue-700 mb-2">
                {snap.title}
              </h2>

              <p className="text-gray-700 whitespace-pre-wrap mb-4">
                {snap.content}
              </p>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {new Date(snap.createdAt).toLocaleString()}
                </div>

                <div className="flex gap-4 text-xl text-gray-600">
                  <button
                    className="hover:text-blue-600 transition"
                    title="Edit"
                  >
                    <a href={`/?snapid=${snap?._id}`}>
                      <FiEdit />
                    </a>
                  </button>
                  <button
                    className="hover:text-green-600 transition"
                    title="View"
                  >
                    <a href={`/snaps/${snap?._id}`}>
                      <IoEyeOutline />
                    </a>
                  </button>
                  <button
                    className="hover:text-indigo-600 transition cursor-pointer"
                    title="Copy"
                    onClick={() => {
                      navigator.clipboard.writeText(snap?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    <MdContentCopy />
                  </button>
                  <button
                    title="Share"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: snap.title,
                            text: snap.content,
                            url: window.location.href,
                          })
                          .then(() =>
                            toast.success("Snap shared successfully!")
                          )
                          .catch((err) => toast.error("Sharing failed"));
                      } else {
                        toast.error(
                          "Sharing not supported on this device/browser."
                        );
                      }
                    }}
                    className="hover:text-purple-600 transition cursor-pointer"
                  >
                    <IoIosShareAlt />
                  </button>

                  <button
                    title="Delete"
                    onClick={() => {
                      const confirmDelete = window.confirm(
                        "Are you sure you want to delete this Snap?"
                      );
                      if (confirmDelete) {
                        handleDelete(snap._id);
                      }
                    }}
                    className="hover:text-red-600 transition cursor-pointer"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Snap;

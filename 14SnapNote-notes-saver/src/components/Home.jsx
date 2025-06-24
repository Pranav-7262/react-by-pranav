import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToSnaps, updateToSnaps } from "../redux/snapSlice";

function Home() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [seachparams, setSeachparams] = useSearchParams();
  const snapid = seachparams.get("snapid");
  const allSnaps = useSelector((state) => state.snap.snaps);
  const dispatch = useDispatch();

  useEffect(() => {
    if (snapid) {
      const snap = allSnaps.find((p) => p._id === snapid);
      setTitle(snap.title);
      setValue(snap.content);
    }
  }, [snapid, allSnaps]);

  const createSlice = () => {
    const snap = {
      title: title,
      content: value,
      _id: snapid || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };
    if (snapid) {
      //update
      dispatch(updateToSnaps(snap));
    } else {
      //create
      dispatch(addToSnaps(snap));
    }
    //cleaninggg
    setTitle("");
    setValue("");
    setSeachparams({});
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Title input and Create/Update button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 rounded-xl px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => {
            if (!title.trim()) {
              toast.error("Title cannot be empty!");
              return;
            }
            createSlice();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition duration-200 cursor-pointer"
        >
          {snapid ? "Update My Snap" : "Create My Snap"}
        </button>
      </div>

      {/* Content textarea */}
      <div>
        <textarea
          value={value}
          placeholder="Enter content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={16}
          className="w-full rounded-xl px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>
    </div>
  );
}

export default Home;

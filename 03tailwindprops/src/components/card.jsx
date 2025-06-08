import React from "react";

function card({ userName, someObject, abc, btnText = "visit me" }) {
  console.log("Card props:", userName, someObject, abc);
  // Destructuring the props to get userName, someObject, abc, and btnText
  console.log("Card props userName:", userName);
  console.log("text", btnText);
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KNMg0FaGoIHrW0nBgtroVSjV2qHBvhiQgxwYDzVM0sclR4jWJGn8smk&s"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            {userName}
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-gray-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
          <button className="p-2 text-white bg-slate-600 hover:bg-slate-200 hover:text-slate-600 rounded-lg mt-4">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default card;

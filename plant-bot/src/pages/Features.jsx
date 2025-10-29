import React from "react";

const Features = () => {
  return (
    <section className=" px-[3vw]  bg-white/60 backdrop-blur-md rounded-xl text-center text-gray-800 shadow-inner  justify-between items-center  md:px-[3vw] lg:px-[10vw] py-[9vh] font-sans">
      <h2 className="text-4xl font-bold text-green-900 mb-14">Why PlantBot?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-5 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c0-4 4-6 4-6s-4 0-4 6c0 0-4-2-4-6s4 6 4 6z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900">
            AI-Powered Guidance
          </h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Get instant plant care help with our smart AI — from watering to
            problem-solving.
          </p>
        </div>

        {/* Feature 2: Personal Dashboard */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-5 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 4v10m0-10H6.5a4.5 4.5 0 000 9H12m0-9h5.5a4.5 4.5 0 010 9H12"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900">
            Your Personal Dashboard
          </h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Track your plant's health, watering schedule, and growth history —
            all in one place.
          </p>
        </div>

        {/* Feature 3: Explore Library */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-5 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900">
            Explore Plant Library
          </h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Discover plant types, care instructions, and ideal growing
            conditions — in a beautiful card layout.
          </p>
        </div>

        {/* Feature 4: Watering Reminders */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-5 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900">
            Smart Reminders
          </h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Get notified when it's time to water or care for your plants — never
            miss a step again.
          </p>
        </div>

        {/* Feature 5: Secure Login */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-5 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.38 0 2.5-1.12 2.5-2.5S13.38 6 12 6s-2.5 1.12-2.5 2.5S10.62 11 12 11zM4 20v-2a4 4 0 014-4h8a4 4 0 014 4v2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900">Secure Login</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Log in to your personal plant care dashboard and access your data
            anytime, safely.
          </p>
        </div>

        {/* Feature 6: Growth History */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-5 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-green-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-900">Track Growth</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Keep notes, photos, and logs of your plant's journey and monitor its
            progress over time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

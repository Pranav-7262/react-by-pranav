import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import plant from "../assets/plant.jpg";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <section
        className="bg-[radial-gradient(circle_at_top_left,_#a8d5ba,_#6bbf84)]
 text-black flex flex-col md:flex-row justify-between items-center px-[3vw] md:px-[3vw] lg:px-[10vw] py-[9vh] font-sans"
      >
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left py-6">
          <p className="text-green-700 text-xl md:text-lg font-semibold tracking-wide">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 leading-tight">
            PlantBot
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 mb-4 text-[#8245ec] leading-tight">
            <span className="block min-h-[2rem]">
              <TypeAnimation
                sequence={[
                  "Your AI Gardening Companion!",
                  2000,
                  "Smart Plant Care, Made Simple!",
                  2000,
                  "Track and Watch Your Plants Thrive!",
                  2000,
                  "Notes, Watering Logs, and Plant Insights!",
                  2000,
                ]}
                speed={60}
                repeat={Infinity}
                className="text-[#8245ec]"
                wrapper="span"
              />
            </span>
          </p>
          <p className="mt-6 text-gray-900 text-lg leading-relaxed max-w-xl">
            Track your plants, get AI-powered gardening advice, and chat anytime
            for support. With secure login, an interactive dashboard, and smart
            insights — PlantBot is your all-in-one plant care companion.
          </p>
          <button className="mt-8 px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-14 md:mt-0 flex justify-center">
          <Tilt
            className="w-20 h-64 sm:w-28 sm:h-64 md:w-[20rem] md:h-[30rem] border-2 border-purple-500 rounded-full ml-7"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={plant} // replace with actual image path
              alt="Gardening"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default Home;

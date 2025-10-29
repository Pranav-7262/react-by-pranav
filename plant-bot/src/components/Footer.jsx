import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#355e3b] text-white mt-0">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Section 1: About */}
        <div>
          <h2 className="text-lg font-semibold mb-2">PlantCareAI</h2>
          <p className="text-sm text-gray-300">
            Smart plant care assistant using AI. Track, explore, and learn more
            about your green friends.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="hover:underline">
                Explore Plants
              </Link>
            </li>
            <li>
              <Link to="/my-plants" className="hover:underline">
                My Plants
              </Link>
            </li>
            <li>
              <Link to="/chat" className="hover:underline">
                AI Chat
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact / Social */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Email: support@plantcareai.com</li>
            <li>Instagram: @plantcareai</li>
            <li>Twitter: @plantcare_ai</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-400 py-4 border-t border-green-700">
        &copy; {new Date().getFullYear()} PlantCareAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

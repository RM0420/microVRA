import React from "react";
import Image from "next/image"; // Keep for logo if used as Next/Image
import AOSInitializer from "./AOSInitializer"; // Import the AOSInitializer

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AOSInitializer /> {/* Add AOSInitializer here */}
      {/* Header */}
      <header className="bg-black text-white p-4 sm:p-6">
        {" "}
        {/* Responsive padding */}
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {" "}
          {/* Added flex-wrap */}
          <div className="text-2xl sm:text-3xl font-bold">
            {" "}
            {/* Responsive text size for logo area */}
            {/* Placeholder for Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-lg sm:text-xl">
              {" "}
              {/* Responsive logo size & text */}
              MV
            </div>
          </div>
          {/* Centered Navigation Links */}
          {/* Adding a wrapper for centering and potential stacking on very small screens if needed later */}
          <nav className="flex-grow order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0">
            {" "}
            {/* Full width on small, auto on md. Order changes for flex-wrap scenario */}
            <div className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
              {" "}
              {/* Reduced and responsive spacing */}
              <a
                href="/"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap"
              >
                {" "}
                {/* Responsive text, nowrap */}
                Home
              </a>
              <a
                href="/about"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap"
              >
                {" "}
                {/* Responsive text, nowrap */}
                About
              </a>
              <a
                href="/initiatives"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap"
              >
                {" "}
                {/* Responsive text, nowrap */}
                Initiatives
              </a>
              <a
                href="/join-us"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap"
              >
                {" "}
                {/* Responsive text, nowrap */}
                Join Us
              </a>
            </div>
          </nav>
          {/* Donate Button */}
          <div className="order-2 md:order-3 ml-auto md:ml-0">
            {" "}
            {/* Order change for flex-wrap, ml-auto for alignment before wrap */}
            <a
              href="#"
              className="bg-green-500 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded text-xs sm:text-sm md:text-base lg:text-lg hover:bg-green-600 whitespace-nowrap" /* Responsive padding & text, nowrap */
            >
              Donate
            </a>
          </div>
        </div>
      </header>
      {/* Page specific content will be injected here */}
      <main className="flex-grow">{children}</main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h3 className="text-2xl font-bold mb-6">MICROVRA</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                {/* Placeholder for social icons */}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg hover:bg-green-500"
                >
                  Ig
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg hover:bg-green-500"
                >
                  Li
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg hover:bg-green-500"
                >
                  Tk
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-lg hover:text-green-400">
                    More About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-green-400">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-lg hover:text-green-400">
                    Take Action
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-base text-gray-400">
              {/* Placeholder for disclaimer */}
              MicroVRA is a fiscally sponsored project under the Hack
              Foundation, that maintains 501(c)(3) status and has the Tax ID
              (EIN) XXXXXXXX.
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-8 text-base text-gray-500">
            © {new Date().getFullYear()} MicroVRA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

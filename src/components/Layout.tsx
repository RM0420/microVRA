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
      <header className="bg-black text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">
            {/* Placeholder for Logo */}
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl">
              MV
            </div>
          </div>
          {/* Centered Navigation Links */}
          <nav className="flex-grow">
            <div className="flex justify-center space-x-8">
              <a href="/" className="text-xl hover:text-green-400">
                {" "}
                {/* Changed href to / */}
                Home
              </a>
              <a href="/about" className="text-xl hover:text-green-400">
                About
              </a>
              <a href="#" className="text-xl hover:text-green-400">
                Initiatives
              </a>
              <a href="#" className="text-xl hover:text-green-400">
                Services
              </a>
              <a href="#" className="text-xl hover:text-green-400">
                Join Us
              </a>
            </div>
          </nav>
          {/* Donate Button */}
          <div>
            <a
              href="#"
              className="bg-green-500 px-6 py-3 rounded text-lg hover:bg-green-600"
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
              <h3 className="text-2xl font-bold mb-6">MICROVIRA</h3>
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
              MicroVIRA is a fiscally sponsored project under the Hack
              Foundation, that maintains 501(c)(3) status and has the Tax ID
              (EIN) XXXXXXXX.
            </div>
          </div>
          <div className="mt-10 border-t border-gray-700 pt-8 text-base text-gray-500">
            © {new Date().getFullYear()} MicroVIRA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

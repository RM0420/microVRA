import React from "react";
import Image from "next/image"; // Keep for logo if used as Next/Image
import Link from "next/link"; // Add Link import for proper Next.js navigation
import AOSInitializer from "./AOSInitializer"; // Import the AOSInitializer

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <AOSInitializer /> {/* Add AOSInitializer here */}
      {/* Header */}
      <header className="bg-black text-white p-4 sm:p-6 w-full">
        {" "}
        {/* Added w-full and responsive padding */}
        <div className="container mx-auto flex flex-wrap justify-between items-center max-w-7xl px-4">
          {" "}
          {/* Added max-w and px-4 for better containment */}
          <div className="text-2xl sm:text-3xl font-bold flex-shrink-0">
            {" "}
            {/* Added flex-shrink-0 to prevent logo from shrinking */}
            {/* MicroVRA Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo.jpg"
                alt="MicroVRA Logo"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                priority
              />
            </Link>
          </div>
          {/* Centered Navigation Links */}
          <nav className="flex-grow order-3 md:order-2 w-full md:w-auto mt-4 md:mt-0">
            {" "}
            {/* Navigation responsive behavior */}
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 flex-wrap">
              {" "}
              {/* Added flex-wrap and reduced spacing */}
              <Link
                href="/"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap px-1"
              >
                {" "}
                {/* Reduced text sizes and added px-1 */}
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap px-1"
              >
                {" "}
                {/* Reduced text sizes and added px-1 */}
                About
              </Link>
              <Link
                href="/events"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap px-1"
              >
                {" "}
                {/* Reduced text sizes and added px-1 */}
                Events
              </Link>
              <Link
                href="/join-us"
                className="text-sm sm:text-base md:text-lg lg:text-xl hover:text-green-400 whitespace-nowrap px-1"
              >
                {" "}
                {/* Reduced text sizes and added px-1 */}
                Join Us
              </Link>
            </div>
          </nav>
          {/* Donate Button */}
          <div className="order-2 md:order-3 flex-shrink-0">
            {" "}
            {/* Added flex-shrink-0 to prevent button from shrinking */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://donorbox.org/summer-of-support"
              className="bg-green-500 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded text-xs sm:text-sm md:text-base hover:bg-green-600 whitespace-nowrap" /* Better responsive sizing */
            >
              Donate
            </a>
          </div>
        </div>
      </header>
      {/* Page specific content will be injected here */}
      <main className="flex-grow w-full">
        <div className="overflow-hidden">{children}</div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 md:py-20 w-full overflow-x-hidden">
        <div className="container mx-auto text-center md:text-left max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                MICROVRA
              </h3>
              <div className="flex space-x-4 justify-center md:justify-start flex-wrap">
                {/* Added flex-wrap for social icons */}
                <a
                  href="https://www.instagram.com/the_microvra_fund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full flex items-center justify-center text-lg hover:bg-green-500 flex-shrink-0"
                >
                  <img
                    src="/images/Instagram.png"
                    alt="Instagram"
                    className="w-7 h-7 md:w-9 md:h-9 object-cover"
                  />
                </a>
                <a
                  href="https://www.tiktok.com/@themicrovrafund?_t=ZT-8xJwbxkfesB&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full flex items-center justify-center text-lg hover:bg-green-500 flex-shrink-0"
                >
                  <img
                    src="/images/tiktok.png"
                    alt="TikTok"
                    className="w-8 h-8 md:w-10 md:h-10 object-cover"
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/1Ay6q3LyVo/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 rounded-full flex items-center justify-center text-lg hover:bg-green-500 flex-shrink-0"
                >
                  <img
                    src="/images/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6 md:w-8 md:h-8 object-cover"
                  />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                QUICK LINKS
              </h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-base md:text-lg hover:text-green-400"
                  >
                    More About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://donorbox.org/summer-of-support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg hover:text-green-400"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <Link
                    href="/join-us"
                    className="text-base md:text-lg hover:text-green-400"
                  >
                    Take Action
                  </Link>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=themicrovrafund@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg hover:text-green-400"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-sm md:text-base text-gray-400">
              {/* Placeholder for disclaimer */}
              MicroVRA is a non profit organization registered with the
              Pennsylvania Secretary of State and pending IRS 501(c)(3) status.
              EIN Number: 39-2360733
            </div>
          </div>
          <div className="mt-8 md:mt-10 border-t border-gray-700 pt-6 md:pt-8 text-sm md:text-base text-gray-500">
            © {new Date().getFullYear()} MicroVRA. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

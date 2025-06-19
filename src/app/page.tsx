import Layout from "@/components/Layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative bg-gray-700 text-white py-24 md:py-36 bg-cover bg-center overflow-hidden w-full"
        style={{ backgroundImage: "url('/placeholder-hero-bg.jpg')" }}
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10 px-4 max-w-6xl w-full">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 break-words"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Welcome to MicroVRA
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-4xl mx-auto">
            <a
              href="https://donorbox.org/summer-of-support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-green-600 inline-block w-full sm:w-auto text-center max-w-xs"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Donate
            </a>
            <Link
              href="/join-us"
              className="border-2 border-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-white hover:text-green-500 w-full sm:w-auto text-center max-w-xs"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Take Action
            </Link>
          </div>
        </div>
      </section>

      {/* In Collaboration With Section */}
      {/* <section className="py-24 bg-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2
            className="text-4xl font-semibold mb-14 text-gray-700"
            data-aos="fade-down"
          >
            IN COLLABORATION WITH
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
            {/* Placeholder for collaborator logos */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-40 h-20 bg-gray-200 flex items-center justify-center text-gray-500 text-lg"
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
              >
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Impact Stats Section */}
      <section
        className="bg-green-100 py-16 md:py-24 overflow-hidden w-full"
        data-aos="fade-right"
      >
        <div className="container mx-auto text-center px-4 max-w-6xl w-full">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-green-700 max-w-5xl mx-auto">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="px-1 min-w-0"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold break-words">
                50
              </p>
              <p className="text-xs md:text-sm lg:text-base break-words">
                REACHED
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="px-1 min-w-0"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold break-words">
                500
              </p>
              <p className="text-xs md:text-sm lg:text-base break-words">
                RAISED
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="px-1 min-w-0"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold break-words">
                2
              </p>
              <p className="text-xs md:text-sm lg:text-base break-words">
                CHAPTERS
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="px-1 min-w-0"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold break-words">
                25
              </p>
              <p className="text-xs md:text-sm lg:text-base break-words">
                MEMBERS
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="px-1 col-span-2 md:col-span-1 min-w-0"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold break-words">
                25
              </p>
              <p className="text-xs md:text-sm lg:text-base break-words">
                IMPACTED
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        className="py-20 md:py-28 bg-white overflow-hidden w-full"
        data-aos="fade-left"
      >
        <div className="container mx-auto text-center px-4 max-w-4xl w-full">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-gray-800 break-words"
            data-aos="fade-down"
          >
            OUR MISSION
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 mb-10 md:mb-14 leading-relaxed break-words"
            data-aos="fade-up"
          >
            The MicroVRA Fund empowers underfunded entrepreneurs in Southeast
            Asia by funding microloans to fuel small business development. By
            microfinancing, we help aspiring business owners overcome financial
            limitations, create sustainable livelihoods, and uplift their
            communities—one loan at a time.
          </p>
          <Link
            href="/about"
            className="bg-green-500 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-semibold hover:bg-green-600 inline-block"
            data-aos="zoom-in"
          >
            MORE ABOUT US
          </Link>
        </div>
      </section>

      {/* Take Action Section */}
      <section className="bg-green-100 py-20 md:py-28 overflow-hidden w-full">
        <div className="container mx-auto text-center px-4 max-w-5xl w-full">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-green-700 break-words"
            data-aos="fade-down"
          >
            TAKE ACTION WITH MICROVRA
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
            <a
              className="bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-5 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold rounded-md hover:bg-green-700 w-full md:w-auto text-center max-w-sm break-words"
              href="https://donorbox.org/summer-of-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              DONATE TO OUR CAUSE
            </a>
            <button className="bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 lg:px-12 lg:py-5 text-base md:text-lg lg:text-xl xl:text-2xl font-semibold rounded-md hover:bg-green-700 w-full md:w-auto max-w-sm break-words">
              JOIN ONE OF OUR PROGRAMS
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

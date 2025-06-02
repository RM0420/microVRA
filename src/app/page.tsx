import Image from "next/image";
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section - Added bg-fixed for parallax */}
      <section
        className="relative bg-gray-700 text-white py-36 bg-fixed bg-cover bg-center" // Added bg-fixed
        style={{ backgroundImage: "url('/placeholder-hero-bg.jpg')" }}
        data-aos="zoom-in" // Added AOS effect to the whole hero section
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1
            className="text-6xl font-bold mb-8"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Welcome to MicroVRA
          </h1>
          <div className="space-x-6">
            <button
              className="bg-green-500 px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-600"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Donate
            </button>
            <button
              className="border-2 border-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-white hover:text-green-500"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Take Action
            </button>
          </div>
        </div>
      </section>

      {/* In Collaboration With Section */}
      <section className="py-24 bg-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2
            className="text-4xl font-semibold mb-14 text-gray-700"
            data-aos="fade-down"
          >
            IN COLLABORATION WITH
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
            {/* Placeholder for collaborator logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
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
      </section>

      {/* Impact Stats Section */}
      <section className="bg-green-100 py-24" data-aos="fade-right">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-green-700">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-5xl font-bold">90,000</p>
              <p className="text-lg">REACHED</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-5xl font-bold">15,000+</p>
              <p className="text-lg">RAISED</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-5xl font-bold">24</p>
              <p className="text-lg">CHAPTERS</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <p className="text-5xl font-bold">350</p>
              <p className="text-lg">MEMBERS</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <p className="text-5xl font-bold">1,000</p>
              <p className="text-lg">IMPACTED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-28 bg-white" data-aos="fade-left">
        <div className="container mx-auto text-center px-4 md:px-0 max-w-4xl">
          <h2
            className="text-5xl font-bold mb-12 text-gray-800"
            data-aos="fade-down"
          >
            OUR MISSION
          </h2>
          <p className="text-xl text-gray-600 mb-14" data-aos="fade-up">
            {/* Placeholder for mission text */}
            The MicroVRA Fund empowers underfunded entrepreneurs in Southeast
            Asia by funding microloans to fuel small business development. By
            microfinancing, we help aspiring business owners overcome financial
            limitations, create sustainable livelihoods, and uplift their
            communities—one loan at a time.
          </p>
          <a
            href="/about"
            className="bg-green-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-green-600 inline-block"
            data-aos="zoom-in"
          >
            MORE ABOUT US
          </a>
        </div>
      </section>

      {/* Take Action Section */}
      <section className="bg-green-100 py-28" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-14 text-green-700"
            data-aos="fade-down"
          >
            TAKE ACTION WITH MICROVRA
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            <button
              className="bg-green-600 text-white px-12 py-5 text-2xl font-semibold rounded-md hover:bg-green-700 w-full md:w-auto"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              DONATE TO OUR CAUSE
            </button>
            <button
              className="bg-green-600 text-white px-12 py-5 text-2xl font-semibold rounded-md hover:bg-green-700 w-full md:w-auto"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              JOIN ONE OF OUR PROGRAMS
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

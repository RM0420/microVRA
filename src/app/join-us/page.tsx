import Layout from "@/components/Layout";

interface Opportunity {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string; // Placeholder for now
}

const opportunitiesData: Opportunity[] = [
  {
    id: "start-chapter",
    title: "START A CHAPTER",
    description:
      "Lead grassroots nutrition education at your school and access a global community of collaborators.",
    buttonText: "APPLY",
    buttonLink: "#",
  },
  {
    id: "become-ambassador",
    title: "BECOME AN AMBASSADOR",
    description:
      "Help create content to grow MicroVRA's impacts and inform people of the nutrition crises.", // Adjusted text slightly
    buttonText: "APPLY",
    buttonLink: "#",
  },
  {
    id: "teach-workshops",
    title: "TEACH OUR WORKSHOPS",
    description:
      "Engage with your community to build nutrition literacy workshops.",
    buttonText: "APPLY",
    buttonLink: "#",
  },
  {
    id: "support-youth",
    title: "SUPPORT OUR YOUTH",
    description:
      "Make a regular contribution to sustain and empower youth-led action in communities worldwide.",
    buttonText: "DONATE",
    buttonLink: "#", // This would likely go to a donation page/modal
  },
];

export default function JoinUsPage() {
  return (
    <Layout>
      <div className="bg-white text-gray-800 py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide mb-4">
              Join The Movement{" "}
              <span role="img" aria-label="globe">
                🌍
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {opportunitiesData.map((opp, index) => (
              <div
                key={opp.id}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-3">
                  {opp.title}
                </h2>
                <p className="text-gray-600 mb-6 text-base md:text-lg h-20 md:h-24">
                  {" "}
                  {/* Fixed height for description alignment */}
                  {opp.description}
                </p>
                <a
                  href={opp.buttonLink}
                  className="bg-green-600 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  {opp.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

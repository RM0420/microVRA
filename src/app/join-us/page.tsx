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
      "Lead a MicroVRA chapter at your school and access a community of collaborators.",
    buttonText: "APPLY",
    buttonLink:
      "https://mail.google.com/mail/?view=cm&to=themicrovrafund@gmail.com&su=Start%20a%20Chapter%20Application",
  },
  {
    id: "become-volunteer",
    title: "BECOME A VOLUNTEER",
    description:
      "Volunteer to grow MicroVRA's impacts and help fund microloans to struggling entrepreneurs around the world.", // Adjusted text slightly
    buttonText: "APPLY",
    buttonLink:
      "https://mail.google.com/mail/?view=cm&to=themicrovrafund@gmail.com&su=Join%20As%20A%20Volunteer",
  },
  // {
  //   id: "teach-workshops",
  //   title: "TEACH OUR WORKSHOPS",
  //   description:
  //     "Engage with your community to build nutrition literacy workshops.",
  //   buttonText: "APPLY",
  //   buttonLink: "#",
  // },
  // {
  //   id: "support-youth",
  //   title: "SUPPORT OUR YOUTH",
  //   description:
  //     "Make a regular contribution to sustain and empower youth-led action in communities worldwide.",
  //   buttonText: "DONATE",
  //   buttonLink: "#", // This would likely go to a donation page/modal
  // },
];

export default function JoinUsPage() {
  return (
    <Layout>
      <div className="bg-white text-gray-800 py-12 md:py-16 lg:py-24 px-4 md:px-6 overflow-x-hidden">
        <div className="container mx-auto max-w-6xl">
          <div
            className="text-center mb-12 md:mb-16 lg:mb-20"
            data-aos="fade-down"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-4 break-words">
              Join The Movement{" "}
              <span role="img" aria-label="globe">
                🌍
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {opportunitiesData.map((opp, index) => (
              <div
                key={opp.id}
                className="flex flex-col items-center text-center p-4 md:p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-700 mb-3 break-words">
                  {opp.title}
                </h2>
                <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] leading-relaxed break-words">
                  {" "}
                  {/* Responsive min height for description alignment */}
                  {opp.description}
                </p>
                <a
                  href={opp.buttonLink}
                  target={
                    opp.buttonLink.startsWith("http") ? "_blank" : "_self"
                  }
                  rel={
                    opp.buttonLink.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="bg-green-600 text-white px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold hover:bg-green-700 transition-colors duration-300 w-full max-w-xs text-center"
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

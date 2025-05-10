import Layout from "@/components/Layout";
import Image from "next/image"; // For placeholder images

interface Program {
  id: string;
  title: string;
  description: string | string[]; // Can be a single string or array for bullet points
  imageUrl: string;
  imageAlt: string;
}

const programsData: Program[] = [
  {
    id: "nourishnet",
    title: "NOURISHNET",
    description:
      "NourishNet is our core food aid program, delivering fortified, culturally relevant meals tailored to the health needs of underserved communities. From iron-rich options for anemic youth to low-sugar meals for diabetic families, we focus on dignity, culture, and long-term wellness—not just calories. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/placeholders/initiatives-placeholder-1.jpg",
    imageAlt: "NourishNet program in action",
  },
  {
    id: "chapters",
    title: "CHAPTERS",
    description:
      "We empower a global network of 22 youth-led chapters to lead food drives, community events, and nutrition education campaigns. This model keeps our impact local, relevant, and youth-driven. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/placeholders/initiatives-placeholder-2.jpg",
    imageAlt: "Chapters program event",
  },
  {
    id: "nutrition-heroes",
    title: "NUTRITION HEROES",
    description:
      "Free, youth-led sessions that teach practical nutrition skills, held online or in local schools and libraries by Nutrition Heroes nationwide! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    imageUrl: "/placeholders/initiatives-placeholder-3.jpg",
    imageAlt: "Nutrition Heroes session",
  },
  {
    id: "awareness-ambassadors",
    title: "AWARENESS AMBASSADORS",
    description: [
      "Our ambassadors expand our impact through two key initiatives. Lorem ipsum dolor sit amet:",
      "Nutrition Nuggets: Bite-sized educational content (reels, infographics, blogs) on topics like food labels, iron deficiency, and sugar intake.",
      "Nutrition Literacy Content: Custom nutrition resources for specific groups—children, low-income families, and more.",
      "Further placeholder details about the impact and reach of our ambassadors program.",
    ],
    imageUrl: "/placeholders/initiatives-placeholder-4.jpg",
    imageAlt: "Awareness Ambassadors group",
  },
];

export default function InitiativesPage() {
  return (
    <Layout>
      {/* Hero Title Section */}
      <section
        className="bg-green-600 text-white py-20 md:py-32"
        data-aos="fade-in"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Our Programs
          </h1>
        </div>
      </section>

      {/* Programs Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {programsData.map((program, index) => (
            <div
              key={program.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay="100"
            >
              {/* Image Section */}
              <div
                className="w-full md:w-1/2 h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Image
                  src={program.imageUrl}
                  alt={program.imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content Section */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 md:mb-6">
                  {program.title}
                </h2>
                {Array.isArray(program.description) ? (
                  <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 leading-relaxed">
                    {program.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {program.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

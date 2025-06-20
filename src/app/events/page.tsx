import Layout from "@/components/Layout";
import Image from "next/image";

interface Event {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  date?: string;
}

const eventsData: Event[] = [
  {
    id: "juneteenth-jubilee",
    title: "Juneteenth Jubilee",
    description:
      "Celebration for Juneteenth at Norristown, fundraising by offering henna and temporary tattoos alongside caricatures.",
    imageUrl: "/images/Norristown 2025 Juneteenth Flyer.jpg",
    imageAlt: "Juneteenth Jubilee event",
    date: "June 19, 2025",
  },
  {
    id: "local-5k",
    title: "Local 5K",
    description: "Coming Soon!",
    imageUrl: "/placeholders/initiatives-placeholder-2.jpg",
    imageAlt: "Local 5K event",
  },
  {
    id: "north-penn-international-fair",
    title: "North Penn International Fair",
    description: "Coming Soon!!",
    imageUrl: "/placeholders/initiatives-placeholder-3.jpg",
    imageAlt: "North Penn International Fair event",
  },
];

export default function EventsPage() {
  return (
    <Layout>
      {/* Hero Title Section */}
      <section
        className="bg-green-600 text-white py-16 md:py-20 lg:py-32 overflow-hidden"
        data-aos="fade-in"
      >
        <div className="container mx-auto text-center px-4 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wider break-words">
            Our Events
          </h1>
        </div>
      </section>

      {/* Events Section */}
      <div className="bg-white py-12 md:py-16 lg:py-24 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl space-y-12 md:space-y-16 lg:space-y-24">
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12 overflow-hidden ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay="100"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center flex-shrink-0">
                <div
                  className="w-full max-w-md"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="w-full h-0 pb-[125%] relative bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                    <div className="absolute inset-0">
                      <Image
                        src={event.imageUrl}
                        alt={event.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        style={{ objectPosition: "top" }}
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content Section */}
              <div
                className={`w-full md:w-1/2 min-w-0 ${
                  index % 2 !== 0 ? "flex justify-center" : ""
                }`}
              >
                <div className={`w-full ${index % 2 !== 0 ? "max-w-md" : ""}`}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-3 md:mb-4 lg:mb-6 break-words">
                    {event.title}
                  </h2>
                  {event.date && (
                    <p className="text-base md:text-lg font-semibold text-green-600 mb-2 md:mb-3 break-words">
                      {event.date}
                    </p>
                  )}
                  <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed break-words">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

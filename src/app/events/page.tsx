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
        className="bg-green-600 text-white py-20 md:py-32"
        data-aos="fade-in"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider">
            Our Events
          </h1>
        </div>
      </section>

      {/* Events Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row items-start gap-8 md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay="100"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
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
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content Section */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 !== 0 ? "flex justify-center" : ""
                }`}
              >
                <div className={`${index % 2 !== 0 ? "w-full max-w-md" : ""}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 md:mb-6">
                    {event.title}
                  </h2>
                  {event.date && (
                    <p className="text-lg font-semibold text-green-600 mb-3">
                      {event.date}
                    </p>
                  )}
                  <p className="text-gray-700 text-lg leading-relaxed">
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

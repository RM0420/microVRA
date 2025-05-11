import Image from "next/image"; // We might use this later for actual images
import Layout from "@/components/Layout"; // Import the Layout component

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string; // For now, a placeholder or path to a generic image
}

const teamMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Anderson Chan",
    title: "President: Director of Financial Operations",
    description:
      "Highly motivated sophomore high school student with a passion for Finance and Accounting, eager to gain hands-on experience in a real-world business setting. Proven self-discipline, drive, strong analytical ability and problem-solving skill through A+ GPA on all honors classes. Emerging leader and great team player through committed extracurricular activities and sports. Proficient in Excel, Word and Power Point.",
    imageUrl: "/placeholders/team-member-placeholder.png", // Generic placeholder
  },
  {
    id: 2,
    name: "Rohit Mahajan",
    title: "Vice President: Director of Technology",
    description:
      "Driven and ambitious high school sophomore with a strong passion for computer science and finance, eager to apply analytical and problem-solving skills in a real-world setting. Ranked 3rd in the grade with a rigorous academic workload, demonstrating strong discipline, perseverance, and intellectual curiosity. Recognized at the state and national levels for STEM competitions, showcasing innovation and critical thinking. Leadership across diverse settings, complemented by mentorship from real-world professionals, including CEOs, fosters emergence as a leader.",
    imageUrl: "/placeholders/team-member-placeholder.png", // Generic placeholder
  },
  // {
  //   id: 3,
  //   name: "Pan Chan",
  //   title: "Treasurer",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   imageUrl: "/placeholders/team-member-placeholder.png", // Generic placeholder
  // },
  {
    id: 3,
    name: "Violet Chan",
    title: "Secretary",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    imageUrl: "/placeholders/team-member-placeholder.png", // Generic placeholder
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {" "}
      {/* Wrap content with Layout */}
      <div className="bg-white">
        {/* Removed direct header and footer, main content for About page starts here */}
        <div className="container mx-auto py-12 px-4 md:px-6">
          <h1
            className="text-5xl font-bold text-gray-800 text-center mb-16"
            data-aos="fade-down"
          >
            Meet Our Team
          </h1>

          <div className="space-y-16">
            {teamMembersData.map((member, index) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 p-6 rounded-lg shadow-md"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Alternate animation
                data-aos-delay={index * 100} // Stagger delay
              >
                <div
                  className="md:w-1/3 mb-6 md:mb-0 md:mr-8"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100 + 100}
                >
                  {/* Placeholder for Image */}
                  <div className="w-full h-80 bg-gray-300 rounded flex items-center justify-center text-gray-500">
                    {/* If using Next/Image, it would be like this: */}
                    {/* <Image src={member.imageUrl} alt={member.name} width={300} height={400} className="object-cover rounded" /> */}
                    <span>Image of {member.name}</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-xl font-semibold text-green-600 mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout> // Close Layout tag
  );
}

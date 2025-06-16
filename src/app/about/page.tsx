import Image from "next/image"; // We might use this later for actual images
import Layout from "@/components/Layout"; // Import the Layout component
import TeamCarousel from "@/components/TeamCarousel";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description?: string;
  imageUrl: string; // For now, a placeholder or path to a generic image
}

const boardMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Anderson Chan",
    title: "President/Founder: Director of Financial Operations",
    description:
      "Highly motivated sophomore high school student with a passion for Finance and Accounting, eager to gain hands-on experience in a real-world business setting. Proven self-discipline, drive, strong analytical ability and problem-solving skill through A+ GPA on all honors classes. Emerging leader and great team player through committed extracurricular activities and sports. Proficient in Excel, Word and Power Point.",
    imageUrl: "/images/profiles/AndersonPic.jpg", // Profile image path
  },
  {
    id: 2,
    name: "Rohit Mahajan",
    title: "Vice President: Director of Technology",
    description:
      "Driven and ambitious high school sophomore with a strong passion for computer science and finance, eager to apply analytical and problem-solving skills in a real-world setting. Ranked 3rd in the grade with a rigorous academic workload, demonstrating strong discipline, perseverance, and intellectual curiosity. Recognized at the state and national levels for STEM competitions, showcasing innovation and critical thinking. Leadership across diverse settings, complemented by mentorship from real-world professionals, including CEOs, fosters emergence as a leader.",
    imageUrl: "/images/profiles/RohitPic.jpg",
  },
  {
    id: 3,
    name: "Roberto Vargas",
    title: "Director of Outreach",
    description:
      "Roberto Vargas is a high school junior at Methacton High School. By participating in MicroVRA Fund, he intends to benefit the world and help others achieve their dreams. Roberto believes even the smallest act of kindness can create real change.",
    imageUrl: "/images/profiles/RobertoPic.jpg", // Generic placeholder
  },
  {
    id: 4,
    name: "Violet Chan",
    title: "Secretary",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    imageUrl: "/placeholders/team-member-placeholder.png", // Generic placeholder
  },
];

const volunteerLeadersData: TeamMember[] = [
  {
    id: 1,
    name: "Isabel Kwon",
    title: "Head of Public Relations",
    imageUrl: "/images/profiles/IsabellePic.jpg",
  },
  {
    id: 2,
    name: "Adhara Reddy",
    title: "Volunteer Coordinator",
    imageUrl: "/images/profiles/AdharaPic.jpg",
  },
  {
    id: 3,
    name: "Chelsea Lien",
    title: "Volunteer Coordinator",
    imageUrl: "/images/profiles/ChelseaPic.jpg",
  },
  {
    id: 4,
    name: "Suhyun Park",
    title: "Visual Campaign Manager",
    imageUrl: "/placeholders/team-member-placeholder.png",
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

          <TeamCarousel
            boardMembers={boardMembersData}
            volunteerLeaders={volunteerLeadersData}
          />
        </div>
      </div>
    </Layout> // Close Layout tag
  );
}

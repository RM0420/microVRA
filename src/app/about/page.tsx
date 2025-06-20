import Layout from "@/components/Layout"; // Import the Layout component
import TeamCarousel from "@/components/TeamCarousel";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description?: string;
  imageUrl: string; // For now, a placeholder or path to a generic image
  objectPosition?: string;
  transform?: string;
}

const boardMembersData: TeamMember[] = [
  {
    id: 1,
    name: "Anderson Chan",
    title: "President: Director of Financial Operations",
    description:
      "Anderson Chan is a high school junior at Methacton High School. As the founder of The MicroVRA Fund, he aims to impact the world by funding microloans to struggling entrepreneurs around the world while pursuing his love of finance through being the director of financial operations. Outside of this organization, Anderson has many hobbies, including playing soccer, swimming, playing the saxophone, and understanding business topics. Overall, he is an activist against inequality around the world, starting small with tackling underfunded entrepreneurship.",
    imageUrl: "/images/profiles/AndersonPic.jpg", // Profile image path
    objectPosition: "top",
  },
  {
    id: 2,
    name: "Rohit Mahajan",
    title: "Vice President: Director of Technology",
    description:
      "Rohit Mahajan is a driven and ambitious high school junior with a strong passion for computer science and finance. " +
      "As the vice president of The MicroVRA Fund, he aims to impact the world by funding microloans to struggling entrepreneurs around the world " +
      "by using his skills in computer science to manage all the technological needs of the organization and help manage the financial operations alongside the president. " +
      "Beyond MicroVRA, Rohit has many hobbies, including playing tennis, karate, playing badminton, and learning macroeconomics and investing. " +
      "Overall, Rohit believes in using his unique skills to help others and make a difference in the world!",
    imageUrl: "/images/profiles/RohitPic.jpg",
    objectPosition: "center",
  },
  {
    id: 3,
    name: "Roberto Vargas",
    title: "Director of Outreach",
    description:
      "Roberto Vargas is a high school junior at Methacton High School. By participating in MicroVRA Fund, he intends to benefit the world and help others achieve their dreams. Roberto believes even the smallest act of kindness can create real change.",
    imageUrl: "/images/profiles/RobertoPic.jpg",
    objectPosition: "right",
  },
  // {
  //   id: 4,
  //   name: "Violet Chan",
  //   title: "Secretary",
  //   description:
  //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  //   imageUrl: "/placeholders/team-member-placeholder.svg", // Generic placeholder
  //   objectPosition: "center",
  // },
];

const volunteerLeadersData: TeamMember[] = [
  {
    id: 1,
    name: "Isabelle Kwon",
    title: "Head of Public Relations",
    imageUrl: "/images/profiles/IsabellePic.jpg",
    objectPosition: "center",
    transform: "translateY(-0px)",
  },
  {
    id: 2,
    name: "Adhara Reddy",
    title: "Volunteer Coordinator",
    imageUrl: "/images/profiles/AdharaPic.jpg",
    objectPosition: "top",
    transform: "scale(1.8) translateY(-15px)",
  },
  {
    id: 3,
    name: "Chelsea Lian",
    title: "Volunteer Coordinator",
    imageUrl: "/images/profiles/ChelseaPic.jpg",
    objectPosition: "top",
    transform: "translateY(-50px)",
  },
  {
    id: 4,
    name: "Suhyun Park",
    title: "Visual Campaign Manager",
    imageUrl: "/images/profiles/Suhyun.jpg",
    objectPosition: "top",
    transform: "translateY(-40px)",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {" "}
      {/* Wrap content with Layout */}
      <div className="bg-white overflow-x-hidden">
        {/* Removed direct header and footer, main content for About page starts here */}
        <div className="container mx-auto py-8 md:py-12 px-4 md:px-6 max-w-7xl">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-16"
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

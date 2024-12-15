export interface Data {
  name: string;
  img: string;
  desc: string;
  badge: string[];
}

const get = () => {
  const data: Data[] = [
    {
      img: "red.muted",
      name: "Laravel",
      desc: "Web Artisan",
      badge: ["Framework", "FullStack"],
    },
    {
      img: "blue.muted",
      name: "React JS",
      desc: "JavaScript Library for UI",
      badge: ["Frontend"],
    },
    {
      img: "teal.muted",
      name: "Chakra UI",
      desc: "React UI Library",
      badge: ["Frontend", "UI"],
    },
    {
      img: "",
      name: "Next JS",
      desc: "React Framework",
      badge: ["Frontend", "FullStack"],
    },
    {
      img: "yellow.muted",
      name: "Filament",
      desc: "Laravel Admin Panel",
      badge: ["Backend", "Admin", "Laravel"],
    },
    {
      img: "orange.muted",
      name: "Python",
      desc: "General-Purpose Programming Language",
      badge: ["Backend"],
    },
    {
      img: "cyan.muted",
      name: "PHP",
      desc: "General-Purpose Scripting Language",
      badge: ["Backend"],
    },
    {
      img: "yellow.muted",
      name: "JavaScript",
      desc: "Programming Language for Web",
      badge: ["Frontend", "Backend"],
    },
    {
      img: "green.muted",
      name: "Nginx",
      desc: "Web Server",
      badge: ["Server"],
    },
    {
      img: "",
      name: "Ubuntu",
      desc: "Linux Distribution",
      badge: ["OS"],
    },
    {
      img: "blue.muted",
      name: "Docker",
      desc: "Containerization Platform",
      badge: ["DevOps"],
    },
    {
      img: "purple.subtle",
      name: "Bootstrap",
      desc: "Frontend Framework",
      badge: ["Frontend", "UI"],
    },
    {
      img: "cyan.emphasized",
      name: "Tailwind CSS",
      desc: "Utility-First CSS Framework",
      badge: ["Frontend", "UI"],
    },
    {
      img: "",
      name: "Flask",
      desc: "Python Microframework",
      badge: ["Backend"],
    },
    {
      img: "",
      name: "Livewire",
      desc: "Full-Stack Framework for Laravel",
      badge: ["Frontend", "Backend", "Laravel"],
    },
    {
      img: "",
      name: "jQuery",
      desc: "JavaScript Library",
      badge: ["Frontend"],
    },
    {
      img: "",
      name: "YOLO",
      desc: "Real-Time Object Detection System",
      badge: ["AI", "Computer Vision"],
    },
    {
      img: "",
      name: "MySQL",
      desc: "Open-source relational database management system",
      badge: ["Database"],
    },
    {
      img: "",
      name: "PostgreSQL",
      desc: "Object-relational database system",
      badge: ["Database"],
    },
    {
      img: "green.muted",
      name: "Supabase",
      desc: "Open source Firebase alternative",
      badge: ["Backend", "Database"],
    },
    {
      img: "",
      name: "Oracle SQL",
      desc: "Relational database management system",
      badge: ["Database"],
    },
    {
      img: "",
      name: "Express.js",
      desc: "Minimal and flexible Node.js web application framework",
      badge: ["Backend", "Node.js"],
    },
    {
      img: "blue.muted",
      name: "Google BigQuery",
      desc: "Serverless, highly scalable data warehouse",
      badge: ["Database", "Cloud"],
    },
    {
      img: "purple.muted",
      name: "Midtrans",
      desc: "Payment gateway",
      badge: ["Payment"],
    },
  ];

  return data;
};

export const useSkill = {
  get,
};

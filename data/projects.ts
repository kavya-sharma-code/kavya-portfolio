import {
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiJsonwebtokens,
  SiGraphql,
  SiMongodb,
  SiPassport,
} from "react-icons/si";

import { FC } from "react";

type ProjectTechnology = {
  name: string;
  Icon: FC<{ color: string; size: number }>;
};

export type Project = {
  title: string;
  customer: string;
  description: string;
  image: string;
  colors: [string, string];
  technologies: ProjectTechnology[];
  period?: string;
  link?: string;
  category?: string;
  role?: string;
  featured?: boolean;
};

// Note: Do not include confidential/internal customer names in descriptions.
export const projects: Project[] = [
  {
    featured: true,
    customer: "Deloitte",
    title: "Software Engineer",
    category: "Experience",
    description:
      "Working on backend development for banking and fintech applications using Node.js, NestJS, Express.js, PostgreSQL, Redis, JWT authentication, REST APIs, caching, and microservices architecture. Contributing to API enhancements, performance optimization, bug fixing, testing, deployments, and Agile sprint activities.",
    image: "/deloitte.svg",
    colors: ["#0EA5E9", "#22C55E"],
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Redis", Icon: SiRedis },
      { name: "JWT", Icon: SiJsonwebtokens },
      { name: "REST APIs", Icon: SiGraphql },
      { name: "Microservices", Icon: SiMongodb },
      { name: "JavaScript", Icon: SiJavascript },
    ],
  },
  {
    featured: false,
    customer: "Go Wheels",
    title: "Go Wheels | Car Rental Website",
    category: "Miscellaneous Project",
    description:
      "Developed a car rental platform with authentication, authorization, and an intuitive UI for browsing and booking vehicles. Implemented CRUD operations for managing listings and rentals.",
    image: "/carRental.jpeg",
    colors: ["#60A5FA", "#34D399"],
    technologies: [
      { name: "HTML", Icon: SiJavascript },
      { name: "CSS", Icon: SiJavascript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Express.js", Icon: SiExpress },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "MongoDB", Icon: SiMongodb },
    ],
  },
  {
    featured: false,
    customer: "E-Commerce",
    title: "E-Commerce Website",
    category: "Miscellaneous Project",
    description:
      "Developed a full-fledged e-commerce platform with authentication, authorization, and an intuitive shopping experience. Implemented CRUD operations to manage product listings and reviews.",
    image: "/eCommerce.png",
    colors: ["#7C3AED", "#22C55E"],
    technologies: [
      { name: "HTML", Icon: SiJavascript },
      { name: "CSS", Icon: SiJavascript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "Passport.js", Icon: SiPassport },
    ],
  },
];

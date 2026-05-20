import {
  SiExpress,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJest,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiJsonwebtokens,
} from "react-icons/si";
import { Experience } from "../src/types/experience";

export const dailyTasks = [
  "Building & maintaining REST APIs",
  "Microservice-based module development",
  "Performance improvements & bug fixes",
  "Database queries & optimization",
  "Caching strategies with Redis",
  "JWT authentication & secure API integration",
  "Testing with Jest",
  "Agile delivery, code reviews & deployments",
];

export const experiences: Experience[] = [
  {
    title: "Associate Analyst | Backend Engineer",
    customer: "Deloitte",
    description:
      "Working on backend development for banking and fintech applications using Node.js, NestJS, and Express.js. Developing and maintaining REST APIs and supporting microservice-based modules. Contributing to bug fixes, API enhancements, and performance improvements. Working with PostgreSQL, Redis, JWT authentication, and Git. Participating in Agile ceremonies, testing, code reviews, and deployments. Collaborating with developers and QA teams to deliver sprint features.",
    image: "Deloitte.jpg",
    period: "Feb 2026 – Present",
    colors: ["#0EA5E9", "#22C55E"],
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "NestJS", Icon: SiNestjs },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Redis", Icon: SiRedis },
      { name: "JWT", Icon: SiJsonwebtokens },
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Jest", Icon: SiJest },
      { name: "Git", Icon: SiGit },
    ],
  },
  {
    title: "Intern | Software Engineer",
    customer: "Deloitte",
    description:
      "Assisted in backend API development using Node.js and Express.js. Worked on database queries, API testing, and integration tasks. Supported debugging and backend enhancements. Learned Docker, Redis, authentication, CI/CD, and microservices. Collaborated with teams in Agile sprint cycles. Used GitHub, Postman, PostgreSQL, and Jira.",
    image: "Deloitte.jpg",
    period: "Jan 2025 – Feb 2026",
    colors: ["#60A5FA", "#34D399"],
    technologies: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Redis", Icon: SiRedis },
      { name: "JWT", Icon: SiJsonwebtokens },
      { name: "Docker", Icon: SiDocker },
      { name: "Jest", Icon: SiJest },
      { name: "Git", Icon: SiGit },
    ],
  },
];

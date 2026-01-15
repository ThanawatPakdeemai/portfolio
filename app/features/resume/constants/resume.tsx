import EducationIcon from "@/icons/EducationIcon";
import WorkIcon from "@/icons/WorkIcon";
import {
  IEducation,
  IExperience,
  ISkills,
} from "@/features/resume/interfaces/resume.interface";

export const EXPERIENCE_DATA: IExperience = {
  title: "Experience",
  icon: <WorkIcon width={22} height={22} fill="#efc576" />,
  data: [
    {
      company: "Kos Design Co., Ltd.",
      duration: "JUNE 2022 - PRESENT",
      detail: [
        {
          task: "Experienced in building agency websites using Concrete CMS (PHP).",
        },
        {
          task: "Skilled in creating and customizing Concrete CMS blocks for specialized or project-specific functionality.",
        },
        {
          task: "Built a unified AI prompt tool integrating Claude, Gemini, and Chat-GPT.",
        },
        {
          task: "Developed a login system using MetaMask and Next-Auth.",
        },
        {
          task: "Developed MetaMask Cryptocurrency wallet connection s company token data (NAKA coin).",
        },
        {
          task: "Redesigned and migrated the website from React to Next.js using TypeScript.",
        },
        {
          task: "Enhanced the website to support Service Workers and Progressive Web App (PWA) features, and optimized for SEO.",
        },
        {
          task: "Developed gamified reward feature for cryptocurrency deposit and withdrawal transactions.",
        },
        {
          task: "CRUD Admin management website.",
        },
        {
          task: "Create System deposit and withdrawal transactions on telegram and coin conversion and trading transactions via smart contracts.",
        },
        {
          task: "Support User / Deploy production",
        },
      ],
    },
    {
      company: "Swift Dynamics Co., Ltd.",
      duration: "JUNE 2022 - PRESENT",
      detail: [
        {
          task: "Developed a drag-and-drop Todo List feature inspired by Jira.",
        },
        {
          task: "System for uploading documents or files within the organization",
        },
        {
          task: "Document tracking tool. / Notification Document",
        },
        {
          task: "Design UI/UX Platform for Product",
        },
        {
          task: "Layout Dashboard Responsive / Dark Theme",
        },
        {
          task: "Multilingual system",
        },
      ],
    },
  ],
};

export const EDUCATTION_DATA: IEducation = {
  title: "Education",
  icon: <EducationIcon width={22} height={22} fill="#efc576" />,
  university: "Prince of Songkla University, Hat Yai",
  duration: "2017 - 2021",
  degree: "Bachelor of Science; Major: Computer Science",
};

export const SKILLS_DATA: ISkills = {
  title: "Skills",
  icon: <EducationIcon width={22} height={22} fill="#efc576" />,
  data: [
    "JaveScript/TypeScript",
    "Next.js",
    "React",
    "Next-Auth",
    "PWA",
    "Zustand / Redux",
    "Web3",
    "AI API Integration",
    "Tailwind CSS",
    "Ant Desgin",
  ],
};

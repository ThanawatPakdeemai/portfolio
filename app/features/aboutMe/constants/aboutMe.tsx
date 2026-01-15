import dynamic from "next/dynamic";
import { ReactElement } from "react";
import { IAboutMe } from "@/features/aboutMe/interfaces/aboutme.interfaces";
import Image from "next/image";

const ZustandIcon = dynamic(() => import("@/icons/ZustandIcon"));
const TypescriptIcon = dynamic(() => import("@/icons/TypescriptIcon"));
const TailwindIcon = dynamic(() => import("@/icons/TailwindIcon"));
const ReduxIcon = dynamic(() => import("@/icons/ReduxIcon"));
const ReactIcon = dynamic(() => import("@/icons/ReactIcon"));
const NextjsIcon = dynamic(() => import("@/icons/NextjsIcon"));
const JavascriptIcon = dynamic(() => import("@/icons/JavascriptIcon"));
const EthIcon = dynamic(() => import("@/icons/EthIcon"));
const ChatgptIcon = dynamic(() => import("@/icons/ChatgptIcon"));
const PwaIcon = dynamic(() => import("@/icons/PwaIcon"));
const ResponsiveIcon = dynamic(() => import("@/icons/ResponsiveIcon"));
const WebSEOIcon = dynamic(() => import("@/icons/WebSEOIcon"));
const DesignIcon = dynamic(() => import("@/icons/DesignIcon"));
const ServerIcon = dynamic(() => import("@/icons/ServerIcon"));
const AntDesignIcon = dynamic(() => import("@/icons/AntDesignIcon"));

const width = "50px";
const height = "50px";
const fill = "#efc576";

interface ISKills {
  icon: ReactElement;
  name: string;
}

const skillIconSize = 120;

export const ABOUT_ME_DATA: IAboutMe[] = [
  {
    title: "Ux/Ui Design",
    subTitle:
      "I have experience in designing beautiful and user-centric UX/UI that meets user requirements and expectations. I can create designs tailored to specific project needs while maintaining both aesthetics and functionality.",
    icon: <DesignIcon width={width} height={height} fill={fill} />,
  },
  {
    title: "Web Development",
    subTitle:
      "I have extensive experience in web development using modern tools and frameworks such as Next.js and React. I am able to work collaboratively in a team environment and manage my time effectively to meet deadlines.",
    icon: <ResponsiveIcon width={width} height={height} fill={fill} />,
  },
  {
    title: "SEO Marketing",
    subTitle:
      "I have experience in SEO website optimization, helping to improve your website’s visibility, attract more visitors, and make it more engaging for your target audience.",
    icon: <WebSEOIcon width={width} height={height} fill={fill} />,
  },
  {
    title: "CI/CD DevOps",
    subTitle:
      "I am experienced in setting up CI/CD pipelines to deploy websites. I also provide support, troubleshooting, and maintenance to resolve website issues.",
    icon: <ServerIcon width={width} height={height} fill={fill} />,
  },
];

export const SKILLS_DATA: ISKills[] = [
  {
    icon: <JavascriptIcon width={skillIconSize} height={skillIconSize} />,
    name: "JavaScript",
  },
  {
    icon: <TypescriptIcon width={skillIconSize} height={skillIconSize} />,
    name: "TypeScript",
  },
  {
    icon: <TailwindIcon width={skillIconSize} height={skillIconSize} />,
    name: "Tailwind CSS",
  },
  {
    icon: <NextjsIcon width={skillIconSize} height={skillIconSize} />,
    name: "Next.js",
  },
  {
    icon: (
      <Image
        src="/logo/logo-nextAuth.webp"
        width={skillIconSize}
        height={skillIconSize}
        alt="next-auth"
      />
    ),
    name: "Next-Auth",
  },
  {
    icon: <ReactIcon width={skillIconSize} height={skillIconSize} />,
    name: "React",
  },
  {
    icon: <ZustandIcon width={skillIconSize} height={skillIconSize} />,
    name: "Zustand",
  },
  {
    icon: <ReduxIcon width={skillIconSize} height={skillIconSize} />,
    name: "Redux",
  },
  {
    icon: <ChatgptIcon width={skillIconSize} height={skillIconSize} />,
    name: "ChatGPT API",
  },
  {
    icon: <PwaIcon width={skillIconSize} height={skillIconSize} />,
    name: "PWA",
  },
  {
    icon: <EthIcon width={skillIconSize} height={skillIconSize} />,
    name: "Ethereum",
  },
  {
    icon: <AntDesignIcon width={skillIconSize} height={skillIconSize} />,
    name: "Ant Design",
  },
];

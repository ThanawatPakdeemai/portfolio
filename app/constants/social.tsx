import { ReactElement } from "react";
import dynamic from "next/dynamic";

const EmailIcon = dynamic(() => import("@/icons/EmailIcon"));
const TelephoneIcon = dynamic(() => import("@/icons/TelephoneIcon"));
const GitHubIcon = dynamic(() => import("@/icons/GitHubIcon"));
const DateIcon = dynamic(() => import("@/icons/DateIcon"));
const LinkedinIcon = dynamic(() => import("@/icons/LinkedinIcon"));

interface ISocial {
  title: string;
  subTitle: string;
  icon: string | ReactElement;
  value: string;
}

export const SOCIAL_DATA: ISocial[] = [
  {
    title: "Email",
    subTitle: "pkt.thanawat@gmail.com",
    value: "mailto:pkt.thanawat@gmail.com",
    icon: <EmailIcon className="social-icons-rotate absolute" fill="#efc576" />,
  },
  {
    title: "Phone",
    subTitle: "089-8742886",
    value: "tel:+66898742886",
    icon: (
      <TelephoneIcon
        className="social-icons-rotate absolute h-5 w-5"
        stroke="#efc576"
      />
    ),
  },
  {
    title: "Github",
    subTitle: "ThanawatPakdeemai",
    value: "https://github.com/ThanawatPakdeemai",
    icon: (
      <GitHubIcon
        className="social-icons-rotate absolute h-7 w-7"
        fill="#efc576"
      />
    ),
  },
  {
    title: "Linkedin",
    subTitle: "thanawat-pakdeemai",
    value: "https://www.linkedin.com/in/thanawat-pakdeemai/",
    icon: (
      <LinkedinIcon
        className="social-icons-rotate absolute h-5 w-5"
        fill="#efc576"
      />
    ),
  },
  {
    title: "Age",
    subTitle: `${new Date().getFullYear() - 1998} year`,
    value: `${new Date().getFullYear() - 1998} year`,
    icon: (
      <DateIcon
        className="social-icons-rotate absolute h-5 w-5"
        stroke="#efc576"
      />
    ),
  },
];

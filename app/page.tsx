"use client";

import Image from "next/image";
import { SOCIAL_DATA } from "@/constants/social";
import { useState } from "react";
import dynamic from "next/dynamic";
import { IHome } from "@/interfaces/home.interface";

const AboutMeDetail = dynamic(
  () => import("@/features/aboutMe/components/organisms/AboutMeDetail"),
);
const ResumeDetail = dynamic(
  () => import("@/features/resume/components/organisms/ResumeDetail"),
);
const PortfolioDetail = dynamic(
  () => import("@/features/portfolio/components/organisms/PortfolioDetail"),
);
const ContactDetail = dynamic(
  () => import("@/features/contact/components/organisms/ContactDetail"),
);
const MenuMobile = dynamic(() => import("@/components/atoms/MenuMobile"));
const MenuDesktop = dynamic(() => import("@/components/atoms/MenuDesktop"));

export default function Home() {
  const age = new Date().getFullYear() - 1998;

  const [activeTab, setActiveTab] = useState<IHome>("about");

  const renderGrid = () => {
    switch (activeTab) {
      case "about":
        return <AboutMeDetail />;
      case "resume":
        return <ResumeDetail />;
      case "portfolio":
        return <PortfolioDetail />;
      case "contact":
        return <ContactDetail />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 sm:p-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-8 xl:flex-row">
          <div className="bg-black-second max-h-max rounded-2xl px-3 py-8 sm:p-10">
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <Image
                src="/avatar/avatar_1.webp"
                width={180}
                height={180}
                alt="picture-profile"
                // className="mb-4 h-32 w-32 shrink-0 rounded-full bg-gray-300"
                className="card-profile"
              />
              <h1 className="text-2xl font-bold text-white">
                Thanawat Pakdeemai
              </h1>
              <h2 className="badge-profile">Frontend Developer</h2>
            </div>
            <hr className="my-6 border-t border-gray-300" />
            <ul className="social-icons">
              {SOCIAL_DATA.map((_s, _key) => (
                <li className="group" key={_key}>
                  <a href="#" className="social-icons pr-3.5 sm:pr-6">
                    {_s.icon}
                  </a>
                  <div className="flex w-full flex-col">
                    <p className="social-title">{_s.title}</p>
                    <p className="social-sub-title" suppressHydrationWarning>
                      {_s.title === "Age" ? `${age} year` : _s.subTitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <MenuMobile
            activeTab={activeTab}
            setActiveTab={(_tab) => setActiveTab(_tab)}
          />
          <div className="bg-black-second w-full rounded-2xl shadow">
            <MenuDesktop
              activeTab={activeTab}
              setActiveTab={(_tab) => setActiveTab(_tab)}
            />
            {renderGrid()}
          </div>
        </div>
      </div>
    </div>
  );
}

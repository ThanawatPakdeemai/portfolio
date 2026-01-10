"use client";

import { IMenu } from "@/interfaces/home.interface";
import dynamic from "next/dynamic";

const UserIcon = dynamic(() => import("@/icons/UserIcon"));
const DocumentIcon = dynamic(() => import("@/icons/DocumentIcon"));
const WorkIcon = dynamic(() => import("@/icons/WorkIcon"));
const ContactIcon = dynamic(() => import("@/icons/ContactIcon"));

const MenuMobile = ({ activeTab, setActiveTab }: IMenu) => {
  return (
    <div className="bg-black-second flex items-center justify-between rounded-2xl px-3 py-2.5 sm:hidden">
      <button
        className={`menu-mobile ${activeTab === "about" ? "bg-yellow-primary" : "bg-linear-black"}`}
        onClick={() => setActiveTab("about")}
      >
        <UserIcon
          width={20}
          height={20}
          fill={`${activeTab === "about" ? "#000000" : "#ffffff"}`}
        />
      </button>
      <button
        className={`menu-mobile ${activeTab === "resume" ? "bg-yellow-primary" : "bg-linear-black"}`}
        onClick={() => setActiveTab("resume")}
      >
        <DocumentIcon
          width={24}
          height={24}
          fill={`${activeTab === "resume" ? "#000000" : "#ffffff"}`}
        />
      </button>
      <button
        className={`menu-mobile ${activeTab === "portfolio" ? "bg-yellow-primary" : "bg-linear-black"}`}
        onClick={() => setActiveTab("portfolio")}
      >
        <WorkIcon
          width={22}
          height={22}
          fill={`${activeTab === "portfolio" ? "#000000" : "#ffffff"}`}
        />
      </button>
      <button
        className={`menu-mobile ${activeTab === "contact" ? "bg-yellow-primary" : "bg-linear-black"}`}
        onClick={() => setActiveTab("contact")}
      >
        <ContactIcon
          width={24}
          height={24}
          stroke={`${activeTab === "contact" ? "#000000" : "#ffffff"}`}
        />
      </button>
    </div>
  );
};

export default MenuMobile;

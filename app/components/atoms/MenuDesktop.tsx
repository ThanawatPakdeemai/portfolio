"use client";

import { IMenu } from "@/interfaces/home.interface";

const MenuDesktop = ({ activeTab, setActiveTab }: IMenu) => {
  return (
    <div className="active-tabs hidden sm:block">
      <div className="tab-group">
        <button
          className={`tab-btn ${activeTab === "about" ? "text-yellow-primary border-b-2" : "text-white"}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`tab-btn ${activeTab === "resume" ? "text-yellow-primary border-b-2" : "text-white"}`}
          onClick={() => setActiveTab("resume")}
        >
          Resume
        </button>
        <button
          className={`tab-btn ${activeTab === "portfolio" ? "text-yellow-primary border-b-2" : "text-white"}`}
          onClick={() => setActiveTab("portfolio")}
        >
          Portfolio
        </button>
        <button
          className={`tab-btn ${activeTab === "contact" ? "text-yellow-primary border-b-2" : "text-white"}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default MenuDesktop;

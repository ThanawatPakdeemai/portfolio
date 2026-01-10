import React from "react";

export type IHome = "about" | "resume" | "portfolio" | "contact";

export interface IMenu {
  activeTab: IHome;
  setActiveTab: React.Dispatch<React.SetStateAction<IHome>>;
}

import { ReactElement } from "react";

export type ExperienceDetail = {
  task: string;
};

export interface IExperienceData {
  company: string;
  duration: string;
  detail: ExperienceDetail[];
}

export interface IExperience {
  title: string;
  icon: ReactElement;
  data: IExperienceData[];
}

export interface IEducation {
  title: string;
  icon: ReactElement;
  university: string;
  duration: string;
  degree: string;
}

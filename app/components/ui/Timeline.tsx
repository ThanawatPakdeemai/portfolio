import {
  EDUCATTION_DATA,
  EXPERIENCE_DATA,
} from "@/features/resume/constants/resume";
import React from "react";

const Timeline = () => {
  return (
    <div>
      <ul className="sessions">
        <div className="flex items-center">
          <div className="icon-group">{EXPERIENCE_DATA.icon}</div>
          <h2 className="pl-4 text-2xl font-medium text-white">
            {EXPERIENCE_DATA.title}
          </h2>
        </div>
        <span className="icon-line" />
        {EXPERIENCE_DATA.data.map((_elm, _index) => {
          return (
            <li className="dot" key={_index}>
              <div className="company oxygen-regular">{_elm.company}</div>
              <div className="time">{_elm.duration}</div>
              <ul className="sub-detail">
                {_elm.detail.map((_detailItem, _detailIndex) => {
                  return <li key={_detailIndex}>{_detailItem.task}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <ul className="sessions mt-8">
        <div className="flex items-center">
          <div className="icon-group">{EDUCATTION_DATA.icon}</div>
          <h2 className="pl-4 text-2xl font-medium text-white">
            {EDUCATTION_DATA.title}
          </h2>
        </div>
        <span className="icon-line" />
        <li className="dot">
          <div className="company oxygen-regular">{EDUCATTION_DATA.title}</div>
          <div className="time">{EDUCATTION_DATA.duration}</div>
          <ul className="sub-detail">
            <li>{EDUCATTION_DATA.university}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;

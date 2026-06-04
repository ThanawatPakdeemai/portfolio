import {
  EDUCATTION_DATA,
  EXPERIENCE_DATA,
} from "@/features/resume/constants/resume";

const Timeline = () => {
  return (
    <div>
      {/* Experience Section */}
      <div className="flex items-center">
        <div className="icon-group">{EXPERIENCE_DATA.icon}</div>
        <h2 className="pl-4 text-2xl font-medium text-white">
          {EXPERIENCE_DATA.title}
        </h2>
      </div>

      <span className="icon-line" />

      <ul className="sessions">
        {EXPERIENCE_DATA.data.map((_elm, _index) => {
          return (
            <li className="dot" key={_index}>
              <div className="company">{_elm.company}</div>
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

      {/* Education Section */}
      <div className="mt-8 flex items-center">
        <div className="icon-group">{EDUCATTION_DATA.icon}</div>
        <h2 className="pl-4 text-2xl font-medium text-white">
          {EDUCATTION_DATA.title}
        </h2>
      </div>

      <span className="icon-line" />

      <ul className="sessions">
        <li className="dot">
          <div className="company">{EDUCATTION_DATA.university}</div>

          <div className="time">{EDUCATTION_DATA.duration}</div>

          <ul className="sub-detail">
            <li>{EDUCATTION_DATA.degree}</li>
          </ul>
        </li>
      </ul>

      {/* Skills Section */}
      {/*
      <div className="mt-8 flex items-center">
        <div className="icon-group">{SKILLS_DATA.icon}</div>
        <h2 className="pl-4 text-2xl font-medium text-white">
          {SKILLS_DATA.title}
        </h2>
      </div>

      <span className="icon-line" />

      <ul className="sessions">
        <li className="dot">
          <ul className="sub-detail grid grid-cols-5">
            {SKILLS_DATA.data.map((_item, _index) => {
              return <li key={_index}>{_item}</li>;
            })}
          </ul>
        </li>
      </ul>
      */}
    </div>
  );
};

export default Timeline;

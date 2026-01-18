import Tooltip from "@/app/components/atoms/tooltip/Tooltip";
import { SKILLS_DATA } from "@/features/aboutMe/constants/aboutMe";

const MySkills = () => {
  return (
    <div className="carousel-skills">
      <div className="group-skills">
        {SKILLS_DATA.map((_s, _key) => (
          <Tooltip text={_s.name} key={_key}>
            <div className="card-skills" key={_key}>
              {_s.icon}
            </div>
          </Tooltip>
        ))}
      </div>

      <div aria-hidden="true" className="group-skills">
        {SKILLS_DATA.map((_s, _key) => (
          <Tooltip text={_s.name} key={_key}>
            <div className="card-skills" key={_key}>
              {_s.icon}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default MySkills;

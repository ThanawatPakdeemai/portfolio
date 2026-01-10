import { SKILLS_DATA } from "@/features/aboutMe/constants/aboutMe";

const MySkills = () => {
  return (
    <div className="carousel-skills">
      <div className="group-skills">
        {SKILLS_DATA.map((_s, _key) => (
          <div className="card-skills" key={_key}>
            {_s.icon}
          </div>
        ))}
      </div>

      <div aria-hidden="true" className="group-skills">
        {SKILLS_DATA.map((_s, _key) => (
          <div className="card-skills" key={_key}>
            {_s.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;

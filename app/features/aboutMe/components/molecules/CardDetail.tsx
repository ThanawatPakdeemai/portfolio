import { ABOUT_ME_DATA } from "@/features/aboutMe/constants/aboutMe";

const CardDetail = () => {
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
      {ABOUT_ME_DATA.map((_a, i) => (
        <div className="card-about" key={i}>
          {_a.icon}
          <div className="card-description">
            <h3 className="card-title">{_a.title}</h3>
            <p className="card-sub-title">{_a.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDetail;

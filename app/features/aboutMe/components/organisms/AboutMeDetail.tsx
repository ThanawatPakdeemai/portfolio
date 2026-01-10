import dynamic from "next/dynamic";

const CardDetail = dynamic(
  () => import("@/features/aboutMe/components/molecules/CardDetail"),
);
const MySkills = dynamic(
  () => import("@/features/aboutMe/components/molecules/MySkills"),
);

const AboutMeDetail = () => {
  return (
    <div className="p-6">
      <h2 className="font-Roboto_Slab text-3xl text-white">About Me</h2>
      <span className="bg-yellow-primary my-4 inline-block h-1.5 w-[85px] rounded-xs"></span>
      <p className="text-gray-300">
        Experienced Frontend Developer with 4 years of specialized experience in
        building responsive and user-friendly web applications. Proficient in
        React, Next.js, Tailwind CSS, and other frontend technologies. Known for
        being a diligent and resilient professional who thrives in high-pressure
        environments. Passionate about learning cutting-edge techniques and
        committed to knowledge sharing within teams.
      </p>
      <h2 className="font-Roboto_Slab mt-6 mb-4 text-[28px] text-white">
        What I&lsquo;m Doing
      </h2>
      <CardDetail />
      <h2 className="font-Roboto_Slab mt-6 mb-4 text-[28px] text-white">
        Skills
      </h2>
      <MySkills />
    </div>
  );
};

export default AboutMeDetail;

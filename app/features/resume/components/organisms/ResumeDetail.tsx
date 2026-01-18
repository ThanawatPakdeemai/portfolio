import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("@/components/ui/Timeline"));
const DownloadIcon = dynamic(() => import("@/icons/DownloadIcon"));

const ResumeDetail = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-Roboto_Slab text-3xl text-white">Resume</h2>
        <a
          href={"/document/Resume-ThanawatPakdeemai.pdf"}
          target="_blank"
          // download="random_file.pdf"
          rel="noopener noreferrer"
        >
          <button className="btn-download group">
            <DownloadIcon
              width={20}
              height={20}
              className="text-yellow-primary group-hover:text-black-second"
            />
            <p className="group-hover:text-black-second hidden text-[clamp(0.75rem,2.5vw,1rem)] text-white min-[380px]:block min-[380px]:w-min min-[500px]:w-auto">
              Download CV/Resume
            </p>
          </button>
        </a>
      </div>
      <span className="bg-yellow-primary my-4 inline-block h-1.5 w-[85px] rounded-xs"></span>
      <Timeline />
    </div>
  );
};

export default ResumeDetail;

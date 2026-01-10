import dynamic from "next/dynamic";
import { PORTFOLIO_DATA } from "@/features/portfolio/constants/portfolio";

const CardPreview = dynamic(
  () => import("@/features/portfolio/components/molecules/CardPreview"),
);

const PortfolioDetail = () => {
  return (
    <div className="p-6">
      <h2 className="font-Roboto_Slab text-3xl text-white">Portfolio</h2>
      <span className="bg-yellow-primary my-4 inline-block h-1.5 w-[85px] rounded-xs"></span>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_DATA.map((_p, i) => (
          <CardPreview
            key={i}
            imageSrc={_p.imageSrc}
            altText={_p.altText}
            width={_p.width}
            height={_p.height}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetail;

import Image from "next/image";
import Link from "next/link";
import EyeIcon from "@/icons/EyeIcon";
import { ICardPreviewProps } from "@/features/portfolio/interfaces/portfolio.interface";

const CardPreview = ({
  href = "https://www.google.com",
  imageSrc = "/other/Image-not-found.png",
  altText = "card-preview",
  width = 315,
  height = 220,
  priority = false,
}: ICardPreviewProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <div className="card-preview">
        <Image
          src={imageSrc}
          alt={altText}
          width={width}
          height={height}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL="/other/Image-not-found.png"
        />
        <div className="info cursor-pointer font-semibold">
          <EyeIcon width={30} height={30} stroke="#efc576" className="mb-2.5" />
          <p className="text-white">Live Preview</p>
        </div>
      </div>
    </Link>
  );
};

export default CardPreview;

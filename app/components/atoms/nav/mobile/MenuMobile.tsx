import { IMenu } from "@/interfaces/home.interface";
import Link from "next/link";
import UserIcon from "@/icons/UserIcon";
import DocumentIcon from "@/icons/DocumentIcon";
import WorkIcon from "@/icons/WorkIcon";
import ContactIcon from "@/icons/ContactIcon";
import { conditionalClass } from "@/utils/classNameUtils";

const MenuMobile = ({ activeTab }: IMenu) => {
  return (
    <div className="bg-black-second flex items-center justify-between rounded-2xl px-3 py-2.5 sm:hidden">
      <Link
        href="/"
        className={`menu-mobile ${conditionalClass(
          activeTab === "",
          "bg-yellow-primary",
          "bg-linear-black",
        )}`}
        aria-label="page about"
      >
        <UserIcon
          width={20}
          height={20}
          fill={conditionalClass(activeTab === "", "#000", "#fff")}
        />
      </Link>
      <Link
        href="/resume"
        className={`menu-mobile ${conditionalClass(
          activeTab === "resume",
          "bg-yellow-primary",
          "bg-linear-black",
        )}`}
        aria-label="page resume"
      >
        <DocumentIcon
          width={24}
          height={24}
          fill={conditionalClass(activeTab === "resume", "#000", "#fff")}
        />
      </Link>
      <Link
        href="/portfolio"
        className={`menu-mobile ${conditionalClass(
          activeTab === "portfolio",
          "bg-yellow-primary",
          "bg-linear-black",
        )}`}
        aria-label="page portfolio"
      >
        <WorkIcon
          width={22}
          height={22}
          fill={conditionalClass(activeTab === "portfolio", "#000", "#fff")}
        />
      </Link>
      <Link
        href="/contact"
        className={`menu-mobile ${conditionalClass(
          activeTab === "contact",
          "bg-yellow-primary",
          "bg-linear-black",
        )}`}
        aria-label="page contact"
      >
        <ContactIcon
          width={24}
          height={24}
          stroke={conditionalClass(activeTab === "contact", "#000", "#fff")}
        />
      </Link>
    </div>
  );
};

export default MenuMobile;

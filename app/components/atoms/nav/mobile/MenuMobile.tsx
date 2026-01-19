import { IMenu } from "@/interfaces/home.interface";
import dynamic from "next/dynamic";
import Link from "next/link";

const UserIcon = dynamic(() => import("@/icons/UserIcon"));
const DocumentIcon = dynamic(() => import("@/icons/DocumentIcon"));
const WorkIcon = dynamic(() => import("@/icons/WorkIcon"));
const ContactIcon = dynamic(() => import("@/icons/ContactIcon"));

const MenuMobile = ({ activeTab }: IMenu) => {
  return (
    <div className="bg-black-second flex items-center justify-between rounded-2xl px-3 py-2.5 sm:hidden">
      <Link
        href="?page=about"
        className={`menu-mobile ${activeTab === "about" ? "bg-yellow-primary" : "bg-linear-black"}`}
      >
        <UserIcon
          width={20}
          height={20}
          fill={activeTab === "about" ? "#000" : "#fff"}
        />
      </Link>
      <Link
        href="?page=resume"
        className={`menu-mobile ${activeTab === "resume" ? "bg-yellow-primary" : "bg-linear-black"}`}
      >
        <DocumentIcon
          width={24}
          height={24}
          fill={activeTab === "resume" ? "#000" : "#fff"}
        />
      </Link>
      <Link
        href="?page=portfolio"
        className={`menu-mobile ${activeTab === "portfolio" ? "bg-yellow-primary" : "bg-linear-black"}`}
      >
        <WorkIcon
          width={22}
          height={22}
          fill={activeTab === "portfolio" ? "#000" : "#fff"}
        />
      </Link>
      <Link
        href="?page=contact"
        className={`menu-mobile ${activeTab === "contact" ? "bg-yellow-primary" : "bg-linear-black"}`}
      >
        <ContactIcon
          width={24}
          height={24}
          stroke={activeTab === "contact" ? "#000" : "#fff"}
        />
      </Link>
    </div>
  );
};

export default MenuMobile;

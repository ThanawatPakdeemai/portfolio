import { TABS_MENU } from "@/app/constants/menu";
import { IMenu } from "@/interfaces/home.interface";
import Link from "next/link";

const MenuDesktop = ({ activeTab }: IMenu) => {
  return (
    <div className="active-tabs hidden sm:block">
      <div className="tab-group">
        {TABS_MENU.map((_tab) => {
          const isActive = activeTab === _tab.key;
          return (
            <Link
              key={_tab.key}
              href={`?page=${_tab.key}`}
              scroll={false}
              className={`tab-btn ${
                isActive ? "text-yellow-primary border-b-2" : "text-white"
              }`}
            >
              {_tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuDesktop;

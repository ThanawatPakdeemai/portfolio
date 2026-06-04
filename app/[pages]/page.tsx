import Image from "next/image";
import { SOCIAL_DATA } from "@/constants/social";
import { IHome } from "@/interfaces/home.interface";
import { getAge } from "@/constants/age";
import {
  MenuMobile,
  MenuDesktop,
} from "@/components/registry/componentRegistry";
import { PageContent } from "@/components/PageContent";

const HomePage = async ({ params }: { params?: Promise<{ pages: IHome }> }) => {
  const { pages } = (await params) || { pages: "" as IHome };
  const age = getAge("1998/06/23");

  return (
    <main id="main-content" className="p-6 sm:p-16" role="main">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-8 xl:flex-row">
          <div className="bg-black-second max-h-max rounded-2xl px-3 py-8 sm:p-10">
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <Image
                src="/avatar/avatar.webp"
                width={180}
                height={180}
                loading="eager"
                alt="picture-profile"
                fetchPriority="high"
                className="card-profile object-cover"
              />
              <h1 className="text-2xl font-bold text-white">
                Thanawat Pakdeemai
              </h1>
              <h2 className="badge-profile">Frontend Developer</h2>
            </div>
            <hr className="my-6 border-t border-gray-300" />
            <ul className="flex flex-col gap-1.5">
              {SOCIAL_DATA.map((_s, _key) => (
                <li key={_key} className="flex items-center">
                  <a
                    href={_s.title === "Age" ? "#" : _s.value}
                    target={_s.title === "Age" ? undefined : "_blank"}
                    rel={_s.title === "Age" ? undefined : "noopener noreferrer"}
                    className="group social-group flex w-full items-center gap-3"
                  >
                    <div className="social-icons">{_s.icon}</div>
                    <div className="flex w-full flex-col">
                      <p className="social-title">{_s.title}</p>
                      <p className="social-sub-title" suppressHydrationWarning>
                        {_s.title === "Age" ? `${age} year` : _s.subTitle}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <MenuMobile activeTab={pages} />
          <div className="bg-black-second w-full rounded-2xl shadow">
            <MenuDesktop activeTab={pages} />
            <PageContent page={pages} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

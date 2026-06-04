/**
 * Page content renderer component
 * Extracted from HomePage to follow best practice: rerender-no-inline-components
 * Prevents inline component definition which can cause re-renders
 */

import NotFound from "@/app/not-found";
import { IHome } from "@/interfaces/home.interface";
import {
  AboutMeDetail,
  ResumeDetail,
  PortfolioDetail,
  ContactDetail,
} from "@/components/registry/componentRegistry";

interface PageContentProps {
  page: IHome;
}

/**
 * Maps page routes to their corresponding components
 * Using object mapping instead of switch for better tree-shaking
 */
const PAGE_COMPONENTS: Record<IHome, React.ReactNode> = {
  "": <AboutMeDetail />,
  resume: <ResumeDetail />,
  portfolio: <PortfolioDetail />,
  contact: <ContactDetail />,
};

export const PageContent = ({ page }: PageContentProps) => {
  return PAGE_COMPONENTS[page] || <NotFound />;
};

/**
 * Component registry for dynamic imports with loading states
 * Follows best practices: bundle-dynamic-imports, rendering-usetransition-loading
 * Centralizes all dynamic component loading for better performance monitoring
 */

import dynamic from "next/dynamic";
import {
  TabLoadingSkeleton,
  LoadingSkeleton,
} from "@/components/ui/LoadingSkeleton";

// Page components with loading fallbacks
export const AboutMeDetail = dynamic(
  () => import("@/features/aboutMe/components/organisms/AboutMeDetail"),
  { loading: () => <TabLoadingSkeleton /> },
);

export const ResumeDetail = dynamic(
  () => import("@/features/resume/components/organisms/ResumeDetail"),
  { loading: () => <TabLoadingSkeleton /> },
);

export const PortfolioDetail = dynamic(
  () => import("@/features/portfolio/components/organisms/PortfolioDetail"),
  { loading: () => <TabLoadingSkeleton /> },
);

export const ContactDetail = dynamic(
  () => import("@/features/contact/components/organisms/ContactDetail"),
  { loading: () => <TabLoadingSkeleton /> },
);

// Navigation components with loading fallbacks
export const MenuMobile = dynamic(
  () => import("@/app/components/atoms/nav/mobile/MenuMobile"),
  { loading: () => <LoadingSkeleton height="h-10" width="w-full" /> },
);

export const MenuDesktop = dynamic(
  () => import("@/app/components/atoms/nav/desktop/MenuDesktop"),
  { loading: () => <LoadingSkeleton height="h-8" width="w-full" /> },
);

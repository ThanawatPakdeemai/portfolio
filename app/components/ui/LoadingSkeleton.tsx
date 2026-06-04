/**
 * Loading skeleton component for dynamic imports
 * Used as fallback while components are being loaded
 * Improves perceived performance and UX during code-splitting
 */

interface LoadingSkeletonProps {
  height?: string;
  width?: string;
  className?: string;
}

export const LoadingSkeleton = ({
  height = "h-12",
  width = "w-full",
  className = "",
}: LoadingSkeletonProps) => (
  // <div
  //   className={`${width} ${height} animate-pulse rounded bg-gray-700 ${className}`}
  // />
  <div className="loader h-4/5 items-center justify-center">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </div>
);

/**
 * Tab loading skeleton - used for navigation loading states
 */
export const TabLoadingSkeleton = () => (
  <div className="space-y-2">
    <LoadingSkeleton height="h-8" width="w-32" />
    <LoadingSkeleton height="h-1" width="w-24" />
  </div>
);

/**
 * Icon loading skeleton - used for dynamic icon loading
 */
export const IconLoadingSkeleton = ({ size = "20" }) => (
  <div
    className="animate-pulse rounded bg-gray-700"
    style={{ width: `${size}px`, height: `${size}px` }}
  />
);

interface SkeletonProps {
  isDark: boolean;
}

// Base skeleton component with animation
function SkeletonBox({
  width,
  height,
  isDark,
  className = "",
}: {
  width: string;
  height: string;
  isDark: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[4px] ${className}`}
      style={{
        width,
        height,
        background: isDark ? "#1f2937" : "#e5e7eb",
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }}
    />
  );
}

// PostCard Skeleton
export function PostCardSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex flex-col gap-[4px] w-[110px]">
      {/* Video thumbnail - square like actual PostCard */}
      <SkeletonBox width="110px" height="110px" isDark={isDark} className="rounded-[8px]" />
      
      {/* Title and info */}
      <div className="flex flex-col items-center gap-[2px]">
        <SkeletonBox width="90px" height="16px" isDark={isDark} />
        <SkeletonBox width="70px" height="16px" isDark={isDark} />
      </div>
    </div>
  );
}

// BrandMentionCard Skeleton
export function BrandMentionCardSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex items-center gap-[12px] w-full p-[4px]">
      {/* Logo circle */}
      <SkeletonBox width="40px" height="40px" isDark={isDark} className="rounded-full flex-shrink-0" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        <SkeletonBox width="140px" height="16px" isDark={isDark} />
        <SkeletonBox width="100px" height="14px" isDark={isDark} />
      </div>
    </div>
  );
}

// ListCard Skeleton
export function ListCardSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex items-center gap-[12px] w-full p-[4px]">
      {/* Avatar grid */}
      <SkeletonBox width="40px" height="40px" isDark={isDark} className="rounded-[4px] flex-shrink-0" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        <SkeletonBox width="160px" height="16px" isDark={isDark} />
        <SkeletonBox width="90px" height="14px" isDark={isDark} />
      </div>
    </div>
  );
}

// MediaKitCard Skeleton
export function MediaKitCardSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex items-center gap-[12px] w-full p-[4px]">
      {/* Avatar */}
      <SkeletonBox width="40px" height="40px" isDark={isDark} className="rounded-full flex-shrink-0" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        <SkeletonBox width="180px" height="16px" isDark={isDark} />
        <SkeletonBox width="120px" height="14px" isDark={isDark} />
      </div>
    </div>
  );
}

// ManagerCard Skeleton
export function ManagerCardSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex items-center gap-[12px] w-full p-[4px]">
      {/* Icon circle */}
      <SkeletonBox width="40px" height="40px" isDark={isDark} className="rounded-full flex-shrink-0" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        <SkeletonBox width="160px" height="16px" isDark={isDark} />
        <SkeletonBox width="100px" height="14px" isDark={isDark} />
      </div>
    </div>
  );
}

// BrandCard Skeleton
export function BrandCardSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex items-center gap-[12px] w-full p-[4px]">
      {/* Logo */}
      <SkeletonBox width="40px" height="40px" isDark={isDark} className="rounded-[6px] flex-shrink-0" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        <SkeletonBox width="140px" height="16px" isDark={isDark} />
      </div>
    </div>
  );
}

// CreatorCard Skeleton
export function CreatorCardSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex items-center gap-[12px] w-full p-[4px]">
      {/* Avatar */}
      <SkeletonBox width="40px" height="40px" isDark={isDark} className="rounded-[4px] flex-shrink-0" />
      
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[4px]">
        <SkeletonBox width="120px" height="16px" isDark={isDark} />
        <div className="flex gap-[8px]">
          <SkeletonBox width="60px" height="14px" isDark={isDark} />
          <SkeletonBox width="60px" height="14px" isDark={isDark} />
          <SkeletonBox width="50px" height="14px" isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

// Section Header Skeleton
export function SectionHeaderSkeleton({ isDark }: SkeletonProps) {
  return (
    <div
      className="flex items-center justify-between px-[12px] py-[8px] border-t"
      style={{
        borderColor: isDark ? "#2d3748" : "#e5e7eb",
      }}
    >
      <div className="flex gap-[4px] items-center">
        <SkeletonBox width="24px" height="16px" isDark={isDark} />
        <SkeletonBox width="80px" height="16px" isDark={isDark} />
      </div>
    </div>
  );
}

// Search button skeleton
export function SearchButtonSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="px-[12px] py-[6px]">
      <SkeletonBox width="100%" height="32px" isDark={isDark} className="rounded-[8px]" />
    </div>
  );
}

// Filter pills skeleton
export function FilterPillsSkeleton({ isDark }: SkeletonProps) {
  return (
    <div className="flex gap-[8px] px-[12px] py-[8px] overflow-x-auto">
      <SkeletonBox width="80px" height="28px" isDark={isDark} className="rounded-full" />
      <SkeletonBox width="60px" height="28px" isDark={isDark} className="rounded-full" />
      <SkeletonBox width="90px" height="28px" isDark={isDark} className="rounded-full" />
      <SkeletonBox width="70px" height="28px" isDark={isDark} className="rounded-full" />
    </div>
  );
}

// Add pulse animation to the document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `;
  document.head.appendChild(style);
}
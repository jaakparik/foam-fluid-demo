import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ContentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    videoUrl: string;
    platform: "instagram" | "tiktok" | "youtube";
    creator: {
      id: string;
      name: string;
      avatarUrl?: string;
    };
    score: number;
    postedAt: Date;
    reach: number;
    impressions: number;
    engagements: number;
    reachEngRate: number;
    views: number;
    viewEngRate: number;
    caption?: string;
  } | null;
  onCreatorClick?: (creatorId: string) => void;
  onDownloadPdf?: () => void;
  onShare?: () => void;
  onViewSimilar?: () => void;
  onSaveForLater?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

// Format number with k/M suffix
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toLocaleString("en-US");
}

// Format percentage
function formatPercent(num: number): string {
  return num.toFixed(1) + "%";
}

// Format time ago
function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
}

// Platform name
function getPlatformName(platform: "instagram" | "tiktok" | "youtube"): string {
  switch (platform) {
    case "instagram": return "Instagram";
    case "tiktok": return "TikTok";
    case "youtube": return "YouTube";
  }
}

// Icons
function ViewsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.666748 8C0.666748 8 3.33341 2.66667 8.00008 2.66667C12.6667 2.66667 15.3334 8 15.3334 8C15.3334 8 12.6667 13.3333 8.00008 13.3333C3.33341 13.3333 0.666748 8 0.666748 8Z" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EngagementsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.33334L9.88333 5.22667L14.1667 5.85L11.0833 8.85L11.7667 13.1167L8 11.1333L4.23333 13.1167L4.91667 8.85L1.83333 5.85L6.11667 5.22667L8 1.33334Z" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LikesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.66667 7.33334V14M2 8.66668V12.6667C2 13.403 2.59695 14 3.33333 14H11.618C12.5435 14 13.3246 13.3259 13.4585 12.4103L14.1251 8.07692C14.2932 6.92982 13.4033 5.90001 12.2448 5.90001H10V3.33334C10 2.59696 9.40305 2.00001 8.66667 2.00001C8.29848 2.00001 8 2.29848 8 2.66668V3.33334C8 4.4379 7.56095 5.49708 6.78223 6.2758L6 7.05803" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CommentsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7.66666C14.0024 8.54653 13.7967 9.41465 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4167 13.0396 9.38553 13.333 8.33333 13.3333C7.45346 13.3357 6.58534 13.1301 5.8 12.7333L2 14L3.26667 10.2C2.86993 9.41465 2.66428 8.54653 2.66667 7.66666C2.66698 6.6145 2.96036 5.58333 3.51373 4.68841C4.0671 3.7935 4.85872 3.07035 5.8 2.59999C6.58534 2.20325 7.45346 1.99761 8.33333 2H8.66667C10.0562 2.07666 11.3688 2.66315 12.3528 3.64718C13.3368 4.63121 13.9233 5.94374 14 7.33333V7.66666Z" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SharesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66667 8V13.3333C2.66667 13.687 2.80714 14.0261 3.0572 14.2761C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V8M10.6667 4L8 1.33334M8 1.33334L5.33333 4M8 1.33334V10" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8933 3.07334C13.5528 2.73267 13.1485 2.46244 12.7036 2.27807C12.2587 2.09369 11.7816 1.99879 11.3 1.99879C10.8184 1.99879 10.3413 2.09369 9.89644 2.27807C9.45154 2.46244 9.04717 2.73267 8.70667 3.07334L8 3.78001L7.29333 3.07334C6.60554 2.38555 5.67269 1.99915 4.7 1.99915C3.72731 1.99915 2.79446 2.38555 2.10667 3.07334C1.41888 3.76113 1.03247 4.69398 1.03247 5.66667C1.03247 6.63937 1.41888 7.57222 2.10667 8.26001L8 14.1533L13.8933 8.26001C14.234 7.91951 14.5043 7.51518 14.6886 7.07025C14.873 6.62532 14.9679 6.14822 14.9679 5.66667C14.9679 5.18513 14.873 4.70803 14.6886 4.2631C14.5043 3.81817 14.234 3.41384 13.8933 3.07334Z" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="#90a1b9" strokeWidth="1.5"/>
      <path d="M8 11V7.5" stroke="#90a1b9" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="5.5" r="0.75" fill="#90a1b9"/>
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12.6667V3.33334M8 3.33334L4 7.33334M8 3.33334L12 7.33334" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.33334V12.6667M8 12.6667L12 8.66668M8 12.6667L4 8.66668" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12M4 4L12 12" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2H14V6" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66667 9.33333L14 2" stroke="#45556c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6667 14L8 10.6667L3.33333 14V3.33333C3.33333 2.97971 3.47381 2.64057 3.72386 2.39052C3.97391 2.14048 4.31304 2 4.66667 2H11.3333C11.687 2 12.0261 2.14048 12.2761 2.39052C12.5262 2.64057 12.6667 2.97971 12.6667 3.33333V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SimilarPostsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5.5 8V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 5.5H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="8" r="1" fill="currentColor"/>
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33333 1.33334H4C3.64638 1.33334 3.30724 1.47382 3.0572 1.72387C2.80714 1.97392 2.66667 2.31305 2.66667 2.66668V13.3333C2.66667 13.687 2.80714 14.0261 3.0572 14.2762C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V5.33334L9.33333 1.33334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33333 1.33334V5.33334H13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3" y="8" width="10" height="6" rx="1" fill="#ef4444"/>
      <text x="8" y="12.5" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">PDF</text>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66667 8V13.3333C2.66667 13.687 2.80714 14.0261 3.0572 14.2761C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V8M10.6667 4L8 1.33334M8 1.33334L5.33333 4M8 1.33334V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function QuoteLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5C3 7.46243 5.46243 5 8.5 5H9V7H8.5C6.567 7 5 8.567 5 10.5V11H8C9.10457 11 10 11.8954 10 13V17C10 18.1046 9.10457 19 8 19H4C2.89543 19 2 18.1046 2 17V13C2 11.8954 2.89543 11 4 11H3V10.5Z" fill="#90a1b9" fillOpacity="0.5"/>
      <path d="M14 10.5C14 7.46243 16.4624 5 19.5 5H20V7H19.5C17.567 7 16 8.567 16 10.5V11H19C20.1046 11 21 11.8954 21 13V17C21 18.1046 20.1046 19 19 19H15C13.8954 19 13 18.1046 13 17V13C13 11.8954 13.8954 11 15 11H14V10.5Z" fill="#90a1b9" fillOpacity="0.5"/>
    </svg>
  );
}

function QuoteRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 13.5C21 16.5376 18.5376 19 15.5 19H15V17H15.5C17.433 17 19 15.433 19 13.5V13H16C14.8954 13 14 12.1046 14 11V7C14 5.89543 14.8954 5 16 5H20C21.1046 5 22 5.89543 22 7V11C22 12.1046 21.1046 13 20 13H21V13.5Z" fill="#90a1b9" fillOpacity="0.5"/>
      <path d="M10 13.5C10 16.5376 7.53757 19 4.5 19H4V17H4.5C6.433 17 8 15.433 8 13.5V13H5C3.89543 13 3 12.1046 3 11V7C3 5.89543 3.89543 5 5 5H9C10.1046 5 11 5.89543 11 7V11C11 12.1046 10.1046 13 9 13H10V13.5Z" fill="#90a1b9" fillOpacity="0.5"/>
    </svg>
  );
}

// Platform logos
function YouTubeLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.0269 4.89485C14.8582 4.28017 14.3613 3.79614 13.7302 3.63186C12.5865 3.33331 8.00008 3.33331 8.00008 3.33331C8.00008 3.33331 3.41369 3.33331 2.26991 3.63186C1.63888 3.79614 1.14188 4.28017 0.973226 4.89485C0.666748 6.0089 0.666748 8.33331 0.666748 8.33331C0.666748 8.33331 0.666748 10.6577 0.973226 11.7719C1.14188 12.3865 1.63888 12.8705 2.26991 13.0348C3.41369 13.3333 8.00008 13.3333 8.00008 13.3333C8.00008 13.3333 12.5865 13.3333 13.7302 13.0348C14.3613 12.8705 14.8582 12.3865 15.0269 11.7719C15.3334 10.6577 15.3334 8.33331 15.3334 8.33331C15.3334 8.33331 15.3334 6.0089 15.0269 4.89485Z" fill="#FF0302"/>
      <path d="M6.5 10.4437L10.3333 8.33338L6.5 6.2229V10.4437Z" fill="white"/>
    </svg>
  );
}

function InstagramLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" fill="url(#ig_gradient_modal)"/>
      <circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.5"/>
      <circle cx="11.5" cy="4.5" r="1" fill="white"/>
      <defs>
        <linearGradient id="ig_gradient_modal" x1="1.5" y1="14.5" x2="14.5" y2="1.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFDD55"/>
          <stop offset="0.5" stopColor="#FF543E"/>
          <stop offset="1" stopColor="#C837AB"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function TikTokLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2354 10.105V5.55849C11.1129 6.18833 12.1879 6.55928 13.3478 6.55928V4.82067C12.6778 4.67726 12.0874 4.31754 11.6528 3.81817C10.9517 3.36103 10.4459 2.63002 10.2882 1.7774H8.6504L8.64665 10.743C8.60918 11.7469 7.78279 12.5528 6.76973 12.5528C6.14228 12.5528 5.58704 12.2428 5.24538 11.769C4.64688 11.4539 4.23709 10.8265 4.23709 10.1046C4.23709 9.06774 5.08085 8.22398 6.11775 8.22398C6.31123 8.22398 6.49688 8.256 6.67265 8.31084V6.5569C4.44692 6.60902 2.6521 8.43416 2.6521 10.6721C2.6521 11.7547 3.07245 12.7402 3.75781 13.4759C4.42648 13.9453 5.24027 14.2223 6.11775 14.2223C8.38811 14.2223 10.2354 12.375 10.2354 10.1046V10.105Z" fill="black"/>
    </svg>
  );
}

function PlatformLogo({ platform }: { platform: "instagram" | "tiktok" | "youtube" }) {
  switch (platform) {
    case "youtube": return <YouTubeLogo />;
    case "instagram": return <InstagramLogo />;
    case "tiktok": return <TikTokLogo />;
  }
}

// Metric row
function MetricRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-[62px]">
      <div className="flex items-center gap-[8px] flex-1">
        <div className="size-[16px] shrink-0">{icon}</div>
        <span className="font-hanken-medium text-[14px] leading-[20px] text-[#45556c]">{label}</span>
      </div>
      <span className="font-hanken-medium text-[16px] leading-[24px] text-[#1d293d]">{value}</span>
    </div>
  );
}

// Sub metric row (for likes, comments, shares box)
function SubMetricRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-[62px] px-[4px]">
      <div className="flex items-center gap-[8px] flex-1">
        <div className="size-[16px] shrink-0">{icon}</div>
        <span className="font-hanken-medium text-[14px] leading-[20px] text-[#45556c]">{label}</span>
      </div>
      <span className="font-hanken-medium text-[16px] leading-[24px] text-[#1d293d]">{value}</span>
    </div>
  );
}

export function ContentDetailModal({
  isOpen,
  onClose,
  content,
  onCreatorClick,
  onDownloadPdf,
  onShare,
  onViewSimilar,
  onSaveForLater,
  onNext,
  onPrevious,
}: ContentDetailModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [captionExpanded, setCaptionExpanded] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!content) return null;

  const platformName = getPlatformName(content.platform);
  const caption = content.caption || `#NIKE #off-duty\n"Every step I take, I think of what I feel in my feet—which is a good thing."\nBrought to you by Nike Mind: A MIND-ALTERING SHOE. Restocks coming soon.`;

  // Calculate engagement breakdown
  const likes = Math.round(content.engagements * 0.7);
  const comments = Math.round(content.engagements * 0.15);
  const shares = Math.round(content.engagements * 0.15);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center"
          style={{ zIndex: 200 }}
          onClick={onClose}
        >
          {/* Full screen modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full h-full max-w-[1407px] max-h-[952px] flex"
            style={{ boxShadow: "0px 25px 50px 0px rgba(0, 0, 0, 0.25)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left section: Close button + Video + Nav arrows */}
            <div className="flex items-start justify-between h-full px-[12px]">
              {/* Close button column */}
              <div className="flex flex-col h-full py-[8px]">
                <button
                  onClick={onClose}
                  className="size-[36px] flex items-center justify-center rounded hover:bg-[#f1f5f9] transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Video section */}
              <div className="w-[518px] h-full relative flex flex-col items-center justify-end">
                <video
                  ref={videoRef}
                  src={content.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                {/* Platform badge at bottom */}
                <div className="relative z-10 w-full bg-white/80 flex items-center gap-[8px] px-[12px] py-[8px]">
                  <PlatformLogo platform={content.platform} />
                  <span className="font-hanken-medium text-[16px] leading-[24px] text-[#45556c]">{platformName}</span>
                  <div className="size-[16px]">
                    <ExternalLinkIcon />
                  </div>
                </div>
              </div>

              {/* Navigation arrows column */}
              <div className="flex flex-col h-full items-center justify-center gap-[8px]">
                <button
                  onClick={onPrevious}
                  className="size-[36px] flex items-center justify-center rounded hover:bg-[#f1f5f9] transition-colors"
                >
                  <ArrowUpIcon />
                </button>
                <button
                  onClick={onNext}
                  className="size-[36px] flex items-center justify-center rounded hover:bg-[#f1f5f9] transition-colors"
                >
                  <ArrowDownIcon />
                </button>
              </div>
            </div>

            {/* Right section: Content */}
            <div className="flex-1 flex flex-col justify-between h-full p-[24px]">
              <div className="flex flex-col gap-[12px]">
                {/* Talent / Creator */}
                <div className="flex items-center gap-[8px]">
                  <img
                    src={content.creator.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(content.creator.name)}&background=1447e6&color=fff`}
                    alt={content.creator.name}
                    className="size-[32px] rounded-full object-cover"
                  />
                  <button
                    onClick={() => onCreatorClick?.(content.creator.id)}
                    className="font-hanken-medium text-[16px] leading-[24px] text-[#1d293d] hover:text-[#1447e6] transition-colors"
                  >
                    {content.creator.name}
                  </button>
                </div>

                {/* Metrics Section */}
                <div className="flex flex-col gap-[8px] py-[12px] border-b border-[#e2e8f0]">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                      <span className="font-hanken-light text-[14px] leading-[20px] text-[#90a1b9] uppercase">
                        {platformName} Metrics
                      </span>
                      <InfoIcon />
                    </div>
                    <span className="font-hanken-medium text-[12px] leading-[16px] text-[#90a1b9]">
                      Updated {formatTimeAgo(content.postedAt)}
                    </span>
                  </div>

                  {/* Metrics box */}
                  <div className="bg-[#f8fafc] rounded-[6px] p-[12px] flex flex-col gap-[8px]">
                    <MetricRow icon={<ViewsIcon />} label="Views" value={formatNumber(content.views)} />
                    <MetricRow icon={<EngagementsIcon />} label="Engagements" value={formatNumber(content.engagements)} />

                    {/* Engagement breakdown */}
                    <div className="border border-[#e2e8f0] rounded p-[8px] flex flex-col gap-[8px]">
                      <SubMetricRow icon={<LikesIcon />} label="Likes" value={formatNumber(likes)} />
                      <SubMetricRow icon={<CommentsIcon />} label="Comments" value={formatNumber(comments)} />
                      <SubMetricRow icon={<SharesIcon />} label="Shares" value={formatNumber(shares)} />
                    </div>

                    <MetricRow icon={<HeartIcon />} label="View engagement rate" value={formatPercent(content.viewEngRate)} />
                  </div>

                  {/* Posted date */}
                  <span className="font-hanken-medium text-[14px] leading-[20px] text-[#90a1b9]">
                    Posted {formatTimeAgo(content.postedAt)}
                  </span>
                </div>

                {/* Caption Section */}
                <div className="flex flex-col pt-[12px]">
                  <div className="flex items-center">
                    <div className="opacity-50">
                      <QuoteLeftIcon />
                    </div>
                  </div>
                  <p className="font-hanken-medium text-[14px] leading-[20px] text-[#45556c] whitespace-pre-wrap">
                    {captionExpanded ? caption : caption.slice(0, 150) + (caption.length > 150 ? "..." : "")}
                  </p>
                  <div className="flex items-center justify-between">
                    {caption.length > 150 && (
                      <button
                        onClick={() => setCaptionExpanded(!captionExpanded)}
                        className="font-hanken-regular text-[12px] leading-[16px] text-[#1447e6] hover:underline"
                      >
                        {captionExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                    <div className="flex-1" />
                    <div className="opacity-50">
                      <QuoteRightIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-[8px]">
                <button
                  onClick={onSaveForLater}
                  className="flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded border border-[#e2e8f0] bg-white text-[#1d293d] font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] hover:bg-[#f8fafc] transition-colors"
                  style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
                >
                  <BookmarkIcon />
                  Save for later
                </button>
                <button
                  onClick={onViewSimilar}
                  className="flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded border border-[#e2e8f0] bg-white text-[#1d293d] font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] hover:bg-[#f8fafc] transition-colors"
                  style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
                >
                  <SimilarPostsIcon />
                  Similar posts
                </button>
                <button
                  onClick={onDownloadPdf}
                  className="flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded border border-[#e2e8f0] bg-white text-[#1d293d] font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] hover:bg-[#f8fafc] transition-colors"
                  style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
                >
                  <PdfIcon />
                  Download pdf
                </button>
                <button
                  onClick={onShare}
                  className="flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded bg-[#1d293d] text-[#eff6ff] font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] hover:bg-[#2d3a4d] transition-colors"
                >
                  <ShareIcon />
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

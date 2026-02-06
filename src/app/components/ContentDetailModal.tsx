import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { nikeVideos } from "../data/thumbnails";

// Similar posts video indices (unused videos)
const SIMILAR_POST_INDICES = [15, 17, 19, 21, 23];

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
  hasNext?: boolean;
  hasPrevious?: boolean;
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

// Icons with dark mode support
function ViewsIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.666748 8C0.666748 8 3.33341 2.66667 8.00008 2.66667C12.6667 2.66667 15.3334 8 15.3334 8C15.3334 8 12.6667 13.3333 8.00008 13.3333C3.33341 13.3333 0.666748 8 0.666748 8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EngagementsIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.33334L9.88333 5.22667L14.1667 5.85L11.0833 8.85L11.7667 13.1167L8 11.1333L4.23333 13.1167L4.91667 8.85L1.83333 5.85L6.11667 5.22667L8 1.33334Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LikesIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.66667 7.33334V14M2 8.66668V12.6667C2 13.403 2.59695 14 3.33333 14H11.618C12.5435 14 13.3246 13.3259 13.4585 12.4103L14.1251 8.07692C14.2932 6.92982 13.4033 5.90001 12.2448 5.90001H10V3.33334C10 2.59696 9.40305 2.00001 8.66667 2.00001C8.29848 2.00001 8 2.29848 8 2.66668V3.33334C8 4.4379 7.56095 5.49708 6.78223 6.2758L6 7.05803" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CommentsIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7.66666C14.0024 8.54653 13.7967 9.41465 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4167 13.0396 9.38553 13.333 8.33333 13.3333C7.45346 13.3357 6.58534 13.1301 5.8 12.7333L2 14L3.26667 10.2C2.86993 9.41465 2.66428 8.54653 2.66667 7.66666C2.66698 6.6145 2.96036 5.58333 3.51373 4.68841C4.0671 3.7935 4.85872 3.07035 5.8 2.59999C6.58534 2.20325 7.45346 1.99761 8.33333 2H8.66667C10.0562 2.07666 11.3688 2.66315 12.3528 3.64718C13.3368 4.63121 13.9233 5.94374 14 7.33333V7.66666Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SharesIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66667 8V13.3333C2.66667 13.687 2.80714 14.0261 3.0572 14.2761C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V8M10.6667 4L8 1.33334M8 1.33334L5.33333 4M8 1.33334V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function HeartIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8933 3.07334C13.5528 2.73267 13.1485 2.46244 12.7036 2.27807C12.2587 2.09369 11.7816 1.99879 11.3 1.99879C10.8184 1.99879 10.3413 2.09369 9.89644 2.27807C9.45154 2.46244 9.04717 2.73267 8.70667 3.07334L8 3.78001L7.29333 3.07334C6.60554 2.38555 5.67269 1.99915 4.7 1.99915C3.72731 1.99915 2.79446 2.38555 2.10667 3.07334C1.41888 3.76113 1.03247 4.69398 1.03247 5.66667C1.03247 6.63937 1.41888 7.57222 2.10667 8.26001L8 14.1533L13.8933 8.26001C14.234 7.91951 14.5043 7.51518 14.6886 7.07025C14.873 6.62532 14.9679 6.14822 14.9679 5.66667C14.9679 5.18513 14.873 4.70803 14.6886 4.2631C14.5043 3.81817 14.234 3.41384 13.8933 3.07334Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function InfoIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#a1a1a1" : "#90a1b9";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.5"/>
      <path d="M8 11V7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8" cy="5.5" r="0.75" fill={color}/>
    </svg>
  );
}

function ArrowUpIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12.6667V3.33334M8 3.33334L4 7.33334M8 3.33334L12 7.33334" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowDownIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.33334V12.6667M8 12.6667L12 8.66668M8 12.6667L4 8.66668" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CloseIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12M4 4L12 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ExternalLinkIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#45556c";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 2H14V6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66667 9.33333L14 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BookmarkIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#64748B";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.25 3.75425C4.25 3.51212 4.42325 3.30546 4.66273 3.26968C5.31772 3.17183 6.65886 3 8 3C9.34114 3 10.6823 3.17183 11.3373 3.26968C11.5767 3.30546 11.75 3.51212 11.75 3.75425V12.6058C11.75 13.0808 11.1392 13.2977 10.8308 12.9364C9.91058 11.8586 8.55417 10.3889 8 10.3889C7.44583 10.3889 6.08942 11.8586 5.16924 12.9364C4.86081 13.2977 4.25 13.0808 4.25 12.6058V3.75425Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SimilarPostsIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#fafafa" : "#64748B";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9.5" cy="6.5" r="4.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6.5" cy="9.5" r="4.5" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.5 8L8 5.5" stroke={color} strokeLinecap="round"/>
      <path d="M8 10.5L10.5 8" stroke={color} strokeLinecap="round"/>
      <path d="M6.5 9.5L9.5 6.5" stroke={color} strokeLinecap="round"/>
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 2C3 1.44772 3.44772 1 4 1H9L11 3L13 5V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V2Z" fill="#DEE2E8"/>
      <path d="M3 8H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V8Z" fill="#EF4444"/>
      <path d="M9 1L11 3L13 5H10C9.44772 5 9 4.55228 9 4V1Z" fill="#8B94A2"/>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.3335 4.66667L7.64661 2.35355C7.84187 2.15829 8.15845 2.15829 8.35372 2.35355L10.6668 4.66667" stroke="#EFF6FF" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 2.66675L8 9.66675" stroke="#EFF6FF" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 6.27271L13 12.2936C13 13.0185 12.4813 13.6379 11.7624 13.7318C10.8014 13.8573 9.40072 14 8 14C6.59928 14 5.19855 13.8573 4.23755 13.7318C3.51872 13.6379 3 13.0185 3 12.2936L3 6.27271" stroke="#EFF6FF" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function QuoteLeftIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#a1a1a1" : "#90a1b9";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10.5C3 7.46243 5.46243 5 8.5 5H9V7H8.5C6.567 7 5 8.567 5 10.5V11H8C9.10457 11 10 11.8954 10 13V17C10 18.1046 9.10457 19 8 19H4C2.89543 19 2 18.1046 2 17V13C2 11.8954 2.89543 11 4 11H3V10.5Z" fill={color} fillOpacity="0.5"/>
      <path d="M14 10.5C14 7.46243 16.4624 5 19.5 5H20V7H19.5C17.567 7 16 8.567 16 10.5V11H19C20.1046 11 21 11.8954 21 13V17C21 18.1046 20.1046 19 19 19H15C13.8954 19 13 18.1046 13 17V13C13 11.8954 13.8954 11 15 11H14V10.5Z" fill={color} fillOpacity="0.5"/>
    </svg>
  );
}

function QuoteRightIcon({ darkMode }: { darkMode?: boolean }) {
  const color = darkMode ? "#a1a1a1" : "#90a1b9";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 13.5C21 16.5376 18.5376 19 15.5 19H15V17H15.5C17.433 17 19 15.433 19 13.5V13H16C14.8954 13 14 12.1046 14 11V7C14 5.89543 14.8954 5 16 5H20C21.1046 5 22 5.89543 22 7V11C22 12.1046 21.1046 13 20 13H21V13.5Z" fill={color} fillOpacity="0.5"/>
      <path d="M10 13.5C10 16.5376 7.53757 19 4.5 19H4V17H4.5C6.433 17 8 15.433 8 13.5V13H5C3.89543 13 3 12.1046 3 11V7C3 5.89543 3.89543 5 5 5H9C10.1046 5 11 5.89543 11 7V11C11 12.1046 10.1046 13 9 13H10V13.5Z" fill={color} fillOpacity="0.5"/>
    </svg>
  );
}

// Platform logos
function YouTubeLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M15.0267 4.89503C14.858 4.28035 14.3611 3.79632 13.73 3.63204C12.5863 3.3335 7.99984 3.3335 7.99984 3.3335C7.99984 3.3335 3.41345 3.3335 2.26966 3.63204C1.63864 3.79632 1.14163 4.28035 0.972981 4.89503C0.666504 6.00909 0.666504 8.3335 0.666504 8.3335C0.666504 8.3335 0.666504 10.6579 0.972981 11.772C1.14163 12.3866 1.63864 12.8707 2.26966 13.035C3.41345 13.3335 7.99984 13.3335 7.99984 13.3335C7.99984 13.3335 12.5863 13.3335 13.73 13.035C14.3611 12.8707 14.858 12.3866 15.0267 11.772C15.3332 10.6579 15.3332 8.3335 15.3332 8.3335C15.3332 8.3335 15.3332 6.00909 15.0267 4.89503Z" fill="#FF0302"/>
      <path d="M6.5 10.4438L10.3333 8.33357L6.5 6.22308V10.4438Z" fill="white"/>
    </svg>
  );
}

function InstagramLogo({ darkMode }: { darkMode?: boolean }) {
  if (darkMode) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1.33398 3.89701C1.33398 3.21699 1.60412 2.56483 2.08496 2.08399C2.56581 1.60314 3.21797 1.33301 3.89798 1.33301H12.103C12.783 1.33301 13.4352 1.60314 13.916 2.08399C14.3968 2.56483 14.667 3.21699 14.667 3.89701V12.103C14.667 12.783 14.3968 13.4352 13.916 13.916C13.4352 14.3969 12.783 14.667 12.103 14.667H3.89798C3.21797 14.667 2.56581 14.3969 2.08496 13.916C1.60412 13.4352 1.33398 12.783 1.33398 12.103V3.89701Z" fill="url(#paint0_linear_ig_dark)"/>
        <path d="M1.33398 3.89701C1.33398 3.21699 1.60412 2.56483 2.08496 2.08399C2.56581 1.60314 3.21797 1.33301 3.89798 1.33301H12.103C12.783 1.33301 13.4352 1.60314 13.916 2.08399C14.3968 2.56483 14.667 3.21699 14.667 3.89701V12.103C14.667 12.783 14.3968 13.4352 13.916 13.916C13.4352 14.3969 12.783 14.667 12.103 14.667H3.89798C3.21797 14.667 2.56581 14.3969 2.08496 13.916C1.60412 13.4352 1.33398 12.783 1.33398 12.103V3.89701Z" fill="url(#paint1_linear_ig_dark)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.12793 5.81991C3.1278 5.4664 3.19735 5.11633 3.3326 4.78972C3.46785 4.46311 3.66615 4.16636 3.91617 3.91644C4.16618 3.66651 4.463 3.46832 4.78967 3.33319C5.11633 3.19806 5.46642 3.12864 5.81993 3.12891H10.1799C10.5336 3.12864 10.8839 3.19813 11.2107 3.33338C11.5374 3.46864 11.8344 3.66701 12.0844 3.91714C12.3344 4.16728 12.5327 4.46426 12.6678 4.7911C12.803 5.11795 12.8723 5.46823 12.8719 5.82191V10.1809C12.8722 10.5345 12.8027 10.8847 12.6676 11.2114C12.5324 11.5381 12.3341 11.835 12.084 12.085C11.834 12.3351 11.5372 12.5333 11.2104 12.6685C10.8837 12.8037 10.5335 12.8732 10.1799 12.8729H5.81993C5.46634 12.8732 5.11616 12.8037 4.78944 12.6685C4.46271 12.5333 4.16584 12.3351 3.91581 12.085C3.66578 11.835 3.4675 11.5381 3.33231 11.2114C3.19712 10.8847 3.12767 10.5345 3.12793 10.1809V5.81991ZM5.81993 3.89791C5.56731 3.89791 5.31717 3.94768 5.0838 4.04438C4.85042 4.14108 4.63839 4.28282 4.45981 4.46149C4.28123 4.64017 4.1396 4.85228 4.04302 5.0857C3.94644 5.31912 3.8968 5.56929 3.89693 5.82191V10.1809C3.89693 11.2429 4.75793 12.1039 5.81993 12.1039H10.1799C10.6898 12.1036 11.1786 11.9009 11.5391 11.5403C11.8995 11.1797 12.1019 10.6907 12.1019 10.1809V5.81991C12.1019 5.31007 11.8995 4.8211 11.5391 4.46049C11.1786 4.09989 10.6898 3.89717 10.1799 3.89691L5.81993 3.89791ZM7.99993 9.79491C8.47599 9.79491 8.93256 9.60579 9.26919 9.26916C9.60581 8.93254 9.79493 8.47597 9.79493 7.99991C9.79493 7.52384 9.60581 7.06728 9.26919 6.73065C8.93256 6.39402 8.47599 6.20491 7.99993 6.20491C7.52387 6.20491 7.0673 6.39402 6.73067 6.73065C6.39405 7.06728 6.20493 7.52384 6.20493 7.99991C6.20493 8.47597 6.39405 8.93254 6.73067 9.26916C7.0673 9.60579 7.52387 9.79491 7.99993 9.79491ZM7.99993 10.5649C8.68021 10.5649 9.33263 10.2947 9.81366 9.81364C10.2947 9.33261 10.5649 8.68019 10.5649 7.99991C10.5649 7.31963 10.2947 6.66721 9.81366 6.18618C9.33263 5.70515 8.68021 5.43491 7.99993 5.43491C7.31965 5.43491 6.66723 5.70515 6.1862 6.18618C5.70517 6.66721 5.43493 7.31963 5.43493 7.99991C5.43493 8.68019 5.70517 9.33261 6.1862 9.81364C6.66723 10.2947 7.31965 10.5649 7.99993 10.5649ZM10.6149 5.64091C10.751 5.64091 10.8815 5.58686 10.9777 5.49065C11.0739 5.39445 11.1279 5.26396 11.1279 5.12791C11.1279 4.99185 11.0739 4.86137 10.9777 4.76516C10.8815 4.66895 10.751 4.61491 10.6149 4.61491C10.4789 4.61491 10.3484 4.66895 10.2522 4.76516C10.156 4.86137 10.1019 4.99185 10.1019 5.12791C10.1019 5.26396 10.156 5.39445 10.2522 5.49065C10.3484 5.58686 10.4789 5.64091 10.6149 5.64091Z" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear_ig_dark" x1="-0.154016" y1="-0.512992" x2="4.82098" y2="9.23101" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1F0CF8"/>
            <stop offset="0.868" stopColor="#ED1389"/>
          </linearGradient>
          <linearGradient id="paint1_linear_ig_dark" x1="1.79498" y1="14.308" x2="7.23098" y2="0.615007" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBAB48"/>
            <stop offset="0.399" stopColor="#FC3746"/>
            <stop offset="0.854" stopColor="#FC2C46" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.375C9.39648 1.375 10.5068 1.37352 11.375 1.49024C12.2612 1.60939 12.9887 1.86171 13.5635 2.43652L13.6675 2.54639C14.1692 3.10313 14.3981 3.79421 14.5098 4.625C14.6265 5.49325 14.625 6.60352 14.625 8C14.625 9.39648 14.6265 10.5068 14.5098 11.375C14.3981 12.2058 14.1692 12.8969 13.6675 13.4536L13.5635 13.5635C12.9887 14.1383 12.2612 14.3906 11.375 14.5098C10.5068 14.6265 9.39648 14.625 8 14.625C6.60352 14.625 5.49325 14.6265 4.625 14.5098C3.79421 14.3981 3.10313 14.1692 2.54639 13.6675L2.43652 13.5635C1.86171 12.9887 1.60939 12.2612 1.49024 11.375C1.37352 10.5068 1.375 9.39648 1.375 8C1.375 6.60352 1.37352 5.49325 1.49024 4.625C1.60939 3.73876 1.8617 3.01134 2.43652 2.43652L2.54639 2.33252C3.10313 1.83081 3.79421 1.60193 4.625 1.49024C5.49325 1.37352 6.60352 1.375 8 1.375ZM8 2.625C6.56813 2.625 5.55712 2.62656 4.79151 2.72949C4.09051 2.82374 3.6781 2.99379 3.37891 3.26514L3.3208 3.3208C3.01694 3.62466 2.83001 4.04387 2.72949 4.79151C2.62656 5.55712 2.625 6.56813 2.625 8C2.625 9.43188 2.62656 10.4429 2.72949 11.2085C2.83001 11.9561 3.01694 12.3753 3.3208 12.6792L3.37891 12.7349C3.6781 13.0062 4.09051 13.1763 4.79151 13.2705C5.55712 13.3734 6.56813 13.375 8 13.375C9.43188 13.375 10.4429 13.3734 11.2085 13.2705C11.9561 13.17 12.3753 12.9831 12.6792 12.6792L12.7349 12.6211C13.0062 12.3219 13.1763 11.9095 13.2705 11.2085C13.3734 10.4429 13.375 9.43188 13.375 8C13.375 6.56813 13.3734 5.55712 13.2705 4.79151C13.1763 4.09051 13.0062 3.6781 12.7349 3.37891L12.6792 3.3208C12.3753 3.01694 11.9561 2.83001 11.2085 2.72949C10.4429 2.62656 9.43188 2.625 8 2.625ZM8 4.625C9.86396 4.625 11.375 6.13604 11.375 8C11.375 9.86396 9.86396 11.375 8 11.375C6.13604 11.375 4.625 9.86396 4.625 8C4.625 6.13604 6.13604 4.625 8 4.625ZM8 5.875C6.8264 5.875 5.875 6.8264 5.875 8C5.875 9.17361 6.8264 10.125 8 10.125C9.17361 10.125 10.125 9.17361 10.125 8C10.125 6.8264 9.17361 5.875 8 5.875ZM11.5498 3.6499C11.9916 3.6499 12.3501 4.00837 12.3501 4.4502C12.35 4.89193 11.9916 5.25 11.5498 5.25C11.1081 5.2499 10.7501 4.89187 10.75 4.4502C10.75 4.00843 11.1081 3.65001 11.5498 3.6499Z" fill="url(#paint0_linear_ig_light)"/>
      <path d="M8 1.375C9.39648 1.375 10.5068 1.37352 11.375 1.49024C12.2612 1.60939 12.9887 1.86171 13.5635 2.43652L13.6675 2.54639C14.1692 3.10313 14.3981 3.79421 14.5098 4.625C14.6265 5.49325 14.625 6.60352 14.625 8C14.625 9.39648 14.6265 10.5068 14.5098 11.375C14.3981 12.2058 14.1692 12.8969 13.6675 13.4536L13.5635 13.5635C12.9887 14.1383 12.2612 14.3906 11.375 14.5098C10.5068 14.6265 9.39648 14.625 8 14.625C6.60352 14.625 5.49325 14.6265 4.625 14.5098C3.79421 14.3981 3.10313 14.1692 2.54639 13.6675L2.43652 13.5635C1.86171 12.9887 1.60939 12.2612 1.49024 11.375C1.37352 10.5068 1.375 9.39648 1.375 8C1.375 6.60352 1.37352 5.49325 1.49024 4.625C1.60939 3.73876 1.8617 3.01134 2.43652 2.43652L2.54639 2.33252C3.10313 1.83081 3.79421 1.60193 4.625 1.49024C5.49325 1.37352 6.60352 1.375 8 1.375ZM8 2.625C6.56813 2.625 5.55712 2.62656 4.79151 2.72949C4.09051 2.82374 3.6781 2.99379 3.37891 3.26514L3.3208 3.3208C3.01694 3.62466 2.83001 4.04387 2.72949 4.79151C2.62656 5.55712 2.625 6.56813 2.625 8C2.625 9.43188 2.62656 10.4429 2.72949 11.2085C2.83001 11.9561 3.01694 12.3753 3.3208 12.6792L3.37891 12.7349C3.6781 13.0062 4.09051 13.1763 4.79151 13.2705C5.55712 13.3734 6.56813 13.375 8 13.375C9.43188 13.375 10.4429 13.3734 11.2085 13.2705C11.9561 13.17 12.3753 12.9831 12.6792 12.6792L12.7349 12.6211C13.0062 12.3219 13.1763 11.9095 13.2705 11.2085C13.3734 10.4429 13.375 9.43188 13.375 8C13.375 6.56813 13.3734 5.55712 13.2705 4.79151C13.1763 4.09051 13.0062 3.6781 12.7349 3.37891L12.6792 3.3208C12.3753 3.01694 11.9561 2.83001 11.2085 2.72949C10.4429 2.62656 9.43188 2.625 8 2.625ZM8 4.625C9.86396 4.625 11.375 6.13604 11.375 8C11.375 9.86396 9.86396 11.375 8 11.375C6.13604 11.375 4.625 9.86396 4.625 8C4.625 6.13604 6.13604 4.625 8 4.625ZM8 5.875C6.8264 5.875 5.875 6.8264 5.875 8C5.875 9.17361 6.8264 10.125 8 10.125C9.17361 10.125 10.125 9.17361 10.125 8C10.125 6.8264 9.17361 5.875 8 5.875ZM11.5498 3.6499C11.9916 3.6499 12.3501 4.00837 12.3501 4.4502C12.35 4.89193 11.9916 5.25 11.5498 5.25C11.1081 5.2499 10.7501 4.89187 10.75 4.4502C10.75 4.00843 11.1081 3.65001 11.5498 3.6499Z" fill="url(#paint1_linear_ig_light)"/>
      <defs>
        <linearGradient id="paint0_linear_ig_light" x1="-1.05417" y1="0.7125" x2="4.84032" y2="9.22298" gradientUnits="userSpaceOnUse">
          <stop offset="0.00121768" stopColor="#6521F5"/>
          <stop offset="0.293733" stopColor="#1200DD"/>
          <stop offset="0.709013" stopColor="#ED1389"/>
        </linearGradient>
        <linearGradient id="paint1_linear_ig_light" x1="1.83345" y1="14.2681" x2="7.23548" y2="0.661708" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBEC48"/>
          <stop offset="0.399" stopColor="#FC3746"/>
          <stop offset="0.854" stopColor="#FC2C46" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function TikTokLogo({ darkMode }: { darkMode?: boolean }) {
  if (darkMode) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M6.67253 6.55704V6.02701C6.49063 6.00214 6.30601 5.98682 6.11763 5.98682C3.84728 5.98682 2 7.8341 2 10.1048C2 11.498 2.69592 12.7308 3.75803 13.4761C3.07267 12.7403 2.65232 11.7548 2.65232 10.6723C2.65232 8.4343 4.44714 6.60916 6.67287 6.55704H6.67253Z" fill="#25F4EE"/>
        <path d="M6.76947 12.5532C7.78253 12.5532 8.60892 11.7473 8.64639 10.7434L8.65014 1.7778H10.2879C10.2539 1.59352 10.2351 1.40412 10.2351 1.20996H7.99816L7.99441 10.1756C7.95694 11.1794 7.13055 11.9854 6.11749 11.9854C5.80274 11.9854 5.50605 11.9067 5.24512 11.7694C5.58678 12.2432 6.14202 12.5532 6.76947 12.5532Z" fill="#25F4EE"/>
        <path d="M13.3478 4.82086V4.3225C12.7231 4.3225 12.141 4.13686 11.6528 3.81836C12.0875 4.31739 12.6778 4.67745 13.3478 4.82086Z" fill="#25F4EE"/>
        <path d="M11.6532 3.81811C11.177 3.27138 10.8878 2.55775 10.8878 1.77734H10.2886C10.4463 2.62962 10.9521 3.36097 11.6532 3.81811Z" fill="#FE2C55"/>
        <path d="M6.11748 8.2245C5.08058 8.2245 4.23682 9.06826 4.23682 10.1052C4.23682 10.8273 4.6466 11.4548 5.24511 11.7695C5.02199 11.4602 4.88914 11.0821 4.88914 10.6727C4.88914 9.63576 5.7329 8.792 6.7698 8.792C6.96328 8.792 7.14893 8.82402 7.3247 8.87886V6.59488C7.1428 6.57002 6.95817 6.55469 6.7698 6.55469C6.7371 6.55469 6.70508 6.55639 6.67272 6.55707V8.31102C6.49695 8.25618 6.3113 8.22416 6.11782 8.22416L6.11748 8.2245Z" fill="#FE2C55"/>
        <path d="M13.3478 4.8208V6.55942C12.1879 6.55942 11.1129 6.18846 10.2354 5.55862V10.1051C10.2354 12.3758 8.38811 14.2228 6.11775 14.2228C5.24027 14.2228 4.42683 13.9462 3.75781 13.4764C4.50994 14.2841 5.58159 14.7903 6.76974 14.7903C9.04043 14.7903 10.8874 12.943 10.8874 10.6726V6.12647C11.7649 6.75631 12.8399 7.12726 13.9998 7.12726V4.88995C13.776 4.88995 13.558 4.86577 13.3478 4.8208Z" fill="#FE2C55"/>
        <path d="M10.2351 10.1049V5.55843C11.1126 6.18827 12.1877 6.55922 13.3476 6.55922V4.8206C12.6775 4.6772 12.0872 4.31748 11.6525 3.81811C10.9515 3.36097 10.4457 2.62996 10.2879 1.77734H8.65015L8.64641 10.7429C8.60894 11.7468 7.78255 12.5528 6.76949 12.5528C6.14203 12.5528 5.58679 12.2428 5.24513 11.7689C4.64663 11.4539 4.23684 10.8264 4.23684 10.1046C4.23684 9.06768 5.08061 8.22392 6.11751 8.22392C6.31099 8.22392 6.49664 8.25594 6.67241 8.31078V6.55684C4.44668 6.60896 2.65186 8.43409 2.65186 10.6721C2.65186 11.7546 3.0722 12.7401 3.75757 13.4759C4.42624 13.9453 5.24002 14.2222 6.11751 14.2222C8.38786 14.2222 10.2351 12.3749 10.2351 10.1046V10.1049Z" fill="white"/>
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6.67253 6.55704V6.02701C6.49063 6.00214 6.30601 5.98682 6.11763 5.98682C3.84728 5.98682 2 7.8341 2 10.1048C2 11.498 2.69592 12.7308 3.75803 13.4761C3.07267 12.7403 2.65232 11.7548 2.65232 10.6723C2.65232 8.4343 4.44714 6.60916 6.67287 6.55704H6.67253Z" fill="#25F4EE"/>
      <path d="M6.76947 12.5532C7.78253 12.5532 8.60892 11.7473 8.64639 10.7434L8.65014 1.7778H10.2879C10.2539 1.59352 10.2351 1.40412 10.2351 1.20996H7.99816L7.99441 10.1756C7.95694 11.1794 7.13055 11.9854 6.11749 11.9854C5.80274 11.9854 5.50605 11.9067 5.24512 11.7694C5.58678 12.2432 6.14202 12.5532 6.76947 12.5532Z" fill="#25F4EE"/>
      <path d="M13.3478 4.82086V4.3225C12.7231 4.3225 12.141 4.13686 11.6528 3.81836C12.0875 4.31739 12.6778 4.67745 13.3478 4.82086Z" fill="#25F4EE"/>
      <path d="M11.6532 3.81811C11.177 3.27138 10.8878 2.55775 10.8878 1.77734H10.2886C10.4463 2.62962 10.9521 3.36097 11.6532 3.81811Z" fill="#FE2C55"/>
      <path d="M6.11748 8.2245C5.08058 8.2245 4.23682 9.06826 4.23682 10.1052C4.23682 10.8273 4.6466 11.4548 5.24511 11.7695C5.02199 11.4602 4.88914 11.0821 4.88914 10.6727C4.88914 9.63576 5.7329 8.792 6.7698 8.792C6.96328 8.792 7.14893 8.82402 7.3247 8.87886V6.59488C7.1428 6.57002 6.95817 6.55469 6.7698 6.55469C6.7371 6.55469 6.70508 6.55639 6.67272 6.55707V8.31102C6.49695 8.25618 6.3113 8.22416 6.11782 8.22416L6.11748 8.2245Z" fill="#FE2C55"/>
      <path d="M13.3478 4.8208V6.55942C12.1879 6.55942 11.1129 6.18846 10.2354 5.55862V10.1051C10.2354 12.3758 8.38811 14.2228 6.11775 14.2228C5.24027 14.2228 4.42683 13.9462 3.75781 13.4764C4.50994 14.2841 5.58159 14.7903 6.76974 14.7903C9.04043 14.7903 10.8874 12.943 10.8874 10.6726V6.12647C11.7649 6.75631 12.8399 7.12726 13.9998 7.12726V4.88995C13.776 4.88995 13.558 4.86577 13.3478 4.8208Z" fill="#FE2C55"/>
      <path d="M10.2351 10.1049V5.55843C11.1126 6.18827 12.1877 6.55922 13.3476 6.55922V4.8206C12.6775 4.6772 12.0872 4.31748 11.6525 3.81811C10.9515 3.36097 10.4457 2.62996 10.2879 1.77734H8.65015L8.64641 10.7429C8.60894 11.7468 7.78255 12.5528 6.76949 12.5528C6.14203 12.5528 5.58679 12.2428 5.24513 11.7689C4.64663 11.4539 4.23684 10.8264 4.23684 10.1046C4.23684 9.06768 5.08061 8.22392 6.11751 8.22392C6.31099 8.22392 6.49664 8.25594 6.67241 8.31078V6.55684C4.44668 6.60896 2.65186 8.43409 2.65186 10.6721C2.65186 11.7546 3.0722 12.7401 3.75757 13.4759C4.42624 13.9453 5.24002 14.2222 6.11751 14.2222C8.38786 14.2222 10.2351 12.3749 10.2351 10.1046V10.1049Z" fill="black"/>
    </svg>
  );
}

function SnapchatLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="3" fill="#FFFC00"/>
      <path d="M12.702 10.5399C11.0049 9.71838 10.7344 8.44998 10.7224 8.3559C10.7078 8.24194 10.6913 8.15234 10.817 8.03642C10.9383 7.92442 11.4762 7.5915 11.6254 7.48734C11.8721 7.31486 11.9807 7.14266 11.9006 6.93098C11.8446 6.78454 11.7083 6.72938 11.5646 6.72938C11.5193 6.72952 11.4742 6.73459 11.43 6.7445C11.1589 6.8033 10.8957 6.9391 10.7434 6.97578C10.7251 6.9805 10.7063 6.98304 10.6874 6.98334C10.6062 6.98334 10.5754 6.94722 10.5832 6.8495C10.6023 6.55326 10.6426 5.97506 10.5958 5.43494C10.5317 4.69182 10.292 4.32362 10.0078 3.99798C9.87036 3.84006 9.23196 3.16162 7.99996 3.16162C6.76796 3.16162 6.1304 3.84006 5.99376 3.99602C5.70872 4.32166 5.46932 4.68986 5.40576 5.43298C5.359 5.9731 5.401 6.55102 5.41836 6.84754C5.42396 6.9405 5.3954 6.98138 5.3142 6.98138C5.2953 6.98106 5.2765 6.97852 5.2582 6.97382C5.10616 6.93714 4.84296 6.80134 4.57192 6.74254C4.5277 6.73263 4.48254 6.72756 4.43724 6.72742C4.29304 6.72742 4.15724 6.78342 4.10124 6.92902C4.02116 7.1407 4.12924 7.3129 4.37676 7.48538C4.526 7.58954 5.06388 7.92218 5.18512 8.03446C5.31056 8.15038 5.29432 8.23998 5.27976 8.35394C5.26772 8.44942 4.99696 9.71782 3.30016 10.5379C3.20076 10.5861 3.03164 10.688 3.32984 10.8527C3.798 11.1114 4.10964 11.0837 4.35184 11.2396C4.55736 11.3721 4.43584 11.6577 4.58536 11.7607C4.76904 11.8875 5.31196 11.7517 6.01336 11.9833C6.60136 12.1771 6.95864 12.7245 8.00136 12.7245C9.04408 12.7245 9.41172 12.1745 9.98936 11.9833C10.6894 11.7517 11.2334 11.8875 11.4174 11.7607C11.5666 11.6577 11.4454 11.3721 11.6509 11.2396C11.8931 11.0837 12.2044 11.1114 12.6729 10.8527C12.9705 10.69 12.8014 10.5881 12.702 10.5399Z" fill="white"/>
      <path d="M13.4404 10.4431C13.3642 10.2359 13.2192 10.1251 13.054 10.0332C13.0229 10.015 12.9943 10.0005 12.97 9.98927C12.9207 9.96379 12.8703 9.93915 12.8202 9.91311C12.3053 9.64011 11.9032 9.29571 11.6243 8.88747C11.5451 8.77254 11.4764 8.65072 11.4191 8.52347C11.3953 8.45543 11.3964 8.41679 11.4135 8.38151C11.4304 8.35433 11.4528 8.33097 11.4793 8.31291C11.5677 8.25439 11.659 8.19503 11.7209 8.15499C11.8312 8.08359 11.9186 8.02703 11.9749 7.98699C12.1863 7.83915 12.3341 7.68207 12.4265 7.50651C12.491 7.38522 12.5286 7.25146 12.5367 7.11434C12.5449 6.97723 12.5234 6.83996 12.4738 6.71187C12.3338 6.34339 11.9858 6.11463 11.5641 6.11463C11.4752 6.11454 11.3865 6.12393 11.2995 6.14263C11.2763 6.14767 11.253 6.15299 11.2303 6.15887C11.2343 5.90687 11.2287 5.64087 11.2063 5.37907C11.1267 4.45871 10.8045 3.97627 10.4685 3.59155C10.2533 3.35047 9.99985 3.1465 9.71834 2.98787C9.20846 2.69667 8.63026 2.54883 7.99998 2.54883C7.3697 2.54883 6.7943 2.69667 6.28386 2.98787C6.00165 3.14655 5.7477 3.35092 5.53234 3.59267C5.19634 3.97739 4.87406 4.46067 4.79454 5.38019C4.77214 5.64199 4.76654 5.90939 4.77018 6.15999C4.7475 6.15411 4.72454 6.14879 4.7013 6.14375C4.61434 6.12505 4.52564 6.11566 4.4367 6.11575C4.01474 6.11575 3.66614 6.34451 3.5267 6.71299C3.47686 6.84113 3.45518 6.9785 3.46316 7.11576C3.47113 7.25302 3.50856 7.38696 3.5729 7.50847C3.66558 7.68403 3.81342 7.84111 4.02482 7.98895C4.08082 8.02815 4.16846 8.08471 4.27878 8.15695C4.33842 8.19559 4.4255 8.25215 4.5109 8.30871C4.54078 8.32803 4.56617 8.35352 4.58538 8.38347C4.6033 8.42015 4.60386 8.45963 4.57726 8.53243C4.52068 8.657 4.45312 8.77629 4.37538 8.88887C4.10266 9.28787 3.71234 9.62611 3.21394 9.89687C2.9499 10.0369 2.6755 10.1304 2.55958 10.4454C2.47222 10.6831 2.52934 10.9536 2.75138 11.1815C2.83287 11.2666 2.92738 11.3381 3.03138 11.3935C3.24776 11.5124 3.47785 11.6044 3.71654 11.6676C3.76579 11.6803 3.81256 11.7012 3.85486 11.7295C3.93578 11.8003 3.9243 11.907 4.0321 12.0632C4.08621 12.144 4.15497 12.2139 4.23482 12.2693C4.46106 12.4255 4.7153 12.4353 4.98466 12.4457C5.22798 12.4549 5.50378 12.4656 5.81878 12.5695C5.94926 12.6126 6.08478 12.696 6.24186 12.7935C6.61902 13.0253 7.13534 13.3425 7.99942 13.3425C8.8635 13.3425 9.38346 13.0236 9.76342 12.7909C9.91938 12.6952 10.0541 12.6126 10.1809 12.5706C10.4959 12.4664 10.7717 12.4561 11.015 12.4468C11.2844 12.4365 11.5386 12.4267 11.7649 12.2704C11.8594 12.2045 11.9382 12.1184 11.9956 12.0184C12.0731 11.8865 12.0712 11.7944 12.144 11.73C12.1837 11.7031 12.2276 11.6831 12.2739 11.6707C12.5158 11.6073 12.7491 11.5144 12.9683 11.394C13.0788 11.3348 13.1782 11.2569 13.2623 11.1639L13.2651 11.1605C13.4734 10.9376 13.5258 10.675 13.4404 10.4431ZM12.6723 10.8559C12.2039 11.1146 11.8925 11.0869 11.6503 11.2428C11.4445 11.3753 11.5663 11.6609 11.4168 11.7639C11.2331 11.8907 10.6902 11.7549 9.98882 11.9865C9.41034 12.1777 9.0413 12.7277 8.00082 12.7277C6.96034 12.7277 6.59998 12.1789 6.01198 11.9851C5.31198 11.7535 4.76794 11.8893 4.58398 11.7625C4.43474 11.6595 4.55598 11.3739 4.35046 11.2414C4.10798 11.0855 3.79662 11.1132 3.32846 10.8559C3.03026 10.6912 3.19938 10.5893 3.29878 10.5411C4.99558 9.71963 5.26634 8.45123 5.27838 8.35715C5.29294 8.24319 5.30918 8.15359 5.18374 8.03767C5.0625 7.92567 4.52462 7.59275 4.37538 7.48859C4.12842 7.31611 4.01978 7.14391 4.09986 6.93223C4.15586 6.78579 4.2925 6.73063 4.43586 6.73063C4.48117 6.73077 4.52633 6.73584 4.57054 6.74575C4.84158 6.80455 5.10478 6.94035 5.25682 6.97703C5.27512 6.98173 5.29392 6.98427 5.31282 6.98459C5.39402 6.98459 5.42258 6.94371 5.41698 6.85075C5.39962 6.55423 5.35762 5.97631 5.40438 5.43619C5.4685 4.69307 5.7079 4.32487 5.99238 3.99923C6.12902 3.84271 6.77106 3.16427 7.99886 3.16427C9.22666 3.16427 9.87038 3.83991 10.007 3.99587C10.2918 4.32151 10.5315 4.68971 10.595 5.43283C10.6418 5.97295 10.6015 6.55115 10.5824 6.84739C10.576 6.94511 10.6054 6.98123 10.6866 6.98123C10.7055 6.98093 10.7243 6.97839 10.7426 6.97367C10.8949 6.93699 11.1581 6.80119 11.4291 6.74239C11.4733 6.73248 11.5185 6.72741 11.5638 6.72727C11.708 6.72727 11.8438 6.78327 11.8998 6.92887C11.9799 7.14055 11.8718 7.31275 11.6246 7.48523C11.4753 7.58939 10.9375 7.92203 10.8162 8.03431C10.6905 8.15023 10.707 8.23983 10.7216 8.35379C10.7336 8.44927 11.0041 9.71767 12.7012 10.5378C12.8014 10.5879 12.9705 10.6898 12.6723 10.8559Z" fill="black"/>
    </svg>
  );
}

function PlatformLogo({ platform, darkMode }: { platform: "instagram" | "tiktok" | "youtube" | "snapchat"; darkMode?: boolean }) {
  switch (platform) {
    case "youtube": return <YouTubeLogo />;
    case "instagram": return <InstagramLogo darkMode={darkMode} />;
    case "tiktok": return <TikTokLogo darkMode={darkMode} />;
    case "snapchat": return <SnapchatLogo />;
  }
}

// Metric row with dark mode
function MetricRow({ icon, label, value, darkMode }: { icon: React.ReactNode; label: string; value: string; darkMode?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-[62px]">
      <div className="flex items-center gap-[8px] flex-1">
        <div className="size-[16px] shrink-0">{icon}</div>
        <span className={`font-hanken-medium text-[14px] leading-[20px] ${darkMode ? 'text-[#fafafa]' : 'text-[#45556c]'}`}>{label}</span>
      </div>
      <span className={`font-hanken-medium text-[16px] leading-[24px] ${darkMode ? 'text-[#fafafa]' : 'text-[#1d293d]'}`}>{value}</span>
    </div>
  );
}

// Sub metric row with dark mode
function SubMetricRow({ icon, label, value, darkMode }: { icon: React.ReactNode; label: string; value: string; darkMode?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-[62px] px-[4px]">
      <div className="flex items-center gap-[8px] flex-1">
        <div className="size-[16px] shrink-0">{icon}</div>
        <span className={`font-hanken-medium text-[14px] leading-[20px] ${darkMode ? 'text-[#fafafa]' : 'text-[#45556c]'}`}>{label}</span>
      </div>
      <span className={`font-hanken-medium text-[16px] leading-[24px] ${darkMode ? 'text-[#fafafa]' : 'text-[#1d293d]'}`}>{value}</span>
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
  hasNext = true,
  hasPrevious = true,
}: ContentDetailModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [captionExpanded, setCaptionExpanded] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSimilarPosts, setShowSimilarPosts] = useState(false);
  const [similarPostsState, setSimilarPostsState] = useState<'loading' | 'skeleton' | 'loaded'>('loading');

  // Reset video when content changes (navigation)
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen, content?.videoUrl]);

  // Detect video orientation
  const handleVideoMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      setIsLandscape(videoWidth > videoHeight);
    }
  };

  // Toggle dark mode on video click
  const handleVideoClick = () => {
    setDarkMode(!darkMode);
  };

  // Handle similar posts button click
  const handleSimilarPostsClick = () => {
    if (showSimilarPosts) {
      setShowSimilarPosts(false);
      return;
    }
    setShowSimilarPosts(true);
    setSimilarPostsState('loading');
    // Show loading spinner for 800ms
    setTimeout(() => {
      setSimilarPostsState('skeleton');
      // Show skeleton for 600ms
      setTimeout(() => {
        setSimilarPostsState('loaded');
      }, 600);
    }, 800);
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowUp" && hasPrevious) {
        e.preventDefault();
        onPrevious?.();
      }
      if (e.key === "ArrowDown" && hasNext) {
        e.preventDefault();
        onNext?.();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeydown);
      return () => document.removeEventListener("keydown", handleKeydown);
    }
  }, [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious]);

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`w-full h-full flex ${darkMode ? 'bg-[#171717]' : 'bg-white'}`}
            style={{ boxShadow: darkMode ? '0px 25px 50px 0px rgba(0,0,0,0.25)' : undefined }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left side: Close button + Video + Nav arrows */}
            <div className={`h-full flex justify-end ${isLandscape ? 'flex-1' : 'w-1/2'}`}>
              {/* Close button - top left */}
              <div className="absolute top-[8px] left-[12px] z-10">
                <button
                  onClick={onClose}
                  className={`size-[36px] flex items-center justify-center rounded transition-colors ${
                    darkMode ? 'hover:bg-white/10' : 'hover:bg-[#f1f5f9]'
                  }`}
                >
                  <CloseIcon darkMode={darkMode} />
                </button>
              </div>

              {/* Video section - click to toggle dark mode */}
              <div className="h-full relative flex items-center justify-end">
                <video
                  key={content.videoUrl}
                  ref={videoRef}
                  src={content.videoUrl}
                  className={`object-contain cursor-pointer ${isLandscape ? 'w-full h-auto max-h-full' : 'h-full w-auto'}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={handleVideoMetadata}
                  onClick={handleVideoClick}
                />
              </div>

              {/* Navigation arrows */}
              <div className="flex flex-col items-center justify-center gap-[8px] px-[12px] shrink-0">
                <button
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  className={`size-[36px] flex items-center justify-center rounded transition-colors ${
                    hasPrevious
                      ? darkMode ? "hover:bg-white/10 cursor-pointer" : "hover:bg-[#f1f5f9] cursor-pointer"
                      : "opacity-30 cursor-not-allowed"
                  }`}
                >
                  <ArrowUpIcon darkMode={darkMode} />
                </button>
                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  className={`size-[36px] flex items-center justify-center rounded transition-colors ${
                    hasNext
                      ? darkMode ? "hover:bg-white/10 cursor-pointer" : "hover:bg-[#f1f5f9] cursor-pointer"
                      : "opacity-30 cursor-not-allowed"
                  }`}
                >
                  <ArrowDownIcon darkMode={darkMode} />
                </button>
              </div>
            </div>

            {/* Right side: Content */}
            <div className={`h-full flex justify-start ${isLandscape ? 'w-[600px] min-w-[600px] shrink-0' : 'w-1/2'}`}>
              <div className="w-[700px] max-w-full shrink-0 flex flex-col justify-between h-full py-[24px] px-[24px]">
                <div className="flex flex-col gap-[12px] flex-1 overflow-y-auto">
                  {/* Talent / Creator + Platform */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                      <img
                        src={content.creator.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(content.creator.name)}&background=1447e6&color=fff`}
                        alt={content.creator.name}
                        className="size-[32px] rounded-full object-cover"
                      />
                      <button
                        onClick={() => onCreatorClick?.(content.creator.id)}
                        className={`font-hanken-medium text-[16px] leading-[24px] hover:text-[#1447e6] transition-colors ${
                          darkMode ? 'text-[#fafafa]' : 'text-[#1d293d]'
                        }`}
                      >
                        {content.creator.name}
                      </button>
                    </div>
                    <div className={`flex items-center gap-[8px] ${darkMode ? 'opacity-80' : ''}`}>
                      <PlatformLogo platform={content.platform} darkMode={darkMode} />
                      <span className={`font-hanken-medium text-[14px] leading-[20px] ${darkMode ? 'text-[#fafafa]' : 'text-[#45556c]'}`}>
                        {platformName}
                      </span>
                      <div className="size-[16px]">
                        <ExternalLinkIcon darkMode={darkMode} />
                      </div>
                    </div>
                  </div>

                  {/* Analysis Section */}
                  <div className="flex flex-col gap-[8px] py-[12px]">
                    {/* Header row */}
                    <div className="flex items-center gap-[8px]">
                      <span className={`font-hanken-light text-[14px] leading-[20px] uppercase ${darkMode ? 'text-[#a1a1a1]' : 'text-[#90a1b9]'}`}>
                        Analysis
                      </span>
                    </div>

                    {/* Analysis content */}
                    <div className={`rounded-[6px] p-[12px] flex gap-[12px] ${darkMode ? 'bg-[#27272a]' : 'bg-[#f8fafc]'}`}>
                      {/* Score Badge */}
                      <div
                        className="w-[56px] h-[56px] rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: content.score >= 90
                            ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                            : content.score >= 80
                              ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                              : content.score >= 70
                                ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                                : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
                        }}
                      >
                        <span className="font-hanken-medium text-[18px] leading-[24px] text-white">
                          {content.score}
                        </span>
                      </div>

                      {/* Analysis text */}
                      <div className="flex flex-col gap-[4px] flex-1">
                        <span className={`font-hanken-medium text-[14px] leading-[20px] ${darkMode ? 'text-[#fafafa]' : 'text-[#1d293d]'}`}>
                          {content.score >= 90 ? 'Excellent' : content.score >= 80 ? 'Great' : content.score >= 70 ? 'Good' : 'Fair'} match
                          <span className={`ml-[8px] font-hanken-light text-[12px] ${darkMode ? 'text-[#a1a1a1]' : 'text-[#90a1b9]'}`}>
                            ({content.score}/100)
                          </span>
                        </span>
                        <p className={`font-hanken-light text-[13px] leading-[18px] ${darkMode ? 'text-[#a1a1a1]' : 'text-[#45556c]'}`}>
                          {content.score >= 90
                            ? 'Outstanding performance metrics. High engagement and reach indicate strong audience resonance. Perfect for brand partnerships.'
                            : content.score >= 80
                              ? 'Strong engagement and reach metrics. Content performs well with target audience. Good fit for campaigns.'
                              : content.score >= 70
                                ? 'Solid performance with room for improvement. Engagement is above average for the category.'
                                : 'Moderate performance. May need optimization or different targeting approach.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Section */}
                  <div className={`flex flex-col gap-[8px] py-[12px] border-b ${darkMode ? 'border-[#282828]' : 'border-[#e2e8f0]'}`}>
                    {/* Header row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <span className={`font-hanken-light text-[14px] leading-[20px] uppercase ${darkMode ? 'text-[#a1a1a1]' : 'text-[#90a1b9]'}`}>
                          {platformName} Metrics
                        </span>
                        <InfoIcon darkMode={darkMode} />
                      </div>
                      <span className={`font-hanken-medium text-[12px] leading-[16px] ${darkMode ? 'text-[#a1a1a1]' : 'text-[#90a1b9]'}`}>
                        Updated {formatTimeAgo(content.postedAt)}
                      </span>
                    </div>

                    {/* Metrics box */}
                    <div className={`rounded-[6px] p-[12px] flex flex-col gap-[8px] ${darkMode ? 'bg-[#27272a]' : 'bg-[#f8fafc]'}`}>
                      <MetricRow icon={<ViewsIcon darkMode={darkMode} />} label="Views" value={formatNumber(content.views)} darkMode={darkMode} />
                      <MetricRow icon={<EngagementsIcon darkMode={darkMode} />} label="Engagements" value={formatNumber(content.engagements)} darkMode={darkMode} />

                      {/* Engagement breakdown */}
                      <div className={`border rounded p-[8px] flex flex-col gap-[8px] ${darkMode ? 'border-[#404040]' : 'border-[#e2e8f0]'}`}>
                        <SubMetricRow icon={<LikesIcon darkMode={darkMode} />} label="Likes" value={formatNumber(likes)} darkMode={darkMode} />
                        <SubMetricRow icon={<CommentsIcon darkMode={darkMode} />} label="Comments" value={formatNumber(comments)} darkMode={darkMode} />
                        <SubMetricRow icon={<SharesIcon darkMode={darkMode} />} label="Shares" value={formatNumber(shares)} darkMode={darkMode} />
                      </div>

                      <MetricRow icon={<HeartIcon darkMode={darkMode} />} label="View engagement rate" value={formatPercent(content.viewEngRate)} darkMode={darkMode} />
                    </div>

                    {/* Posted date */}
                    <span className={`font-hanken-medium text-[14px] leading-[20px] ${darkMode ? 'text-[#a1a1a1]' : 'text-[#90a1b9]'}`}>
                      Posted {formatTimeAgo(content.postedAt)}
                    </span>
                  </div>

                  {/* Caption Section */}
                  <div className="flex flex-col pt-[12px]">
                    <div className="flex items-center">
                      <div className="opacity-50">
                        <QuoteLeftIcon darkMode={darkMode} />
                      </div>
                    </div>
                    <p className={`font-hanken-medium text-[14px] leading-[20px] whitespace-pre-wrap ${darkMode ? 'text-[#fafafa]' : 'text-[#45556c]'}`}>
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
                        <QuoteRightIcon darkMode={darkMode} />
                      </div>
                    </div>
                  </div>

                  {/* Similar Posts Section */}
                  <AnimatePresence>
                    {showSimilarPosts && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`flex flex-col gap-[8px] py-[12px] border-t ${darkMode ? 'border-[#282828]' : 'border-[#e2e8f0]'}`}
                      >
                        {/* Header row - same style as Metrics */}
                        <div className="flex items-center gap-[8px]">
                          <span className={`font-hanken-light text-[14px] leading-[20px] uppercase ${darkMode ? 'text-[#a1a1a1]' : 'text-[#90a1b9]'}`}>
                            Similar Posts
                          </span>
                        </div>

                        {/* Content area */}
                        <div className="flex gap-[8px] overflow-x-auto">
                          {similarPostsState === 'loading' && (
                            <div className="flex items-center justify-center w-full py-[24px]">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className={`w-[24px] h-[24px] border-2 border-t-transparent rounded-full ${darkMode ? 'border-[#fafafa]' : 'border-[#1447e6]'}`}
                              />
                            </div>
                          )}

                          {similarPostsState === 'skeleton' && (
                            <>
                              {SIMILAR_POST_INDICES.map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`w-[100px] h-[178px] rounded-[6px] shrink-0 animate-pulse ${darkMode ? 'bg-[#27272a]' : 'bg-[#e2e8f0]'}`}
                                />
                              ))}
                            </>
                          )}

                          {similarPostsState === 'loaded' && (
                            <>
                              {SIMILAR_POST_INDICES.map((videoIndex, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                                  className="w-[100px] h-[178px] rounded-[6px] overflow-hidden shrink-0"
                                >
                                  <video
                                    src={nikeVideos[videoIndex]}
                                    className="w-full h-full object-cover"
                                    muted
                                    loop
                                    playsInline
                                    onMouseEnter={(e) => e.currentTarget.play()}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.pause();
                                      e.currentTarget.currentTime = 0;
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons */}
                <div className={`flex items-center gap-[8px] pt-[16px] shrink-0 ${darkMode ? 'bg-[#18181b]' : 'bg-white'}`}>
                  <button
                    onClick={onSaveForLater}
                    className={`flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded border font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] transition-colors ${
                      darkMode
                        ? 'border-[#343434] bg-[rgba(226,232,240,0.05)] text-[#fafafa] hover:bg-[rgba(226,232,240,0.1)]'
                        : 'border-[#e2e8f0] bg-white text-[#1d293d] hover:bg-[#f8fafc]'
                    }`}
                    style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
                  >
                    <div className="size-[16px] shrink-0"><BookmarkIcon darkMode={darkMode} /></div>
                    Save for later
                  </button>
                  <button
                    onClick={handleSimilarPostsClick}
                    className={`flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded border font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] transition-colors ${
                      darkMode
                        ? showSimilarPosts
                          ? 'border-[#1447e6] bg-[rgba(20,71,230,0.1)] text-[#fafafa]'
                          : 'border-[#343434] bg-[rgba(226,232,240,0.05)] text-[#fafafa] hover:bg-[rgba(226,232,240,0.1)]'
                        : showSimilarPosts
                          ? 'border-[#1447e6] bg-[rgba(20,71,230,0.05)] text-[#1d293d]'
                          : 'border-[#e2e8f0] bg-white text-[#1d293d] hover:bg-[#f8fafc]'
                    }`}
                    style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
                  >
                    <div className="size-[16px] shrink-0"><SimilarPostsIcon darkMode={darkMode} /></div>
                    Similar posts
                  </button>
                  <button
                    onClick={onDownloadPdf}
                    className={`flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded border font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] transition-colors ${
                      darkMode
                        ? 'border-[#343434] bg-[rgba(226,232,240,0.05)] text-[#fafafa] hover:bg-[rgba(226,232,240,0.1)]'
                        : 'border-[#e2e8f0] bg-white text-[#1d293d] hover:bg-[#f8fafc]'
                    }`}
                    style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)" }}
                  >
                    <div className="size-[16px] shrink-0"><PdfIcon /></div>
                    Download pdf
                  </button>
                  <button
                    onClick={onShare}
                    className="flex-1 h-[32px] flex items-center justify-center gap-[8px] px-[12px] py-[8px] rounded bg-[#1447e6] text-white font-['Geist',sans-serif] font-medium text-[12px] leading-[16px] hover:bg-[#1038b8] transition-colors"
                  >
                    <div className="size-[16px] shrink-0"><ShareIcon /></div>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

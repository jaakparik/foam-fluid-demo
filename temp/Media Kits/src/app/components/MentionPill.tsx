import { useState } from "react";
import { CloseIconSmall } from "./icons/CloseIconSmall";
import { BrandStarIcon } from "./icons/BrandStarIcon";
import { MediaKitIconSmall } from "./icons/MediaKitIconSmall";

interface MentionPillProps {
  name: string;
  avatarUrl?: string;
  specialType?: 'list' | 'mediapack' | 'content' | 'brand';
  onRemove: () => void;
  isDark: boolean;
}

// Icon components for special mentions (small versions for pills)
function ListIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 7h6M5 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MentionPill({ name, avatarUrl, specialType, onRemove }: MentionPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="content-stretch flex gap-[4px] items-center px-[2px] py-0 relative rounded-[4px] h-[20px] transition-colors"
      style={{
        background: isHovered 
          ? 'var(--mention-pill-bg-hover)' 
          : 'var(--mention-pill-bg-default)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        aria-hidden="true" 
        className="absolute inset-[-1px] pointer-events-none rounded-[5px] transition-colors" 
        style={{
          border: isHovered 
            ? '1px solid var(--mention-pill-border-hover)' 
            : '1px solid var(--mention-pill-border-default)',
        }}
      />
      
      {/* Avatar or Icon */}
      {avatarUrl ? (
        <div className="h-[16px] relative rounded-[2px] shrink-0 w-[15px]">
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" 
            src={avatarUrl}
            style={{ objectPosition: '50% 50%' }}
          />
        </div>
      ) : specialType ? (
        <div 
          className="h-[16px] w-[15px] flex items-center justify-center shrink-0"
          style={{ color: 'var(--mention-pill-text)' }}
        >
          {specialType === 'list' && <ListIcon />}
          {specialType === 'mediapack' && <MediaKitIconSmall />}
          {specialType === 'content' && <ContentIcon />}
          {specialType === 'brand' && <BrandStarIcon />}
        </div>
      ) : null}
      
      {/* Name */}
      <p 
        className="font-medium leading-[20px] relative shrink-0 text-[12px] text-nowrap"
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          color: 'var(--mention-pill-text)',
          paddingLeft: (avatarUrl || specialType) ? '0' : '4px',
          paddingRight: '0',
        }}
      >
        {name}
      </p>
      
      {/* Close button */}
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onRemove();
        }}
        className="shrink-0"
        style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        <CloseIconSmall />
      </button>
    </div>
  );
}
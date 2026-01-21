import { Talent } from "../data/talents";
import { specialMentions, type SpecialMention } from "../data/specialMentions";
import { MediaPacksIcon } from "./icons/MediaPacksIcon";
import { BrandStarIcon } from "./icons/BrandStarIcon";
import { PicturesIcon } from "./icons/PicturesIcon";
import { ListIcon as SystemListIcon } from "./icons/ListIcon";

interface TalentPickerProps {
  talents: Talent[];
  specialMentions?: SpecialMention[];
  onSelect: (talent: Talent) => void;
  onSelectSpecial?: (special: SpecialMention) => void;
  isDark: boolean;
  position: { top: number; left: number };
  highlightedIndex: number;
  isLoadingTalents?: boolean;
}

function getSpecialMentionIcon(type: string, isDark: boolean) {
  switch (type) {
    case 'list':
      return <SystemListIcon isDark={isDark} isActive={false} />;
    case 'mediapack':
      return <MediaPacksIcon isDark={isDark} isActive={false} />;
    case 'content':
      return <PicturesIcon isDark={isDark} isActive={false} />;
    case 'brand':
      return <BrandStarIcon isDark={isDark} isActive={false} />;
    default:
      return <SystemListIcon isDark={isDark} isActive={false} />;
  }
}

export function TalentPicker({ talents, specialMentions, onSelect, onSelectSpecial, isDark, position, highlightedIndex, isLoadingTalents }: TalentPickerProps) {
  // Combine special mentions and talents
  const allItems = [...(specialMentions || []), ...talents];
  
  if (allItems.length === 0 && !isLoadingTalents) return null;

  // Render skeleton items
  const renderSkeletonItem = (index: number) => (
    <div
      key={`skeleton-${index}`}
      className="w-full flex items-center gap-[12px] px-[12px] py-[8px]"
    >
      <div
        className="size-[32px] shrink-0 rounded-[8px]"
        style={{
          background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />
      <div className="flex flex-col gap-[4px] flex-1 min-w-0">
        <div
          className="h-[13px] rounded-[4px]"
          style={{
            width: '60%',
            background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
        <div
          className="h-[12px] rounded-[4px]"
          style={{
            width: '40%',
            background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
      </div>
      <div
        className="h-[12px] w-[40px] shrink-0 rounded-[4px]"
        style={{
          background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}
      />
    </div>
  );

  return (
    <div
      className="absolute z-50 rounded-[8px] overflow-hidden shadow-lg"
      style={{
        top: position.top,
        left: position.left,
        width: '320px',
        background: isDark ? '#1C2128' : '#FFFFFF',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(21, 25, 30, 0.08)',
        boxShadow: isDark 
          ? '0px 4px 16px rgba(0, 0, 0, 0.4)'
          : '0px 4px 16px rgba(21, 25, 30, 0.12)',
      }}
    >
      {/* Always show special mentions */}
      {specialMentions && specialMentions.map((item, index) => {
        const isHighlighted = index === highlightedIndex;
        
        return (
          <button
            key={item.id}
            onMouseDown={(e) => {
              e.preventDefault();
              if (onSelectSpecial) {
                onSelectSpecial(item);
              }
            }}
            className="w-full flex items-center gap-[12px] px-[12px] py-[8px] cursor-pointer transition-colors"
            style={{
              background: isHighlighted 
                ? (isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)') 
                : 'transparent',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark 
                ? 'rgba(255, 255, 255, 0.06)' 
                : 'rgba(21, 25, 30, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isHighlighted
                ? (isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)')
                : 'transparent';
            }}
          >
            <div
              className="size-[32px] shrink-0 rounded-[8px] flex items-center justify-center"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)',
                color: isDark ? 'rgba(243, 245, 246, 0.6)' : 'rgba(21, 25, 30, 0.6)',
              }}
            >
              {getSpecialMentionIcon(item.type, isDark)}
            </div>
            <div className="flex flex-col items-start min-w-0 flex-1">
              <div
                className="text-[13px] font-medium truncate w-full text-left"
                style={{
                  color: isDark ? '#F3F5F6' : '#15191E',
                }}
              >
                {item.name}
              </div>
            </div>
          </button>
        );
      })}
      
      {/* Show skeleton or actual talents */}
      {isLoadingTalents ? (
        <>
          {renderSkeletonItem(0)}
          {renderSkeletonItem(1)}
          {renderSkeletonItem(2)}
          {renderSkeletonItem(3)}
          {renderSkeletonItem(4)}
        </>
      ) : (
        talents.map((item, index) => {
          const actualIndex = (specialMentions?.length || 0) + index;
          const isHighlighted = actualIndex === highlightedIndex;
          
          return (
            <button
              key={item.id}
              onMouseDown={(e) => {
                e.preventDefault();
                onSelect(item);
              }}
              className="w-full flex items-center gap-[12px] px-[12px] py-[8px] cursor-pointer transition-colors"
              style={{
                background: isHighlighted 
                  ? (isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)') 
                  : 'transparent',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark 
                  ? 'rgba(255, 255, 255, 0.06)' 
                  : 'rgba(21, 25, 30, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isHighlighted
                  ? (isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(21, 25, 30, 0.04)')
                  : 'transparent';
              }}
            >
              <img
                src={item.avatarImage}
                alt={item.name}
                className="size-[32px] object-cover shrink-0"
                style={{
                  borderRadius: '8px',
                }}
              />
              <div className="flex flex-col items-start min-w-0 flex-1">
                <div
                  className="text-[13px] font-medium truncate w-full text-left"
                  style={{
                    color: isDark ? '#F3F5F6' : '#15191E',
                  }}
                >
                  {item.name}
                </div>
                <div
                  className="text-[12px] truncate w-full text-left"
                  style={{
                    color: isDark ? 'rgba(243, 245, 246, 0.6)' : 'rgba(21, 25, 30, 0.6)',
                  }}
                >
                  {item.aliases.instagram}
                </div>
              </div>
              <div
                className="text-[12px] shrink-0"
                style={{
                  color: isDark ? 'rgba(243, 245, 246, 0.5)' : 'rgba(21, 25, 30, 0.5)',
                }}
              >
                {item.followers.instagram}
              </div>
            </button>
          );
        })
      )}
    </div>
  );
}
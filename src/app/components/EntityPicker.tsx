import { type Talent } from "../data/talents";
import { type List, type MediaKit } from "../data/mentionableEntities";
import { ListIcon } from "./icons/ListIcon";
import { MediaPacksIcon } from "./icons/MediaPacksIcon";

interface EntityPickerProps {
  talents?: Talent[];
  lists?: List[];
  mediaKits?: MediaKit[];
  onSelectTalent?: (talent: Talent) => void;
  onSelectList?: (list: List) => void;
  onSelectMediaKit?: (mediaKit: MediaKit) => void;
  isDark: boolean;
  position: { top: number; left: number };
  highlightedIndex: number;
}

export function EntityPicker({
  talents = [],
  lists = [],
  mediaKits = [],
  onSelectTalent,
  onSelectList,
  onSelectMediaKit,
  isDark,
  position,
  highlightedIndex,
}: EntityPickerProps) {
  // Combine all entities into a flat list
  const allEntities: Array<
    | { type: "talent"; data: Talent }
    | { type: "list"; data: List }
    | { type: "mediakit"; data: MediaKit }
  > = [
    ...talents.map((t) => ({ type: "talent" as const, data: t })),
    ...lists.map((l) => ({ type: "list" as const, data: l })),
    ...mediaKits.map((mk) => ({ type: "mediakit" as const, data: mk })),
  ];

  if (allEntities.length === 0) return null;

  const handleSelect = (entity: typeof allEntities[0]) => {
    if (entity.type === "talent" && onSelectTalent) {
      onSelectTalent(entity.data);
    } else if (entity.type === "list" && onSelectList) {
      onSelectList(entity.data);
    } else if (entity.type === "mediakit" && onSelectMediaKit) {
      onSelectMediaKit(entity.data);
    }
  };

  return (
    <div
      className="absolute rounded-[12px] shadow-lg overflow-hidden z-50 w-full"
      style={{
        top: position.top,
        left: position.left,
        background: isDark ? "#1c2128" : "#ffffff",
        border: isDark
          ? "1px solid #30363d"
          : "1px solid rgba(28, 33, 40, 0.10)",
      }}
      onMouseDown={(e) => e.preventDefault()} // Prevent input from losing focus
    >
      <div className="flex flex-col py-[4px]">
        {allEntities.map((entity, index) => {
          const isHighlighted = index === highlightedIndex;

          return (
            <button
              key={
                entity.type === "talent"
                  ? entity.data.id
                  : entity.type === "list"
                  ? entity.data.id
                  : entity.data.id
              }
              className="flex items-center gap-[12px] px-[12px] py-[8px] cursor-pointer transition-colors text-left"
              style={{
                background: isHighlighted
                  ? isDark
                    ? "#30363d"
                    : "#f6f8fa"
                  : "transparent",
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelect(entity);
              }}
            >
              {entity.type === "talent" && (
                <>
                  <img
                    src={entity.data.avatarImage}
                    alt={entity.data.name}
                    className="size-[32px] rounded-[4px] object-cover shrink-0"
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] truncate"
                      style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
                    >
                      {entity.data.name}
                    </p>
                    <p
                      className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[16px] text-[#54657d]"
                    >
                      {entity.data.aliases.instagram}
                    </p>
                  </div>
                </>
              )}

              {entity.type === "list" && (
                <>
                  <div
                    className="size-[32px] rounded-[4px] flex items-center justify-center shrink-0"
                    style={{
                      background: isDark ? "#30363d" : "#f6f8fa",
                    }}
                  >
                    <div className="size-[20px]" style={{ color: '#54657d' }}>
                      <ListIcon isDark={isDark} isActive={false} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] truncate"
                      style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
                    >
                      {entity.data.name}
                    </p>
                    <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[16px] text-[#54657d]">
                      {entity.data.creatorCount} creators
                    </p>
                  </div>
                </>
              )}

              {entity.type === "mediakit" && (
                <>
                  <div
                    className="size-[32px] rounded-[4px] flex items-center justify-center shrink-0"
                    style={{
                      background: isDark ? "#30363d" : "#f6f8fa",
                    }}
                  >
                    <div className="size-[20px]" style={{ color: '#54657d' }}>
                      <MediaPacksIcon isDark={isDark} isActive={false} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <p
                      className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[14px] leading-[20px] truncate"
                      style={{ color: isDark ? "#f3f5f6" : "#15191e" }}
                    >
                      {entity.data.name}
                    </p>
                    <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light text-[12px] leading-[16px] text-[#54657d]">
                      Media Kit
                    </p>
                  </div>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
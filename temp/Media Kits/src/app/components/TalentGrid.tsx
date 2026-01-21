import { useState, useMemo } from "react";
import { talents, type Talent } from "../data/talents";
import { Checkbox } from "./Checkbox";
import { SortState } from "./SortDropdown";
import { useNavigate } from "react-router-dom";

interface TalentGridProps {
  isDark?: boolean;
  sortState?: SortState;
  quickFilter?: string;
}

export function TalentGrid({
  isDark = false,
  sortState,
  quickFilter,
}: TalentGridProps) {
  const [selectedTalents, setSelectedTalents] = useState<
    Set<number>
  >(new Set());

  const handleTalentSelect = (talentId: number) => {
    setSelectedTalents((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(talentId)) {
        newSet.delete(talentId);
      } else {
        newSet.add(talentId);
      }
      return newSet;
    });
  };

  const parseFollowerCount = (count: string) => {
    if (!count) return 0;
    const num = parseFloat(count);
    if (count.includes("M")) return num * 1000000;
    if (count.includes("K")) return num * 1000;
    return num;
  };

  const sortedTalents = useMemo(() => {
    if (!sortState) return talents;

    const { field, direction } = sortState;

    return [...talents].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      // Get the values to compare based on field
      switch (field) {
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "age":
          aValue = a.age;
          bValue = b.age;
          break;
        case "location":
          aValue = a.location.toLowerCase();
          bValue = b.location.toLowerCase();
          break;
        case "totalAudience":
          // Use the pre-calculated total field from followers
          aValue = parseFollowerCount(a.followers.total);
          bValue = parseFollowerCount(b.followers.total);
          break;
        case "instagram":
          aValue = parseFollowerCount(a.followers.instagram);
          bValue = parseFollowerCount(b.followers.instagram);
          break;
        case "tiktok":
          aValue = parseFollowerCount(a.followers.tiktok);
          bValue = parseFollowerCount(b.followers.tiktok);
          break;
        case "youtube":
          aValue = parseFollowerCount(a.followers.youtube);
          bValue = parseFollowerCount(b.followers.youtube);
          break;
        default:
          return 0;
      }

      // Compare values
      if (aValue < bValue) return direction === "asc" ? -1 : 1;
      if (aValue > bValue) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortState]);

  const filteredTalents = useMemo(() => {
    if (!quickFilter) return sortedTalents;

    return sortedTalents.filter((talent) =>
      talent.name
        .toLowerCase()
        .includes(quickFilter.toLowerCase()),
    );
  }, [quickFilter, sortedTalents]);

  return (
    <div className="w-full">
      <div className="grid gap-[12px] grid-cols-[repeat(auto-fill,minmax(120px,1fr))]">
        {filteredTalents.map((talent) => (
          <TalentCard
            key={talent.id}
            talent={talent}
            isSelected={selectedTalents.has(talent.id)}
            onSelect={() => handleTalentSelect(talent.id)}
            isDark={isDark}
          />
        ))}
      </div>
    </div>
  );
}

interface TalentCardProps {
  talent: Talent;
  isSelected: boolean;
  onSelect: () => void;
  isDark: boolean;
}

function TalentCard({
  talent,
  isSelected,
  onSelect,
  isDark,
}: TalentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/talent/${talent.id}`);
  };

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <div
      className="flex flex-col items-center gap-[8px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Avatar Container */}
      <div className="relative">
        <div className="w-[120px] h-[120px] overflow-hidden rounded-[8px]">
          <img
            src={talent.avatarImage}
            alt={talent.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Checkbox - appears on hover or when selected */}
        {(isHovered || isSelected) && (
          <div
            className="absolute top-[6px] right-[6px]"
            onClick={handleCheckboxClick}
          >
            <Checkbox
              checked={isSelected}
              size="large"
              customBg={
                isDark
                  ? "rgba(0, 0, 0, 0.8)"
                  : "rgba(255, 255, 255, 0.8)"
              }
            />
          </div>
        )}
      </div>

      {/* Text Container - Name and Total Audience */}
      <div className="flex flex-col items-center">
        {/* Name */}
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px] text-center"
          style={{ color: "var(--table-text-primary)" }}
        >
          {talent.name}
        </p>

        {/* Total Audience */}
        <p
          className="mono font-thin text-[12px] leading-[16px] text-center"
          style={{
            color: "var(--table-text-secondary)",
          }}
        >
          {talent.followers.total}
        </p>
      </div>
    </div>
  );
}
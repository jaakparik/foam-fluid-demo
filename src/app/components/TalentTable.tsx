import { talents, Talent } from "../data/talents";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TikTokIcon } from "./icons/TikTokIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";
import { SnapIcon } from "./icons/SnapIcon";
import { SortIcon } from "./icons/SortIcon";
import { MoreIcon } from "./icons/MoreIcon";
import { OptionsIcon } from "./icons/OptionsIcon";
import { Checkbox } from "./Checkbox";
import { Connections, ConnectionInfo } from "./Connections";
import { useState, useMemo, useRef, useEffect } from "react";
import { SortState } from "./SortDropdown";
import { useNavigate } from "react-router-dom";

interface TalentTableProps {
  isDark?: boolean;
  sortState?: SortState;
  onSortChange?: (sortState: SortState) => void;
  showEngagementRate?: boolean;
  quickFilter?: string;
  columnVisibility?: ColumnVisibility;
  refreshKey?: number;
  talentData?: Talent[];
  onRowHover?: (talentName: string | null) => void;
  selectedTalents?: Set<string>;
  onSelectionChange?: (selected: Set<string>) => void;
}

type ColumnKey =
  | "name"
  | "verticals"
  | "age"
  | "gender"
  | "location"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "snapchat"
  | "biography"
  | "links"
  | "status";

interface ColumnVisibility {
  [key: string]: boolean;
}

// Table Header Components
function TableHeaderCell() {
  return (
    <div
      className="content-stretch flex h-[32px] items-center justify-center px-[8px] py-[6px] shrink-0 w-[80px]"
      style={{
        background: "var(--table-header-bg)",
      }}
    ></div>
  );
}

function TableHeaderCellWithSort({
  label,
  width,
  centered = false,
  field,
  currentSort,
  onSort,
}: {
  label: string;
  width: string;
  centered?: boolean;
  field?: string;
  currentSort?: SortState;
  onSort?: (field: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (field && onSort) {
      onSort(field);
    }
  };

  return (
    <div
      className={`content-stretch flex gap-[2px] h-[32px] items-center px-[4px] py-[6px] relative shrink-0 cursor-pointer ${centered ? "justify-center" : ""}`}
      style={{
        width,
        background: "var(--table-header-bg)",
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className="nav-text-primary"
        style={{ color: "var(--table-header-text)" }}
      >
        {label}
      </p>
      <SortIcon opacity={isHovered ? 1 : 0.5} />
    </div>
  );
}

function TableHeaderCellNoSort({
  label,
  width,
}: {
  label: string;
  width: string;
}) {
  return (
    <div
      className="content-stretch flex h-[32px] items-center px-[4px] py-[6px] shrink-0"
      style={{
        width,
        background: "var(--table-header-bg)",
      }}
    >
      <p
        className="nav-text-primary"
        style={{ color: "var(--table-header-text)" }}
      >
        {label}
      </p>
    </div>
  );
}

function TableHeaderPlatform({
  icon,
  field,
  currentSort,
  onSort,
}: {
  icon: React.ReactNode;
  field?: string;
  currentSort?: SortState;
  onSort?: (field: string) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (field && onSort) {
      onSort(field);
    }
  };

  return (
    <div
      className="content-stretch flex gap-[2px] h-[32px] items-center justify-center px-[8px] py-[6px] relative shrink-0 w-[60px] cursor-pointer"
      style={{
        background: "var(--table-header-bg)",
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <SortIcon opacity={isHovered ? 1 : 0.5} />
    </div>
  );
}

// Column Visibility Dropdown
function ColumnVisibilityDropdown({
  columnVisibility,
  onToggleColumn,
  onClose,
}: {
  columnVisibility: ColumnVisibility;
  onToggleColumn: (column: ColumnKey) => void;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
  }, [onClose]);

  const columns: {
    key: ColumnKey;
    label: string;
    disabled?: boolean;
  }[] = [
    { key: "name", label: "Talent name", disabled: true },
    { key: "status", label: "Status" },
    { key: "biography", label: "Biography" },
    { key: "verticals", label: "Verticals" },
    { key: "age", label: "Age" },
    { key: "gender", label: "Gender" },
    { key: "location", label: "Location" },
    { key: "instagram", label: "Instagram" },
    { key: "tiktok", label: "TikTok" },
    { key: "youtube", label: "YouTube" },
    { key: "snapchat", label: "Snapchat" },
    { key: "links", label: "Links" },
    { key: "managers", label: "Managers" },
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-[48px] z-20 rounded-[8px] shadow-lg overflow-hidden"
      style={{
        background: "var(--dropdown-bg)",
        border: "1px solid var(--dropdown-border)",
        minWidth: "200px",
      }}
    >
      <div className="py-[4px]">
        {columns.map((column) => (
          <div
            key={column.key}
            className={`flex items-center gap-[4px] px-[12px] py-[4px] ${!column.disabled ? "cursor-pointer hover:bg-[var(--dropdown-hover)]" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              if (!column.disabled) {
                onToggleColumn(column.key);
              }
            }}
            style={{ opacity: column.disabled ? 0.5 : 1 }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Checkbox
                size="small"
                checked={columnVisibility[column.key]}
                onChange={() => {
                  if (!column.disabled) {
                    onToggleColumn(column.key);
                  }
                }}
                disabled={column.disabled}
              />
            </div>
            <p
              className="nav-text-primary text-sm"
              style={{ color: "var(--dropdown-text)" }}
            >
              {column.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Table Header Row
function HeaderContent({
  currentSort,
  onSort,
  isDark,
  columnVisibility,
  showEngagementRate,
}: {
  currentSort?: SortState;
  onSort?: (field: string) => void;
  isDark?: boolean;
  columnVisibility: ColumnVisibility;
  showEngagementRate?: boolean;
}) {
  const showTotalAudience =
    currentSort?.field === "totalAudience";

  return (
    <div className="sticky top-0 z-[5] content-stretch flex h-[32px] items-center relative shrink-0 w-full">
      <TableHeaderCell />
      {columnVisibility.name && (
        <TableHeaderCellWithSort
          label="Talent name"
          width="140px"
          field="name"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {showEngagementRate && (
        <div
          className="content-stretch flex gap-[4px] h-[32px] items-center justify-center px-[4px] py-[6px] relative shrink-0 w-[100px]"
          style={{
            background: "var(--table-header-bg)",
          }}
        >
          <div className="size-[16px] shrink-0">
            <InstagramIcon isDark={isDark} />
          </div>
          <p
            className="nav-text-primary text-nowrap"
            style={{ color: "var(--table-header-text)" }}
          >
            ENG rate
          </p>
        </div>
      )}
      {columnVisibility.status && (
        <TableHeaderCellNoSort label="Status" width="100px" />
      )}
      {showTotalAudience && (
        <TableHeaderCellWithSort
          label="Total aud."
          width="100px"
          centered
          field="totalAudience"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.biography && (
        <TableHeaderCellNoSort
          label="Biography"
          width="220px"
        />
      )}
      {columnVisibility.verticals && (
        <TableHeaderCellNoSort
          label="Verticals"
          width="220px"
        />
      )}
      {columnVisibility.age && (
        <TableHeaderCellWithSort
          label="Age"
          width="60px"
          centered
          field="age"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.gender && (
        <TableHeaderCellWithSort
          label="Gender"
          width="80px"
          centered
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.location && (
        <TableHeaderCellWithSort
          label="Location"
          width="150px"
          field="location"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.instagram && (
        <TableHeaderPlatform
          icon={<InstagramIcon isDark={isDark} />}
          field="instagram"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.tiktok && (
        <TableHeaderPlatform
          icon={<TikTokIcon isDark={isDark} />}
          field="tiktok"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.youtube && (
        <TableHeaderPlatform
          icon={<YouTubeIcon />}
          field="youtube"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.snapchat && (
        <TableHeaderPlatform
          icon={<SnapIcon />}
          field="snapchat"
          currentSort={currentSort}
          onSort={onSort}
        />
      )}
      {columnVisibility.links && (
        <TableHeaderCellNoSort label="Links" width="200px" />
      )}
      <div
        className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0"
        style={{
          background: "var(--table-header-bg)",
        }}
      ></div>
    </div>
  );
}

// Avatar Component
function Avatar({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]">
      <div className="relative rounded-[4px] shrink-0 size-[40px]">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <img
            alt=""
            className="size-full object-cover rounded-[inherit]"
            src={imageUrl}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none rounded-[4px]"
        />
      </div>
    </div>
  );
}

// Table Row Component
function TableRow({
  talent,
  isSelected,
  onToggle,
  columnVisibility,
  showTotalAudience,
  showEngagementRate,
  isDark,
  onHover,
}: {
  talent: (typeof talents)[0];
  isSelected: boolean;
  onToggle: () => void;
  columnVisibility: ColumnVisibility;
  showTotalAudience?: boolean;
  showEngagementRate?: boolean;
  isDark?: boolean;
  onHover?: (talentName: string | null) => void;
}) {
  const nameParts = talent.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");
  const genderInitial = talent.gender.charAt(0);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/talent/${talent.id}`);
  };

  const handleMouseEnter = () => {
    onHover?.(talent.name);
  };

  const handleMouseLeave = () => {
    onHover?.(null);
  };

  return (
    <div
      className="content-stretch flex items-center relative shrink-0 w-full h-[52px]"
      style={{
        background: isSelected
          ? "var(--table-row-bg-selected)"
          : "var(--table-row-bg)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        aria-hidden="true"
        className="absolute border-solid inset-0 pointer-events-none border-[0px_0px_1px]"
        style={{
          borderColor: isSelected
            ? "var(--table-row-border-selected)"
            : "var(--table-row-border)",
        }}
      />

      {/* Checkbox */}
      <div className="flex items-center justify-center shrink-0">
        <Checkbox
          size="small"
          checked={isSelected}
          onChange={onToggle}
        />
      </div>

      {/* Avatar - Clickable */}
      <div
        className="content-stretch flex items-center p-[4px] relative shrink-0 cursor-pointer"
        onClick={handleNavigate}
      >
        <Avatar imageUrl={talent.avatarImage} />
      </div>

      {/* Name - Clickable */}
      {columnVisibility.name && (
        <div
          className="basis-0 grow max-w-[100px] min-h-px min-w-[140px] relative shrink-0 cursor-pointer"
          onClick={handleNavigate}
        >
          <div className="flex flex-row items-center max-w-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex gap-[4px] items-center max-w-[inherit] min-w-[inherit] p-[4px] relative size-full">
              <p className="table-item-text-primary text-sm relative shrink-0 text-nowrap">
                {firstName}{" "}
              </p>
              <p className="table-item-text-primary text-sm relative shrink-0">
                {lastName}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Instagram Engagement Rate - only show when precise filters active */}
      {showEngagementRate && (
        <div
          className="content-stretch flex h-full items-center justify-center p-[4px] relative shrink-0 w-[100px]"
          style={{ background: "var(--table-cell-bg-alt)" }}
        >
          <p
            className="mono font-thin text-[12px] leading-[16px] text-center"
            style={{
              color: "var(--table-text-primary)",
            }}
          >
            {talent.instagramEngagementRate}
          </p>
        </div>
      )}

      {/* Status - Shows connected platforms */}
      {columnVisibility.status && (
        <div className="content-stretch flex items-center justify-start relative shrink-0 w-[100px]">
          <Connections
            connections={[
              { platform: "instagram", status: talent.connections.instagram },
              { platform: "tiktok", status: talent.connections.tiktok },
              { platform: "youtube", status: talent.connections.youtube },
              { platform: "snapchat", status: talent.connections.snapchat },
            ]}
            isDark={isDark}
          />
        </div>
      )}

      {/* Total Audience - only show when sorted by total audience */}
      {showTotalAudience && (
        <div
          className="content-stretch flex h-full items-center justify-center p-[4px] relative shrink-0 w-[100px]"
          style={{ background: "var(--table-cell-bg-alt)" }}
        >
          <p
            className="mono font-thin text-[12px] leading-[16px] text-center"
            style={{
              color: "var(--table-text-primary)",
            }}
          >
            {talent.followers.total}
          </p>
        </div>
      )}

      {/* Biography */}
      {columnVisibility.biography && (
        <div className="content-stretch flex items-center p-[4px] relative shrink-0 w-[220px]">
          <p className="basis-0 table-item-text-secondary text-sm grow min-h-px min-w-px relative shrink-0 line-clamp-2">
            {talent.bio}
          </p>
        </div>
      )}

      {/* Verticals */}
      {columnVisibility.verticals && (
        <div className="content-center flex flex-wrap gap-[2px_8px] items-center p-[4px] relative shrink-0 w-[220px]">
          {talent.verticals.map((vertical, index) => (
            <div
              key={index}
              className="content-stretch flex gap-[2px] items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[4px] shrink-0"
              style={{ background: "var(--table-vertical-bg)" }}
            >
              <p
                className="nav-text-primary"
                style={{ color: "var(--table-vertical-text)" }}
              >
                {vertical}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Age */}
      {columnVisibility.age && (
        <div className="content-stretch flex items-center justify-center max-w-[120px] min-w-[60px] p-[4px] relative shrink-0">
          <p
            className="mono font-thin text-[12px] leading-[16px] text-center"
            style={{
              color: "var(--table-text-secondary)",
            }}
          >
            {talent.age}
          </p>
        </div>
      )}

      {/* Gender */}
      {columnVisibility.gender && (
        <div className="content-stretch flex items-center justify-center min-w-[80px] p-[4px] relative shrink-0 w-[80px]">
          <div
            className="content-stretch flex flex-col items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-[18px]"
            style={{ background: "var(--table-gender-bg)" }}
          >
            <p
              className="nav-text-primary"
              style={{ color: "var(--table-gender-text)" }}
            >
              {genderInitial}
            </p>
          </div>
        </div>
      )}

      {/* Location */}
      {columnVisibility.location && (
        <div className="content-stretch flex items-center p-[4px] relative shrink-0 w-[150px]">
          <p className="basis-0 table-item-text-secondary text-sm grow min-h-px min-w-px relative shrink-0">
            {talent.location}
          </p>
        </div>
      )}

      {/* Instagram */}
      {columnVisibility.instagram && (
        <div
          className="content-stretch flex h-full items-center justify-center max-w-[120px] min-w-[60px] p-[4px] relative shrink-0"
          style={{ background: "var(--table-cell-bg-alt)" }}
        >
          <p
            className="mono font-thin text-[12px] leading-[16px] text-center"
            style={{
              color: "var(--table-text-secondary)",
            }}
          >
            {talent.followers.instagram}
          </p>
        </div>
      )}

      {/* TikTok */}
      {columnVisibility.tiktok && (
        <div className="content-stretch flex items-center justify-center max-w-[120px] min-w-[60px] p-[4px] relative shrink-0">
          <p
            className="mono font-thin text-[12px] leading-[16px] text-center"
            style={{
              color: "var(--table-text-secondary)",
            }}
          >
            {talent.followers.tiktok}
          </p>
        </div>
      )}

      {/* YouTube */}
      {columnVisibility.youtube && (
        <div
          className="content-stretch flex h-full items-center justify-center max-w-[120px] min-w-[60px] p-[4px] relative shrink-0"
          style={{ background: "var(--table-cell-bg-alt)" }}
        >
          <p
            className="mono font-thin text-[12px] leading-[16px] text-center"
            style={{
              color: "var(--table-text-secondary)",
            }}
          >
            {talent.followers.youtube}
          </p>
        </div>
      )}

      {/* Snapchat */}
      {columnVisibility.snapchat && (
        <div className="content-stretch flex items-center justify-center max-w-[120px] min-w-[60px] p-[4px] relative shrink-0">
          <div
            aria-hidden="true"
            className="absolute border-[0px_1px_0px_0px] border-solid inset-[0_-1px_0_0] pointer-events-none"
            style={{ borderColor: "var(--table-cell-bg-alt)" }}
          />
          <p
            className="mono font-thin text-[12px] leading-[16px] text-center"
            style={{
              color: "var(--table-text-secondary)",
            }}
          >
            {talent.followers.snapchat}
          </p>
        </div>
      )}

      {/* Links */}
      {columnVisibility.links && (
        <div className="content-stretch flex items-center p-[4px] relative shrink-0 w-[200px]">
          <div className="flex flex-col gap-[2px]">
            {talent.links && talent.links.length > 0 ? (
              talent.links.slice(0, 2).map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="table-item-text-secondary text-xs truncate hover:underline"
                >
                  {link}
                </a>
              ))
            ) : (
              <p className="table-item-text-secondary text-xs">
                —
              </p>
            )}
          </div>
        </div>
      )}

      {/* Spacer with More button - aligns to the right */}
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 flex items-center justify-end px-[4px]">
        {/* More Menu */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]">
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center p-[12px] relative rounded-[9999px] shrink-0">
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Table Component
export function TalentTable({
  isDark = false,
  sortState,
  onSortChange,
  showEngagementRate = false,
  quickFilter,
  columnVisibility = {
    name: true,
    verticals: true,
    age: true,
    gender: true,
    location: true,
    instagram: true,
    tiktok: true,
    youtube: true,
    snapchat: true,
    biography: false,
    links: false,
    status: false,
  },
  refreshKey = 0,
  talentData,
  onRowHover,
  selectedTalents,
  onSelectionChange,
}: TalentTableProps) {
  // Use provided talentData or default to imported talents
  const baseTalents = talentData || talents;
  // Use external selection state if provided, otherwise use local state
  const [localSelectedRows, setLocalSelectedRows] = useState<Set<string>>(
    new Set(),
  );
  const selectedRows = selectedTalents ?? localSelectedRows;

  const handleRowToggle = (talentId: string) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(talentId)) {
      newSet.delete(talentId);
    } else {
      newSet.add(talentId);
    }

    if (onSelectionChange) {
      onSelectionChange(newSet);
    } else {
      setLocalSelectedRows(newSet);
    }
  };

  const handleSort = (field: string) => {
    if (!onSortChange) return;

    // If clicking the same field, toggle direction
    if (sortState?.field === field) {
      onSortChange({
        field,
        direction:
          sortState.direction === "asc" ? "desc" : "asc",
      });
    } else {
      // New field, start with ascending
      onSortChange({
        field,
        direction: "asc",
      });
    }
  };

  const parseFollowerCount = (count: string) => {
    if (!count) return 0;
    const num = parseFloat(count);
    if (count.includes("M")) return num * 1000000;
    if (count.includes("K")) return num * 1000;
    return num;
  };

  // Shuffle talents based on refreshKey
  const shuffledTalents = useMemo(() => {
    if (refreshKey === 0) return baseTalents;
    // Create a seeded shuffle based on refreshKey
    const shuffled = [...baseTalents];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor((Math.sin(refreshKey * (i + 1)) * 0.5 + 0.5) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [refreshKey, baseTalents]);

  const sortedTalents = useMemo(() => {
    if (!sortState) return shuffledTalents;

    const { field, direction } = sortState;

    return [...shuffledTalents].sort((a, b) => {
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
  }, [sortState, shuffledTalents]);

  // Apply quick filter
  const filteredTalents = useMemo(() => {
    if (!quickFilter) return sortedTalents;

    const filter = quickFilter.toLowerCase();
    return sortedTalents.filter((talent) =>
      talent.name.toLowerCase().startsWith(filter),
    );
  }, [sortedTalents, quickFilter]);

  return (
    <div
      className="content-stretch flex flex-col items-start relative w-full overflow-hidden"
      style={{ background: "var(--page-background)" }}
    >
      <HeaderContent
        currentSort={sortState}
        onSort={sortState ? handleSort : undefined}
        isDark={isDark}
        columnVisibility={columnVisibility}
        showEngagementRate={showEngagementRate}
      />
      {filteredTalents.map((talent) => (
        <TableRow
          key={talent.id}
          talent={talent}
          isSelected={selectedRows.has(talent.id)}
          onToggle={() => handleRowToggle(talent.id)}
          columnVisibility={columnVisibility}
          showTotalAudience={
            sortState?.field === "totalAudience"
          }
          showEngagementRate={showEngagementRate}
          isDark={isDark}
          onHover={onRowHover}
        />
      ))}
    </div>
  );
}
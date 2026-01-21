import { useState, useMemo } from "react";
import { SortState } from "./SortDropdown";
import { mediaKitsData, MediaKitData } from "../data/mediaKits";
import { ChevronIcon } from "./icons/ChevronIcon";

interface MediaKitsTableProps {
  isDark?: boolean;
  sortState?: SortState;
  onSortChange?: (sortState: SortState) => void;
  quickFilter?: string;
}

export function MediaKitsTable({
  isDark = false,
  sortState = { field: "title", direction: "asc" },
  onSortChange = () => {},
  quickFilter = "",
}: MediaKitsTableProps) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...mediaKitsData];

    // Apply quick filter
    if (quickFilter) {
      const lowerFilter = quickFilter.toLowerCase();
      filtered = filtered.filter(
        (kit) =>
          kit.title.toLowerCase().includes(lowerFilter) ||
          kit.creator.toLowerCase().includes(lowerFilter) ||
          kit.type.toLowerCase().includes(lowerFilter)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: string | number = "";
      let bValue: string | number = "";

      switch (sortState.field) {
        case "title":
          aValue = a.title;
          bValue = b.title;
          break;
        case "creator":
          aValue = a.creator;
          bValue = b.creator;
          break;
        case "creationDate":
          // Parse date for proper sorting (dd/mm/yyyy)
          const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split("/");
            return new Date(`${year}-${month}-${day}`).getTime();
          };
          aValue = parseDate(a.creationDate);
          bValue = parseDate(b.creationDate);
          break;
        case "type":
          aValue = a.type;
          bValue = b.type;
          break;
        default:
          aValue = a.title;
          bValue = b.title;
      }

      if (aValue < bValue)
        return sortState.direction === "asc" ? -1 : 1;
      if (aValue > bValue)
        return sortState.direction === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [quickFilter, sortState]);

  const handleSort = (field: string) => {
    if (sortState.field === field) {
      onSortChange({
        field,
        direction: sortState.direction === "asc" ? "desc" : "asc",
      });
    } else {
      onSortChange({ field, direction: "asc" });
    }
  };

  const SortableHeader = ({
    field,
    children,
    align = "left",
  }: {
    field: string;
    children: React.ReactNode;
    align?: "left" | "right";
  }) => {
    const isActive = sortState.field === field;
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button
        onClick={() => handleSort(field)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-[4px] cursor-pointer"
        style={{
          justifyContent: align === "right" ? "flex-end" : "flex-start",
        }}
      >
        <span
          className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px] transition-colors"
          style={{
            color: isActive
              ? "var(--table-header-text-active)"
              : isHovered
              ? "var(--table-header-text-hover)"
              : "var(--table-header-text)",
          }}
        >
          {children}
        </span>
        <div
          className="size-[16px] transition-all"
          style={{
            color: isActive
              ? "var(--table-header-text-active)"
              : "var(--table-header-text)",
            transform:
              isActive && sortState.direction === "desc"
                ? "rotate(180deg)"
                : "rotate(0deg)",
            opacity: isActive || isHovered ? 1 : 0,
          }}
        >
          <ChevronIcon />
        </div>
      </button>
    );
  };

  return (
    <div
      className="w-full"
      style={{
        borderLeft: "1px solid var(--border-subtle)",
        borderRight: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        borderRadius: "0 0 8px 8px",
      }}
    >
      <table className="w-full" style={{ borderCollapse: "separate" }}>
        <thead>
          <tr
            style={{
              background: "var(--table-header-bg)",
              height: "32px",
            }}
          >
            <th
              className="px-[16px] py-[6px] text-left"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
                width: "96px",
              }}
            >
              {/* Thumbnail column - no header text */}
            </th>
            <th
              className="px-[16px] py-[6px] text-left"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <SortableHeader field="title">Title</SortableHeader>
            </th>
            <th
              className="px-[16px] py-[6px] text-left"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <SortableHeader field="creator">Creator</SortableHeader>
            </th>
            <th
              className="px-[16px] py-[6px] text-left"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <SortableHeader field="creationDate">
                Creation Date
              </SortableHeader>
            </th>
            <th
              className="px-[16px] py-[6px] text-left"
              style={{
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <SortableHeader field="type">Type</SortableHeader>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedData.map((kit) => (
            <tr
              key={kit.id}
              onMouseEnter={() => setHoveredRow(kit.id)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                background:
                  hoveredRow === kit.id
                    ? "var(--table-row-bg-hover)"
                    : "transparent",
                height: "48px",
                transition: "background-color 0.15s ease",
              }}
            >
              <td
                className="px-[16px] py-[4px]"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <img
                  src={kit.thumbnail}
                  alt={kit.title}
                  style={{
                    width: "80px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td
                className="px-[16px] py-[12px]"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--table-text-primary)" }}
                >
                  {kit.title}
                </span>
              </td>
              <td
                className="px-[16px] py-[12px]"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--table-text-secondary)" }}
                >
                  {kit.creator}
                </span>
              </td>
              <td
                className="px-[16px] py-[12px]"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  className="text-sm"
                  style={{ color: "var(--table-text-secondary)" }}
                >
                  {kit.creationDate}
                </span>
              </td>
              <td
                className="px-[16px] py-[12px]"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {kit.type && (
                  <span
                    className="text-sm"
                    style={{ color: "var(--table-text-secondary)" }}
                  >
                    {kit.type}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
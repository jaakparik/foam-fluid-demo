import { useState, useEffect } from "react";
import { Pencil, X, Search, Plus, Check } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";

interface VerticalsSelectorProps {
  verticals: string[];
  onChange: (newVerticals: string[]) => void;
}

// All available verticals
const ALL_VERTICALS = [
  "Advocacy",
  "Art",
  "Author",
  "Beauty",
  "Comedy",
  "Creativity",
  "Dance",
  "DIY",
  "Education",
  "Entertainment",
  "Family",
  "Fashion",
  "Finance",
  "Fitness",
  "Food",
  "Gaming",
  "Home/Decor",
  "LGBTQ+",
  "Lifestyle",
  "Mental Health",
  "Music",
  "Pet",
  "Sport",
  "Tech",
  "Travel",
  "Wellness",
];

export function VerticalsSelector({
  verticals,
  onChange,
}: VerticalsSelectorProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVerticals, setSelectedVerticals] = useState<string[]>(verticals);
  const [searchQuery, setSearchQuery] = useState("");

  // Update local state when verticals prop changes
  useEffect(() => {
    setSelectedVerticals(verticals);
  }, [verticals]);

  // Filter available verticals based on search query
  const filteredVerticals = ALL_VERTICALS.filter((vertical) => {
    const matchesSearch = vertical.toLowerCase().includes(searchQuery.toLowerCase());
    const notAlreadySelected = !selectedVerticals.includes(vertical);
    return matchesSearch && notAlreadySelected;
  });

  // Add a vertical
  const handleAddVertical = (vertical: string) => {
    if (!selectedVerticals.includes(vertical)) {
      setSelectedVerticals([...selectedVerticals, vertical]);
      setSearchQuery(""); // Clear search after adding
    }
  };

  // Remove a vertical
  const handleRemoveVertical = (vertical: string) => {
    setSelectedVerticals(selectedVerticals.filter((v) => v !== vertical));
  };

  // Save changes
  const handleSave = () => {
    onChange(selectedVerticals);
    setIsOpen(false);
  };

  // Cancel changes
  const handleCancel = () => {
    setSelectedVerticals(verticals);
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <div
          className="relative inline-flex items-center gap-1 cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className="px-2 py-1 rounded-[4px] transition-all"
            style={{
              background: isHovering ? "rgba(0,0,0,0.03)" : "transparent",
            }}
          >
            <p className="text-sm">
              <span style={{ color: "var(--nav-item-text-active)" }}>Verticals: </span>
              {verticals.length > 0 ? (
                <span>{verticals.join(", ")}</span>
              ) : (
                <span style={{ color: "#9CA3AF" }}>Add verticals</span>
              )}
            </p>
          </div>
          {isHovering && (
            <div
              className="p-1 rounded-[4px] transition-opacity hover:opacity-70"
              style={{
                color: "#54657d",
              }}
            >
              <Pencil size={14} />
            </div>
          )}
        </div>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          forceMount={isOpen ? undefined : false}
          className="rounded-[8px] shadow-lg"
          style={{
            border: "1px solid var(--card-border-subtle)",
            background: "#ffffff",
            minWidth: "320px",
            maxWidth: "400px",
          }}
          side="bottom"
          sideOffset={5}
          align="start"
        >
          <div className="flex flex-col p-4 gap-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <p
                className="text-sm-medium"
                style={{ color: "var(--nav-item-text-active)" }}
              >
                Edit Verticals
              </p>
            </div>

            {/* Selected Verticals Pills */}
            <div className="flex flex-wrap gap-2">
              {selectedVerticals.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--nav-item-text-subtle)" }}>
                  No verticals selected
                </p>
              ) : (
                selectedVerticals.map((vertical) => (
                  <div
                    key={vertical}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-[4px] transition-colors"
                    style={{
                      background: "#E5E7EB",
                      color: "#1F2937",
                    }}
                  >
                    <span className="text-sm">{vertical}</span>
                    <button
                      onClick={() => handleRemoveVertical(vertical)}
                      className="p-0.5 rounded-full transition-opacity hover:opacity-70"
                      style={{ color: "#1F2937" }}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Search Bar */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-[4px] border"
              style={{
                border: "1px solid var(--card-border-subtle)",
                background: "#ffffff",
              }}
            >
              <Search size={16} style={{ color: "var(--nav-item-text-subtle)" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search verticals..."
                className="flex-1 text-sm outline-none"
                style={{
                  color: "var(--nav-item-text-active)",
                  background: "transparent",
                }}
                autoFocus
              />
            </div>

            {/* Available Verticals List - Only show when searching */}
            {searchQuery && (
              <div
                className="flex flex-col gap-1 overflow-y-auto"
                style={{
                  maxHeight: "200px",
                }}
              >
                {filteredVerticals.length === 0 ? (
                  <p className="text-sm py-2" style={{ color: "var(--nav-item-text-subtle)" }}>
                    No verticals found
                  </p>
                ) : (
                  filteredVerticals.map((vertical) => (
                    <button
                      key={vertical}
                      onClick={() => handleAddVertical(vertical)}
                      className="flex items-center justify-between px-3 py-2 rounded-[4px] transition-colors hover:bg-[rgba(0,0,0,0.03)] text-left"
                      style={{
                        color: "var(--nav-item-text-active)",
                      }}
                    >
                      <span className="text-sm">{vertical}</span>
                      <Plus size={16} style={{ color: "var(--nav-item-text-subtle)" }} />
                    </button>
                  ))
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 justify-end">
              <button
                onClick={handleCancel}
                className="px-3 py-1.5 text-sm rounded-[4px] transition-colors hover:bg-[rgba(0,0,0,0.03)]"
                style={{
                  border: "1px solid var(--card-border-subtle)",
                  background: "transparent",
                  color: "var(--nav-item-text-active)",
                }}
              >
                <div className="flex items-center gap-1">
                  <X size={14} />
                  <span>Cancel</span>
                </div>
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1.5 text-sm rounded-[4px] transition-opacity hover:opacity-80"
                style={{
                  background: "#155fef",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                <div className="flex items-center gap-1">
                  <Check size={14} />
                  <span>Save</span>
                </div>
              </button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

import { useState } from "react";

interface TalentSubmenuProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function TalentSubmenu({
  activeTab = "overview",
  onTabChange,
}: TalentSubmenuProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "content", label: "Content" },
    { id: "media-kits-lists", label: "Media Kits & Lists" },
    { id: "ask-assist", label: "Ask Assist" },
  ];

  return (
    <div
      style={{
        borderBottom: "1px solid var(--border-subtle)",
        marginBottom: "24px",
      }}
    >
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange?.(tab.id)}
            style={{
              padding: "12px 0",
              fontSize: "14px",
              fontWeight: "500",
              color:
                activeTab === tab.id
                  ? "var(--table-text-primary)"
                  : "var(--table-text-secondary)",
              background: "none",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid var(--table-text-primary)"
                  : "2px solid transparent",
              cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
              marginBottom: "-1px",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.color = "var(--table-text-primary)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.color = "var(--table-text-secondary)";
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

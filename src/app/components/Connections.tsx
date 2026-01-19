import React, { useState } from "react";

export type ConnectionStatus = "connected" | "not_connected" | "expired" | "not_added";

export interface ConnectionInfo {
  platform: string;
  status: ConnectionStatus;
}

interface ConnectionsProps {
  connections: ConnectionInfo[];
  isDark?: boolean;
}

const platformLabels: Record<string, string> = {
  instagram: "IG",
  tiktok: "TT",
  youtube: "YT",
  snapchat: "SN",
};

const statusColors: Record<ConnectionStatus, string> = {
  connected: "rgba(1, 224, 23, 0.15)",
  not_connected: "rgba(212, 32, 0, 0.15)",
  expired: "rgba(212, 208, 0, 0.15)",
  not_added: "rgba(128, 128, 128, 0.15)",
};

const statusTextColors: Record<ConnectionStatus, string> = {
  connected: "#15803d",
  not_connected: "#dc2626",
  expired: "#ca8a04",
  not_added: "#6b7280",
};

export function Connections({ connections, isDark = false }: ConnectionsProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Theme-aware tooltip colors
  const tooltipBg = isDark ? "#1c2128" : "#ffffff";
  const tooltipBorder = isDark ? "none" : "1px solid #dee2e8";
  const tooltipTitleColor = isDark ? "#f3f5f6" : "#15191e";
  const tooltipTextColor = isDark ? "#b7bdc7" : "#505a68";
  const tooltipShadow = isDark 
    ? "0 4px 16px rgba(0,0,0,0.3)" 
    : "0 4px 16px rgba(0,0,0,0.1)";

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        alignItems: "center",
        alignContent: "center",
        padding: "0 8px",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {connections.map((connection, index) => {
        const label = platformLabels[connection.platform.toLowerCase()];
        if (!label) return null;

        return (
          <div
            key={`${connection.platform}-${index}`}
            style={{
              display: "flex",
              gap: "2px",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: "2px",
              borderRadius: "4px",
              flexShrink: 0,
              width: "16px",
              height: "16px",
              backgroundColor: statusColors[connection.status],
            }}
          >
            <p
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontWeight: 600,
                lineHeight: "10px",
                flexShrink: 0,
                color: statusTextColors[connection.status],
                fontSize: "10px",
                textAlign: "center",
                margin: 0,
              }}
            >
              {label}
            </p>
          </div>
        );
      })}

      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: "0",
            zIndex: 9999,
            background: tooltipBg,
            border: tooltipBorder,
            borderRadius: "8px",
            padding: "12px",
            boxShadow: tooltipShadow,
            whiteSpace: "nowrap",
            minWidth: "180px",
          }}
        >
          <p
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              color: tooltipTitleColor,
              margin: "0 0 8px 0",
            }}
          >
            Platform Status
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: statusColors.connected,
                  border: `1px solid ${statusTextColors.connected}`,
                }}
              />
              <span
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: "11px",
                  color: tooltipTextColor,
                }}
              >
                Platform connected
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: statusColors.expired,
                  border: `1px solid ${statusTextColors.expired}`,
                }}
              />
              <span
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: "11px",
                  color: tooltipTextColor,
                }}
              >
                Connection expired
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: statusColors.not_connected,
                  border: `1px solid ${statusTextColors.not_connected}`,
                }}
              />
              <span
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: "11px",
                  color: tooltipTextColor,
                }}
              >
                Platform not connected
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "3px",
                  backgroundColor: statusColors.not_added,
                  border: `1px solid ${statusTextColors.not_added}`,
                }}
              />
              <span
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: "11px",
                  color: tooltipTextColor,
                }}
              >
                Platform not added
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

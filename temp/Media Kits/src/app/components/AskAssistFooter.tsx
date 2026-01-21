import { AskIcon } from "./icons/AskIcon";

interface AskAssistFooterProps {
  searchQuery: string;
  hasAtMention: boolean;
  atMentionData?: {
    talentName: string;
    searchTerm: string;
  } | null;
}

export function AskAssistFooter({
  searchQuery,
  hasAtMention,
  atMentionData,
}: AskAssistFooterProps) {
  return (
    <div
      className="flex items-center gap-[8px] px-[12px] py-[10px] border-t cursor-pointer transition-colors"
      style={{
        background: "var(--quickresults-footer-bg)",
        borderColor: "var(--quickresults-border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "var(--quickresults-footer-hover-bg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          "var(--quickresults-footer-bg)";
      }}
    >
      <AskIcon
        className="size-[16px]"
        style={{ color: "var(--quickresults-footer-icon)" }}
      />
      <div className="flex gap-[4px] items-center font-['Hanken_Grotesk:Medium',sans-serif] font-medium text-[12px] leading-[20px]">
        <p
          style={{
            color: "var(--quickresults-footer-text)",
          }}
        >
          Ask Foam Assist about
        </p>
        <p style={{ color: "#15191e" }}>
          {hasAtMention && atMentionData 
            ? `${atMentionData.talentName} and ${atMentionData.searchTerm}`
            : searchQuery}
        </p>
      </div>
    </div>
  );
}

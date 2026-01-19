import svgPaths from "@/imports/svg-2h678txc7b";

function ConnectedPill() {
  return (
    <div className="bg-[rgba(52,192,162,0.2)] content-stretch flex gap-[10px] items-center justify-center pl-[12px] pr-[8px] py-[2px] relative rounded-[100px]">
      <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#15191e] text-[12px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">Connected</p>
      </div>
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.pdced600} stroke="#54657D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}

export function DataHealthSection() {
  return (
    <div
      style={{
        backgroundColor: "var(--filter-card-bg)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
      }}
    >
      <h3
        style={{
          color: "var(--table-text-primary)",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Data Health
      </h3>
      <ConnectedPill />
    </div>
  );
}
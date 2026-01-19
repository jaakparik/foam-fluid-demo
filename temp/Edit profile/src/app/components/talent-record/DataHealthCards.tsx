import ConnectedPill from "@/imports/Frame5599-2011-22";

function QuestionIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[12.5%]">
        <div
          className="absolute inset-[-4%]"
          style={
            {
              "--stroke-0": "rgba(139, 148, 162, 1)",
            } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16.2 16.2"
          >
            <circle
              cx="8.1"
              cy="8.1"
              r="7.5"
              stroke="var(--stroke-0, #8B94A2)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Arial_Rounded_MT_Bold:Regular',sans-serif] inset-[0_32.03%_0_34.64%] justify-center leading-[0] not-italic text-[#8b94a2] text-[9px]">
        <p className="leading-[24px] whitespace-pre-wrap">?</p>
      </div>
    </div>
  );
}

export function DataHealthCards() {
  return (
    <div className="flex flex-row xl:flex-col 2xl:flex-row gap-[16px] items-start w-full">
      {/* Data Health Card */}
      <div
        className="relative rounded-[8px] shrink-0 flex-1 min-w-[220px]"
        style={{
          border: "1px solid var(--card-border-subtle)",
        }}
      >
        <div className="flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          {/* Header with percentage */}
          <div className="flex items-center justify-between relative shrink-0 w-full">
            <div className="flex gap-[2px] items-center relative shrink-0">
              <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#54657d] text-[16px] whitespace-nowrap">
                <p className="leading-[24px] whitespace-pre">
                  Data health
                </p>
              </div>
              <QuestionIcon />
            </div>
            <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[16px] whitespace-nowrap">
              <p className="leading-[24px] whitespace-pre">
                78%
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-[8px] relative shrink-0 w-full">
            <div className="absolute bg-[rgba(0,0,0,0.1)] h-[8px] left-0 rounded-[10px] top-0 w-full" />
            <div className="absolute bg-[#155fef] h-[8px] left-0 rounded-[10px] top-0 w-[78%]" />
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-[8px] items-start leading-[20px] relative shrink-0 text-[12px] w-full whitespace-pre">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <div className="h-[24px] w-auto">
                <ConnectedPill />
              </div>
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">
                4/4
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">
                Data points
              </p>
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e] numbers">
                12,232
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">
                Posts indexed
              </p>
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e] numbers">
                1,232
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Completion Card */}
      <div
        className="relative rounded-[8px] shrink-0 flex-1 min-w-[220px]"
        style={{
          border: "1px solid var(--card-border-subtle)",
        }}
      >
        <div className="flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          {/* Header */}
          <div className="flex items-center relative shrink-0 w-full">
            <div className="flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#54657d] text-[16px] whitespace-nowrap">
              <p className="leading-[24px] whitespace-pre">
                Profile completion
              </p>
            </div>
          </div>

          {/* Completion Items */}
          <div className="flex flex-col gap-[8px] items-start leading-[20px] relative shrink-0 text-[12px] w-full whitespace-pre">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">
                Basic info
              </p>
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">
                Complete
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">
                Platform connections
              </p>
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e]">
                Complete
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">
                Brand experience
              </p>
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#15191e] numbers">
                6 brands
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light relative shrink-0 text-[#54657d]">
                Foam Connect App
              </p>
              <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#cb0000]">
                Not installed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
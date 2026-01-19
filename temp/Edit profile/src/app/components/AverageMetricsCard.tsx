import svgPaths from "@/imports/svg-t664nqqr9q";

function Eye() {
  return (
    <div className="relative size-[16px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Eye">
          <path d={svgPaths.pb175300} id="Ellipse 38" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="8" id="Ellipse 30" r="2" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 5618">
          <path d={svgPaths.p28705e00} id="Vector 690" stroke="var(--stroke-0, #54657D)" strokeLinejoin="round" />
          <path d={svgPaths.p1407a440} id="Vector 691" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Reels() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="reels">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="reels">
          <rect fill="white" height="16" width="16" />
          <path d="M3.5 5.5H13" id="Vector 692" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" />
          <rect height="12" id="Rectangle 518" rx="1.5" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" width="10" x="3" y="2" />
          <path d="M5.5 2.25L7.23205 5.25" id="Vector 693" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 2.25L10.732 5.25" id="Vector 694" stroke="var(--stroke-0, #54657D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p7968d80} fill="var(--fill-0, #54657D)" id="Vector 695" />
        </g>
      </svg>
    </div>
  );
}

export function AverageMetricsCard() {
  return (
    <div className="content-stretch flex items-start p-[12px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        {/* Average views */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <Eye />
                  </div>
                </div>
                <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] whitespace-pre">Average views</p>
              </div>
              <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[14px] whitespace-nowrap">
                <p className="leading-[20px] whitespace-pre numbers">22.1k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Average engagements */}
        <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <Frame5 />
                <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] whitespace-pre">Average engagements</p>
              </div>
              <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[14px] whitespace-nowrap">
                <p className="leading-[20px] whitespace-pre numbers">4.6k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Follower engagement rate */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[36px] pr-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] whitespace-pre">Follower engagement rate</p>
              </div>
              <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[14px] whitespace-nowrap">
                <p className="leading-[20px] whitespace-pre numbers">12%</p>
              </div>
            </div>
          </div>
        </div>

        {/* View engagement rate */}
        <div className="bg-[rgba(0,0,0,0.05)] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[36px] pr-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex items-center relative shrink-0">
                <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] whitespace-pre">View engagement rate</p>
              </div>
              <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[14px] whitespace-nowrap">
                <p className="leading-[20px] whitespace-pre numbers">21.1%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Average reels views */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <Reels />
                <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] whitespace-pre">Average reels views</p>
              </div>
              <div className="flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#15191e] text-[14px] whitespace-nowrap">
                <p className="leading-[20px] whitespace-pre numbers">22.4k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

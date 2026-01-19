function QuestionIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-4%]">
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
              stroke="#8B94A2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col inset-[0_32.03%_0_34.64%] justify-center leading-[0] not-italic text-[#8b94a2] text-[9px]">
        <p className="leading-[24px] whitespace-pre-wrap">?</p>
      </div>
    </div>
  );
}

function ConnectedPill() {
  return (
    <div className="bg-[rgba(52,192,162,0.2)] flex gap-[10px] items-center justify-center pl-[12px] pr-[8px] py-[2px] relative rounded-[100px] h-[24px]">
      <p className="font-light text-[#15191e] text-[12px] leading-[20px] whitespace-nowrap">
        Connected
      </p>
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path
            d="M13.3346 4L6.0013 11.3333L2.66797 8"
            stroke="#54657D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.2"
          />
        </svg>
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
              <p className="font-light text-[#54657d] text-[16px] leading-[24px] whitespace-nowrap">
                Data health
              </p>
              <QuestionIcon />
            </div>
            <p className="font-medium text-[#15191e] text-[16px] leading-[24px] whitespace-nowrap">
              78%
            </p>
          </div>

          {/* Progress Bar */}
          <div className="h-[8px] relative shrink-0 w-full">
            <div className="absolute bg-[rgba(0,0,0,0.1)] h-[8px] left-0 rounded-[10px] top-0 w-full" />
            <div className="absolute bg-[#155fef] h-[8px] left-0 rounded-[10px] top-0 w-[78%]" />
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-[8px] items-start leading-[20px] relative shrink-0 text-[12px] w-full">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <div className="h-[24px] w-auto">
                <ConnectedPill />
              </div>
              <p className="font-medium relative shrink-0 text-[#15191e]">
                4/4
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-light relative shrink-0 text-[#54657d]">
                Data points
              </p>
              <p className="font-medium relative shrink-0 text-[#15191e] numbers">
                12,232
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-light relative shrink-0 text-[#54657d]">
                Posts indexed
              </p>
              <p className="font-medium relative shrink-0 text-[#15191e] numbers">
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
            <p className="font-light text-[#54657d] text-[16px] leading-[24px] whitespace-nowrap">
              Profile completion
            </p>
          </div>

          {/* Completion Items */}
          <div className="flex flex-col gap-[8px] items-start leading-[20px] relative shrink-0 text-[12px] w-full">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-light relative shrink-0 text-[#54657d]">
                Basic info
              </p>
              <p className="font-medium relative shrink-0 text-[#15191e]">
                Complete
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-light relative shrink-0 text-[#54657d]">
                Platform connections
              </p>
              <p className="font-medium relative shrink-0 text-[#15191e]">
                Complete
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-light relative shrink-0 text-[#54657d]">
                Brand experience
              </p>
              <p className="font-medium relative shrink-0 text-[#15191e] numbers">
                6 brands
              </p>
            </div>
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <p className="font-light relative shrink-0 text-[#54657d]">
                Foam Connect App
              </p>
              <p className="font-medium relative shrink-0 text-[#cb0000]">
                Not installed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

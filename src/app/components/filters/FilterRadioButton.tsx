export function FilterRadioButton({ 
  title, 
  description, 
  checked, 
  onChange 
}: { 
  title: string; 
  description: string; 
  checked: boolean; 
  onChange: () => void;
}) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <button
        onClick={onChange}
        className={`${checked ? 'bg-[rgba(21,95,239,0.1)]' : ''} content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative rounded-[4px] w-full`}
      >
        <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 text-[12px] w-[165px]">
          <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#15191e]">
            <p className="css-ew64yg leading-[20px]">{title}</p>
          </div>
          <div className="css-g0mm18 flex flex-col font-['Hanken_Grotesk:Light',sans-serif] font-light justify-center relative shrink-0 text-[#54657d]">
            <p className="css-ew64yg leading-[20px]">{description}</p>
          </div>
        </div>
        <div className="content-stretch flex h-[32px] items-center relative shrink-0">
          <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0">
            <div className="bg-white content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[16px]">
              <div aria-hidden="true" className="absolute border border-[#3a495f] border-solid inset-0 pointer-events-none rounded-[1000px]" />
              {checked && (
                <div className="bg-[#155fef] rounded-[1000px] size-[8px]" />
              )}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

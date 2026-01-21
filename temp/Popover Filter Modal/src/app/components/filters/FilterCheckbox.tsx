export function FilterCheckbox({ 
  label, 
  checked, 
  onChange, 
  disabled = false 
}: { 
  label: string; 
  checked: boolean; 
  onChange: () => void; 
  disabled?: boolean;
}) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <button
        onClick={onChange}
        disabled={disabled}
        className={`${checked ? 'bg-[rgba(21,95,239,0.1)]' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} content-stretch flex items-center justify-between pl-[12px] pr-0 py-0 relative rounded-[4px] w-full`}
      >
        <p className="css-ew64yg font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px]">
          {label}
        </p>
        <div className="content-stretch flex items-center relative shrink-0">
          <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[1000px] shrink-0">
            <div className={`${checked ? 'bg-[#155fef]' : 'bg-white'} content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]`}>
              <div aria-hidden="true" className={`absolute border ${checked ? 'border-[#155fef]' : 'border-[#3a495f]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
              {checked && (
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path clipRule="evenodd" d="M13.3536 4.64645C13.5488 4.84171 13.5488 5.15829 13.3536 5.35355L6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.64645 8.35355C2.45118 8.15829 2.45118 7.84171 2.64645 7.64645C2.84171 7.45118 3.15829 7.45118 3.35355 7.64645L6.5 10.7929L12.6464 4.64645C12.8417 4.45118 13.1583 4.45118 13.3536 4.64645Z" fill="white" fillRule="evenodd" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
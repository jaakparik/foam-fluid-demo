import { LogoOutlineLight } from "./icons/LogoOutlineLight";
import { LogoOutlineDark } from "./icons/LogoOutlineDark";

interface NavAgencyProps {
  isDark: boolean;
}

export function NavAgency({ isDark }: NavAgencyProps) {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center px-[12px] py-0 relative shrink-0"
      data-name="nav/agency"
    >
      <div className="size-[28px]">
        {isDark ? (
          <LogoOutlineDark isDark={isDark} />
        ) : (
          <LogoOutlineLight isDark={isDark} />
        )}
      </div>
      <p
        className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-nowrap"
        style={{ color: 'var(--nav-logo-text)' }}
      >
        Creative Artists Agency
      </p>
    </div>
  );
}
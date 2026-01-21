import imgCoffeeLogo2 from "figma:asset/4fce9f17e52649d86fd7fa08c1f16777b8ff8f1c.png";
import imgCoffeeLogo3 from "figma:asset/a736bb6afad5fbc9daa42276ff90093f53491b55.png";
import imgCoffeeLogo4 from "figma:asset/c6f82fb6dec90ec0978e15193ab0fcc8fb2f93b9.png";
import imgCoffeeLogo5 from "figma:asset/17a946a44caa7e51c0d95529088244cd4b4d0456.png";

function Frame2() {
  return (
    <div className="bg-[rgba(21,95,239,0.3)] content-stretch flex items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px] text-nowrap">Paid</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(52,192,162,0.3)] content-stretch flex items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px] text-nowrap">Organic</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">28 creators</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] text-nowrap">Starbucks</p>
      <Frame13 />
    </div>
  );
}

function SearchBrand() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[4px] relative shrink-0 w-[476px]" data-name="search/brand">
      <div className="relative shrink-0 size-[40px]" data-name="coffee_logo_2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCoffeeLogo2} />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(21,95,239,0.3)] content-stretch flex items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px] text-nowrap text-right">Paid</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">4 creators</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] text-nowrap">Nescafe</p>
      <Frame15 />
    </div>
  );
}

function SearchBrand1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[4px] relative shrink-0 w-[476px]" data-name="search/brand">
      <div className="relative shrink-0 size-[40px]" data-name="coffee_logo_2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCoffeeLogo3} />
      </div>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(52,192,162,0.3)] content-stretch flex items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px] text-nowrap">Organic</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">28 creators</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] text-nowrap">Lavazza</p>
      <Frame16 />
    </div>
  );
}

function SearchBrand2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[4px] relative shrink-0 w-[476px]" data-name="search/brand">
      <div className="relative shrink-0 size-[40px]" data-name="coffee_logo_2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCoffeeLogo4} />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(21,95,239,0.3)] content-stretch flex items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[12px] text-nowrap text-right">Paid</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Hanken_Grotesk:Light',sans-serif] font-light leading-[20px] relative shrink-0 text-[#54657d] text-[12px] text-nowrap">2 creators</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#15191e] text-[14px] text-nowrap">Dunkin Donuts</p>
      <Frame17 />
    </div>
  );
}

function SearchBrand3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[4px] relative shrink-0 w-[476px]" data-name="search/brand">
      <div className="relative shrink-0 size-[40px]" data-name="coffee_logo_2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCoffeeLogo5} />
      </div>
      <Frame12 />
    </div>
  );
}

export default function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[12px] pt-0 px-[12px] relative size-full">
      <SearchBrand />
      <SearchBrand1 />
      <SearchBrand2 />
      <SearchBrand3 />
    </div>
  );
}
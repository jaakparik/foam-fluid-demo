import imgLogoPepsi from "../assets/e9b2214ed0ab6628f1221890c65d1ac07c690fb7.png";
import imgLogoStarbucks from "../assets/cf5b91ce879b24c0f02e2ebd2ba3c3cc5f69e027.png";
import imgLogoTarget from "../assets/9146d71e94ed2964902f7fc214f54250a60e5678.png";
import imgLogoPg from "../assets/c3c7339f83a7b047c0b69f67a5a7c9be16caef31.png";
import imgLogoLyft from "../assets/1844b73c3587c372319afa2eb3a63bf77b69f376.png";
import imgLogoFacebook from "../assets/837ff525a905e5087c3988f706fbbf9ef0775019.png";

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[272.5px]">
      <p className="font-['Hanken_Grotesk:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#8b94a2] text-[14px] whitespace-pre">Brand Experience</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[40px]" data-name="logo_pepsi">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoPepsi} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_starbucks">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoStarbucks} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_target">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[139.06%] left-[-0.11%] max-w-none top-0 w-[100.22%]" src={imgLogoTarget} />
        </div>
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_pg">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoPg} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_lyft">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoLyft} />
      </div>
      <div className="relative shrink-0 size-[40px]" data-name="logo_facebook">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoFacebook} />
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}
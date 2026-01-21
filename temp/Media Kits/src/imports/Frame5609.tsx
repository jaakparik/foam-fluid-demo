import imgLogo from "figma:asset/a2a6be7cf8349139b6b0008e2e9cd77bf694de79.png";
import imgLogo1 from "figma:asset/88b72591c06d55096e64c9ed1a3a5bb3b1395b03.png";
import imgLogo2 from "figma:asset/e7e363ea1f3943725535cbc328230c5e4e78a115.png";
import imgLogo3 from "figma:asset/0c12d724c94d5014ac2794ee0fc694ab94fdc8d6.png";

function EditContentLogoAction() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 w-[122px]" data-name="editContentLogoAction">
      <div className="absolute left-[calc(50%+0.5px)] size-[64px] top-[calc(50%+0.35px)] translate-x-[-50%] translate-y-[-50%]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function EditContentLogoAction1() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 w-[122px]" data-name="editContentLogoAction">
      <div className="absolute left-[calc(50%+0.5px)] size-[64px] top-[calc(50%+0.35px)] translate-x-[-50%] translate-y-[-50%]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo1} />
      </div>
    </div>
  );
}

function EditContentLogoAction2() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 w-[122px]" data-name="editContentLogoAction">
      <div className="absolute left-[calc(50%+0.5px)] size-[64px] top-[calc(50%+0.35px)] translate-x-[-50%] translate-y-[-50%]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo2} />
      </div>
    </div>
  );
}

function EditContentLogoAction3() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0 w-[122px]" data-name="editContentLogoAction">
      <div className="absolute left-[calc(50%+0.5px)] size-[64px] top-[calc(50%+0.35px)] translate-x-[-50%] translate-y-[-50%]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo3} />
      </div>
    </div>
  );
}

function LogoImages() {
  return (
    <div className="content-stretch flex gap-[16px] h-[122px] items-end justify-center overflow-x-auto overflow-y-clip relative rounded-[24px] shrink-0 w-full" data-name="_logoImages">
      <EditContentLogoAction />
      <EditContentLogoAction1 />
      <EditContentLogoAction2 />
      <EditContentLogoAction3 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] size-full">
      <div aria-hidden="true" className="absolute border border-[rgba(58,73,95,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <LogoImages />
    </div>
  );
}
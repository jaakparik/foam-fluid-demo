import { ListViewIcon } from "../app/components/icons/ListViewIcon";
import { GridIcon } from "../app/components/icons/GridIcon";
import { CardsIcon } from "../app/components/icons/CardsIcon";

function Frame() {
  return (
    <div className="dark:bg-[rgba(58,73,95,0.1)] bg-white content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <ListViewIcon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <GridIcon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0">
      <CardsIcon />
    </div>
  );
}

export default function LayoutMenu() {
  return (
    <div className="dark:bg-[rgba(58,73,95,0.05)] bg-[#f3f5f6] content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[8px] size-full" data-name="layout-menu">
      <Frame />
      <Frame2 />
      <Frame1 />
    </div>
  );
}
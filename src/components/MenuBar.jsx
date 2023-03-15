import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import CaptionIcon from "@/assets/CaptionIcon";
import ClipsIcon from "@/assets/ClipsIcon";
import InfoIcon from "@/assets/InfoIcon";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Contacts", "About us"];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Menubar.Root className="menubar-root flex p-1 overflow-hidden bg-[#1f1f1f] rounded-full">
      <div className="flex overflow-hidden rounded-full">
        <Menubar.Menu className="overflow-hidden rounded-full">
          <Menubar.Trigger className="py-1 fill-[#494949] hover:fill-[#8b8b8b] text-[#494949] hover:text-[#8b8b8b] hover:bg-[#2d2d2d] rounded-none px-3 outline-none select-none font-medium leading-none text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
            <CaptionIcon />
            Captions
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="min-w-[220px] bg-white rounded-md p-[5px] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                New Caption
              </Menubar.Item>
              <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                Export
              </Menubar.Item>
              <Menubar.Item
                className="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                disabled
              >
                New Incognito Window
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="py-1 fill-[#494949] hover:fill-[#8b8b8b] text-[#494949] hover:text-[#8b8b8b] hover:bg-[#2d2d2d] rounded-none px-3 outline-none select-none font-medium leading-none text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
            <ClipsIcon />
            Clips
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="min-w-[220px] bg-white rounded-md p-[5px]  [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              sideOffset={5}
              alignOffset={-3}
            >
              <Menubar.Sub>
                <Menubar.SubTrigger className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                  Find
                  <div className="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    <ChevronRightIcon />
                  </div>
                </Menubar.SubTrigger>
              </Menubar.Sub>
              <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
              <Menubar.Item className="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                Cut
              </Menubar.Item>
              <Menubar.Item className="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                Copy
              </Menubar.Item>
              <Menubar.Item className="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                Paste
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className="py-1 fill-[#494949] hover:fill-[#8b8b8b] text-[#494949] hover:text-[#8b8b8b] hover:bg-[#2d2d2d] rounded-none px-3 outline-none select-none font-medium leading-none text-violet11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
            <InfoIcon />
          </Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content
              className="min-w-[220px] bg-white rounded-md p-[5px] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              sideOffset={5}
              alignOffset={-14}
            >
              {CHECK_ITEMS.map((item) => (
                <Menubar.CheckboxItem
                  className="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  key={item}
                  checked={checkedSelection.includes(item)}
                  onCheckedChange={() =>
                    setCheckedSelection((current) =>
                      current.includes(item)
                        ? current.filter((el) => el !== item)
                        : current.concat(item)
                    )
                  }
                >
                  <Menubar.ItemIndicator className="absolute left-0 inline-flex items-center justify-center w-5">
                    <CheckIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.CheckboxItem>
              ))}
              <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
              <Menubar.Item className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                Help
              </Menubar.Item>
              <Menubar.Item
                className="group text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                disabled
              >
                Account
              </Menubar.Item>
              <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />
              <Menubar.Item className="text-[13px] leading-none text-violet11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                Payment history
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </div>
    </Menubar.Root>
  );
};

export default MenubarDemo;

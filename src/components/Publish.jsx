import React from "react";
import ChatIcon from "@/assets/ChatIcon";
import { motion, AnimatePresence } from "framer-motion";
import ShareIcon from "@/assets/ShareIcon";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "./Header";
import PublishIcon from "@/assets/PublishIcon";

export default function Publish() {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <motion.div
          whileHover={{ scale: 1.02 }}
          animate={{ scale: open ? 0.96 : 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            data-open={open}
            className=" data-[open=true]:bg-[#ebebeb] data-[open=true]:text-[#535353] hover:bg-[#fff] hover:text-zinc-800 bg-[#ffffff] flex rounded-md tracking-[0.01rem] leading-7 gap-2 py-[5px] pr-[15px] pl-[10px] flex-row text-base font-[400] items-center justify-center rounded-2"
          >
            <PublishIcon opacity={open ? "1" : "1"} />
            Publish
          </button>
        </motion.div>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align="start"
              sideOffset={12}
              className="min-w-[480px] mr-2 bg-[#ffffff] text-white  rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              forceMount
              asChild
            >
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
              >
                <div className="space-y-[0px]">
                  <div className="h-[40px] bg-[#dcdcdc] rounded-sm" />
                  <div className="h-[40px] bg-[#dcdcdc] rounded-sm" />
                  <div className="h-[40px] bg-[#dcdcdc] rounded-sm" />
                  <div className="h-[40px] bg-[#dcdcdc] rounded-sm" />
                </div>
                <DropdownMenu.Arrow className="fill-[#ffffff]" />
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        ) : null}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}

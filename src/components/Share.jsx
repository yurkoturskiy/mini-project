import React from "react";
import ChatIcon from "@/assets/ChatIcon";
import { motion, AnimatePresence } from "framer-motion";
import ShareIcon from "@/assets/ShareIcon";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Share() {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <motion.div
          className="fill-white"
          whileHover={{ scale: 1.02 }}
          animate={{ scale: open ? 0.96 : 1 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            data-open={open}
            className="data-[open=true]:text-[#979797] data-[open=true]:fill-[#979797] bg-[#252525] hover:bg-[#353535] text-white flex rounded-md tracking-[0.01rem] leading-7 gap-2 py-[5px] pr-[15px] pl-[10px] flex-row text-base font-[400] items-center justify-center rounded-2"
          >
            <ShareIcon />
            Share
          </button>
        </motion.div>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align="center"
              sideOffset={12}
              className="min-w-[420px] mr-2 bg-[#2c2c2c] text-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              forceMount
              asChild
            >
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
              >
                <div className="space-y-[5px]">
                  <div className="h-[40px] bg-[#3c3c3c] rounded-sm" />
                  <div className="h-[40px] bg-[#3c3c3c] rounded-sm" />
                </div>
                <DropdownMenu.Arrow className="fill-[#252525]" />
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        ) : null}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
}

import React from "react";
import ChatIcon from "@/assets/ChatIcon";
import { motion, AnimatePresence } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Chat() {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <motion.div
          whileHover={{ scale: 1.04 }}
          animate={{ scale: open ? 0.92 : 1 }}
          whileTap={{ scale: 0.98 }}
          className="flex cursor-pointer items-center justify-center w-[48px] h-[38px]"
        >
          <ChatIcon data-open={open} />
        </motion.div>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open ? (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align="start"
              sideOffset={12}
              className="min-w-[220px] bg-[#2c2c2c] text-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              forceMount
              asChild
            >
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
              >
                <div className="space-y-[0px]">
                  <div className="h-[40px] bg-[#3c3c3c] rounded-sm" />
                  <div className="h-[40px] bg-[#3c3c3c] rounded-sm" />
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

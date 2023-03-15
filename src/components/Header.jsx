// index.jsx
import { forwardRef } from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo";
import UndoIcon from "@/assets/UndoIcon";
import RedoIcon from "@/assets/RedoIcon";
import ShareIcon from "@/assets/ShareIcon";
import TooltipComponent from "./Tooltip";
import PublishIcon from "@/assets/PublishIcon";
import ChatIcon from "@/assets/ChatIcon";
import SearchModal from "./SearchModal";
import Chat from "./Chat";
import Share from "./Share";
import Publish from "./Publish";

const Header = () => {
  return (
    <div className="flex items-center pr-2 z-50 pl-6 h-[14] bg-[#1A1A1C] min-h-[56px]">
      <div className="flex">
        <div className="mr-[42px] pt-[12px] cursor-pointer fill-white hover:fill-green-200 ">
          <Logo />
        </div>
        <TooltipComponent content="Undo">
          <motion.div
            whileHover={{ y: -1 }}
            whileTap={{ y: 1, scale: 0.95 }}
            className="cursor-pointer select-none fill-white hover:fill-green-200"
          >
            <UndoIcon />
          </motion.div>
        </TooltipComponent>
        <TooltipComponent content="Redo">
          <RedoIcon />
        </TooltipComponent>
      </div>
      <div>
        <SearchModal />
      </div>

      <div className="flex ml-auto gap-[10px]">
        <Chat />
        <Share />
        <Publish />
      </div>
    </div>
  );
};

export default Header;

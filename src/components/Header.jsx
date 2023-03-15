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

export const Button = forwardRef(
  ({ children, color, icon: Icon, ...props }, ref) => (
    <button
      ref={ref}
      data-color={color}
      className="styled-button flex rounded-md tracking-[0.01rem] leading-7 gap-2 py-[5px] pr-[15px] pl-[10px] flex-row text-base font-[400] items-center justify-center rounded-2"
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </button>
  )
);
Button.displayName = "Button";
Button.defaultProps = {
  color: "dark",
};

const Header = () => {
  return (
    <div className="flex items-center px-2 h-[14] bg-[#1A1A1C] min-h-[56px]">
      <div className="flex">
        <div className="ml-4 mr-[42px] pt-[12px] cursor-pointer fill-white hover:fill-green-200 ">
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
        <div className="flex items-center justify-center w-[48px] h-[38px]">
          <ChatIcon />
        </div>
        <Button icon={ShareIcon}>Share</Button>
        <Button icon={PublishIcon} color="white">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Header;

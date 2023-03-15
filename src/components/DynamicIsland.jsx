import { AnimatePresence, motion } from "framer-motion";
import LayersIcon from "@/assets/LayersIcon";
import PlusIcon from "@/assets/PlusIcon";
import RatioIcon from "@/assets/RatioIcon";
import MoreIcon from "@/assets/MoreIcon";
import { useState } from "react";

const Button = ({ icon: Icon, children }) => {
  return (
    <div className="flex overflow-hidden cursor-pointer group/item">
      <div className="bg-[#1F1F1F] px-[10px] py-[5px] rounded-md z-20">
        <Icon className="fill-white" />
      </div>
      <div className="flex items-center bg-[#1F1F1F] pr-4 pl-[22px] text-gray-200 transition-transform -translate-x-[10rem] group-hover/menu:translate-x-[-6px] opacity-1 menu-item-label">
        {children}
      </div>
    </div>
  );
};

export default function DynamicIsland() {
  const [id, setId] = useState();
  return (
    <div className="space-y-[10px] group/menu">
      <Button icon={PlusIcon}>Add</Button>
      <Button icon={LayersIcon}>Layers</Button>
      <Button icon={RatioIcon}>Ratios</Button>
      <Button icon={MoreIcon}>Settings</Button>
    </div>
  );
}

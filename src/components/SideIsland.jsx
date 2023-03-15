import { motion } from "framer-motion";
import LayersIcon from "@/assets/LayersIcon";
import PlusIcon from "@/assets/PlusIcon";
import RatioIcon from "@/assets/RatioIcon";
import MoreIcon from "@/assets/MoreIcon";
import React, { useState } from "react";
import LayersContent from "./LayersContent";
import AddContent from "./AddContent";
import RatiosContent from "./RatiosContent";
import SettingsContent from "./SettingsContent";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.03,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const icon = {
  active: {
    opacity: 1,
    x: 0,
    fill: "#1f1f1f",
    backgroundColor: "#fff",
    color: "#1f1f1f",
  },
  visible: {
    opacity: 1,
    x: 10,
  },
  hover: { x: 0, fill: "#fff", backgroundColor: "#1f1f1f", color: "#fff" },
  expand: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
    },
  }),
};

const label = {
  active: {
    opacity: 1,
    x: 18,
    backgroundColor: "#fff",
    color: "#1f1f1f",
  },
  fade: { opacity: 0, x: 18 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
    },
  }),
  hover: { backgroundColor: "#1f1f1f", color: "#fff", x: 0, opacity: 1 },
  hidden: { opacity: 0, x: -100 },
};

const Button = ({
  index,
  icon: Icon,
  children,
  expand,
  isActive,
  setActive,
  anotherSelected,
  content,
  id,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <motion.div
        className="flex rounded-md cursor-pointer"
        onClick={() => setActive(id)}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => {
          setHover(false);
        }}
      >
        <motion.div
          initial="visible"
          variants={icon}
          custom={index}
          animate={
            (isActive && "active") ||
            (hover && "hover") ||
            (expand && "expand") ||
            "visible"
          }
          className="bg-[#111112] fill-white px-[10px] py-[5px] rounded-md z-20"
        >
          <Icon />
        </motion.div>
        <div className="w-full pr-5 overflow-hidden -translate-x-2 ">
          <motion.div
            variants={label}
            custom={index}
            data-active={isActive}
            initial="hidden"
            animate={
              (anotherSelected && "fade") ||
              (isActive && "active") ||
              (hover && "hover") ||
              (expand && "visible") ||
              "hidden"
            }
            className="flex items-center data-[active=true]:w-[260px] bg-[#111112] pr-4 pl-[22px] rounded-md h-full  text-gray-200 menu-item-label"
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
      {isActive && <div className="ml-[62px] absolute z-30">{content}</div>}
    </div>
  );
};

export default function SideIsland() {
  const [id, setId] = useState();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState();

  const params = { expand: hover, setActive };
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => {
        setActive();
        setHover(false);
      }}
      initial="visible"
      variants={list}
      className="space-y-[10px]"
    >
      <Button
        id="add"
        index={0}
        isActive={active === "add"}
        anotherSelected={active !== "add" && !!active}
        icon={PlusIcon}
        content={<AddContent />}
        {...params}
      >
        Add
      </Button>
      <Button
        id="layers"
        index={1}
        isActive={active === "layers"}
        anotherSelected={active !== "layers" && !!active}
        icon={LayersIcon}
        content={<LayersContent />}
        {...params}
      >
        Layers
      </Button>
      <Button
        id="ratios"
        index={2}
        isActive={active === "ratios"}
        anotherSelected={active !== "ratios" && !!active}
        icon={RatioIcon}
        content={<RatiosContent />}
        {...params}
      >
        Ratios
      </Button>
      <Button
        id="settings"
        index={3}
        isActive={active === "settings"}
        anotherSelected={active !== "settings" && !!active}
        icon={MoreIcon}
        content={<SettingsContent />}
        {...params}
      >
        Settings
      </Button>
    </motion.div>
  );
}

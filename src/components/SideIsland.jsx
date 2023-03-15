import { AnimatePresence, motion } from "framer-motion";
import LayersIcon from "@/assets/LayersIcon";
import PlusIcon from "@/assets/PlusIcon";
import RatioIcon from "@/assets/RatioIcon";
import MoreIcon from "@/assets/MoreIcon";
import { useState } from "react";

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
  active: { opacity: 1, x: 16, backgroundColor: "#fff", color: "#1f1f1f" },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
    },
  }),
  hover: { backgroundColor: "#1f1f1f", color: "#fff" },
  hidden: { opacity: 0, x: -100 },
};

const Button = ({
  index,
  icon: Icon,
  children,
  expand,
  isActive,
  setActive,
  id,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className="flex overflow-hidden rounded-md cursor-pointer"
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
      <div className="pr-5 overflow-hidden -translate-x-2">
        <motion.div
          variants={label}
          custom={index}
          animate={
            (isActive && "active") ||
            (hover && "hover") ||
            (expand && "visible") ||
            "hidden"
          }
          className="flex items-center bg-[#111112] pr-4 pl-[22px] h-full rounded-md text-gray-200 menu-item-label"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
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
        icon={PlusIcon}
        {...params}
      >
        Add
      </Button>
      <Button
        id="layers"
        index={1}
        isActive={active === "layers"}
        icon={LayersIcon}
        {...params}
      >
        Layers
      </Button>
      <Button
        id="ratios"
        index={2}
        isActive={active === "ratios"}
        icon={RatioIcon}
        {...params}
      >
        Ratios
      </Button>
      <Button
        id="settings"
        index={3}
        isActive={active === "settings"}
        icon={MoreIcon}
        {...params}
      >
        Settings
      </Button>
    </motion.div>
  );
}

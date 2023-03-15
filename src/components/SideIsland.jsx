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

const item = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
    },
  }),
  hover: { backgroundColor: "#fff", color: "#1F1F1F" },
  hidden: { opacity: 0, x: -100 },
  active: { opacity: 1, x: 20 },
};

const Button = ({
  index,
  icon: Icon,
  children,
  hover,
  isActive,
  setActive,
  id,
}) => {
  return (
    <motion.div
      className="flex overflow-hidden rounded-md cursor-pointer"
      onClick={() => setActive(id)}
      whileHover="hover"
    >
      <div className="bg-[#1F1F1F] px-[10px] py-[5px] rounded-md z-20">
        <Icon className="fill-white" />
      </div>
      <motion.div
        variants={item}
        custom={index}
        animate={hover ? "visible" : "hidden"}
        className="flex items-center bg-[#1F1F1F] pr-4 pl-[22px] rounded-md text-gray-200 menu-item-label"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default function SideIsland() {
  const [id, setId] = useState();
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState();

  const params = { hover, setActive };
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover="visible"
      initial="visible"
      variants={list}
      className="space-y-[10px]"
    >
      {/* <motion.li variants={item}>Add</motion.li>
      <motion.li variants={item}>Layers</motion.li>
      <motion.li variants={item}>Ratios</motion.li>
      <motion.li variants={item}>Settings</motion.li> */}
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

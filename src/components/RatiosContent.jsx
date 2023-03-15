import { motion } from "framer-motion";
import { AspectRatioIcon, PlusIcon } from "@radix-ui/react-icons";

export default function AddContent(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-[5px] flex flex-col gap-[5px] w-[260px]"
    >
      <div
        className="text-white cursor-pointer shadow-[#1f1f1f] text-sm py-[14px] flex h-[45px] flex-1 rounded-[10px] items-center justify-between bg-[#252525] px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none"
        {...props}
      >
        9:16
        <AspectRatioIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300  group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </div>
      <div
        className="text-white shadow-[#1f1f1f] text-sm py-[14px] flex h-[45px] flex-1  rounded-[10px] cursor-pointer items-center justify-between bg-[#252525] px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none"
        {...props}
      >
        16:10
        <AspectRatioIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}

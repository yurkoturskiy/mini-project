import { motion } from "framer-motion";
import { useState } from "react";
import AskAnythingIcon from "@/assets/AskAnythingIcon";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  return (
    <div
      data-open={open}
      className="fixed top-0 left-0 z-10 w-full h-screen pointer-events-none "
    >
      <div
        data-open={open}
        className="absolute pointer-events-none data-[open=true]:opacity-70 opacity-0 top-0 transition-opacity left-0 w-full h-screen bg-black"
      />
      <motion.div
        layout
        data-open={open}
        className="group absolute data-[open=true]:top-[30%] mx-auto left-0 right-0 w-[500px] max-w-[30%] top-[8px] h-[40px] data-[open=true]:w-[70%] data-[open=true]:max-w-[600px] data-[open=true]:h-[64px]"
      >
        <div
          data-open={open}
          id="search-icon"
          className="fill-red-400 flex items-center w-24 h-24 absolute my-auto top-0 left-[8px] bottom-0 "
        >
          <AskAnythingIcon className="fill-[#a3a3a3]" />
        </div>
        <input
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          className="data-[open=false]:cursor-pointer search-input pl-10 mx-auto pointer-events-auto w-full h-full text-[#A3A3A3] bg-[#252525] inline-flex appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  focus:shadow-[0_0_0_2px_black] selection:color-red-500 selection:bg-blackA9"
          required
          data-open={open}
          placeholder="Ask anything"
        />
      </motion.div>
    </div>
  );
}

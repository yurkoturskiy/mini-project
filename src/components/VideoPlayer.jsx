import Image from "next/image";
import { motion } from "framer-motion";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useState } from "react";
import styles from "@/styles/VideoPlayer.module.css";
import PlayIcon from "@/assets/PlayIcon";
import VolumeIcon from "@/assets/VolumeIcon";
import PreviewIcon from "@/assets/PreviewIcon";

const image = {
  invisible: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  return (
    <div>
      <motion.div
        initial="invisible"
        variants={image}
        animate={isLoaded ? "visible" : "invisible"}
        className="bg-[#1A1A1C] rounded-2xl h-[75vh] overflow-hidden"
      >
        <Image
          onLoadingComplete={() => setIsLoaded(true)}
          src="/stopframe.png"
          width={384}
          height={685}
          className="object-cover w-full h-full"
          alt="Stopframe"
          data-loaded={isLoaded}
        />
      </motion.div>
      <div>
        <div className="flex gap-1 px-2 py-1 mt-6 mb-4 cursor-pointer">
          <div className="h-0.5 w-full rounded-full bg-white" />
          <div className="h-0.5 w-full rounded-full bg-white" />
          <div className="h-0.5 w-full rounded-full bg-white" />
          <div className="h-0.5 w-full rounded-full bg-white" />
        </div>
        <div className="flex items-center gap-5">
          <PlayIcon className="cursor-pointer" />
          <VolumeIcon className="cursor-pointer" />
          <div className="text-white">0:55 / 1:32</div>
          <div className=" cursor-pointer hover:fill-[#5e5e5e] hover:text-[#5e5e5e] fill-[#494949] flex gap-1 ml-auto text-[#494949]">
            <PreviewIcon />
            Preview
          </div>
        </div>
      </div>
    </div>
  );
}

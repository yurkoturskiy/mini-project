import Image from "next/image";
import { motion } from "framer-motion";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useState } from "react";
import styles from "@/styles/VideoPlayer.module.css";

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
    <motion.div
      initial="invisible"
      variants={image}
      animate={isLoaded ? "visible" : "invisible"}
      className="bg-[#1A1A1C] rounded-2xl overflow-hidden"
    >
      <Image
        onLoadingComplete={() => setIsLoaded(true)}
        src="/stopframe.png"
        width={384}
        height={685}
        alt="Stopframe"
        data-loaded={isLoaded}
        className={`h-full`}
      />
    </motion.div>
  );
}

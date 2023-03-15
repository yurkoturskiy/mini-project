import Image from "next/image";
import { motion } from "framer-motion";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useState } from "react";
import styles from "@/styles/VideoPlayer.module.css";

export default function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  return (
    <motion.div
      whileHover={{ scale: 1, y: -2 }}
      className="bg-[#1A1A1C] rounded-2xl overflow-hidden"
    >
      <Image
        onLoadingComplete={() => setIsLoaded(true)}
        src="/stopframe.png"
        data-pin-no-hover
        width={384}
        height={685}
        alt="Stopframe"
        data-loaded={isLoaded}
        className={`${styles.image} h-full`}
      />
    </motion.div>
  );
}

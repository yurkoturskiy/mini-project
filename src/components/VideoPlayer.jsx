import Image from "next/image";
import { motion } from "framer-motion";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { useState } from "react";
import styles from "@/styles/VideoPlayer.module.css";

export default function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  return (
    <div className="bg-[#1A1A1C] rounded-2xl overflow-hidden">
      <Image
        onLoadingComplete={() => setIsLoaded(true)}
        src="/stopframe.png"
        width={384}
        height={685}
        alt="Stopframe"
        data-loaded={isLoaded}
        className={`${styles.image} h-full`}
      />
    </div>
  );
}

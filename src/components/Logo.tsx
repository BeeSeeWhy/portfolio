import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-ink-2 text-paper border border-line-strong flex items-center justify-center
            rounded-full text-lg sm:text-xl md:text-2xl font-display font-semibold
            "
        whileHover={{
          scale: 1.5,
          backgroundColor: [
            "#1B1F2A",
            "#E2993D",
            "#E2993D",
            "#E2993D",
            "#E2993D",
            "#E2993D",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        BCY
      </MotionLink>
    </div>
  );
};

export default Logo;

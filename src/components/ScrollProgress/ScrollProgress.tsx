import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, p)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="2px"
      zIndex={10000}
      pointerEvents="none"
      bg="transparent"
    >
      <motion.div
        style={{ height: "100%", width: `${progress}%` }}
        initial={false}
        animate={reduceMotion ? undefined : { width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
        <Box
          height="100%"
          bgGradient="linear(to-r, rgba(56,189,248,1), rgba(16,185,129,1))"
        />
      </motion.div>
    </Box>
  );
};


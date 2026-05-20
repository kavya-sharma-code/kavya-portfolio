import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export const InitialLoader: React.FC<{ isReady: boolean }> = ({ isReady }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isReady ? 0 : 1 }}
      transition={{ duration: 0.25 }}
      style={{ position: "fixed", inset: 0, zIndex: 9999 }}
      aria-hidden={isReady}
    >
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        bgGradient="radial-gradient(circle at 20% 10%, rgba(56,189,248,.28), transparent 45%), radial-gradient(circle at 80% 20%, rgba(16,185,129,.18), transparent 45%), rgba(10, 10, 18, 0.72)"
        backdropFilter="blur(10px)"
      >
        <Box textAlign="center">
          <motion.div
            initial={{ scale: 0.9, filter: "blur(6px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Text
              fontFamily="heading"
              fontWeight={700}
              letterSpacing="-0.02em"
              fontSize={{ base: "xl", sm: "2xl" }}
              color="white"
            >
              Kavya Sharma
            </Text>
          </motion.div>
          <Text mt={2} color="rgba(255,255,255,.78)" fontSize="sm">
            Loading portfolio...
          </Text>
          <Box mt={6} w={{ base: 180, sm: 240 }} mx="auto">
            <Box
              h="8px"
              borderRadius="999px"
              bg="rgba(255,255,255,.12)"
              overflow="hidden"
            >
              <motion.div
                style={{ height: "100%" }}
                initial={{ width: "12%" }}
                animate={{ width: ["18%", "70%", "40%", "92%", "18%"] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
};


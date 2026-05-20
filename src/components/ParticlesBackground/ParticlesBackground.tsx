import React from "react";
import { Box } from "@chakra-ui/react";

// Lightweight “particle-ish” background using CSS animations (no heavy libs).
export const ParticlesBackground: React.FC = () => {
  return (
    <Box
      position="absolute"
      inset={0}
      zIndex={0}
      pointerEvents="none"
      overflow="hidden"
      aria-hidden
      sx={{
        ".pb-dot": {
          position: "absolute",
          width: "2px",
          height: "2px",
          borderRadius: "999px",
          background: "rgba(56,189,248,.75)",
          boxShadow: "0 0 14px rgba(56,189,248,.35)",
          animation: "pb-float 7s linear infinite",
          opacity: 0.9,
        },
        ".pb-dot.alt": {
          background: "rgba(16,185,129,.7)",
          boxShadow: "0 0 14px rgba(16,185,129,.25)",
        },
        "@keyframes pb-float": {
          "0%": { transform: "translateY(30px)", opacity: 0 },
          "10%": { opacity: 0.9 },
          "100%": { transform: "translateY(-120px)", opacity: 0 },
        },
      }}
    >
      <Box className="pb-layer" position="absolute" inset={0}>
        {Array.from({ length: 18 }).map((_, i) => {
          const left = (i * 7.2) % 100;
          const top = 85 - ((i * 11) % 70);
          const duration = 6 + (i % 6);
          const delay = (i % 9) * -0.6;
          const alt = i % 4 === 0;
          return (
            <Box
              key={i}
              className={`pb-dot${alt ? " alt" : ""}`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </Box>

      {/* subtle glow */}
      <Box
        position="absolute"
        top="-20%"
        left="-10%"
        width="420px"
        height="420px"
        borderRadius="50%"
        bg="radial-gradient(circle at center, rgba(56,189,248,.18), transparent 55%)"
        filter="blur(8px)"
      />
      <Box
        position="absolute"
        bottom="-30%"
        right="-15%"
        width="520px"
        height="520px"
        borderRadius="50%"
        bg="radial-gradient(circle at center, rgba(16,185,129,.14), transparent 60%)"
        filter="blur(10px)"
      />
    </Box>
  );
};


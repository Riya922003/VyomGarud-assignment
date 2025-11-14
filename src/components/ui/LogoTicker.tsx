"use client";

import React from "react";
import { motion } from "framer-motion";

// We use simple text for now. 
// If you have SVG images, replace the <span> with <img src="..." />
const partners = [
  "AIIMS RISHIKESH",
  "DEFENSE R&D ORG",
  "TATA ADVANCED SYSTEMS",
  "IIT AEROSPACE",
  "NATIONAL DISASTER FORCE",
  "APOLLO HOSPITALS",
];

export const LogoTicker = () => {
  return (
    <div className="py-8 w-full  flex flex-col items-center justify-center overflow-hidden">
      {/* Optional Title */}
      <p className="text-sm text-neutral-500 uppercase tracking-widest mb-10 md:mb-12 font-medium">
        TRUSTED BY STRATEGIC PARTNERS
      </p>

      {/* Container with Gradient Mask for "Fade out" effect */}
  <div className="flex w-full max-w-5xl mx-auto overflow-hidden relative mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        
        {/* The Moving Track */}
        <motion.div
          className="flex gap-16 md:gap-24 pr-16 md:pr-24 whitespace-nowrap"
          animate={{
            x: "-50%", // Move halfway (because we doubled the list)
          }}
          transition={{
            duration: 20, // Speed (higher = slower)
            ease: "linear",
            repeat: Infinity, // Loop forever
          }}
        >
          {/* RENDER TWICE to create the seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex items-center gap-2 group cursor-default">
              {/* Icon Placeholder (Optional) */}
              <div className="h-2 w-2 rounded-full bg-[#ff7b00] opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Logo Text */}
              <span className="text-lg md:text-xl font-bold text-neutral-400 group-hover:text-white transition-colors uppercase tracking-tighter font-mono">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

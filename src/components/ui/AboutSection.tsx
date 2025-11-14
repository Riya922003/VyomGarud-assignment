"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Import your utility function
import { EncryptedText } from "@/components/ui/encrypted-text";

// 1. DEFINE THE TAB DATA
// We use the text you provided, but break it into
// a title and a description for our UI.

const tabData = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "Our mission is to bridge the gap between technology and humanitarian needs by enabling the rapid, reliable, and efficient delivery of essential medical resources, such as blood, vaccines, and emergency equipment. This ensures accessibility even in remote regions.",
  },
  {
    id: "tech",
    title: "Our Technology",
    description:
      "Vyom Garud UAV Solutions is an emerging innovator in the aerospace and aviation industry, focused on designing and developing advanced Unmanned Aerial Vehicle (UAV) systems to revolutionize medical logistics and transform the transportation of critical healthcare supplies.",
  },
  {
    id: "team",
    title: "Our Team",
    description:
      "Beyond technology, Vyom Garud is dedicated to nurturing young professionals by transforming their passion into reality through hands-on opportunities, innovation, and mentorship in UAV and aerospace development.",
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "Our vision is to build a sustainable aerial logistics ecosystem that strengthens national healthcare infrastructure and empowers the next generation of aerospace innovators.",
  },
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].id); // Default to first tab
  const activeContent = tabData.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full bg-neutral-950 py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* LEFT SIDE: Section Title */}
        <div className="md:col-span-4">
          {/* Encrypted reveal text replacing the static heading */}
          <div className="text-3xl md:text-5xl font-bold tracking-tighter">
            <EncryptedText
              text={"Engineered For\nHumanitarian Impact."}
              encryptedClassName="text-neutral-500"
              revealedClassName="text-white"
              revealDelayMs={30}
            />
          </div>
          <p className="text-neutral-400 mt-4 text-lg">
            A strategic overview of the VyomGarud initiative.
          </p>
        </div>

        {/* RIGHT SIDE: Interactive UI */}
        <div className="md:col-span-8">
          {/* The Tab Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-neutral-700 pb-4">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "py-2 px-4 text-sm md:text-base font-medium rounded-md transition-all",
                  activeTab === tab.id
                    ? "bg-brand text-white" // Active state
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100" // Inactive state
                )}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* The Animated Content Area */}
          <div className="relative h-48 md:h-40 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab} // This is CRUCIAL for AnimatePresence
                initial={{ opacity: 0, y: 20 }}  // Start faded out and slightly down
                animate={{ opacity: 1, y: 0 }}   // Fade in and move to position
                exit={{ opacity: 0, y: -20 }} // Fade out and move slightly up
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {activeContent?.title}
                </h3>
                <p className="text-lg text-neutral-300">
                  {activeContent?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

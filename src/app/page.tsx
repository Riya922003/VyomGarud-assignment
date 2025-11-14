"use client";

import React from 'react';
import { Spotlight } from '@/components/ui/spotlight-new';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';

export default function HeroSection() {
  return (
  <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black -mt-16">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-90"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/Hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10" />

      
      <div className="relative z-30 p-4 max-w-7xl mx-auto w-full text-center">
        {/* Spotlight confined to the text container so it doesn't affect the navbar */}
        <Spotlight className="absolute inset-0 z-0 pointer-events-none -top-6 md:-top-4" fill="white" />
        {/* Animated flipping subheading to replace static line */}
        <div className="mb-3 text-white uppercase tracking-wider">
          <LayoutTextFlip
            text="MISSION CRITICAL AERIAL"
            words={[
              "LOGISTICS",
              "SOLUTIONS",
              "DELIVERY",
              "MOBILITY",
              "OPERATIONS",
            ]}
            duration={3000}
          />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
          VYOMGARUD
        </h1>

        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
          Bridging the gap between advanced aerospace engineering and humanitarian needs. We deploy precision UAV systems to deliver life-saving medical payloads to the most remote frontiers. Swift. Reliable. Unstoppable.
        </p>

        <div className="mt-8">
          <button className="bg-[#ff7b00] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,123,0,0.5)]">
            Initialize System
          </button>
        </div>
      </div>
    </div>
  );
}

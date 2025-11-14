"use client";

import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

const mockCards = [
  {
    id: "vg-medilift",
    title: "VG-Medilift",
    description:
      "Rapid medical payload delivery platform optimized for remote, harsh environments.",
    specs: [
      ["Range", "120 km"],
      ["Payload", "5 kg"],
      ["Endurance", "90 min"],
    ],
  },
  {
    id: "vg-cargo",
    title: "VG-Cargo",
    description: "High-capacity logistics carrier for regional resupply missions.",
    specs: [
      ["Range", "250 km"],
      ["Payload", "25 kg"],
      ["Endurance", "180 min"],
    ],
  },
  {
    id: "vg-ops",
    title: "VG-OPS",
    description: "Autonomous operations suite for coordinated multi-UAV missions.",
    specs: [
      ["Swarm", "Up to 20 units"],
      ["Autonomy", "Level 4"],
      ["Link", "Encrypted SAT/LOS"],
    ],
  },
];

export const FeaturesSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn("w-full bg-neutral-900 py-20 px-4", className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Featured Systems
        </h2>
        <p className="text-neutral-400 mb-10 max-w-2xl">
          Advanced UAV platforms designed for resilient, mission-critical payload delivery and autonomous operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockCards.map((card) => (
            // slightly taller cards to make room for the button and avoid overlap
            <CardSpotlight key={card.id} className="h-[520px] flex flex-col rounded-xl overflow-hidden">
              {/* Top image area (45%) */}
              <div className="h-[45%] rounded-md overflow-hidden bg-linear-to-tr from-neutral-800 via-neutral-900 to-black flex items-center justify-center">
                {/* Placeholder image — replace with actual <img/> when content is available */}
                <div className="text-neutral-400">Image</div>
              </div>

              {/* Bottom content (55%) */}
              <div className="pt-6 flex-1 flex flex-col justify-between relative">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-200 mb-2 transition-colors duration-200 group-hover/spotlight:text-white">{card.title}</h3>
                  <p className="text-neutral-400 mb-4 transition-colors duration-200 group-hover/spotlight:text-white">{card.description}</p>

                  <ul className="grid grid-cols-1 gap-2 text-neutral-300 text-sm">
                    {card.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-[#ff7b00] shrink-0" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.464a1 1 0 011.414-1.414L8 11.343l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-neutral-200 mr-2 transition-colors duration-200 group-hover/spotlight:text-white">{spec[0]}:</span>
                        <span className="text-neutral-400 transition-colors duration-200 group-hover/spotlight:text-white">{spec[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* button placed here so it flows below the text */}
                <div className="mt-6">
                  <button className="bg-[#ff7b00] hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">
                    View Specs
                  </button>
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};

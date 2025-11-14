"use client";

import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const svgThumb = encodeURIComponent(`
	<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
		<defs>
			<linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
				<stop offset='0' stop-color='#0b0b0b' />
				<stop offset='1' stop-color='#151515' />
			</linearGradient>
		</defs>
		<rect width='100%' height='100%' fill='url(#g)' />
	</svg>
`);

const thumbnail = `data:image/svg+xml;utf8,${svgThumb}`;

export const HighlightsSection: React.FC = () => {
	return (
			<section aria-labelledby="highlights" className="py-12 bg-black">
				<div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 text-white">
					<h2 id="highlights" className="text-2xl md:text-3xl font-bold mb-6">CORE SYSTEM CAPABILITIES</h2>
							<div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 gap-6">
								{/* Top-left: wide (left, spans 2 columns at md+) */}
								<div
									className="md:col-span-2 rounded-xl overflow-hidden relative bg-cover bg-center bg-neutral-900 bg-blend-overlay shadow-lg ring-1 ring-white/5"
									style={{ backgroundImage: `url('${thumbnail}')`, minHeight: '12rem' }}
								>
									{/* ripple background effect sits behind content */}
									<BackgroundRippleEffect className="absolute inset-0 z-0" />
									<div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
									<div className="p-6 relative z-10">
										<h3 className="text-lg font-bold mb-2">AI AUTONOMOUS ROUTING</h3>
										<p className="text-neutral-300">On-board AI platform (&quot;Aegis OS&quot;) manages real-time flight paths, obstacle avoidance, and dynamic fleet coordination for safe and efficient delivery.</p>
									</div>
								</div>

								{/* Top-right: portrait (right column, row 1) */}
								<div
									className="md:col-start-3 md:row-start-1 rounded-xl overflow-hidden relative bg-cover bg-center bg-neutral-900 bg-blend-overlay shadow-lg ring-1 ring-white/5"
									style={{ backgroundImage: `url('${thumbnail}')`, minHeight: '12rem' }}
								>
									<div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
									<div className="p-6 relative z-10">
										<h3 className="text-lg font-bold mb-2">ALL-WEATHER OPERATIONS</h3>
										<p className="text-neutral-300">IP67-rated airframes and redundant propulsion systems ensure mission-critical reliability in high winds, rain, and adverse weather conditions.</p>
									</div>
								</div>

								{/* Bottom-left: small */}
								<div
									className="md:col-start-1 md:row-start-2 rounded-xl overflow-hidden relative bg-cover bg-center bg-neutral-900 bg-blend-overlay shadow-lg ring-1 ring-white/5"
									style={{ backgroundImage: `url('${thumbnail}')`, minHeight: '10rem' }}
								>
									<div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
									<div className="p-6 relative z-10">
										<h3 className="text-lg font-bold mb-2">COLD-CHAIN INTEGRITY</h3>
										<p className="text-neutral-300">Active, on-board refrigeration and 24/7 temperature monitoring guarantee the viability of sensitive medical payloads like vaccines and biologics from pickup to drop-off.</p>
									</div>
								</div>

								{/* Bottom-right: wide (spans last two columns) */}
											<div
												className="md:col-start-2 md:col-span-2 md:row-start-2 rounded-xl overflow-hidden relative bg-cover bg-center bg-neutral-900 bg-blend-overlay shadow-lg ring-1 ring-white/5"
												style={{ backgroundImage: `url('${thumbnail}')`, minHeight: '12rem' }}
											>
												{/* ripple background effect for this card */}
												<BackgroundRippleEffect className="absolute inset-0 z-0" />
												<div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
												<div className="p-6 relative z-10">
													<h3 className="text-lg font-bold mb-2">ENCRYPTED COMMUNICATION LINK</h3>
													<p className="text-neutral-300">Secure, military-grade data links prevent signal jamming or hijacking, ensuring your critical payload and flight data are always protected.</p>
												</div>
											</div>
				</div>
			</div>
		</section>
	);
};

export default HighlightsSection;


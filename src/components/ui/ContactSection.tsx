"use client";

import React from "react";
import Hyperspeed from "@/components/Hyperspeed";

export const ContactSection: React.FC = () => {
  return (
    <section aria-labelledby="contact-us" className="relative py-20 bg-black">
  {/* Hyperspeed background animation behind the card */}
  {/* Use z-0 for the animation so it sits above the section background but below the card. */}
  <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <Hyperspeed />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="relative z-10 bg-neutral-900/70 ring-1 ring-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 id="contact-us" className="text-2xl md:text-3xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-neutral-300">
                Reach out for partnerships, enterprise integrations, or demo requests. Fill the form and our team will get back to you within one business day.
              </p>
            </div>

            <form className="space-y-4" action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm text-neutral-300 mb-2">Name</span>
                  <input
                    className="bg-neutral-800 text-neutral-100 placeholder:text-neutral-500 border border-neutral-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
                    placeholder="Your name"
                    name="name"
                    required
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm text-neutral-300 mb-2">Email</span>
                  <input
                    type="email"
                    className="bg-neutral-800 text-neutral-100 placeholder:text-neutral-500 border border-neutral-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
                    placeholder="you@company.com"
                    name="email"
                    required
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-sm text-neutral-300 mb-2">Subject</span>
                <input
                  className="bg-neutral-800 text-neutral-100 placeholder:text-neutral-500 border border-neutral-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
                  placeholder="What is this about?"
                  name="subject"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-neutral-300 mb-2">Message</span>
                <textarea
                  rows={5}
                  className="bg-neutral-800 text-neutral-100 placeholder:text-neutral-500 border border-neutral-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
                  placeholder="Tell us more about your project..."
                  name="message"
                />
              </label>

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#ff7b00] hover:bg-orange-600 text-black font-semibold px-6 py-3 rounded-md shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

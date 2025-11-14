import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand & address */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white">VyomGarud</h3>
            <p className="mt-2 text-neutral-400">Precision Aerospace. Engineered in India.</p>

            <address className="not-italic mt-4 text-sm text-neutral-400">
              12, Hoshangabad Rd, <br />
              Bhopal, Madhya Pradesh, India
            </address>

            <div className="mt-4 text-sm text-neutral-400 space-y-1">
              <div>ISO 9001:2015</div>
              <div>DGCA Certified</div>
            </div>
          </div>

          {/* Column 1: Fleet */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Fleet</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:underline">VG-Medilift</a></li>
              <li><a href="#" className="hover:underline">VG-CryoLink</a></li>
              <li><a href="#" className="hover:underline">VG-Pathfinder</a></li>
              <li><a href="#" className="hover:underline">Aegis OS (Software)</a></li>
              <li><a href="#" className="hover:underline">Our Technology</a></li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:underline">Request a Demo</a></li>
              <li><a href="#" className="hover:underline">Operator Training</a></li>
              <li><a href="#" className="hover:underline">Service & Maintenance</a></li>
              <li><a href="#" className="hover:underline">System Integration</a></li>
              <li><a href="#" className="hover:underline">Warranty</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:underline">Our Mission</a></li>
              <li><a href="#" className="hover:underline">About VyomGarud</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press / Media</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Floating Dock (centered) */}
          <div className="md:col-span-1 flex items-center justify-center">
            {/* Build a small items array for the dock */}
            <FloatingDock
              desktopClassName="mx-auto"
              mobileClassName="translate-y-0"
              items={[
                { title: "Home", icon: <IconHome className="h-full w-full text-neutral-500" />, href: "#" },
                { title: "Products", icon: <IconTerminal2 className="h-full w-full text-neutral-500" />, href: "#" },
                { title: "Docs", icon: <IconNewSection className="h-full w-full text-neutral-500" />, href: "#" },
                { title: "Changelog", icon: <IconExchange className="h-full w-full text-neutral-500" />, href: "#" },
                { title: "X", icon: <IconBrandX className="h-full w-full text-neutral-500" />, href: "#" },
                { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-500" />, href: "#" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
          <div>© 2025 VyomGarud UAV Solutions. All rights reserved.</div>
          <div className="mt-3 md:mt-0">
            <a href="#" className="hover:underline mr-4">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

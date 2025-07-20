"use client";

import { useState } from "react";
import {
  ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarCustomLogo,
} from "@/components/ui/ResizeableNavbar";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      // icon: <PaintBrushBroadIcon size={20} />,
    },
    {
      name: "Animations",
      link: "/animations",
      // icon: <ShootingStarIcon size={20} />,
    },
    {
      name: "Projects",
      link: "/projects",
      // icon: <ProjectorScreenIcon size={20} />,
    },
    {
      name: "Work History",
      link: "/work-history",
      // icon: <MoneyWavyIcon size={20} />,
    },
    {
      name: "About Me",
      link: "/about",
      // icon: <HandWaving size={20} />,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center justify-end gap-0">
            <NavbarCustomLogo img="/monsters/purple-monster-legs-logo.png" />
            <NavbarCustomLogo img="/monsters/monster-tentacles-logo.png" />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-row items-center justify-end gap-0">
              <NavbarCustomLogo img="/monsters/purple-monster-legs-logo.png" />
              <NavbarCustomLogo img="/monsters/monster-tentacles-logo.png" />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}

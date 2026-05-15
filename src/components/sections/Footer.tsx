"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="w-full border-t border-transparent bg-[#161e23]">
      <div className="mx-auto flex h-[84px] max-w-8xl items-center justify-center px-6">
        <p className="text-center text-[14px] italic leading-none text-white/55 md:text-[16px]">
          © 2025 mucnjak.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
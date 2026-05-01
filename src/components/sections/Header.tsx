"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const navItems = [
    { name: "Our Services", href: "/#our-services" },
    { name: "Our Work", href: "/#our-work" },
    { name: "About Us", href: "/#about" },
  ];

  // Smart scroll handler: same page → smooth scroll; other page → navigate then scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.split("#")[1];
    if (!hash) return;

    if (pathname === "/") {
      e.preventDefault();
      setMobileOpen(false);
      
          // Small timeout to let the UI react (especially closing the mobile menu) before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const headerEl = document.querySelector('header');
          const headerHeight = headerEl ? headerEl.offsetHeight : 72;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // 20px extra buffer

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 10);
    }
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="w-full ">
          <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
            <Link
              href="/"
              className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[24px] md:text-[26px]"
            >
              UNUM.DIGITAL 
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#161E23]">
      <div className="relative w-full">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 text-[20px] font-semibold tracking-[-0.03em] text-white transition-opacity duration-200 hover:opacity-90 sm:text-[22px] md:text-[24px] lg:text-[25px]"
          >

            <img src="../assets/img/unumdigital-logo.svg" alt="logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[12px] font-medium text-white/90 transition-colors duration-200 hover:text-white xl:text-[13px]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/#lets-talk"
              onClick={(e) => handleNavClick(e, "/#lets-talk")}
              className="inline-flex h-[38px] items-center justify-center rounded-full bg-[#31AC00] px-5 text-[12px] font-medium text-white transition-all duration-200 hover:bg-[#3eab10] xl:h-[40px] xl:px-6 xl:text-[13px]"
            >
              Let&apos;s Talk
            </Link>
          </nav>

          {/* Tablet + Mobile Button */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            mobileOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 bg-[#0b151c] px-4 py-5 sm:px-6 md:px-10">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[14px] font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/#lets-talk"
                onClick={(e) => handleNavClick(e, "/#lets-talk")}
                className="mt-1 inline-flex h-[42px] w-full items-center justify-center rounded-full bg-[#49c313] px-6 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#3eab10] sm:w-fit sm:min-w-[160px]"
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
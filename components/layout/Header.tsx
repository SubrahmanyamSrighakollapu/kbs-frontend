"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { navItems } from "@/data/home";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled
          ? "py-3 shadow-md border-b border-slate-100"
          : "py-4 md:py-5 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-slate-900">
              KBS
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest font-semibold text-slate-500 uppercase ml-1.5 pt-0.5 border-l border-slate-300 pl-1.5">
              GROUP
            </span>
            <span className="text-xl sm:text-2xl font-black text-[#E52B2F] ml-1.5">
              IT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href)) ||
                  (item.href === "/contacts" && pathname === "/contact");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14px] xl:text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#E52B2F] font-bold border-b-2 border-[#E52B2F] pb-0.5"
                    : "text-slate-700 hover:text-[#E52B2F]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side CTA + Search + Hamburger */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Let's Talk Button */}
          <Link
            href="/contacts"
            className="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#E52B2F] text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-[#c92226] active:scale-95 transition-all shadow-sm hover:shadow-md"
          >
            Let&apos;s Talk
          </Link>

          {/* Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className="p-2 text-slate-700 hover:text-[#E52B2F] hover:bg-slate-100 rounded-full transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="lg:hidden p-2 text-slate-800 hover:text-[#E52B2F] hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Expandable Search Modal/Bar */}
      {searchOpen && (
        <div className="border-t border-slate-100 bg-slate-50 py-3 px-4 transition-all animate-fade-in">
          <div className="max-w-[1340px] mx-auto flex items-center gap-3">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search KBS IT services, verticals, products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-800 focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium px-2 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Right Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center">
              <span className="font-extrabold text-xl tracking-tighter text-slate-900">
                KBS
              </span>
              <span className="text-[10px] tracking-widest font-semibold text-slate-500 uppercase ml-1.5 pt-0.5 border-l border-slate-300 pl-1.5">
                GROUP
              </span>
              <span className="text-xl font-black text-[#E52B2F] ml-1.5">
                IT
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E52B2F] transition-colors py-1.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <Link
            href="/contacts"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#E52B2F] text-white font-semibold hover:bg-[#c92226] transition-colors shadow-sm text-center"
          >
            Let&apos;s Talk
          </Link>
          <p className="text-xs text-center text-slate-400 mt-4">
            © 2026 KBS Information Technology
          </p>
        </div>
      </div>
    </header>
  );
}

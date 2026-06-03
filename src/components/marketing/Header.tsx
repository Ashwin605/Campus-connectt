"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function MarketingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/40" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-2 z-50">
        <Logo className="h-9 w-9 shadow-sm" />
        <span className="font-bold text-xl tracking-tight text-foreground">
          College Connect
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 z-50">
        {["Features", "Network", "Hubs", "Pricing"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4 z-50">
        <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Log in
        </Link>
        <Link href="/home">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          >
            Dashboard
          </motion.button>
        </Link>
      </div>

      <button className="md:hidden z-50 text-foreground">
        <Menu className="h-6 w-6" />
      </button>
    </motion.header>
  );
}

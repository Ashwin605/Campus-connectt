"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  Building2,
  CalendarDays,
  BookOpen,
  Briefcase,
  GraduationCap,
  Rocket,
  Code,
  Store,
  MessageSquare,
  Bell,
  User,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { name: "Home Feed", href: "/home", icon: Home },
  { name: "Network", href: "/network", icon: Users },
  { name: "Clubs", href: "/clubs", icon: Building2 },
  { name: "Events", href: "/events", icon: CalendarDays },
  { name: "Study Groups", href: "/study-groups", icon: BookOpen },
  { name: "Internships", href: "/internships", icon: Briefcase },
  { name: "Mentorship", href: "/mentorship", icon: GraduationCap },
  { name: "Startup Hub", href: "/startup-hub", icon: Rocket },
  { name: "Hackathons", href: "/hackathons", icon: Code },
  { name: "Marketplace", href: "/marketplace", icon: Store },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 z-40 hidden h-[calc(100vh-4rem)] w-64 flex-col overflow-y-auto border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:flex">
      <div className="flex w-full flex-col gap-2 p-4">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-primary/10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <Icon className="h-5 w-5 z-10" />
                <span className="z-10">{item.name}</span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

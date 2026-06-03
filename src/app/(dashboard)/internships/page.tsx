"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { Briefcase, ArrowRight, Star, Heart, Share2, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const items = ["Software Engineer Intern","Product Design Intern","Marketing Associate","Data Analyst Intern","Investment Banking","Research Assistant"];
  
  return (
    <PageTransition title="Internships" description="Access exclusive opportunities. Track applications and get referrals from alumni." icon={Briefcase}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, type: "spring", bounce: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex flex-col justify-between rounded-[2rem] bg-white border border-border/80 p-6 shadow-sm hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-foreground shadow-inner shadow-white border border-white/50 group-hover:scale-110 transition-transform duration-500">
                  <Briefcase className="h-7 w-7" />
                </div>
                <button className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item}</h3>
              <p className="text-muted-foreground text-sm font-medium line-clamp-2 mb-6">
                Explore the latest updates, connect with members, and dive into the details of {item}. Experience the premium network.
              </p>
              
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-foreground">
                  <Star className="h-3.5 w-3.5" /> Featured
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
                  Active
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-5 border-t border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-4 text-muted-foreground">
                <button className="hover:text-destructive transition-colors"><Heart className="h-5 w-5" /></button>
                <button className="hover:text-primary transition-colors"><Share2 className="h-5 w-5" /></button>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors group-hover:translate-x-1">
                View Details <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
}

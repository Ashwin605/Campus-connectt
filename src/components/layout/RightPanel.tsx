"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calendar, UserPlus, Briefcase } from "lucide-react";

const TRENDING = [
  { topic: "#CampusLife", posts: "1.2k" },
  { topic: "Web3 Hackathon", posts: "856" },
  { topic: "Final Exams", posts: "542" },
];

export function RightPanel() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-80 flex-col gap-6 overflow-y-auto border-l border-border/40 p-6 xl:flex">
      
      {/* Trending Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-4 rounded-2xl bg-card p-5 border border-border shadow-sm"
      >
        <div className="flex items-center gap-2 font-semibold">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2>Trending Topics</h2>
        </div>
        <div className="flex flex-col gap-3">
          {TRENDING.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 5 }}
              className="group cursor-pointer"
            >
              <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.topic}</p>
              <p className="text-xs text-muted-foreground">{item.posts} posts</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Suggested Connections */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-4 rounded-2xl bg-card p-5 border border-border shadow-sm"
      >
        <div className="flex items-center gap-2 font-semibold">
          <UserPlus className="h-5 w-5 text-primary" />
          <h2>Suggested Connections</h2>
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted border border-border" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium leading-none">Alex Morgan</p>
                  <p className="text-xs text-muted-foreground mt-1">CS Junior</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Connect
              </motion.button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-4 rounded-2xl bg-card p-5 border border-border shadow-sm"
      >
        <div className="flex items-center gap-2 font-semibold">
          <Calendar className="h-5 w-5 text-primary" />
          <h2>Upcoming Events</h2>
        </div>
        <div className="flex flex-col gap-3">
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col rounded-xl bg-muted/50 p-3 cursor-pointer"
            >
              <p className="text-sm font-semibold">Tech Startup Mixer</p>
              <p className="text-xs text-muted-foreground mt-1">Tomorrow, 5:00 PM</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </aside>
  );
}

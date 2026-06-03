"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function PageTransition({ children, title, description, icon: Icon }: { children: ReactNode, title: string, description: string, icon?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
      className="space-y-8"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-card p-10 shadow-sm border border-border">
        {/* Background Decorative Blobs */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/30 blur-[80px]" />
        
        <div className="relative z-10 flex items-center gap-6">
          {Icon && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-inner shadow-white/50"
            >
              <Icon className="h-10 w-10 text-foreground" />
            </motion.div>
          )}
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-extrabold tracking-tight text-foreground"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-lg text-muted-foreground font-medium max-w-2xl"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

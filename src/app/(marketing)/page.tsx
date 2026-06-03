"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { Hero3D } from "@/components/3d/NetworkGraph";
import { ArrowRight, Sparkles, Building2, Users, Briefcase, Rocket, Code, Brain } from "lucide-react";
import { Logo } from "@/components/ui/logo";

const FEATURES = [
  {
    title: "Clubs & Communities",
    description: "Discover and join vibrant campus organizations. Manage events, members, and discussions in one place.",
    icon: Building2,
  },
  {
    title: "Smart Networking",
    description: "Connect with peers, alumni, and faculty based on shared interests, skills, and career goals.",
    icon: Users,
  },
  {
    title: "Internship Hub",
    description: "Access exclusive opportunities. Track applications and get referrals from alumni directly.",
    icon: Briefcase,
  },
  {
    title: "Startup Ecosystem",
    description: "Find co-founders, pitch ideas, and connect with student investors and mentors.",
    icon: Rocket,
  },
  {
    title: "Hackathons",
    description: "Form teams, compete in campus-wide challenges, and showcase your projects on global leaderboards.",
    icon: Code,
  },
];

const AI_FEATURES = [
  { title: "AI Interview Simulator", status: "Coming Q3 2026" },
  { title: "AI Mentor Matching", status: "Coming Q3 2026" },
  { title: "AI Startup Advisor", status: "Coming Q4 2026" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 20 } },
};

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });

  // Parallax effects
  const yHero = useTransform(smoothProgress, [0, 0.2], [0, 150]);
  const opacityHero = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const scaleHero = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);
  const yFeatures = useTransform(smoothProgress, [0.1, 0.4], [100, 0]);

  return (
    <div ref={containerRef} className="relative bg-background overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        <Hero3D />
        
        <motion.div
          style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center space-y-10 max-w-5xl px-4"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 rounded-full border border-secondary/50 bg-secondary/30 px-6 py-2.5 text-sm font-bold text-foreground backdrop-blur-md shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-foreground animate-pulse" />
            <span>The Future of Student Experience</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-tight text-foreground leading-[1.1]"
          >
            Your Campus.<br />
            <span className="inline-block mt-2 px-6 py-2 bg-primary rounded-[2rem] shadow-sm rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              Upgraded.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-medium mt-4"
          >
            College Connect is the premium operating system for your academic journey. 
            Network, discover clubs, land internships, and build startups—all in one beautiful ecosystem.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 pt-6"
          >
            <Link href="/home">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-10 py-4 font-bold text-foreground shadow-lg transition-all hover:bg-[#c9e4cd]"
              >
                <span>Enter Dashboard</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white border-2 border-border px-10 py-4 font-bold text-foreground shadow-sm transition-all hover:bg-muted"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. OVERVIEW & METRICS */}
      <section id="features" className="relative z-20 bg-background py-32">
        <motion.div style={{ y: yFeatures }} className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mx-auto max-w-3xl lg:text-center"
          >
            <h2 className="text-sm font-extrabold tracking-widest uppercase text-foreground bg-secondary inline-block px-4 py-2 rounded-full mb-6">Everything you need</h2>
            <p className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-tight">
              Replace a dozen broken campus portals.
            </p>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground font-medium">
              We've consolidated social networking, club management, career services, and academic collaboration into a single, seamless platform.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. FEATURES GRID */}
      <section className="relative z-20 bg-background pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex flex-col items-start gap-6 rounded-[2rem] border border-border bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:border-primary"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-foreground">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI ROADMAP */}
      <section id="hubs" className="relative z-20 py-32 overflow-hidden bg-muted rounded-[3rem] mx-4 lg:mx-12 mb-32 border border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 text-sm font-bold text-foreground mb-8 shadow-sm">
                <Brain className="h-5 w-5 text-foreground" />
                <span>Next-Gen Intelligence</span>
              </div>
              <h2 className="text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
                Supercharged by AI.
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-medium">
                We're building an intelligent assistant layer into every aspect of College Connect. Your career roadmap, mentorship matches, and learning paths will be dynamically generated.
              </p>
              <div className="flex flex-col gap-4">
                {AI_FEATURES.map((feature, idx) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                    className="flex items-center justify-between p-5 rounded-2xl border border-border bg-white shadow-sm cursor-pointer"
                  >
                    <span className="text-lg font-bold text-foreground">{feature.title}</span>
                    <span className="text-sm font-bold text-foreground bg-primary px-4 py-1.5 rounded-full">
                      {feature.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Minimalist AI Visualizer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="lg:w-1/2 w-full aspect-square rounded-[3rem] bg-white border border-border relative overflow-hidden flex items-center justify-center shadow-lg"
            >
               <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                 transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                 className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" 
               />
               <motion.div
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               >
                 <Brain className="h-40 w-40 text-foreground opacity-80" />
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="relative z-20 pb-40 bg-background">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-8 leading-tight">
            Ready to upgrade your campus experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 font-medium leading-relaxed">
            Join thousands of students building their future on College Connect today.
          </p>
          <Link href="/login">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-foreground px-12 py-5 text-xl font-bold text-background shadow-xl hover:bg-foreground/90 transition-all"
            >
              Get Started for Free
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-20 border-t border-border bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10 shadow-sm" />
            <span className="font-extrabold text-2xl tracking-tight text-foreground">College Connect</span>
          </div>
          <p className="text-base font-medium text-muted-foreground">© 2026 College Connect Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lock, Mail, Sparkles } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Logo } from "@/components/ui/logo";

// 3D Background Element
function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#DDEFE0"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-background overflow-hidden relative selection:bg-primary/30">
      
      {/* LEFT SPLIT: IMMERSIVE VISUALS */}
      <div className="relative hidden w-1/2 lg:flex flex-col justify-between p-12 bg-gradient-to-br from-background via-muted to-primary/20 border-r border-border/40">
        <Link href="/" className="relative z-20 flex items-center gap-3 w-fit group">
          <Logo className="h-12 w-12 shadow-sm transition-transform group-hover:scale-105" />
          <span className="font-extrabold tracking-tight text-2xl text-foreground">College Connect</span>
        </Link>

        {/* 3D Canvas Background */}
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <AnimatedSphere />
          </Canvas>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 max-w-lg mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/40 border border-white/40 px-4 py-1.5 text-sm font-bold text-foreground backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
            <span>Join the revolution</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tighter text-foreground leading-[1.1] mb-6">
            The world's most advanced student ecosystem.
          </h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Discover a beautiful, intelligent space designed to elevate your entire academic and professional journey.
          </p>
        </motion.div>
      </div>

      {/* RIGHT SPLIT: AUTH FORM */}
      <div className="relative flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-12">
        {/* Mobile Logo */}
        <Link href="/" className="absolute top-8 left-8 flex lg:hidden items-center gap-3">
          <Logo className="h-10 w-10 shadow-sm" />
          <span className="font-extrabold tracking-tight text-xl text-foreground">College Connect</span>
        </Link>

        {/* Abstract Orbs for Right Side */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/40 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 opacity-50" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="relative z-10 w-full max-w-md rounded-[2.5rem] border border-white/60 bg-white/60 p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] backdrop-blur-2xl"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Welcome back</h2>
            <p className="mt-3 text-muted-foreground font-medium text-base">
              Securely access your workspace.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3 group">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">College Email</label>
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-inner shadow-black/5 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20 hover:border-border">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                <input
                  type="email"
                  placeholder="you@university.edu"
                  className="h-14 w-full bg-transparent pl-12 pr-4 text-foreground outline-none placeholder:text-muted-foreground/60 font-medium"
                />
              </div>
            </div>

            <div className="space-y-3 group">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Password</label>
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-inner shadow-black/5 transition-all focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/20 hover:border-border">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 w-full bg-transparent pl-12 pr-4 text-foreground outline-none placeholder:text-muted-foreground/60 font-medium"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-1 pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex h-5 w-5 items-center justify-center rounded border-2 border-muted-foreground/30 bg-transparent transition-all group-hover:border-primary">
                  <input type="checkbox" className="absolute h-full w-full opacity-0 cursor-pointer peer" />
                  <div className="pointer-events-none h-full w-full rounded-sm bg-primary opacity-0 transition-opacity peer-checked:opacity-100" />
                </div>
                <span className="text-sm font-bold text-muted-foreground transition-colors group-hover:text-foreground">Remember me</span>
              </label>
              <a href="#" className="text-sm font-bold text-primary hover:text-primary-foreground transition-colors">
                Forgot password?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 relative flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-foreground font-extrabold text-background shadow-2xl hover:bg-foreground/90 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-lg">Sign In</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>

          <div className="mt-10 text-center text-sm font-medium text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="font-bold text-primary hover:text-primary-foreground transition-colors ml-1">
              Request Access
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

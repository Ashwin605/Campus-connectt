const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'network', title: 'Network', desc: 'Connect with peers, alumni, and faculty based on shared interests and goals.', icon: 'Users' },
  { path: 'clubs', title: 'Clubs & Communities', desc: 'Discover and join vibrant campus organizations. Manage your memberships here.', icon: 'Building2' },
  { path: 'events', title: 'Campus Events', desc: 'Find and register for upcoming workshops, guest lectures, and social gatherings.', icon: 'CalendarDays' },
  { path: 'study-groups', title: 'Study Groups', desc: 'Collaborate with classmates. Find study partners for your current courses.', icon: 'BookOpen' },
  { path: 'internships', title: 'Internships', desc: 'Access exclusive opportunities. Track applications and get referrals from alumni.', icon: 'Briefcase' },
  { path: 'mentorship', title: 'Mentorship', desc: 'Get matched with industry professionals and senior students for guidance.', icon: 'GraduationCap' },
  { path: 'startup-hub', title: 'Startup Hub', desc: 'Find co-founders, pitch ideas, and connect with student investors and mentors.', icon: 'Rocket' },
  { path: 'hackathons', title: 'Hackathons', desc: 'Form teams, compete in campus-wide challenges, and showcase your projects.', icon: 'Code' },
  { path: 'marketplace', title: 'Marketplace', desc: 'Buy, sell, or trade textbooks, electronics, and dorm essentials with peers.', icon: 'Store' },
  { path: 'messages', title: 'Messages', desc: 'Chat with your connections, club members, and project teammates securely.', icon: 'MessageSquare' },
  { path: 'notifications', title: 'Notifications', desc: 'Stay updated on event changes, new connections, and important announcements.', icon: 'Bell' },
  { path: 'profile', title: 'Your Profile', desc: 'Manage your portfolio, academic achievements, and public presence.', icon: 'User' },
  { path: 'settings', title: 'Settings', desc: 'Customize your preferences, privacy options, and notification behaviors.', icon: 'Settings' },
];

const template = (title, desc, icon) => `"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { ${icon} } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <PageTransition title="${title}" description="${desc}" icon={${icon}}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4, type: "spring" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="h-64 rounded-[2rem] bg-white border border-border/60 p-6 shadow-sm hover:shadow-xl hover:border-primary transition-all"
          >
            <div className="h-12 w-12 rounded-2xl bg-muted mb-6 animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 w-3/4 rounded-full bg-muted animate-pulse" />
              <div className="h-4 w-1/2 rounded-full bg-muted animate-pulse" />
            </div>
            <div className="mt-8 pt-6 border-t border-border/40">
              <div className="h-10 w-full rounded-xl bg-secondary/30 animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
}
`;

pages.forEach(p => {
  const dir = path.join('src', 'app', '(dashboard)', p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p.title, p.desc, p.icon));
});
console.log('Successfully generated all dashboard pages.');

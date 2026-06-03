const fs = require('fs');
const path = require('path');

const pages = [
  { path: 'network', title: 'Network', desc: 'Connect with peers, alumni, and faculty based on shared interests and goals.', icon: 'Users', items: ['Sarah Jenkins', 'Michael Chen', 'Dr. Emily Carter', 'Alex Rivera', 'Jessica Wong', 'David Kim'] },
  { path: 'clubs', title: 'Clubs & Communities', desc: 'Discover and join vibrant campus organizations. Manage your memberships here.', icon: 'Building2', items: ['Robotics Club', 'Debate Society', 'Investment Group', 'Photography Club', 'AI Researchers', 'Design Thinkers'] },
  { path: 'events', title: 'Campus Events', desc: 'Find and register for upcoming workshops, guest lectures, and social gatherings.', icon: 'CalendarDays', items: ['Tech Symposium 2026', 'Alumni Mixer', 'Hackathon Kickoff', 'Career Fair', 'Guest Lecture: AI', 'Spring Festival'] },
  { path: 'study-groups', title: 'Study Groups', desc: 'Collaborate with classmates. Find study partners for your current courses.', icon: 'BookOpen', items: ['CS101 Finals Prep', 'Physics Mechanics', 'Organic Chem Lab', 'Calculus III', 'Macroeconomics', 'Literature Review'] },
  { path: 'internships', title: 'Internships', desc: 'Access exclusive opportunities. Track applications and get referrals from alumni.', icon: 'Briefcase', items: ['Software Engineer Intern', 'Product Design Intern', 'Marketing Associate', 'Data Analyst Intern', 'Investment Banking', 'Research Assistant'] },
  { path: 'mentorship', title: 'Mentorship', desc: 'Get matched with industry professionals and senior students for guidance.', icon: 'GraduationCap', items: ['Alice Smith (Google)', 'Bob Jones (McKinsey)', 'Carol White (Apple)', 'Dave Brown (Goldman)', 'Eve Davis (Startup)', 'Frank Miller (Tesla)'] },
  { path: 'startup-hub', title: 'Startup Hub', desc: 'Find co-founders, pitch ideas, and connect with student investors and mentors.', icon: 'Rocket', items: ['EcoTech Solutions', 'FinHealth App', 'AI Tutors', 'BlockChain Logistics', 'Food Delivery Drone', 'VR Education'] },
  { path: 'hackathons', title: 'Hackathons', desc: 'Form teams, compete in campus-wide challenges, and showcase your projects.', icon: 'Code', items: ['Global Hack 2026', 'HealthTech Challenge', 'FinTech Disrupt', 'Green Energy Hack', 'AI for Good', 'Web3 Builder'] },
  { path: 'marketplace', title: 'Marketplace', desc: 'Buy, sell, or trade textbooks, electronics, and dorm essentials with peers.', icon: 'Store', items: ['MacBook Pro M3', 'Calculus Textbook', 'Mini Fridge', 'Desk Lamp', 'Bicycle', 'Noise Cancelling Headphones'] },
  { path: 'messages', title: 'Messages', desc: 'Chat with your connections, club members, and project teammates securely.', icon: 'MessageSquare', items: ['Study Group Chat', 'Project Team Alpha', 'Sarah Jenkins', 'Robotics Club', 'Michael Chen', 'Hackathon Team'] },
  { path: 'notifications', title: 'Notifications', desc: 'Stay updated on event changes, new connections, and important announcements.', icon: 'Bell', items: ['New Connection Request', 'Event Reminder', 'Club Meeting Moved', 'Job Application Update', 'New Message', 'System Maintenance'] },
  { path: 'profile', title: 'Your Profile', desc: 'Manage your portfolio, academic achievements, and public presence.', icon: 'User', items: ['Academic Record', 'Project Portfolio', 'Work Experience', 'Skills & Endorsements', 'Certifications', 'Recommendations'] },
  { path: 'settings', title: 'Settings', desc: 'Customize your preferences, privacy options, and notification behaviors.', icon: 'Settings', items: ['Account Preferences', 'Privacy & Security', 'Notification Settings', 'Appearance', 'Integrations', 'Billing'] },
];

const template = (title, desc, icon, items) => `"use client";

import { PageTransition } from "@/components/ui/PageTransition";
import { ${icon}, ArrowRight, Star, Heart, Share2, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const items = ${JSON.stringify(items)};
  
  return (
    <PageTransition title="${title}" description="${desc}" icon={${icon}}>
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
                  <${icon} className="h-7 w-7" />
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
`;

pages.forEach(p => {
  const dir = path.join('src', 'app', '(dashboard)', p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p.title, p.desc, p.icon, p.items));
});
console.log('Successfully replaced skeleton loaders with rich data cards.');

"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Play, Check, ArrowRight, MessageCircle, Users,
  Video, Image, BarChart3, GraduationCap, Calendar,
  Clock, MapPin, Star, ChevronDown, ChevronUp, Mail, Phone, Send
} from "lucide-react";

const WhatsAppNumber = "+251921482073";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.32, 0.72, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, href, primary = false }: { children: React.ReactNode; href: string; primary?: boolean }) {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all ${primary
        ? "btn-primary text-white"
        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}
      whileHover={{ scale: 1.05, boxShadow: primary ? "0 0 40px rgba(245, 158, 11, 0.4)" : "0 0 30px rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

function AnimatedCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
        {value}{suffix}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );
}

function StaggerContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Curriculum", "Delivery", "FAQ", "Contact"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white">
            <span className="text-gradient">Zebrihan</span> Venture
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href={`https://wa.me/${WhatsAppNumber.replace("+", "")}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-500/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </motion.a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 p-6 glass-card rounded-3xl mx-4 mt-2"
          >
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-gray-300 hover:text-white text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={`https://wa.me/${WhatsAppNumber.replace("+", "")}`}
              className="flex items-center gap-2 text-emerald-400 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function FloatingShape({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-background to-background" />

      <FloatingShape delay={0} className="top-[15%] left-[10%] w-20 h-20 bg-amber-500/20 blur-xl" />
      <FloatingShape delay={1} className="top-[20%] right-[15%] w-16 h-16 bg-emerald-500/15 blur-lg" />
      <FloatingShape delay={2} className="bottom-[25%] left-[20%] w-24 h-24 bg-amber-400/10 blur-xl" />
      <FloatingShape delay={1.5} className="bottom-[20%] right-[10%] w-14 h-14 bg-amber-600/20 blur-lg" />
      <FloatingShape delay={3} className="top-[40%] left-[5%] w-10 h-10 bg-emerald-400/20 blur-md" />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-600/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-600/10 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-amber-300">Now Enrolling in Ethiopia</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Social Media<br />
            <span className="text-gradient">Marketing for Anyone</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Learn to create stunning images and videos that grow your business.
            Online or in-person at our training center in Ethiopia.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <MagneticButton href="#contact" primary>
              Enroll Now <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <MagneticButton href="#curriculum">
              <Play className="w-5 h-5" /> View Curriculum
            </MagneticButton>
          </div>
        </FadeIn>

<FadeIn delay={0.4}>
          <div className="relative rounded-3xl overflow-hidden glass-card p-1 max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/AcrULPsS0_Y?si=n2m9HxqUEI7ZnvmT&rel=0"
                title="Course Introduction Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-gray-500">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-amber-400" />
              <span className="text-sm">Video Creation</span>
            </div>
            <div className="flex items-center gap-2">
              <Image className="w-5 h-5 text-amber-400" />
              <span className="text-sm">Image Design</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-amber-400" />
              <span className="text-sm">Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span className="text-sm">Community Growth</span>
            </div>
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/AcrULPsS0_Y?si=n2m9HxqUEI7ZnvmT&mute=1&autoplay=1"
                title="Course Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">The Problem</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Most Businesses Struggle Online</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ethiopian businesses lose thousands of potential customers every month because they don't know how to market on social media.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "💰", title: "Lost Revenue", desc: "Your competitors are capturing your customers on social media while you stand still." },
            { icon: "⏰", title: "Wasted Time", desc: "Posting randomly without strategy wastes hours with no results to show." },
            { icon: "📉", title: "No Growth", desc: "Followers don't convert to customers because your content doesn't resonate." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass-card rounded-3xl p-8 text-center h-full">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16 text-center">
            <div className="glass-card rounded-3xl p-10 max-w-3xl mx-auto bg-gradient-to-r from-amber-900/20 to-emerald-900/20">
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-gray-300 mb-6">
                Our comprehensive Social Media Marketing course teaches you everything from creating
                professional images and videos to analyzing data and growing your audience.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Create Stunning Content", "Build Your Brand", "Grow Your Audience", "Convert Followers to Customers"].map((skill, i) => (
                  <span key={i} className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const curriculumModules = [
  { 
    title: "MOD 01: Introduction to SMM", 
    subtitle: "Foundations & Opportunity",
    desc: "Build a clear understanding of the SMM landscape and its opportunities in Ethiopia.",
    topics: [
      "Digital marketing vs. traditional marketing",
      "Definition & scope of Social Media Marketing",
      "Why SMM matters — significance & impact",
      "SMM opportunities in the Ethiopian market",
      "The mindset of a professional social media marketer",
      "Career pathways in SMM",
      "Business models in social media marketing",
      "Revenue streams available to SMM professionals",
      "Services an SMM professional provides",
    ],
    icon: GraduationCap 
  },
  { 
    title: "MOD 02: Platform Ecosystems", 
    subtitle: "Platforms & Account Setup",
    desc: "Understand the major platforms and establish a professional digital presence.",
    topics: [
      "Professional account setup & configuration",
      "Account security, privacy & best practices",
      "Social media ethics & professional conduct",
      "Understanding audience behavior on social media",
      "Facebook — features, algorithm & business use",
      "TikTok — content culture & growth mechanics",
      "Instagram — visual strategy & engagement",
      "Other key platforms (LinkedIn, Telegram, YouTube)",
      "Organic reach vs. paid promotion",
    ],
    icon: Users 
  },
  { 
    title: "MOD 03: Understanding Content Creation", 
    subtitle: "Strategy & Theory",
    desc: "Build the theoretical foundation for strategic, high-performing content.",
    topics: [
      "What is content? — definition & purpose",
      "Types & formats of content (video, graphic, text, reel, carousel, story)",
      "The 3 value pillars: educate, entertain, inspire",
      "Introduction to content strategy",
      "Understanding your target audience",
      "Content planning & the content calendar",
      "The psychology of scroll-stopping content",
      "What makes content engaging — key characteristics",
      "Analytics & KPIs — reach, engagement, impressions, conversions",
    ],
    icon: BarChart3 
  },
  { 
    title: "MOD 04: Content Creation & Curation", 
    subtitle: "Hands-On Production",
    desc: "Develop real content from concept to completion using a professional workflow.",
    topics: [
      "Setting SMART goals for a content campaign",
      "Building a marketing strategy for a brand or client",
      "Understanding consumer psychology",
      "Developing an Ideal Customer Profile (ICP)",
      "Choosing the right platform for each content type",
      "Competitor analysis & content research",
      "The content creation lifecycle: idea → script → shoot → edit → publish",
      "Script writing for video & caption writing for posts",
      "Creating video, graphics & text-based content",
    ],
    icon: Image 
  },
  { 
    title: "MOD 05: Mobile Videography", 
    subtitle: "Filming & Storytelling",
    desc: "Master smartphone-based video production for professional-grade social content.",
    topics: [
      "Pillars of high-quality video content",
      "Introduction to mobile videography",
      "Composition & visual storytelling principles",
      "Lighting rules — natural light, artificial light & types",
      "Audio quality — microphones, environment & sound clarity",
      "Camera movement & stabilization techniques",
      "Shooting for different platforms (vertical vs. horizontal)",
      "Practical shooting project",
    ],
    icon: Video 
  },
  { 
    title: "MOD 06: Production Software & AI Tools", 
    subtitle: "Editing, Design & Automation",
    desc: "Use industry tools to edit, design and automate content at a professional level.",
    topics: [
      "Introduction to Notion — content planning & client management",
      "Video editing fundamentals — rough cut, transitions, animations",
      "Color grading & sound design",
      "Introduction to graphic design principles",
      "Canva in depth — templates, branding & social media formats",
      "CapCut / DaVinci Resolve for video editing",
      "AI tools for SMM — content ideas, captions, visuals",
      "Workflow automation for efficiency",
    ],
    icon: Video 
  },
  { 
    title: "MOD 07: Lead Generation & Career", 
    subtitle: "Finding Clients & Jobs",
    desc: "Build the practical skills to land clients, freelance projects or full-time roles.",
    topics: [
      "Fundamentals of lead generation for SMM professionals",
      "The lead generation process — step by step",
      "Cold outreach via calls & direct messages",
      "The Foot-in-the-Door technique",
      "Crafting a sales script & writing a professional proposal",
      "Applying for SMM jobs — CV, cover letter & platforms",
      "Professional communication & client management skills",
      "Handling objections & closing confidently",
    ],
    icon: MessageCircle 
  },
  { 
    title: "MOD 08: Pricing, Negotiation & Portfolio", 
    subtitle: "Business & Final Project",
    desc: "Close clients confidently, deliver work professionally and launch your SMM career.",
    topics: [
      "Structuring your service offer",
      "Pricing methods — hourly, retainer & project-based",
      "Negotiation strategies & techniques",
      "Delivering projects & managing client expectations",
      "Performance reporting & client communication",
      "Staying ahead of industry trends",
      "Building a professional portfolio (Notion, PDF, LinkedIn)",
      "Final practical project — full campaign from brief to report",
    ],
    icon: Users 
  },
];

function Curriculum() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="curriculum" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">What You'll Learn</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">8-Week Professional Program</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From Foundations to Freelance — Built for the Ethiopian Market
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {curriculumModules.map((module, i) => {
            const Icon = module.icon;
            const isExpanded = expanded === i;

            return (
              <FadeIn key={i} delay={i * 0.03}>
                <motion.div
                  className="glass-card rounded-2xl overflow-hidden"
                  whileHover={{ borderColor: "rgba(139, 92, 246, 0.3)" }}
                >
                  <button
                    className="w-full p-6 flex items-start gap-4 text-left"
                    onClick={() => setExpanded(isExpanded ? null : i)}
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-emerald-400 font-medium mb-1">{module.subtitle}</div>
                      <h3 className="text-lg font-semibold">{module.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{module.desc}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-gray-500 mt-2"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6"
                      >
                        <div className="pt-4 border-t border-gray-800">
                          <div className="grid sm:grid-cols-2 gap-2">
                            {module.topics.map((topic, j) => (
                              <div key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section id="delivery" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Choose Your Learning Path</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer both online and in-person training to fit your schedule and learning style.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Online Learning</h3>
              <p className="text-gray-400 mb-6">
                Access all course materials from anywhere in Ethiopia and around the world.
                Learn at your own pace with lifetime access.
              </p>
              <ul className="space-y-3">
                {["Access from anywhere", "Learn at your own pace", "Lifetime access to updates", "Online community support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">In-Person Training</h3>
              <p className="text-gray-400 mb-6">
                Join our training center in Ethiopia for hands-on learning with expert instructors.
                Get real-time feedback and support.
              </p>
              <ul className="space-y-3">
                {["Hands-on practical sessions", "Direct instructor support", "Networking with peers", "Certification upon completion"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 glass-card rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-amber-400" />
              <span className="text-gray-300">Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-amber-400" />
              <span className="text-gray-300">4-8 weeks program</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-amber-400" />
              <span className="text-gray-300">Small class sizes</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}





function Instructor() {
  return (
    <section id="instructor" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-900/30 to-emerald-900/30 glass-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-4xl">👨‍🏫</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Your Instructor</h3>
                  <p className="text-gray-400">Add your photo here</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-amber-500/20 flex items-center justify-center glass-card">
                <div className="text-center">
                  <span className="text-2xl font-bold text-amber-400">3+</span>
                  <p className="text-xs text-gray-400">Years Exp.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Meet Your Mentor</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Expert Digital Marketer</h2>
              <p className="text-gray-300 mb-6 text-lg">
                I'm a results-driven digital marketer with <span className="text-amber-400 font-semibold">3+ years of hands-on experience</span> helping brands in Ethiopia and across Africa grow their online presence.
              </p>
              <p className="text-gray-400 mb-4">
                I've managed social media campaigns for local businesses, startups, and established brands—generating real results like increased followers, higher engagement, and more leads.
              </p>
              <p className="text-gray-400 mb-8">
                My teaching style is practical, down-to-earth, and focused on what actually works in the Ethiopian market. No fluff, just actionable strategies you can implement immediately.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Social Media Strategy", "Content Marketing", "Video Production", "Brand Building"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
                whileHover={{ x: 5 }}
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}





const faqs = [
  { q: "How long does it take to complete the course?", a: "The course typically takes 4-8 weeks depending on your learning pace. You have lifetime access to all materials." },
  { q: "Do I need any prior experience?", a: "No! This course is designed for complete beginners. We start from the basics and build up to advanced concepts." },
  { q: "What tools and software do I need?", a: "We teach using free tools like Canva and CapCut, so you don't need to buy any software to get started." },
  { q: "Is the course in Amharic or English?", a: "The course is delivered in English with Amharic support available. All materials are in English." },
  { q: "Do you offer job placement?", a: "Our Premium package includes job placement assistance. We connect qualified students with businesses looking for SMM professionals." },
  { q: "What if I have questions during the course?", a: "You can reach out to your instructor via WhatsApp or attend Q&A sessions. We provide ongoing support throughout your learning journey." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Questions</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Have questions? We're here to help.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <motion.div
                  className="glass-card rounded-2xl overflow-hidden"
                  whileHover={{ borderColor: "rgba(139, 92, 246, 0.3)" }}
                >
                  <button
                    className="w-full p-6 flex items-center justify-between text-left"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="font-semibold pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-gray-500 flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-400 pt-4 border-t border-gray-800">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">Ready to Start Your SMM Journey?</h2>
              <p className="text-gray-400 mb-8">
                Fill out the form or contact us directly. We'll get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                <motion.a
                  href={`https://wa.me/${WhatsAppNumber.replace("+", "")}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <MessageCircle className="w-8 h-8 text-emerald-400" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-400 text-sm">+251 921 482 073</div>
                  </div>
                </motion.a>
                <motion.a
                  href="https://t.me/zebrihanventure"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Send className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-gray-400 text-sm">@zebrihanventure</div>
                  </div>
                </motion.a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <Mail className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400 text-sm">contact@zebrihanventure.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <MapPin className="w-8 h-8 text-amber-400" />
                  <div>
                    <div className="font-semibold">Training Center</div>
                    <div className="text-gray-400 text-sm">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="+251 9XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your learning goals..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full btn-primary py-4 rounded-xl font-semibold text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Limited Spots Available</span>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            Start Your <span className="text-gradient">Social Media</span><br />
            Journey Today
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their businesses with our comprehensive SMM training. 
            Master video creation, image design, and marketing strategies.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <MagneticButton href="#contact" primary>
              Enroll Now <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <MagneticButton href="https://t.me/zebrihanventure">
              <Send className="w-5 h-5" /> Chat on Telegram
            </MagneticButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-amber-400" />
              <span className="text-sm">8-Week Program</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-amber-400" />
              <span className="text-sm">Certificate Included</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-amber-400" />
              <span className="text-sm">Job Placement Support</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-gradient">Zebrihan</span> Venture
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Ethiopian businesses with professional social media marketing skills.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#curriculum" className="hover:text-amber-400 transition-colors">Curriculum</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Addis Ababa, Ethiopia</li>
              <li>+251 921 482 073</li>
              <li>contact@zebrihanventure.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { name: "Facebook", icon: "f" },
                { name: "Instagram", icon: "ig" },
                { name: "Telegram", icon: "t" },
                { name: "TikTok", icon: "tt" }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-amber-500/20 hover:text-amber-400 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-amber-400">Zebrihan Venture</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Curriculum />
      <Delivery />
      
      <Instructor />
      
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
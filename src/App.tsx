/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Menu, 
  X, 
  Mail, 
  Phone,
  QrCode,
  Layout,
  RefreshCw,
  Users,
  Award,
  Star
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/917676394923?text=Hello%20I%20want%20a%20website%20for%20my%20business";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setWidth(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-brand-600 z-[100] transition-all duration-100" style={{ width: `${width}%` }} />
  );
};

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const InfoTicker = () => {
  const items = [
    "🚀 Modern Websites for Modern Businesses",
    "✨ 100+ Successful Projects Delivered",
    "📱 100% Mobile Responsive Designs",
    "⚡ Ultra-Fast Loading Speeds",
    "🛠️ 24/7 Priority Support",
    "📈 Conversion Optimized Layouts",
    "🔒 Secure & SSL Certified",
  ];

  return (
    <div className="bg-slate-950 py-4 overflow-hidden border-y border-white/5 relative z-20 shadow-2xl">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-16 items-center"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-brand-400/80 text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3"
          >
            <span className="w-2 h-2 bg-brand-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]">
            <Code2 size={24} />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 group-hover:from-brand-600 group-hover:to-brand-400 transition-all">Webnixo</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#dbeafe,transparent)]"></div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-5%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-[100px]" />
        
        {/* Extra Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 bg-brand-400 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0], 
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 text-brand-200 opacity-20 hidden lg:block"
        >
          <Code2 size={140} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 30, 0], 
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 text-blue-200 opacity-20 hidden lg:block"
        >
          <Zap size={120} />
        </motion.div>

        {/* Extra Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -40, 0], 
            x: [0, 20, 0],
            rotate: [0, -20, 0] 
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-10 text-brand-400 opacity-10 hidden lg:block"
        >
          <Globe size={80} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 40, 0], 
            x: [0, -20, 0],
            rotate: [0, 20, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-10 text-blue-400 opacity-10 hidden lg:block"
        >
          <Smartphone size={70} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50/80 backdrop-blur-sm text-brand-700 text-sm font-bold mb-6 border border-brand-100 shadow-sm"
          >
            <Award size={16} className="animate-pulse" /> Smart Websites. Real Growth.
          </motion.div>
          
          <h1 className="text-5xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[1.05]">
            <Reveal delay={0.3}>We Build Modern Websites</Reveal>
            <Reveal delay={0.5}>
              That <span className="text-gradient animate-gradient">Grow Your Business 🚀</span>
            </Reveal>
          </h1>
          
          <Reveal delay={0.7}>
            <p className="text-lg lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Fast, responsive, and professional websites for businesses and startups. 
              We turn your vision into a high-converting digital reality.
            </p>
          </Reveal>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-200"
            >
              Get Your Website Now
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare size={24} className="text-brand-600" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-24 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-slate-200 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-brand-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-200 pt-12"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-slate-900">100+</span>
            <span className="text-slate-500 font-medium">Clients Served</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-slate-900">2+ Years</span>
            <span className="text-slate-500 font-medium">Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-display font-bold text-slate-900">100%</span>
            <span className="text-slate-500 font-medium">Client Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Business Website Development",
      description: "Custom-built company websites, landing pages, and portfolio sites designed to convert visitors into customers.",
      icon: <Globe className="text-brand-600" size={32} />,
      features: ["Company Websites", "Landing Pages", "Portfolio Sites"],
      main: true
    },
    {
      title: "Startup & Personal Websites",
      description: "Fast-launch websites with modern UI design, perfect for new ventures and personal branding.",
      icon: <Zap className="text-brand-600" size={32} />,
      features: ["Fast Launch", "Modern UI", "SEO Ready"]
    },
    {
      title: "Website Redesign",
      description: "Give your old website a fresh, modern look with improved speed, responsiveness, and user experience.",
      icon: <RefreshCw className="text-brand-600" size={32} />,
      features: ["Speed Optimization", "Modern UI/UX", "Mobile First"]
    },
    {
      title: "QR Menu Solutions",
      description: "Digital menu solutions for restaurants and cafes. Simple, fast, and contactless.",
      icon: <QrCode className="text-brand-600" size={32} />,
      features: ["Contactless", "Easy Updates", "Mobile Ready"],
      small: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Our Services</h2>
          <p className="text-4xl font-display font-bold text-slate-900 mb-6">Solutions Tailored to Your Growth</p>
          <p className="text-lg text-slate-600">We specialize in creating digital experiences that don't just look good but perform exceptionally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10, 
                borderColor: "var(--color-brand-400)",
                boxShadow: "0 20px 40px rgba(59,130,246,0.15)"
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-[2.5rem] border border-slate-100 transition-all group ${service.main ? "lg:col-span-2 bg-brand-50/30" : "bg-white"} ${service.small ? "opacity-90" : ""}`}
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <CheckCircle2 size={16} className="text-brand-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    { title: "Modern & Clean Design", icon: <Layout />, desc: "Aesthetics that match your brand's premium identity." },
    { title: "Mobile Responsive", icon: <Smartphone />, desc: "Perfect viewing experience on every device." },
    { title: "Free Subdomain (2 Years)", icon: <Globe />, desc: "Get started instantly with a free subdomain for 2 years." },
    { title: "24/7 Helpline Support", icon: <Phone />, desc: "We are always here to help you with any issues." },
    { title: "Unlimited Bandwidth", icon: <Zap />, desc: "Scale your traffic without worrying about limits." },
    { title: "Daily Backups", icon: <RefreshCw />, desc: "Your data is safe with our automated daily backup system." },
    { title: "Custom Email IDs", icon: <Mail />, desc: "Professional email addresses for your business." },
    { title: "SEO Optimization", icon: <RefreshCw />, desc: "Built-in SEO best practices to help you rank higher." },
    { title: "Free SSL Certificate", icon: <CheckCircle2 />, desc: "Secure your website and build trust with visitors." },
    { title: "Affordable Solutions", icon: <Award />, desc: "Premium quality at prices that fit your budget." },
    { title: "Ultra-Fast Hosting", icon: <Zap />, desc: "Lightning fast servers for instant page loads." },
    { title: "Social Integration", icon: <Users />, desc: "Connect your social media seamlessly." },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Why Choose Us</h2>
          <p className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">We Don't Just Build Websites, We Build Success Stories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={reason.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                backgroundColor: "#ffffff",
                boxShadow: "0 30px 60px -12px rgba(50,50,93,0.1), 0 18px 36px -18px rgba(0,0,0,0.15)"
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              className="flex flex-col gap-6 p-10 bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white/60 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
              
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className="w-16 h-16 bg-brand-600 text-white rounded-[1.25rem] flex items-center justify-center shadow-xl shadow-brand-200 group-hover:shadow-brand-400/40 transition-all"
              >
                {React.cloneElement(reason.icon as React.ReactElement, { size: 28 })}
              </motion.div>
              <div>
                <h4 className="text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{reason.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WebsiteDetails = () => {
  const details = [
    {
      title: "Performance First",
      desc: "Every line of code is optimized for speed. We achieve 90+ Google PageSpeed scores to ensure your visitors never wait.",
      icon: <Zap size={40} />,
      color: "text-amber-500"
    },
    {
      title: "Conversion Focused",
      desc: "We use psychological triggers and strategic CTA placement to turn casual browsers into paying customers.",
      icon: <Users size={40} />,
      color: "text-blue-500"
    },
    {
      title: "Ironclad Security",
      desc: "Advanced firewall protection, SSL encryption, and regular security audits keep your business and user data safe.",
      icon: <CheckCircle2 size={40} />,
      color: "text-green-500"
    },
    {
      title: "Future-Ready Tech",
      desc: "Built with the latest technologies like React and Tailwind CSS, ensuring your website stays modern for years.",
      icon: <Code2 size={40} />,
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">The Webnixo Standard</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-8">What Makes a Webnixo Website Different?</h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don't use generic templates. Every website is a custom-engineered solution designed to dominate your specific market.
            </p>
            <div className="space-y-4">
              {["Custom UI/UX Design", "Lightning Fast Load Times", "Mobile-First Architecture", "SEO-Ready Structure"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-800 font-bold">
                  <div className="w-6 h-6 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Added Image Here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 relative group max-w-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=450&q=80" 
                alt="Modern Web Development" 
                className="relative rounded-2xl shadow-2xl border border-white/20 w-full h-auto object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59,130,246,0.1)"
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white transition-all cursor-default"
              >
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`${detail.color} mb-6`}
                >
                  {detail.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{detail.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{detail.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CEOSection = () => {
  return (
    <section className="py-40 bg-slate-950 text-white overflow-hidden relative">
      {/* Crazy Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1200],
              x: Math.random() * 200 - 100,
              opacity: [0, 0.8, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className="absolute bottom-0 w-1 h-1 bg-brand-500 rounded-full blur-[1px]"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Founder Image */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="mb-24 relative inline-block"
          >
            {/* Rotating Background Glow */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 bg-gradient-to-tr from-brand-600/40 via-blue-500/20 to-brand-400/40 rounded-[4rem_8rem_4rem_8rem] blur-3xl"
            />
            
            <div className="relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/d/1HVLiBV8sWqgJTyOeuUu5XrwKVafUcr8I" 
                alt="Shivanagouda Patil" 
                className="w-64 h-64 lg:w-[450px] lg:h-[450px] rounded-[4rem_8rem_4rem_8rem] object-cover border-8 border-white/5 shadow-2xl transition-all duration-1000 hover:rounded-[8rem_4rem_8rem_4rem]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -15, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 bg-brand-600 text-white p-6 rounded-[2rem] shadow-2xl z-20 border-4 border-white/10"
              >
                <Award size={40} className="animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-500/10 text-brand-400 text-xs font-black mb-12 border border-brand-500/20 tracking-[0.5em] uppercase">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-ping" />
            The Visionary
          </div>
          
          <div className="relative mb-20">
            <div className="absolute -left-10 -top-16 text-[12rem] text-brand-500/5 font-serif select-none">"</div>
            <h2 className="text-4xl lg:text-7xl font-display font-bold italic leading-[1.1] text-slate-100 tracking-tight">
              We don't just write code; we architect <span className="text-gradient animate-gradient">digital empires</span>. 
              If your website isn't making you money while you sleep, it's just a digital business card. 
              <span className="text-white block mt-8 not-italic font-black text-2xl lg:text-3xl tracking-widest uppercase">Let's build a machine.</span>
            </h2>
            <div className="absolute -right-10 -bottom-16 text-[12rem] text-brand-500/5 font-serif rotate-180 select-none">"</div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent mb-10" />
            <h3 className="text-4xl lg:text-6xl font-display font-black text-white tracking-tighter mb-4">SHIVANAGOUDA PATIL</h3>
            <p className="text-brand-500 font-bold uppercase tracking-[0.6em] text-xs lg:text-sm">Founder & CEO, Webnixo</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-24"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 80px rgba(59,130,246,0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-950 px-20 py-8 rounded-full font-black text-2xl tracking-tighter hover:bg-brand-50 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              START THE REVOLUTION
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Contact on WhatsApp", desc: "Reach out to us with your idea or business needs.", icon: <MessageSquare /> },
    { title: "Share Requirements", desc: "We discuss features, design preferences, and goals.", icon: <Users /> },
    { title: "Design & Development", desc: "Our team builds your modern, responsive website.", icon: <Code2 /> },
    { title: "Delivery", desc: "Your website goes live and starts growing your business.", icon: <CheckCircle2 /> },
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-600/10 blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-3">Our Process</h2>
          <p className="text-4xl font-display font-bold mb-6">Simple Steps to Your New Website</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-slate-800 -translate-x-1/2 z-0">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.4, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-brand-600 to-brand-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                </div>
              )}
              <div className="relative z-10 flex flex-col items-center text-center group">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-brand-900/20 group-hover:shadow-brand-500/40 transition-shadow relative"
                >
                  <div className="absolute inset-0 bg-brand-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-400 transition-colors">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", company: "TechNova Solutions", text: "Webnixo transformed our outdated site into a modern powerhouse. Our leads have doubled!" },
    { name: "Priya Patel", company: "Bloom Boutique", text: "The team is incredibly fast and professional. The design is exactly what I wanted for my brand." },
    { name: "David Miller", company: "Miller Real Estate", text: "Best web development experience. Direct WhatsApp support made communication so easy." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">Testimonials</h2>
          <p className="text-4xl font-display font-bold text-slate-900">What Our Clients Say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={review.name} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-7xl font-display font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Let’s Build Your <br className="hidden md:block" /> <span className="text-gradient animate-gradient">Digital Empire Today</span>
            </h2>
            <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              Ready to dominate your market? Contact us now and let's start your journey to the top. 
              Your vision, our expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
              <motion.a 
                whileHover={{ scale: 1.02, y: -5 }}
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-8 p-8 rounded-[2.5rem] bg-brand-50/50 border border-brand-100 group hover:bg-white hover:shadow-2xl hover:shadow-brand-200/40 transition-all"
              >
                <div className="w-20 h-20 bg-brand-600 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-200 group-hover:rotate-6 transition-transform">
                  <MessageSquare size={36} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-brand-600 font-black uppercase tracking-[0.2em] mb-1">WhatsApp (Primary)</p>
                  <p className="text-2xl font-display font-bold text-slate-900">+91 76763 94923</p>
                </div>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.02, y: -5 }}
                href="mailto:support@webnixo.in" 
                className="flex items-center gap-8 p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-slate-200/40 transition-all"
              >
                <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center shadow-2xl group-hover:-rotate-6 transition-transform">
                  <Mail size={36} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Email Address</p>
                  <p className="text-2xl font-display font-bold text-slate-900">support@webnixo.in</p>
                </div>
              </motion.a>
            </div>

            <motion.a 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-brand-600 text-white px-16 py-8 rounded-[2rem] font-black text-2xl hover:bg-brand-700 transition-all shadow-2xl shadow-brand-200"
            >
              START YOUR PROJECT NOW
              <ArrowRight size={32} className="animate-bounce-x" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all">
              <Code2 size={18} />
            </div>
            <span className="text-xl font-display font-bold tracking-tight group-hover:text-brand-400 transition-colors">Webnixo</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Webnixo. Built by Shivanagouda Patil. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              WhatsApp
            </a>
            <a href="mailto:support@webnixo.in" className="text-slate-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30"
    >
      <MessageSquare size={32} fill="currentColor" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-brand-100 selection:text-brand-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <InfoTicker />
        <Services />
        <WhyUs />
        <WebsiteDetails />
        <CEOSection />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

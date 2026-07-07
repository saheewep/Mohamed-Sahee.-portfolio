import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface HeroProps {
  avatarImg: string;
}

export default function Hero({ avatarImg }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-radial from-[#0d0d0d] via-[#030303] to-[#010101]"
    >
      {/* Background Decorative Rings & Glows */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gold-950/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full bg-gold-900/5 blur-[100px] pointer-events-none" />

      {/* Abstract Design Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left: Text Introductions */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start" id="hero-text-container">
          
          {/* Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-950/50 border border-gold-500/20 text-gold-400 font-mono text-xs tracking-wider uppercase mb-6"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
            <span>Available for Freelance & Full-time Contracts</span>
          </motion.div>

          {/* Role / Greeting */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gold-500 font-mono text-sm sm:text-base font-semibold tracking-widest uppercase mb-3"
            id="hero-greeting"
          >
            Hello, I am
          </motion.h2>

          {/* Full Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white mb-4"
            id="hero-title"
          >
            MOHAMED <span className="text-gold-500 block sm:inline">SAHEE</span>
          </motion.h1>

          {/* Professional Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl md:text-2xl font-display font-medium text-neutral-300 mb-6"
            id="hero-subtitle"
          >
            Graphic Designer <span className="text-gold-500 mx-1">&amp;</span> Creative Web Developer
          </motion.p>

          {/* Short tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-neutral-400 font-sans text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light"
            id="hero-tagline"
          >
            &ldquo;Design is thinking made visual.&rdquo; I shape complex concepts into beautiful digital realities, bridging high-end branding layouts with modern, responsive interfaces.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            id="hero-actions"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-500 text-black font-sans font-bold text-sm tracking-wide w-full sm:w-auto hover:bg-gold-400 transition-all duration-300 shadow-xl shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-95 group"
              id="hero-primary-cta"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 border border-white/10 text-white font-sans font-bold text-sm tracking-wide w-full sm:w-auto hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 active:scale-95 group"
              id="hero-secondary-cta"
            >
              <MessageSquare className="w-4 h-4 text-neutral-400 group-hover:text-gold-400 transition-colors" />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Portrait Graphic Frame */}
        <div className="lg:col-span-5 flex justify-center items-center" id="hero-image-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Outer Rotating/Pulsing Gold Border Ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-gold-500/20 animate-[spin_80s_linear_infinite]" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-gold-500 to-transparent opacity-30 blur-md" />
            
            {/* Main Picture Frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold-500/40 p-2 bg-neutral-950/80 shadow-2xl shadow-gold-950/20">
              <img
                src={avatarImg}
                alt="Mohamed Sahee Profile headshot"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
                id="hero-avatar-img"
              />
            </div>

            {/* Accent Badges on the Circle */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 bg-[#0d0d0d] border border-white/5 shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2"
              id="hero-experience-badge"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full bg-gold-500 absolute" />
              <span className="font-mono text-[10px] text-neutral-300 font-bold uppercase tracking-wider">
                1 Year Experience
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 bg-[#0d0d0d] border border-white/5 shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2"
              id="hero-srilanka-badge"
            >
              <span className="text-sm">🇱🇰</span>
              <span className="font-mono text-[10px] text-neutral-300 font-bold uppercase tracking-wider">
                Sri Lanka
              </span>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Slide down arrow indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 rounded-full bg-gold-500"
        />
      </div>
    </section>
  );
}

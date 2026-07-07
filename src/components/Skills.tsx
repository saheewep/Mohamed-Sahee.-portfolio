import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA, Skill } from '../types';
import { 
  Palette, 
  Sparkles, 
  Layers, 
  Layout, 
  PenTool, 
  Image as ImageIcon,
  Tv,
  Printer,
  Compass,
  Laptop,
  BookOpen,
  Shapes
} from 'lucide-react';

// Custom rich descriptions for each skill to elevate the cards' visual and editorial quality
const skillDescriptions: Record<string, string> = {
  "Adobe Photoshop": "Expert layer masking, professional high-resolution composite artwork, and digital painting.",
  "Adobe Illustrator": "Intricate scalable vector assets, custom path pen-tracings, and professional logo creation.",
  "Adobe InDesign": "High-end multi-page layout structures, editorial print prepress, and professional digital publishing.",
  "Canva": "Rapid graphic prototyping, beautiful visual presentations, and modern template adaptation.",
  "Logo Design": "Distinctive brand marks, aesthetic guidelines, and scalable vector identities.",
  "Social Media Post Design": "Highly engaging promotional layouts optimized for Instagram, Facebook, & LinkedIn handles.",
  "Flyer & Poster Design": "High-impact visual communication materials designed for commercial advertising and prints.",
  "Banner Design": "Large-scale web and print-ready marketing advertisements and billboards.",
  "Print Design": "CMYK prepress file calibrations and meticulous margin bleeding guidelines.",
  "Photo Editing": "Corrective color balance, high-fidelity contrast grading, and advanced elements removal.",
  "Image Retouching": "Frequency separation, product detailing, and commercial studio lighting enhancement.",
  "Creative Layout Design": "Aesthetic grid systems, visual hierarchy pacing, and precise negative-space design."
};

// Map custom modern icons to corresponding skills
const getSkillIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('photoshop')) return <ImageIcon className="w-5 h-5 text-blue-400" />;
  if (n.includes('illustrator')) return <PenTool className="w-5 h-5 text-orange-400" />;
  if (n.includes('indesign')) return <BookOpen className="w-5 h-5 text-rose-500" />;
  if (n.includes('canva')) return <Shapes className="w-5 h-5 text-cyan-400" />;
  if (n.includes('logo')) return <Compass className="w-5 h-5 text-gold-500" />;
  if (n.includes('social')) return <Tv className="w-5 h-5 text-purple-400" />;
  if (n.includes('print')) return <Printer className="w-5 h-5 text-emerald-400" />;
  if (n.includes('layout')) return <Layout className="w-5 h-5 text-teal-400" />;
  if (n.includes('photo') || n.includes('retouching')) return <Layers className="w-5 h-5 text-pink-400" />;
  return <Palette className="w-5 h-5 text-amber-400" />;
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'graphic'>('all');

  const filteredSkills = activeTab === 'all' 
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold-950/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gold-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12" id="skills-heading">
          <span className="font-mono text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
            02 . MY ARSENAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            SKILLS &amp; <span className="text-gold-500">EXPERTISE</span>
          </h2>
          <div className="w-12 h-1 bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16" id="skills-tabs">
          <button
            onClick={() => setActiveTab('all')}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'text-black font-extrabold'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
            }`}
          >
            {activeTab === 'all' && (
              <motion.div
                layoutId="active-skill-tab"
                className="absolute inset-0 bg-gold-500 rounded-xl"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 shrink-0" />
              All Expertise
            </span>
          </button>

          <button
            onClick={() => setActiveTab('software')}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'software'
                ? 'text-black font-extrabold'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
            }`}
          >
            {activeTab === 'software' && (
              <motion.div
                layoutId="active-skill-tab"
                className="absolute inset-0 bg-gold-500 rounded-xl"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Laptop className="w-4 h-4 shrink-0" />
              Design Tools
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab('graphic')}
            className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'graphic'
                ? 'text-black font-extrabold'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
            }`}
          >
            {activeTab === 'graphic' && (
              <motion.div
                layoutId="active-skill-tab"
                className="absolute inset-0 bg-gold-500 rounded-xl"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Palette className="w-4 h-4 shrink-0" />
              Design Specialties
            </span>
          </button>
        </div>

        {/* Animated Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="skills-cards-grid"
          >
            {filteredSkills.map((skill: Skill) => {
              const desc = skillDescriptions[skill.name] || "Expert conceptual design and industry-standard production methods.";
              return (
                <div
                  key={skill.id}
                  className="group relative bg-[#0a0a0c]/80 border border-white/[0.04] rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(234,179,8,0.06)] overflow-hidden flex flex-col justify-between"
                >
                  {/* Subtle Interactive Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Card Content Header */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-neutral-900/90 border border-white/[0.05] flex items-center justify-center text-gold-500 group-hover:border-gold-500/20 group-hover:bg-gold-950/20 transition-all duration-500 shadow-inner">
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase font-bold border border-neutral-800/80 rounded-full px-2.5 py-0.5 bg-neutral-950/40 group-hover:border-gold-500/20 group-hover:text-gold-400 transition-all duration-500">
                        {skill.category === 'software' ? "Software" : "Specialty"}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-base text-neutral-200 group-hover:text-white transition-colors duration-300 mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mb-6 font-sans">
                      {desc}
                    </p>
                  </div>

                  {/* Proficiency Slider */}
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 group-hover:text-neutral-400 transition-colors">
                        Proficiency
                      </span>
                      <span className="font-mono text-[11px] font-bold text-gold-500 group-hover:scale-110 transition-transform duration-300">
                        {skill.proficiency * 20}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-950/90 rounded-full overflow-hidden border border-white/[0.02] relative">
                      <div 
                        className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full transition-all duration-500 relative"
                        style={{ width: `${skill.proficiency * 20}%` }}
                      >
                        {/* Interactive light swipe sweep when hovering the card */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

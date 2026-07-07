import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA, Project } from '../types';
import { Eye, ExternalLink, Github, Sparkles, X, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  avatarImg: string;
  royalImg: string;
  burgerImg: string;
  natureImg: string;
  rideImg: string;
  letsTalkImg: string;
  onSocialImg: string;
  koolfiImg: string;
  yummBakeryImg?: string;
  modernFurnitureImg?: string;
  interiorDesignImg?: string;
  coffeeShopImg?: string;
  refinedHiringImg?: string;
  chocoRettoImg?: string;
  ayuLotionImg?: string;
  limeFreshImg?: string;
  limonazoJuiceImg?: string;
}

export default function Projects({ 
  avatarImg, 
  royalImg, 
  burgerImg, 
  natureImg, 
  rideImg,
  letsTalkImg,
  onSocialImg,
  koolfiImg,
  yummBakeryImg,
  modernFurnitureImg,
  interiorDesignImg,
  coffeeShopImg,
  refinedHiringImg,
  chocoRettoImg,
  ayuLotionImg,
  limeFreshImg,
  limonazoJuiceImg
}: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'logo' | 'packaging' | 'poster' | 'social'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PROJECTS_DATA(
    avatarImg, 
    royalImg, 
    burgerImg, 
    natureImg, 
    rideImg, 
    letsTalkImg, 
    onSocialImg, 
    koolfiImg,
    yummBakeryImg,
    modernFurnitureImg,
    interiorDesignImg,
    coffeeShopImg,
    refinedHiringImg,
    undefined, // kriukzImg falls back to default
    undefined, // tastyFoodImg falls back to default
    undefined, // deliciousKitchenImg falls back to default
    chocoRettoImg,
    ayuLotionImg,
    limeFreshImg,
    limonazoJuiceImg
  );

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'logo', label: 'Logos' },
    { value: 'packaging', label: 'Packaging' },
    { value: 'poster', label: 'Posters' },
    { value: 'social', label: 'Social Ad Posts' },
  ] as const;

  return (
    <section id="projects" className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12" id="projects-heading">
          <span className="font-mono text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
            03 . PORTFOLIO EXHIBIT
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            SELECTED <span className="text-gold-500">WORKS</span>
          </h2>
          <div className="w-12 h-1 bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Dynamic Category Filters */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16 max-w-3xl mx-auto"
          id="project-filters"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4.5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gold-500 text-black shadow-lg shadow-gold-500/10'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Responsive Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-[#0a0a0b] border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/20 hover:shadow-2xl hover:shadow-gold-950/10 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Showcase Container */}
                <div className="relative aspect-square overflow-hidden bg-neutral-900 flex items-center justify-center shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Dark Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <div className="p-3.5 rounded-full bg-gold-500 text-black shadow-lg hover:scale-110 active:scale-95 transition-all">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Year Tag */}
                  <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-gold-400 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-white/10">
                    {project.year}
                  </span>

                  {/* Category Pill Tag */}
                  <span className="absolute bottom-4 left-4 bg-gold-950/80 backdrop-blur-md text-gold-400 border border-gold-500/20 font-mono text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display font-black text-lg text-white group-hover:text-gold-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 font-sans text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono bg-neutral-900 border border-white/5 text-neutral-500 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if nothing matches */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-neutral-950 rounded-2xl border border-white/5" id="projects-empty-state">
            <p className="text-neutral-500 font-mono text-sm">No items matching this category yet.</p>
          </div>
        )}

      </div>

      {/* Large Project Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            id="project-detail-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#0c0c0d] border border-white/10 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative"
              id="project-detail-modal"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/60 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all focus:outline-none"
                title="Close Window"
                id="close-project-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left: Large Showcase Image */}
                <div className="md:col-span-6 bg-neutral-900 relative flex items-center justify-center aspect-square md:aspect-auto md:h-[550px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gold-950/90 backdrop-blur-md border border-gold-500/30 text-gold-400 font-mono text-xs px-3.5 py-1.5 rounded-full font-bold">
                    {selectedProject.categoryLabel}
                  </div>
                </div>

                {/* Right: Dynamic Information Specifications */}
                <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between max-h-[550px] overflow-y-auto">
                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                      Case Study • Year {selectedProject.year}
                    </span>
                    <h3 className="font-display font-black text-2xl text-white mt-1 mb-4 tracking-tight">
                      {selectedProject.title}
                    </h3>
                    
                    <p className="text-neutral-300 font-sans text-sm leading-relaxed mb-6 font-light">
                      {selectedProject.description}
                    </p>

                    <h4 className="font-display font-bold text-sm text-gold-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      Client Objectives &amp; Process:
                    </h4>
                    
                    <ul className="space-y-2.5 mb-6" id="project-detail-list">
                      {selectedProject.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed font-sans font-light">
                          <ChevronRight className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono bg-neutral-900 border border-white/5 text-neutral-400 px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-500 text-black text-xs font-bold hover:bg-gold-400 transition-all font-sans"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo URL</span>
                        </a>
                      )}
                      
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111112] border border-white/5 text-white text-xs font-bold hover:bg-[#18181a] transition-all font-sans"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code Repository</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedProject(null)}
                        className="flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-neutral-400 text-xs font-bold hover:bg-neutral-900 hover:text-white transition-all font-sans"
                      >
                        Close Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

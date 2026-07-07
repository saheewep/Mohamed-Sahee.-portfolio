import { TIMELINE_DATA, TimelineItem } from '../types';
import { Briefcase, GraduationCap, Award, Calendar, ChevronRight } from 'lucide-react';

export default function Experience() {
  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-5 h-5 text-gold-500" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-gold-500" />;
      case 'certification':
        return <Award className="w-5 h-5 text-gold-500" />;
    }
  };

  const getLabel = (type: TimelineItem['type']) => {
    switch (type) {
      case 'experience':
        return 'Professional Experience';
      case 'education':
        return 'Education & Academic Training';
      case 'certification':
        return 'Specialized Certifications';
    }
  };

  return (
    <section id="experience" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20" id="experience-heading">
          <span className="font-mono text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
            04 . ROAD TO PROFICIENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            TIMELINE <span className="text-gold-500">&amp; HISTORY</span>
          </h2>
          <div className="w-12 h-1 bg-gold-500 mt-4 rounded-full" />
        </div>

        {/* Timeline Vector Layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 ml-2 sm:ml-4 space-y-16" id="timeline-list">
          
          {TIMELINE_DATA.map((item: TimelineItem, index) => (
            <div key={item.id} className="relative group" id={`timeline-item-${item.id}`}>
              
              {/* Timeline Gold Pulse Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-gold-500/50 shadow-lg transition-colors duration-300">
                {getIcon(item.type)}
              </div>

              {/* Core Content Box */}
              <div className="bg-[#0a0a0b] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-gold-500/10 hover:bg-[#0d0d0f] transition-all duration-300 shadow-xl">
                
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    {/* Category indicator tag */}
                    <span className="inline-flex text-[9px] font-mono font-bold tracking-wider uppercase text-gold-400 bg-gold-950/30 border border-gold-500/15 px-2.5 py-1 rounded-md mb-2">
                      {getLabel(item.type)}
                    </span>
                    
                    <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <span className="text-neutral-400 text-xs sm:text-sm font-sans font-medium">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Time date badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-white/5 text-neutral-400 text-[11px] font-mono shrink-0 w-fit h-fit self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-white/5 my-4" />

                {/* Bullets lists detail */}
                <ul className="space-y-3" id={`timeline-item-bullets-${item.id}`}>
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans font-light">
                      <ChevronRight className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

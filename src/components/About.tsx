import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Globe, Mail, Phone, Award, Download, Eye, X, Printer, Instagram } from 'lucide-react';

export default function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const personalInfo = [
    { icon: <MapPin className="w-5 h-5 text-gold-500" />, label: "Nationality", value: "Sri Lankan" },
    { icon: <Globe className="w-5 h-5 text-gold-500" />, label: "Languages", value: "Tamil (Native), English (Professional)" },
    { icon: <Mail className="w-5 h-5 text-gold-500" />, label: "Email", value: "mohamedsahi20119@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-gold-500" />, label: "Phone", value: "+94 77 225 6286" },
    { icon: <Instagram className="w-5 h-5 text-gold-500" />, label: "Instagram", value: "@graphix_zone_" },
    { icon: <Calendar className="w-5 h-5 text-gold-500" />, label: "Date of Birth", value: "2007/10/08" },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="about" className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16" id="about-heading">
          <span className="font-mono text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
            01 . GET TO KNOW ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            ABOUT <span className="text-gold-500">MYSELF</span>
          </h2>
          <div className="w-12 h-1 bg-gold-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="about-grid">
          
          {/* Left: Short Profile Cards & Personal Info */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="about-left-col">
            
            {/* Interactive Portrait Mini-Card */}
            <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
              
              <h3 className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
                <span className="text-gold-500">●</span> Personal Profile
              </h3>
              
              <div className="space-y-4">
                {personalInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-b-0">
                    <div className="p-2 rounded-lg bg-neutral-900 border border-white/5 group-hover:border-gold-500/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{info.label}</span>
                      <span className="text-sm font-sans text-neutral-300 font-medium">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Pitch Badge */}
            <div className="bg-[#0c0a09] border border-gold-500/10 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 shrink-0">
                <Award className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-gold-400">Quality-Driven Output</h4>
                <p className="text-xs text-neutral-400 mt-0.5 font-sans">
                  Detail-oriented and passionate about delivering high-end graphics on timeline deadlines.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Detailed Professional Bio & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="about-right-col">
            
            <div className="prose prose-invert max-w-none space-y-6">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                Creative Graphic Designer with a Passion for Digital Architecture
              </h3>
              
              <p className="text-neutral-300 font-sans leading-relaxed text-sm sm:text-base font-light">
                I am <span className="text-white font-semibold">Mohamed Sahee</span>, a detail-driven Graphic Designer based in Sri Lanka. I bring a highly professional aesthetic to every client requirement, designing beautiful brand components, packaging labels, and high-impact advertisements. 
              </p>
              
              <p className="text-neutral-400 font-sans leading-relaxed text-sm sm:text-base font-light">
                Additionally, I merge my core aesthetic training with expert usage of industry-standard tools like Adobe Photoshop and Illustrator to compose clean, high-impact layouts. I believe design is not just what it looks like, but how it works, feels, and communicates.
              </p>
              
              {/* Highlight Quotes */}
              <div className="border-l-4 border-gold-500 pl-4 py-1.5 my-6 bg-gold-950/10 rounded-r-lg">
                <p className="text-sm font-mono text-gold-400 italic">
                  "Creative and detail-oriented Graphic Designer with 1 year of practical experience and 6 months of professional graphic design training. Skilled in creating high-quality print and digital designs..."
                </p>
              </div>

              <p className="text-neutral-400 font-sans leading-relaxed text-sm sm:text-base font-light">
                I thrive in quick turnaround scenarios, converting verbal conceptualizations into tangible pixel-perfect assets. Whether you are launching a luxury clothing label, a natural herbal product, or a bold visual advertisement campaign, I design with absolute care and visual balance.
              </p>
            </div>

            {/* Resume Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
              <button
                onClick={() => setShowResumeModal(true)}
                className="flex items-center justify-center gap-2 px-6 py-4.5 rounded-xl bg-[#0d0d0d] border border-gold-500/30 text-gold-400 font-sans font-bold text-sm tracking-wide w-full sm:w-auto hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/5 hover:scale-[1.02]"
                id="view-resume-btn"
              >
                <Eye className="w-4 h-4" />
                <span>View My Resume</span>
              </button>

              <button
                onClick={() => setShowResumeModal(true)}
                className="flex items-center justify-center gap-2 px-6 py-4.5 rounded-xl bg-neutral-900 border border-white/10 text-white font-sans font-bold text-sm tracking-wide w-full sm:w-auto hover:bg-neutral-800 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                id="download-resume-btn"
              >
                <Download className="w-4 h-4 text-neutral-400" />
                <span>Download Resume PDF</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Resume View Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            id="resume-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#0b0b0b] border border-white/10 rounded-2xl w-full max-w-4xl shadow-2xl relative overflow-hidden"
              id="resume-modal-container"
            >
              {/* Header actions of Modal */}
              <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#0f0f0f] relative z-10 print:hidden">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-neutral-400 font-mono ml-2">mohamed_sahee_resume.pdf</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrint}
                    className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/10 transition-colors"
                    title="Print Resume / Save as PDF"
                    id="print-resume-btn"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/10 transition-colors"
                    title="Close"
                    id="close-resume-modal-btn"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Printable Core Document Content */}
              <div
                className="p-8 sm:p-12 text-white overflow-y-auto max-h-[80vh] print:max-h-none print:p-0 bg-[#0c0c0d]"
                id="printable-resume-doc"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-gold-500/20 pb-8 mb-8">
                  {/* Title & Name */}
                  <div className="md:col-span-8 flex flex-col justify-center">
                    <h1 className="text-3xl sm:text-4xl font-display font-black tracking-tight">
                      MOHAMED SAHEE
                    </h1>
                    <span className="text-gold-500 font-mono tracking-widest text-sm uppercase mt-1 font-semibold">
                      GRAPHIC DESIGNER
                    </span>
                    <p className="text-xs text-neutral-400 mt-4 leading-relaxed font-sans max-w-lg">
                      Creative and detail-oriented Graphic Designer with 1 year of practical experience and 6 months of professional graphic design training. Skilled in creating high-quality print and digital designs.
                    </p>
                  </div>
                  
                  {/* Contact Grid */}
                  <div className="md:col-span-4 flex flex-col justify-center space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 text-xs text-neutral-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold-500" />
                      <span>+94 77 225 6286</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gold-500" />
                      <span>mohamedsahi20119@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Instagram className="w-3.5 h-3.5 text-gold-500" />
                      <span>@graphix_zone_</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-500" />
                      <span>Sri Lankan</span>
                    </div>
                  </div>
                </div>

                {/* Grid Structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Section: Skills */}
                  <div>
                    <h3 className="text-sm font-mono font-bold text-gold-500 uppercase tracking-wider border-b border-white/5 pb-2 mb-4">
                      EXPERIENCE
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <span className="block font-display font-bold text-sm">Graphic Designer</span>
                        <span className="block font-mono text-[10px] text-neutral-500">2025 - PRESENT</span>
                        <ul className="list-disc pl-4 mt-2 text-xs text-neutral-400 space-y-1 font-sans">
                          <li>Designed social media graphics for businesses.</li>
                          <li>Created posters, banners, flyers, and promotional materials.</li>
                          <li>Prepared print-ready high-resolution artwork files.</li>
                          <li>Edited and professionally enhanced raw images using Adobe Photoshop.</li>
                          <li>Produced intricate layouts using Adobe Illustrator.</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-sm font-mono font-bold text-gold-500 uppercase tracking-wider border-b border-white/5 pb-2 mb-4 mt-6">
                      EDUCATION
                    </h3>
                    <div>
                      <span className="block font-display font-bold text-sm">Professional Graphic Design Training</span>
                      <span className="block font-mono text-[10px] text-neutral-500">COMPLETED 6 MONTHS</span>
                      <p className="text-xs text-neutral-400 mt-1 font-sans">
                        Comprehensive course covering corporate branding guidelines, typography, vector illustration, and digital marketing layout structures.
                      </p>
                    </div>
                  </div>

                  {/* Section: Design Tools */}
                  <div>
                    <h3 className="text-sm font-mono font-bold text-gold-500 uppercase tracking-wider border-b border-white/5 pb-2 mb-4">
                      DESIGN SPECIALTIES
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 font-sans">
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Adobe Photoshop</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Adobe Illustrator</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Adobe InDesign</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Canva</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Logo Design</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Packaging Design</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Flyer &amp; Poster Design</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Banner Design</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Print Design</div>
                      <div className="flex items-center gap-1.5"><span className="text-gold-500">✓</span> Image Retouching</div>
                    </div>

                    <h3 className="text-sm font-mono font-bold text-gold-500 uppercase tracking-wider border-b border-white/5 pb-2 mb-4 mt-6">
                      SOFTWARE RATINGS
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                          <span>Adobe Photoshop</span>
                          <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gold-500" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                          <span>Adobe Illustrator</span>
                          <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gold-500" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                          <span>Canva</span>
                          <span>⭐⭐⭐⭐⭐</span>
                        </div>
                        <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gold-500" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                          <span>Adobe InDesign</span>
                          <span>⭐⭐⭐⭐</span>
                        </div>
                        <div className="h-1 bg-neutral-900 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gold-500" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-sm font-mono font-bold text-gold-500 uppercase tracking-wider border-b border-white/5 pb-2 mb-4 mt-6">
                      PERSONAL INFO
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-neutral-400 font-sans">
                      <div><span className="text-neutral-500">Nationality:</span> Sri Lankan</div>
                      <div><span className="text-neutral-500">Languages:</span> Tamil, English</div>
                      <div className="col-span-2"><span className="text-neutral-500">Date of Birth:</span> 2007/10/08</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-gold-500/10 pt-4 flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>MOHAMED SAHEE PORTFOLIO RESUME</span>
                  <span>THANK YOU</span>
                </div>
              </div>

              {/* Bottom footer button print helper */}
              <div className="p-4 border-t border-white/5 bg-[#0a0a0a] flex justify-end gap-3 print:hidden">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-neutral-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-500 text-black text-xs font-bold hover:bg-gold-400 transition-all shadow-md shadow-gold-500/10"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print or Save PDF</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

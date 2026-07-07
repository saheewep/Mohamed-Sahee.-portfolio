import { Github, Instagram, Linkedin, ArrowUp, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/mohamedsahi20119", label: "GitHub" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/in/mohamed-sahee", label: "LinkedIn" },
    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/graphix_zone_", label: "Instagram" }
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] border-t border-white/5 py-16 px-4 relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Scroll Button */}
        <button
          onClick={handleScrollTop}
          className="p-3.5 rounded-full bg-neutral-950 border border-white/5 text-neutral-400 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300 shadow-lg -mt-24 mb-16 relative z-10 group hover:scale-105 active:scale-95 focus:outline-none"
          title="Scroll back to top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Branding */}
        <div className="flex flex-col items-center text-center mb-8" id="footer-branding">
          <span className="font-display font-black text-2xl tracking-tight text-white">
            SAHEE<span className="text-gold-500">.</span>
          </span>
          <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-1">
            Design is thinking made visual
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mb-8" id="footer-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full bg-[#0a0a0b] border border-white/5 text-neutral-400 hover:text-gold-500 hover:border-gold-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright and Credits */}
        <div className="text-center space-y-2 text-xs text-neutral-500 font-sans" id="footer-credits">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Mohamed Sahee. All Rights Reserved.
          </p>
          <p className="font-light tracking-wide text-neutral-600">
            Handcrafted with passion • Built using React &amp; Tailwind CSS in Sri Lanka
          </p>
        </div>

      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2 group" id="nav-logo">
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-gold-500 transition-colors">
              SAHEE<span className="text-gold-500 font-bold">.</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
              Graphic Designer
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold-400 ${
                  activeSection === item.href.slice(1)
                    ? 'text-gold-500 font-semibold'
                    : 'text-neutral-400'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/30 text-gold-400 font-sans text-sm font-semibold hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 shadow-md shadow-gold-950/10 hover:shadow-gold-500/20 hover:scale-[1.02]"
              id="cta-header"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 max-w-xs w-full z-50 bg-[#080808] border-l border-white/5 shadow-2xl p-6 transition-transform duration-300 transform md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-display font-bold text-xl tracking-tight text-white">
            SAHEE<span className="text-gold-500">.</span>
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
            aria-label="Close Menu"
            id="close-mobile-menu-btn"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-5" id="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-sans text-base font-medium tracking-wide transition-colors py-2 border-b border-white/5 ${
                activeSection === item.href.slice(1)
                  ? 'text-gold-500 font-semibold pl-2 border-l-2 border-l-gold-500'
                  : 'text-neutral-400 pl-0'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 mt-6 px-4 py-3 rounded-xl bg-gold-500 text-black font-sans font-bold text-sm hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/10"
            id="mobile-cta-btn"
          >
            <Mail className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </nav>
      </div>

      {/* Backdrop for mobile drawer */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          id="mobile-menu-backdrop"
        />
      )}
    </header>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';

const navItems = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const savedTheme = window.localStorage.getItem('theme-preference');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem('theme-preference', nextTheme);
  };

  const handleNavigation = (target: string) => {
    setMenuOpen(false);
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--panel)]/85 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavigation('hero')}
          className="flex items-center gap-3 text-left text-base font-semibold text-[var(--foreground)]"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--panel)] text-xs font-bold tracking-[0.2em] text-[var(--foreground)]">
            VJ
          </span>
          <span className="hidden sm:inline">Vipul Junghare</span>
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavigation(item.target)}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.target
                  ? 'bg-[var(--button)] text-[var(--button-text)]'
                  : 'text-[var(--muted)] hover:bg-[var(--panel-alt)] hover:text-[var(--foreground)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)]"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="/Vipul_Junghare_Data_Engineer_Resume.pdf"
            download
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--border-strong)] md:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--foreground)] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.div
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] md:hidden"
      >
        <div className="space-y-2 px-4 pb-4 pt-3">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavigation(item.target)}
              className="flex w-full items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-left text-sm font-medium text-[var(--foreground)]"
            >
              <span>{item.label}</span>
              {activeSection === item.target ? <span className="text-amber-700">●</span> : null}
            </button>
          ))}
          <a
            href="/Vipul_Junghare_Data_Engineer_Resume.pdf"
            download
            className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--button)] px-4 py-3 text-sm font-medium text-[var(--button-text)]"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

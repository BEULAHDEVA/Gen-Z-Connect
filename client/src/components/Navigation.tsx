import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/projects", label: "WORK" },
  { path: "/experience", label: "EXP" },
  { path: "/skills", label: "SKILLS" },
  { path: "/contact", label: "CONTACT" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-black/10">
      <Link href="/">
        <div className="text-2xl font-bold font-display tracking-tighter cursor-pointer hover:text-primary transition-colors duration-300">
          <span className="text-primary">&lt;</span>
          BEULAH_D
          <span className="text-primary">/&gt;</span>
        </div>
      </Link>

      <ul className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <div
                className={`relative font-mono text-sm cursor-pointer group ${location === item.path ? "text-primary" : "text-muted-foreground hover:text-black"
                  }`}
              >
                {item.label}
                {location === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
                <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[73px] bg-background z-40 flex flex-col p-8 md:hidden"
          >
            <ul className="flex flex-col gap-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <div
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl font-display font-bold uppercase tracking-tighter ${location === item.path ? "text-primary" : "text-foreground"
                        }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-12 border-t border-black/10 space-y-4">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Connect</p>
              <div className="flex gap-6 font-mono text-sm">
                <a href="https://github.com/BEULAHDEVA" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GH</a>
                <a href="https://www.linkedin.com/in/beulah-deva-4576602b7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LI</a>
                <a href="https://www.instagram.com/beulahdevaa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">IG</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

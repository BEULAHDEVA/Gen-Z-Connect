import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/projects", label: "WORK" },
  { path: "/experience", label: "EXP" },
  { path: "/contact", label: "CONTACT" },
];

export function Navigation() {
  const [location] = useLocation();

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

      <div className="md:hidden">
        <div className="w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
          <div className="w-full h-0.5 bg-black"></div>
          <div className="w-full h-0.5 bg-primary"></div>
          <div className="w-full h-0.5 bg-black"></div>
        </div>
      </div>
    </nav>
  );
}

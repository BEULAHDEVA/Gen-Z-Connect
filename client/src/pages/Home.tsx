import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Terminal } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/50 text-primary font-mono text-sm bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            AVAILABLE FOR WORK
          </div>
          
          <div className="space-y-2">
            <GlitchText 
              text="FULL STACK" 
              className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-none block"
            />
            <GlitchText 
              text="DEVELOPER" 
              className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-none text-stroke block hover:text-white transition-colors duration-300"
            />
          </div>

          <p className="text-muted-foreground text-lg max-w-lg font-mono leading-relaxed">
            Building digital experiences that exist on the edge of tomorrow. 
            Specialized in React, Node.js, and breaking the rules of traditional web design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/projects">
              <button className="group relative px-8 py-4 bg-primary text-black font-bold font-mono uppercase tracking-widest hover:bg-white transition-colors duration-300 box-shadow-hard-secondary">
                View Projects
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 border border-white/20 text-white font-mono uppercase tracking-widest hover:bg-white/5 transition-colors duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Abstract Tech Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          <div className="relative w-full aspect-square max-w-md">
            {/* Spinning ring 1 */}
            <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
            {/* Spinning ring 2 (reverse) */}
            <div className="absolute inset-8 border border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Center Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-white/10 p-6 w-64 backdrop-blur-xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-muted-foreground">
                <Terminal className="w-4 h-4" />
                <span>terminal.exe</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-green-500">$ npm install skills</div>
                <div className="text-white/80">Installing...</div>
                <div className="text-white/80">[====================] 100%</div>
                <div className="text-primary mt-2">&gt; React.js</div>
                <div className="text-secondary">&gt; TypeScript</div>
                <div className="text-accent">&gt; Three.js</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground font-mono text-xs flex flex-col items-center gap-2"
      >
        SCROLL
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </div>
  );
}

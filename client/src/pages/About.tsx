import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <header className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold uppercase"
          >
            About The <span className="text-secondary">Creator</span>
          </motion.h1>
          <div className="h-1 w-24 bg-primary" />
        </header>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary translate-x-2 translate-y-2" />
            {/* Placeholder for Profile Image */}
            <div className="relative aspect-[3/4] bg-neutral-900 border border-white/10 overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" 
                 alt="Profile"
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
               />
               {/* Scanline overlay */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-mono leading-relaxed text-muted-foreground"
            >
              I'm a creative developer obsessed with the intersection of design and technology. 
              I don't just write code; I craft digital experiences that leave a lasting impression.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-8 font-mono text-sm"
            >
              <div>
                <h3 className="text-white mb-2 uppercase font-bold text-accent">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h3 className="text-white mb-2 uppercase font-bold text-accent">Experience</h3>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
              <div>
                <h3 className="text-white mb-2 uppercase font-bold text-accent">Focus</h3>
                <p className="text-muted-foreground">Frontend Architecture, 3D Web, UI/UX</p>
              </div>
              <div>
                <h3 className="text-white mb-2 uppercase font-bold text-accent">Stack</h3>
                <p className="text-muted-foreground">React, Node, WebGL</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-xl font-display font-bold mb-4">Philosophy</h3>
              <p className="font-mono text-sm text-muted-foreground italic">
                "Code is the medium, but the experience is the message. Minimalism is dead. Make it loud."
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { useEducation } from "@/hooks/use-portfolio";
import { Loader2 } from "lucide-react";

export default function About() {
  const { data: education, isLoading } = useEducation();

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-16">

        <header className="space-y-4 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold uppercase"
          >
            About <span className="text-secondary">Me</span>
          </motion.h1>
          <div className="h-1 w-24 bg-primary mx-auto md:mx-0" />
        </header>

        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group max-w-[300px] mx-auto md:max-w-none w-full"
          >
            <div className="absolute inset-0 bg-primary translate-x-2 translate-y-2" />
            <div className="relative aspect-[4/5] md:aspect-[3/4] bg-neutral-100 border border-black/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            </div>
          </motion.div>

          <div className="space-y-8 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl font-mono leading-relaxed text-muted-foreground"
            >
              I'm a  Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at Maharaja Institute of Technology, Mysore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 font-mono text-sm"
            >
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <h3 className="text-foreground mb-1 uppercase font-bold text-accent">Location</h3>
                <p className="text-muted-foreground">Mysore, India</p>
              </div>
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <h3 className="text-foreground mb-1 uppercase font-bold text-accent">Focus</h3>
                <p className="text-muted-foreground">AI, Machine Learning, Data Analytics</p>
              </div>
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <h3 className="text-foreground mb-1 uppercase font-bold text-accent">Hobbies</h3>
                <p className="text-muted-foreground">Singing, Writing Songs, Photography</p>
              </div>
              <div className="p-4 border border-black/5 bg-black/[0.02]">
                <h3 className="text-foreground mb-1 uppercase font-bold text-accent">Languages</h3>
                <p className="text-muted-foreground">English, Kannada, Tamil, Hindi</p>
              </div>
            </motion.div>

            <section className="space-y-6 pt-4">
              <h2 className="text-2xl font-display font-bold uppercase border-b border-black/20 pb-2">Education</h2>
              {isLoading ? (
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              ) : (
                <div className="space-y-8 text-left">
                  {education?.map((edu) => (
                    <div key={edu.id} className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 bg-primary" />
                      <h3 className="text-foreground font-mono font-bold uppercase text-base">{edu.institution}</h3>
                      <p className="text-accent text-sm font-mono font-bold">{edu.degree}</p>
                      <div className="flex justify-between items-center mt-2 font-mono text-xs">
                        <span className="text-muted-foreground">{edu.duration}</span>
                        <span className="px-2 py-0.5 bg-black text-white">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}

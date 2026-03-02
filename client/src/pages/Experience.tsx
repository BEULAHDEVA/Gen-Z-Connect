import { motion } from "framer-motion";
import { useExperience } from "@/hooks/use-portfolio";
import { Loader2 } from "lucide-react";

export default function Experience() {
  const { data: experiences, isLoading } = useExperience();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-5xl mx-auto space-y-16">

        <section className="space-y-12">
          <header className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
              Career <span className="text-secondary">Log</span>
            </h1>
          </header>

          <div className="relative border-l border-black/10 ml-2 md:ml-0 space-y-12">
            {experiences?.filter(exp => !exp.role.toLowerCase().includes('certification')).map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 md:pl-12"
              >
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-background border border-primary rounded-full" />
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-baseline">
                  <div>
                    <h3 className="font-mono text-primary text-xs md:text-sm mb-1">{job.duration}</h3>
                    <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight">{job.company}</h2>
                    <div className="inline-block px-2 py-0.5 mt-2 bg-black/5 border border-black/10 text-[10px] md:text-xs font-mono text-muted-foreground uppercase">
                      {job.role}
                    </div>
                  </div>
                  <div className="relative group p-4 md:p-6 bg-card border border-black/5 hover:border-primary/50 transition-colors duration-300">
                    <p className="relative font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-12 pt-12">
          <header className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="w-full">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
                Certifications
              </h1>
              <p className="font-mono text-muted-foreground mt-4 text-xs md:text-sm uppercase tracking-widest text-center md:text-left">ACCREDITED SKILLS & CREDENTIALS</p>
            </div>
          </header>

          <div className="relative border-l border-black/10 ml-2 md:ml-0 space-y-12">
            {experiences?.filter(exp => exp.role.toLowerCase().includes('certification')).map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 md:pl-12"
              >
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-background border border-secondary rounded-full" />
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-baseline">
                  <div>
                    <h3 className="font-mono text-secondary text-xs md:text-sm mb-1">{cert.duration}</h3>
                    <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight">{cert.company}</h2>
                    <div className="inline-block px-2 py-0.5 mt-2 bg-black/5 border border-black/10 text-[10px] md:text-xs font-mono text-muted-foreground uppercase">
                      {cert.role.replace(/certification:\s*/i, '')}
                    </div>
                  </div>
                  <div className="relative group p-4 md:p-6 bg-card border border-black/5 hover:border-secondary/50 transition-colors duration-300">
                    <p className="relative font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

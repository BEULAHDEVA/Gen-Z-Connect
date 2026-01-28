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
        
        <header className="text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            Career <span className="text-secondary">Log</span>
          </h1>
        </header>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experiences?.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-background border border-primary rounded-full" />
              
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-baseline">
                <div>
                  <h3 className="font-mono text-primary text-sm mb-1">{job.duration}</h3>
                  <h2 className="text-2xl font-display font-bold uppercase">{job.company}</h2>
                  <div className="inline-block px-2 py-0.5 mt-2 bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground uppercase">
                    {job.role}
                  </div>
                </div>

                <div className="relative group p-6 bg-card border border-white/5 hover:border-primary/50 transition-colors duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity blur-lg" />
                  <p className="relative font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

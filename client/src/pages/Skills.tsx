import { motion } from "framer-motion";
import { useSkills } from "@/hooks/use-portfolio";
import { Loader2 } from "lucide-react";

export default function Skills() {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const groupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-secondary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">

        <header className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
            Tech <span className="text-accent">Arsenal</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {Object.entries(groupedSkills || {}).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-display font-bold uppercase border-b border-black/20 pb-2 text-center md:text-left">
                {category}
              </h2>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={skill.id} className="group">
                    <div className="flex justify-between items-end mb-1">
                      <span className="font-mono text-sm uppercase">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.proficiency}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-black/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "circOut" }}
                        className={`h-full ${category === "Frontend" ? "bg-primary" :
                          category === "Backend" ? "bg-secondary" : "bg-accent"
                          } group-hover:animate-pulse`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tag Cloud Visual - simplified */}
        <div className="pt-20 border-t border-black/10">
          <div className="flex flex-wrap gap-4 justify-center opacity-50 hover:opacity-100 transition-opacity duration-500">
            {skills?.map((skill) => (
              <span
                key={skill.id}
                className="text-4xl md:text-6xl font-display font-bold uppercase text-transparent stroke-text hover:text-black transition-colors cursor-default select-none"
                style={{ WebkitTextStroke: '1px rgba(0,0,0,0.2)' }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

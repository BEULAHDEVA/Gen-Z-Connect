import { motion } from "framer-motion";
import { useProjects } from "@/hooks/use-portfolio";
import { ExternalLink, Github, Loader2 } from "lucide-react";

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <header>
          <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            Selected <span className="text-stroke">Works</span>
          </h1>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-white/10 hover:border-primary transition-colors duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-display font-bold uppercase">{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-muted-foreground font-mono text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tags?.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-mono border border-white/20 text-white/70 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

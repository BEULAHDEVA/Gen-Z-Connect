import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function GlitchText({ text, as: Component = "h1", className = "", size = "lg" }: GlitchTextProps) {
  return (
    <div className={`relative inline-block group ${className}`}>
      <Component className="relative z-10">{text}</Component>
      <Component 
        className="absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-100 text-primary translate-x-[2px] transition-opacity duration-100"
        aria-hidden="true"
      >
        {text}
      </Component>
      <Component 
        className="absolute top-0 left-0 -z-10 opacity-0 group-hover:opacity-100 text-secondary -translate-x-[2px] transition-opacity duration-100 delay-75"
        aria-hidden="true"
      >
        {text}
      </Component>
    </div>
  );
}

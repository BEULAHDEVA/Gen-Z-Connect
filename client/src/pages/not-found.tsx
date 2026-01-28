import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4 text-center p-4">
        <AlertTriangle className="h-16 w-16 text-destructive animate-pulse" />
        <h1 className="text-8xl font-display font-bold text-stroke">404</h1>
        <h2 className="text-2xl font-mono uppercase tracking-widest mb-4">System Failure</h2>
        <p className="font-mono text-muted-foreground mb-8">
          The requested coordinate does not exist in this dimension.
        </p>
        
        <Link href="/">
          <button className="px-8 py-3 bg-white text-black font-bold font-mono uppercase tracking-widest hover:bg-primary transition-colors">
            Return to Base
          </button>
        </Link>
      </div>
    </div>
  );
}

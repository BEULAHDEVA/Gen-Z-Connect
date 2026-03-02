import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Background3D } from "@/components/Background3D";
import { Navigation } from "@/components/Navigation";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageWrapper>
            <Home />
          </PageWrapper>
        </Route>
        <Route path="/about">
          <PageWrapper>
            <About />
          </PageWrapper>
        </Route>
        <Route path="/projects">
          <PageWrapper>
            <Projects />
          </PageWrapper>
        </Route>
        <Route path="/experience">
          <PageWrapper>
            <Experience />
          </PageWrapper>
        </Route>
        <Route path="/skills">
          <PageWrapper>
            <Skills />
          </PageWrapper>
        </Route>
        <Route path="/contact">
          <PageWrapper>
            <Contact />
          </PageWrapper>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

// Wrapper for page transitions
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen w-full overflow-hidden text-foreground bg-transparent">
        <Background3D />
        <Navigation />
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;

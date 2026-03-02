import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { useSendMessage } from "@/hooks/use-portfolio";
import { insertMessageSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

// Extend schema for client validation logic if needed
const formSchema = insertMessageSchema;

export default function Contact() {
  const { mutate, isPending } = useSendMessage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20 flex flex-col justify-center">
      <div className="max-w-2xl mx-auto w-full space-y-12">

        <header className="space-y-4 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter">
            Initialize <span className="text-primary">Contact</span>
          </h1>
          <p className="text-muted-foreground font-mono">
            Feel free to reach out via direct channels or find me on digital platforms.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card p-6 md:p-12 border border-black/10 box-shadow-hard space-y-12"
        >
          <div className="space-y-4 text-center">
            <h3 className="font-mono text-accent uppercase text-xs tracking-widest">Direct Comms</h3>
            <div className="space-y-4">
              <a href="tel:6360689117" className="block font-mono text-3xl md:text-5xl font-bold hover:text-primary transition-colors">
                6360689117
              </a>
              <a href="mailto:beulahyam2006@gmail.com" className="block font-mono text-xl md:text-2xl lowercase hover:text-primary transition-colors">
                beulahyam2006@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4 text-center pt-8 border-t border-black/5">
            <h3 className="font-mono text-accent uppercase text-xs tracking-widest">Digital Footprint</h3>
            <div className="flex justify-center gap-12 font-mono text-lg">
              <a href="https://github.com/BEULAHDEVA" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">GITHUB</a>
              <a href="https://www.linkedin.com/in/beulah-deva-4576602b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:scale-110">LINKEDIN</a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

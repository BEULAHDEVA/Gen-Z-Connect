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
            Send a transmission to the void. I'll respond if the signal is strong enough.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card p-8 border border-white/10 box-shadow-hard"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-accent uppercase text-xs">Identity</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="ENTER NAME" 
                        {...field} 
                        className="bg-background/50 border-white/20 focus:border-primary font-mono rounded-none h-12"
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-accent uppercase text-xs">Frequency (Email)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="ENTER EMAIL" 
                        {...field} 
                        className="bg-background/50 border-white/20 focus:border-primary font-mono rounded-none h-12"
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-accent uppercase text-xs">Data Packet</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="TYPE MESSAGE..." 
                        {...field} 
                        className="bg-background/50 border-white/20 focus:border-primary font-mono rounded-none min-h-[150px] resize-none"
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-xs" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isPending}
                className="w-full bg-primary hover:bg-white text-black font-bold font-mono uppercase rounded-none h-12 tracking-widest transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
              >
                {isPending ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> TRANSMITTING...</>
                ) : (
                  <><Send className="mr-2 h-4 w-4" /> SEND SIGNAL</>
                )}
              </Button>

            </form>
          </Form>
        </motion.div>

        <div className="grid grid-cols-3 text-center text-sm font-mono text-muted-foreground pt-8 border-t border-white/10">
           <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
           <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
           <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
        </div>

      </div>
    </div>
  );
}

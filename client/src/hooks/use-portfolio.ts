import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Projects Hook
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      const data = await res.json();
      return api.projects.list.responses[200].parse(data);
    },
  });
}

// Experience Hook
export function useExperience() {
  return useQuery({
    queryKey: [api.experience.list.path],
    queryFn: async () => {
      const res = await fetch(api.experience.list.path);
      if (!res.ok) throw new Error("Failed to fetch experience");
      const data = await res.json();
      return api.experience.list.responses[200].parse(data);
    },
  });
}

// Skills Hook
export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      const res = await fetch(api.skills.list.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      const data = await res.json();
      return api.skills.list.responses[200].parse(data);
    },
  });
}

// Contact Message Mutation
export function useSendMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to send message");
      }
      
      const responseData = await res.json();
      return api.messages.create.responses[201].parse(responseData);
    },
    onSuccess: () => {
      toast({
        title: "MESSAGE SENT",
        description: "Your signal has been transmitted into the void.",
        className: "bg-primary text-primary-foreground border-2 border-white font-mono",
      });
    },
    onError: (error) => {
      toast({
        title: "TRANSMISSION ERROR",
        description: error.message,
        variant: "destructive",
        className: "font-mono border-2 border-white",
      });
    }
  });
}

import { useQuery, useMutation } from "@tanstack/react-query";
import { type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import * as staticData from "@/lib/data";

// Projects Hook
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return staticData.projects;
    },
  });
}

// Experience Hook
export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      return [...staticData.experience].sort((a, b) => a.order - b.order);
    },
  });
}

// Skills Hook
export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      return staticData.skills;
    },
  });
}

// Education Hook
export function useEducation() {
  return useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      return [...staticData.education].sort((a, b) => a.order - b.order);
    },
  });
}

// Contact Message Mutation (Mock for frontend-only)
export function useSendMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: MessageInput) => {
      // Mock delay to simulate network
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Mock message sent:", data);
      return { ...data, id: Math.random(), createdAt: new Date() };
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
        description: (error as Error).message,
        variant: "destructive",
        className: "font-mono border-2 border-white",
      });
    }
  });
}

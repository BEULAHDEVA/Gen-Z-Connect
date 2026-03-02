import { z } from "zod";

// Contact Messages
export const insertMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type Message = z.infer<typeof insertMessageSchema> & { id: number, createdAt: Date };
export type InsertMessage = z.infer<typeof insertMessageSchema>;

// Projects/Portfolio
export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string | null;
  tags: string[] | null;
  createdAt: Date | null;
};

// Experience
export type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  order: number;
};

// Skills
export type Skill = {
  id: number;
  name: string;
  category: string;
  proficiency: number;
};

// Education
export type Education = {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  order: number;
};

import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { projects, experience, skills } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Messages
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projectsList = await storage.getProjects();
    res.json(projectsList);
  });

  // Experience
  app.get(api.experience.list.path, async (req, res) => {
    const experienceList = await storage.getExperience();
    res.json(experienceList);
  });

  // Skills
  app.get(api.skills.list.path, async (req, res) => {
    const skillsList = await storage.getSkills();
    res.json(skillsList);
  });

  // Seed Data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    await db.insert(projects).values([
      {
        title: "Neon Dreams",
        description: "A 3D interactive rave experience built with Three.js.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        link: "#",
        tags: ["Three.js", "React", "WebGL"],
      },
      {
        title: "Cyber Commerce",
        description: "Next-gen e-commerce platform with glitch effects.",
        imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
        link: "#",
        tags: ["Next.js", "Stripe", "Tailwind"],
      },
      {
        title: "Void Social",
        description: "Decentralized social network for the underground.",
        imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
        link: "#",
        tags: ["Web3", "Solidity", "React"],
      }
    ]);

    await db.insert(experience).values([
      {
        role: "Senior Creative Dev",
        company: "Future Corp",
        duration: "2023 - Present",
        description: "Leading the frontend team in building immersive 3D web experiences.",
        order: 1,
      },
      {
        role: "Frontend Developer",
        company: "Tech Start",
        duration: "2021 - 2023",
        description: "Developed high-performance React applications and animations.",
        order: 2,
      },
    ]);

    await db.insert(skills).values([
      { name: "React", category: "Frontend", proficiency: 95 },
      { name: "Three.js", category: "Frontend", proficiency: 85 },
      { name: "TypeScript", category: "Languages", proficiency: 90 },
      { name: "Node.js", category: "Backend", proficiency: 80 },
      { name: "PostgreSQL", category: "Backend", proficiency: 75 },
    ]);
  }
}

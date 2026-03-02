import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

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

  // Education
  app.get(api.education.list.path, async (req, res) => {
    const educationList = await storage.getEducation();
    res.json(educationList);
  });

  return httpServer;
}

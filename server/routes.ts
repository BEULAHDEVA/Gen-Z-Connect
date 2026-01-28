import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { projects, experience, skills, education } from "@shared/schema";

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

  // Seed Data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0) {
    // Projects
    await db.insert(projects).values([
      {
        title: "KYC Agent",
        description: "Mini Project on Agentic AI at Hebbale Academy.",
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        link: "#",
        tags: ["AI", "Agentic AI", "Python"],
      },
      {
        title: "E-commerce Sentiment Analysis",
        description: "Built ML model with SVM achieving 85% accuracy on customer review classification.",
        imageUrl: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d",
        link: "#",
        tags: ["ML", "SVM", "Python"],
      },
      {
        title: "Radar Alert System",
        description: "Developed Arduino UNO-based radar system for obstacle detection.",
        imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
        link: "#",
        tags: ["Arduino", "Hardware", "Sensors"],
      },
      {
        title: "Custom Text Generation with GPT-2",
        description: "Fine-tuned GPT-2 for domain-specific outputs.",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
        link: "#",
        tags: ["NLP", "GPT-2", "Python"],
      },
      {
        title: "Mental Health Tracking App",
        description: "Developed a Flutter application for mental health tracking.",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
        link: "#",
        tags: ["Flutter", "Dart", "Mobile"],
      }
    ]);

    // Experience
    await db.insert(experience).values([
      {
        role: "Flutter App Development Intern",
        company: "Runshaw Technologies",
        duration: "Completed",
        description: "Gained practical experience in mobile app development using Flutter framework.",
        order: 1,
      },
      {
        role: "Hackathon Participant",
        company: "National Level Tech Avishkar 2.0",
        duration: "24-hour challenge",
        description: "Participated in a 24-hour national-level coding challenge.",
        order: 2,
      },
      {
        role: "TiEU Semi-Finalist",
        company: "SKINTRUST Startup Idea",
        duration: "Semi-Finals",
        description: "Participated in the semi-finals of TiEU with a startup idea named SKINTRUST.",
        order: 3,
      }
    ]);

    // Skills
    await db.insert(skills).values([
      // Languages
      { name: "Python", category: "Programming Languages", proficiency: 90 },
      { name: "C", category: "Programming Languages", proficiency: 85 },
      { name: "Java", category: "Programming Languages", proficiency: 80 },
      // AI/ML
      { name: "TensorFlow", category: "AI/ML", proficiency: 85 },
      { name: "PyTorch", category: "AI/ML", proficiency: 80 },
      { name: "Scikit-learn", category: "AI/ML", proficiency: 90 },
      { name: "OpenCV", category: "AI/ML", proficiency: 85 },
      // Databases
      { name: "MySQL", category: "Databases", proficiency: 85 },
      { name: "MongoDB", category: "Databases", proficiency: 80 },
      // Tools
      { name: "Git", category: "Tools", proficiency: 90 },
      { name: "Jupyter", category: "Tools", proficiency: 90 },
      { name: "VS Code", category: "Tools", proficiency: 95 },
      { name: "Google Colab", category: "Tools", proficiency: 90 },
      // Soft Skills
      { name: "Communication", category: "Soft Skills", proficiency: 95 },
      { name: "Leadership", category: "Soft Skills", proficiency: 90 },
      { name: "Problem Solving", category: "Soft Skills", proficiency: 95 },
      { name: "Time Management", category: "Soft Skills", proficiency: 90 },
      { name: "Adaptability", category: "Soft Skills", proficiency: 90 },
      { name: "Attention to detail", category: "Soft Skills", proficiency: 95 },
    ]);

    // Education
    await db.insert(education).values([
      {
        institution: "Maharaja Institute of Technology, Mysore",
        degree: "Bachelors of Engineering (CSE - AI & ML)",
        duration: "2023 - 2027",
        score: "CGPA: 9.11",
        order: 1,
      },
      {
        institution: "Marimallappa College",
        degree: "PUC",
        duration: "2021 - 2023",
        score: "94.6%",
        order: 2,
      },
      {
        institution: "Good Shepherd Convent High School",
        degree: "High School",
        duration: "2021",
        score: "98.08%",
        order: 3,
      }
    ]);
  }
}

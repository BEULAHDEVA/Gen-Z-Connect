import { db } from "./db";
import {
  messages,
  projects,
  experience,
  skills,
  education,
  type InsertMessage,
  type Message,
  type Project,
  type Experience,
  type Skill,
  type Education,
} from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getProjects(): Promise<Project[]>;
  getExperience(): Promise<Experience[]>;
  getSkills(): Promise<Skill[]>;
  getEducation(): Promise<Education[]>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db
      .insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience).orderBy(experience.order);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getEducation(): Promise<Education[]> {
    return await db.select().from(education).orderBy(education.order);
  }
}

export const storage = new DatabaseStorage();

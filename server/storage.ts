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

export class MemStorage implements IStorage {
  private messages: Message[] = [];
  private projects: Project[] = [];
  private experience: Experience[] = [];
  private skills: Skill[] = [];
  private education: Education[] = [];
  private currentId: number = 1;

  constructor() {
    this.seed();
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = { ...insertMessage, id: this.currentId++, createdAt: new Date() };
    this.messages.push(message);
    return message;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getExperience(): Promise<Experience[]> {
    return this.experience.sort((a, b) => a.order - b.order);
  }

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async getEducation(): Promise<Education[]> {
    return this.education.sort((a, b) => a.order - b.order);
  }

  private seed() {
    this.projects = [
      {
        id: this.currentId++,
        title: "KYC Agent",
        description: "Mini Project on Agentic AI at Hebbale Academy.",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tags: ["AI", "Agentic AI", "Python"],
        createdAt: new Date(),
      },
      {
        id: this.currentId++,
        title: "E-commerce Sentiment Analysis",
        description: "Built ML model with SVM achieving 85% accuracy on customer review classification.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tags: ["ML", "SVM", "Python"],
        createdAt: new Date(),
      },
      {
        id: this.currentId++,
        title: "Radar Alert System",
        description: "Developed Arduino UNO-based radar system for obstacle detection.",
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tags: ["Arduino", "Hardware", "Sensors"],
        createdAt: new Date(),
      },
      {
        id: this.currentId++,
        title: "Custom Text Generation with GPT-2",
        description: "Fine-tuned GPT-2 for domain-specific outputs.",
        imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tags: ["NLP", "GPT-2", "Python"],
        createdAt: new Date(),
      },
      {
        id: this.currentId++,
        title: "Mental Health Tracking App",
        description: "Developed a Flutter application for mental health tracking.",
        imageUrl: "https://images.unsplash.com/photo-1527335441549-0129bcce37ec?auto=format&fit=crop&q=80&w=800",
        link: "#",
        tags: ["Flutter", "Dart", "Mobile"],
        createdAt: new Date(),
      }
    ];

    this.experience = [
      {
        id: this.currentId++,
        role: "Flutter App Development Intern",
        company: "Runshaw Technologies (Remote)",
        duration: "Completed",
        description: "Developed mobile application components using Flutter and Dart. Implemented responsive UI and application logic. Assisted in debugging and improving app performance.",
        order: 1,
      },
      {
        id: this.currentId++,
        role: "Hackathon Participant",
        company: "National Level Tech Avishkar 2.0",
        duration: "24-hour challenge",
        description: "Participated in a 24-hour national-level coding challenge.",
        order: 2,
      },
      {
        id: this.currentId++,
        role: "Data Science & Analytics Intern",
        company: "HP LIFE",
        duration: "Jan 2025",
        description: "Focused on data analysis and business analytics modules.",
        order: 3,
      },
      {
        id: this.currentId++,
        role: "TiEU Semi-Finalist",
        company: "SKINTRUST Startup Idea",
        duration: "Semi-Finals",
        description: "Participated in the semi-finals of TiEU with a startup idea named SKINTRUST.",
        order: 4,
      },
      {
        id: this.currentId++,
        role: "Certification: Introduction to Cloud Computing",
        company: "IBM (Coursera)",
        duration: "Completed",
        description: "Foundational knowledge of cloud computing concepts and services.",
        order: 5,
      },
      {
        id: this.currentId++,
        role: "Certification: Introduction to Microsoft Azure Cloud Services",
        company: "Microsoft (Coursera)",
        duration: "Completed",
        description: "Introduction to Microsoft Azure Cloud services and core solutions.",
        order: 6,
      },
      {
        id: this.currentId++,
        role: "Certification: Connect and Protect: Networks and Network Security",
        company: "Google (Coursera)",
        duration: "Completed",
        description: "Fundamentals of networking and network security practices.",
        order: 7,
      },
      {
        id: this.currentId++,
        role: "Certification: Data Science Fundamentals with Python and SQL",
        company: "SkillUp",
        duration: "Completed",
        description: "Foundational data science concepts using Python and SQL for data analysis.",
        order: 8,
      },
      {
        id: this.currentId++,
        role: "Certification: Blockchain and Cryptography Overview",
        company: "SkillUp",
        duration: "Completed",
        description: "Overview of blockchain technology and cryptographic principles.",
        order: 9,
      }
    ];

    this.skills = [
      { id: this.currentId++, name: "Python", category: "Programming Languages", proficiency: 90 },
      { id: this.currentId++, name: "C", category: "Programming Languages", proficiency: 85 },
      { id: this.currentId++, name: "Java", category: "Programming Languages", proficiency: 80 },
      { id: this.currentId++, name: "HTML/CSS", category: "Programming Languages", proficiency: 85 },
      { id: this.currentId++, name: "TensorFlow", category: "AI/ML", proficiency: 85 },
      { id: this.currentId++, name: "PyTorch", category: "AI/ML", proficiency: 80 },
      { id: this.currentId++, name: "Scikit-learn", category: "AI/ML", proficiency: 90 },
      { id: this.currentId++, name: "OpenCV", category: "AI/ML", proficiency: 85 },
      { id: this.currentId++, name: "MySQL", category: "Databases", proficiency: 85 },
      { id: this.currentId++, name: "MongoDB", category: "Databases", proficiency: 80 },
      { id: this.currentId++, name: "Git", category: "Tools", proficiency: 90 },
      { id: this.currentId++, name: "Jupyter", category: "Tools", proficiency: 90 },
      { id: this.currentId++, name: "VS Code", category: "Tools", proficiency: 95 },
      { id: this.currentId++, name: "Google Colab", category: "Tools", proficiency: 90 },
      { id: this.currentId++, name: "Communication", category: "Soft Skills", proficiency: 95 },
      { id: this.currentId++, name: "Leadership", category: "Soft Skills", proficiency: 90 },
      { id: this.currentId++, name: "Problem Solving", category: "Soft Skills", proficiency: 95 },
      { id: this.currentId++, name: "Time Management", category: "Soft Skills", proficiency: 90 },
      { id: this.currentId++, name: "Adaptability", category: "Soft Skills", proficiency: 90 },
      { id: this.currentId++, name: "Attention to detail", category: "Soft Skills", proficiency: 95 },
    ];

    this.education = [
      {
        id: this.currentId++,
        institution: "Maharaja Institute of Technology, Mysore",
        degree: "Bachelors of Engineering (CSE - AI & ML)",
        duration: "2023 - 2027",
        score: "CGPA: 9.11",
        order: 1,
      },
      {
        id: this.currentId++,
        institution: "Marimallappa College",
        degree: "PUC",
        duration: "2021 - 2023",
        score: "94.6%",
        order: 2,
      },
      {
        id: this.currentId++,
        institution: "Good Shepherd Convent High School",
        degree: "SSLC",
        duration: "2021",
        score: "98.08%",
        order: 3,
      }
    ];
  }
}

export const storage = new MemStorage();

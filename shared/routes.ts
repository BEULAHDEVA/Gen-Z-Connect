import { z } from 'zod';
import { insertMessageSchema, messages, projects, experience, skills, education } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  messages: {
    create: {
      method: 'POST' as const,
      path: '/api/messages',
      input: insertMessageSchema,
      responses: {
        201: z.custom<typeof messages.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects',
      responses: {
        200: z.array(z.custom<typeof projects.$inferSelect>()),
      },
    },
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience',
      responses: {
        200: z.array(z.custom<typeof experience.$inferSelect>()),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.custom<typeof skills.$inferSelect>()),
      },
    },
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education',
      responses: {
        200: z.array(z.custom<typeof education.$inferSelect>()),
      },
    },
  },
};

export type MessageInput = z.infer<typeof api.messages.create.input>;

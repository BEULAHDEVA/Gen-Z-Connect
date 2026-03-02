import { z } from 'zod';
import { insertMessageSchema } from './schema';

export const MessageInputSchema = insertMessageSchema;
export type MessageInput = z.infer<typeof MessageInputSchema>;

// This remains for backward compatibility in the components if they import 'api'
export const api = {
  messages: {
    create: {
      path: '/api/messages',
      method: 'POST',
      input: MessageInputSchema
    }
  },
  projects: { list: { path: '/api/projects' } },
  experience: { list: { path: '/api/experience' } },
  skills: { list: { path: '/api/skills' } },
  education: { list: { path: '/api/education' } }
};

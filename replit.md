# Beulah D - Portfolio Website

## Overview

A Gen Z-styled personal portfolio website for Beulah D, a 3rd-year Computer Science Engineering student specializing in AI & Machine Learning. The site features a rave color theme with neon magenta, cyan, and acid green accents, 3D particle effects, and brutalist design elements. It includes pages for home, about, projects, experience, skills, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing with animated page transitions
- **Styling**: Tailwind CSS with custom rave/brutalist theme using CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **3D Effects**: React Three Fiber with Three.js for animated particle background
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state caching and API calls
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints defined in shared/routes.ts with Zod schemas
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Build Tool**: Custom build script using esbuild for server, Vite for client

### Data Storage
- **Database**: PostgreSQL (required via DATABASE_URL environment variable)
- **Schema Location**: shared/schema.ts defines all database tables
- **Tables**: messages (contact form), projects, experience, skills, education
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/   # UI components including 3D background
│       ├── pages/        # Route page components
│       ├── hooks/        # Custom hooks for data fetching
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API endpoint handlers
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Drizzle database connection
├── shared/           # Shared between client and server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod
└── migrations/       # Database migration files
```

### Design Pattern Decisions
- **Shared Types**: Database schema and API definitions shared between frontend and backend for type safety
- **Storage Abstraction**: DatabaseStorage class implements IStorage interface for testability
- **Development Mode**: Vite dev server with HMR proxied through Express
- **Production Build**: Client bundled to dist/public, server bundled to dist/index.cjs

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via DATABASE_URL environment variable
- **Drizzle ORM**: Database toolkit for queries and schema management

### Third-Party Libraries
- **@react-three/fiber & drei**: 3D rendering for particle background effects
- **Framer Motion**: Animation library for page transitions
- **Radix UI**: Accessible component primitives (dialog, dropdown, tabs, etc.)
- **TanStack React Query**: Server state management and caching
- **Zod**: Runtime schema validation for API inputs/outputs

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Fast server bundling for production
- **Drizzle Kit**: Database migration and schema push tooling

### Fonts
- **Space Grotesk**: Display font for headings
- **Space Mono**: Monospace font for body text (brutalist aesthetic)
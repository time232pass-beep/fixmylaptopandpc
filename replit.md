# FixMy Laptop & PC - Repair Services Website

## Overview

FixMy Laptop & PC is a professional service website for a local electronics repair business in Yewalewadi, Pune, India. The platform showcases repair services for laptops, PCs, and mobile devices, featuring service information, customer reviews, photo gallery, and contact forms. Built as a modern, mobile-first web application with a focus on trust-building and user engagement for local customers seeking tech repair services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR support
- Wouter for lightweight client-side routing (no React Router)
- Single Page Application (SPA) architecture with client-side navigation

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Design system follows Material Design principles adapted for service business
- Mobile-first responsive design approach
- Custom color palette: Brand Blue (215 85% 40%), Deep Navy (215 60% 20%), Success Green, Warm Orange for CTAs

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- React Hook Form with Zod validation for form handling
- Local component state with React hooks

**Key Pages & Routes**
- `/` - Home page with hero section, service overview, and top reviews
- `/services` - Detailed service listings for laptop, PC, and mobile repair
- `/about` - Company information and "why choose us" section
- `/reviews` - Customer reviews with filtering and submission form
- `/gallery` - Photo gallery of repairs and workspace with category filters
- `/contact` - Contact form for service inquiries

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- TypeScript for type safety across the entire stack
- Custom Vite middleware integration for development
- Shared schema validation between frontend and backend

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Endpoints for reviews, gallery items, and contact submissions
- Schema validation using Zod for all incoming data

**Data Layer**
- Drizzle ORM configured for PostgreSQL
- Schema definitions in `shared/schema.ts` for type sharing
- In-memory storage implementation (MemStorage) with seed data for development
- Prepared for PostgreSQL integration via Neon Database (@neondatabase/serverless)

**Key API Endpoints**
- `GET/POST /api/reviews` - Fetch and create customer reviews
- `GET /api/reviews/:id` - Get individual review
- `GET/POST /api/gallery` - Gallery items management
- `POST /api/contact` - Contact form submissions

### Database Schema

**Tables (Drizzle ORM)**
- `services` - Service offerings with title, description, features, pricing
- `reviews` - Customer reviews with rating, comment, service type, timestamp
- `gallery_items` - Photo gallery with images, categories, descriptions
- `contact_submissions` - Contact form data with customer details and service requests

**Schema Validation**
- Zod schemas derived from Drizzle tables using drizzle-zod
- Type-safe insert operations with automatic validation
- Shared types between client and server via `@shared` path alias

### External Dependencies

**Database & Hosting**
- PostgreSQL via Neon Database serverless driver
- Database connection configured via `DATABASE_URL` environment variable
- Drizzle Kit for schema migrations

**Third-Party Services**
- WhatsApp Business integration via wa.me links for customer contact
- Google Fonts (Inter, Open Sans) for typography
- Social media integration placeholders (Facebook, Instagram, Twitter/X)

**UI Libraries**
- Radix UI primitives for accessible components (dialog, dropdown, select, etc.)
- Lucide React for iconography
- React Icons (Simple Icons) for brand logos
- Embla Carousel for image carousels
- date-fns for date formatting

**Development Tools**
- Replit-specific Vite plugins for error overlay, cartographer, and dev banner
- ESBuild for production server bundling
- PostCSS with Autoprefixer for CSS processing

**Session Management**
- connect-pg-simple configured for PostgreSQL session storage (prepared for future authentication)
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const services = pgTable("services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  image: text("image").notNull(),
  priceRange: text("price_range").notNull(),
  features: text("features").array().notNull(),
});

export const reviews = pgTable("reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  customerName: text("customer_name").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  serviceType: text("service_type").notNull(),
  date: timestamp("date").notNull().defaultNow(),
});

export const galleryItems = pgTable("gallery_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  image: text("image").notNull(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  description: text("description"),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true, date: true });
export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({ id: true });
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({ id: true, submittedAt: true });

export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;

export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;

export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

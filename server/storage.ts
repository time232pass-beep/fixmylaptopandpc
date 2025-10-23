import {
  type Review,
  type InsertReview,
  type GalleryItem,
  type InsertGalleryItem,
  type ContactSubmission,
  type InsertContactSubmission,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getReviews(): Promise<Review[]>;
  getReview(id: string): Promise<Review | undefined>;
  createReview(review: InsertReview): Promise<Review>;
  clearAllReviews(): Promise<void>;
  
  getGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItem(id: string): Promise<GalleryItem | undefined>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private reviews: Map<string, Review>;
  private galleryItems: Map<string, GalleryItem>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.reviews = new Map();
    this.galleryItems = new Map();
    this.contactSubmissions = new Map();
    this.seedInitialData();
  }

  private seedInitialData() {
    // No initial reviews - starting with empty reviews
  }

  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getReview(id: string): Promise<Review | undefined> {
    return this.reviews.get(id);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = {
      ...insertReview,
      id,
      date: new Date(),
    };
    this.reviews.set(id, review);
    return review;
  }

  async clearAllReviews(): Promise<void> {
    this.reviews.clear();
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }

  async getGalleryItem(id: string): Promise<GalleryItem | undefined> {
    return this.galleryItems.get(id);
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const item: GalleryItem = {
      ...insertItem,
      id,
    };
    this.galleryItems.set(id, item);
    return item;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort((a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      submittedAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();

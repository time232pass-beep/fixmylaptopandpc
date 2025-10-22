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
    const initialReviews: Review[] = [
      {
        id: randomUUID(),
        customerName: "Rajesh Kumar",
        rating: 5,
        comment: "Excellent service! They fixed my laptop screen in just one day. Very professional and affordable. Highly recommended!",
        serviceType: "Laptop Repair",
        date: new Date("2024-10-15"),
      },
      {
        id: randomUUID(),
        customerName: "Priya Sharma",
        rating: 5,
        comment: "Best repair shop in Yewalewadi! They recovered all my data from a dead hard drive. Very thankful for their expertise.",
        serviceType: "Data Recovery",
        date: new Date("2024-10-12"),
      },
      {
        id: randomUUID(),
        customerName: "Amit Patel",
        rating: 4,
        comment: "Quick and efficient PC upgrade service. They installed new RAM and SSD, now my PC runs like new. Fair pricing too.",
        serviceType: "PC Repair",
        date: new Date("2024-10-10"),
      },
      {
        id: randomUUID(),
        customerName: "Sneha Desai",
        rating: 5,
        comment: "My phone screen was shattered. They replaced it the same day with genuine parts. Perfect work and warranty included!",
        serviceType: "Mobile Repair",
        date: new Date("2024-10-08"),
      },
      {
        id: randomUUID(),
        customerName: "Vikram Singh",
        rating: 5,
        comment: "Very honest and transparent service. They diagnosed the issue accurately and fixed it at reasonable cost. Will definitely come back!",
        serviceType: "Laptop Repair",
        date: new Date("2024-10-05"),
      },
      {
        id: randomUUID(),
        customerName: "Anita Rao",
        rating: 4,
        comment: "Good service for laptop keyboard replacement. Took slightly longer than expected but the quality is excellent.",
        serviceType: "Laptop Repair",
        date: new Date("2024-09-28"),
      },
      {
        id: randomUUID(),
        customerName: "Suresh Naik",
        rating: 5,
        comment: "Professional technicians who know what they're doing. Fixed my gaming PC and it's running perfectly now. Great experience!",
        serviceType: "PC Repair",
        date: new Date("2024-09-25"),
      },
      {
        id: randomUUID(),
        customerName: "Meena Joshi",
        rating: 5,
        comment: "Replaced my laptop battery and cleaned the entire system. Now it runs much faster and battery lasts all day. Thank you!",
        serviceType: "Laptop Repair",
        date: new Date("2024-09-20"),
      },
    ];

    initialReviews.forEach(review => {
      this.reviews.set(review.id, review);
    });
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

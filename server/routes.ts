import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { notifyAll } from "./notify";
import { insertReviewSchema, insertGalleryItemSchema, insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  });

  app.get("/api/reviews/:id", async (req, res) => {
    try {
      const review = await storage.getReview(req.params.id);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch review" });
    }
  });

  app.post("/api/reviews", async (req, res) => {
    try {
      const validatedData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(validatedData);
      res.status(201).json(review);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create review" });
      }
    }
  });

  app.delete("/api/reviews", async (req, res) => {
    try {
      await storage.clearAllReviews();
      res.json({ message: "All reviews cleared successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to clear reviews" });
    }
  });

  app.get("/api/gallery", async (req, res) => {
    try {
      const items = await storage.getGalleryItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery items" });
    }
  });

  app.get("/api/gallery/:id", async (req, res) => {
    try {
      const item = await storage.getGalleryItem(req.params.id);
      if (!item) {
        return res.status(404).json({ message: "Gallery item not found" });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch gallery item" });
    }
  });

  app.post("/api/gallery", async (req, res) => {
    try {
      const validatedData = insertGalleryItemSchema.parse(req.body);
      const item = await storage.createGalleryItem(validatedData);
      res.status(201).json(item);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create gallery item" });
      }
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      // Fire-and-forget notifications (email + WhatsApp). Do not block response.
      notifyAll({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        message: validatedData.message,
      }).catch(() => {
        // ignore notification errors
      });
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to create contact submission" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");

  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));

    // Fallback for SPA routing - serve index.html for all non-API routes
    app.get("*", (req, res, next) => {
      if (!req.path.startsWith("/api")) {
        res.sendFile(path.resolve(distPath, "index.html"));
      } else {
        next();
      }
    });
  }
}

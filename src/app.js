import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Initialize Express app
 export const app = express();

// Middleware setup
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRoutes from './routes/user.routes.js'; // Default import

// Route declarations
app.use("/api/v1/user", userRoutes);

// Export app as default
export default app;

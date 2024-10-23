import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//Connect to MongoDB
connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/auth", authRoutes);

// REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Music App</h1>");
});

//Start server
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}🚀`.bgCyan.white)
);

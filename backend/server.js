require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverRoutes = require('./routes/Server');

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["https://multiplayer-server-page.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ msg: "Hello world" });
});
app.use('/api/servers', serverRoutes);

// Database connection (only connect once per cold start)
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGO_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
}

// Exported handler for Vercel
module.exports = async (req, res) => {
  await connectDB();
  return app(req, res); // let Express handle the rest
};
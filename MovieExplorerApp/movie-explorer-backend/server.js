const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Express app
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://movie-explorer-5eo5plv5y-sunil-bagdi-s-projects.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/favorites", require("./routes/favorites"));

app.get("/", (req, res) => {
  res.json({
    message: "🎬 Movie Explorer Backend is running!",
    routes: {
      register: "POST /api/auth/register",
      login: "POST /api/auth/login",
      getMe: "GET /api/auth/me",
      getFavorites: "GET /api/favorites",
      addFavorite: "POST /api/favorites/add",
      removeFavorite: "DELETE /api/favorites/:movieId",
    },
  });
});

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} nahi mili!`,
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "something wrong! try agian.",
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

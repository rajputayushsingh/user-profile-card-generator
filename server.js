const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const Profile = require("./models/Profile");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Create profile
app.post("/create-profile", async (req, res) => {
  try {
    const {
      name,
      bio,
      skills,
      github,
      linkedin,
      avatar
    } = req.body;

    const skillArray = skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    const profile = new Profile({
      name,
      bio,
      skills: skillArray,
      github,
      linkedin,
      avatar
    });

    await profile.save();

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Profile Created</title>
        <link rel="stylesheet" href="/style.css">
      </head>

      <body>

        <div class="card">

          <img
            src="${avatar || "https://via.placeholder.com/120"}"
            class="avatar"
            alt="Profile"
          >

          <h1>${name}</h1>

          <p class="bio">${bio}</p>

          <h3>Skills</h3>

          <div class="skills">
            ${skillArray
              .map((skill) => `<span>${skill}</span>`)
              .join("")}
          </div>

          <div class="social-links">

            ${
              github
                ? `<a href="${github}" target="_blank">GitHub</a>`
                : ""
            }

            ${
              linkedin
                ? `<a href="${linkedin}" target="_blank">LinkedIn</a>`
                : ""
            }

          </div>

        </div>

      </body>
      </html>
    `);

  } catch (error) {
    console.log(error);

    res.status(500).send("Error creating profile");
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
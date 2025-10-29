import express from "express";

const app = express(); // ✅ Use 'app' instead of 'router'

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect(`http://localhost:5173`);
});

app.get("/about", (req, res) => {
  res.send("This is a plant bot application");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const app = express();
const PORT = 3000;

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/uploads", express.static(uploadDir));

// Configure file upload
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

// Upload endpoint
app.post("/upload", upload.single("image"), (req, res) => {
  const inputPath = path.join(uploadDir, req.file.filename);
  const outputFile = req.file.filename.split(".")[0] + ".obj";
  const outputPath = path.join(uploadDir, outputFile);

  // Call Python script for 2D→3D conversion
  exec(`python backend/model/convert.py "${inputPath}" "${outputPath}"`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "3D conversion failed" });
    }
    console.log(stdout);
    res.json({
      message: "3D model generated!",
      objFile: `/uploads/${outputFile}`
    });
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
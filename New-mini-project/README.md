# 2D Image to 3D Model Web Application

## Overview
This web application allows users to convert a single 2D image into a 3D model (OBJ format) and visualize it interactively in the browser. It leverages modern web technologies for the frontend and image processing/depth estimation techniques for 3D reconstruction on the backend.

The main goal of the project is to make 3D model generation **accessible, automated, and easy to use**, without requiring advanced technical skills or expensive software.

---

## Features
- Upload any 2D image (JPEG, PNG) for 3D conversion.
- Automatic image-to-3D processing pipeline:
  - Image preprocessing
  - Depth estimation
  - 3D mesh generation
  - OBJ file export
- Real-time 3D preview of the generated model using **Three.js**.
- Download the generated 3D model in **OBJ format**.
- Modular architecture for easy future enhancements.

---

## Technologies Used

### Frontend
- HTML5 / CSS3 / JavaScript
- [Three.js](https://threejs.org/) – 3D model rendering

### Backend
- Python
- [Flask](https://flask.palletsprojects.com/) or [FastAPI](https://fastapi.tiangolo.com/) – API server
- [OpenCV](https://opencv.org/) – Image preprocessing
- [NumPy](https://numpy.org/) – Numerical operations
- [Trimesh](https://trimsh.org/) – 3D mesh generation and OBJ export

### Storage
- Local filesystem (for saving uploaded images and generated OBJ files.)

---

1. Clone the repository:
```bash
git clone https://github.com/yourusername/2d-to-3d-webapp.git
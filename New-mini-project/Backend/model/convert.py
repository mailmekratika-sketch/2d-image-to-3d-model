from PIL import Image
import numpy as np
import trimesh
import sys

def generate_3d(image_path, output_path):
    img = Image.open(image_path).convert('L')
    img = img.resize((32, 32))
    pixels = np.array(img) / 255.0

    vertices = []
    faces = []

    h, w = pixels.shape
    for i in range(h):
        for j in range(w):
            x, y, z = j, i, pixels[i, j]*5
            vertices.append([x, y, z])

    for i in range(h-1):
        for j in range(w-1):
            idx = i*w + j
            faces.append([idx, idx+1, idx+w])
            faces.append([idx+1, idx+w+1, idx+w])

    mesh = trimesh.Trimesh(vertices=vertices, faces=faces)
    mesh.export(output_path)
    print(f"3D model saved to {output_path}")

if __name__ == "__main__":
    generate_3d(sys.argv[1], sys.argv[2])
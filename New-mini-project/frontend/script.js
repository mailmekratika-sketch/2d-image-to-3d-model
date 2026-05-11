const form = document.getElementById("uploadForm");
const response = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = await fetch("/upload", { method: "POST", body: data });
  const json = await res.json();
  response.textContent = JSON.stringify(json, null, 2);

  renderOBJ(json.objFile);
});

async function renderOBJ(objUrl) {
  const canvas = document.getElementById("threeCanvas");
  const renderer = new THREE.WebGLRenderer({ canvas });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 50;

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 0, 50);
  scene.add(light);

  const encodedUrl = encodeURI(objUrl);
loader.load(encodedUrl, (object) => {
  // rest unchanged
  });

  function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
}
const canvas = document.getElementById("bottle-canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

/* LIGHTS */
scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(3, 5, 4);
scene.add(dirLight);

/* BOTTLE */
const geometry = new THREE.CylinderGeometry(1, 1, 4, 64);
const material = new THREE.MeshStandardMaterial({
  color: 0x2bc7f4,
  metalness: 0.6,
  roughness: 0.2
});

const bottle = new THREE.Mesh(geometry, material);
scene.add(bottle);

/* FLOATING BASE */
bottle.position.y = 0;

/* RENDER LOOP */
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

/* RESPONSIVE */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* EXPORT for GSAP */
window.bottle3D = bottle;

// GSAP animations
gsap.from(".hero-title", { duration: 1.5, y: -60, opacity: 0 });
gsap.from(".hero-subtitle", { duration: 1.5, delay: 0.4, y: 60, opacity: 0 });

gsap.utils.toArray("section").forEach((sec, i) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: i * 0.15
  });
});

// Three.js animated icosahedron
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('three-canvas'), alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.IcosahedronGeometry(1.3, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00d9ff, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
camera.position.z = 4;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

<script setup lang="ts">
import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  PointLightHelper,
  Scene,
  SphereGeometry,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const renderer = new WebGLRenderer();
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const controls = new OrbitControls(camera, renderer.domElement);
const geometry = new BoxGeometry();
const material = new MeshStandardMaterial({ color: 0xFF6347 });
const cube = new Mesh(geometry, material);
const pointLight = new PointLight(0xfffff);
const lightHelper = new PointLightHelper(pointLight);

pointLight.position.set(-5, -5, 5);
camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app')?.appendChild(renderer.domElement);

scene.add(lightHelper);
scene.add(pointLight);
scene.add(cube);

function addStar() {
  const geometry = new SphereGeometry(.25, 32, 32);

  const material = new MeshBasicMaterial({ color: 0xffffff });
  const star = new Mesh(geometry, material);
  const [x, y, z] = Array(3).fill(undefined).map(() => MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(300).fill(undefined).forEach(addStar);

function moveCamera() {
  cube.position.x += .5;
  console.log('asdf');
}

window.addEventListener('resize', moveCamera);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();

</script>
<template>
</template>
<style>
</style>

import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Import only the Bootstrap components we need
import 'bootstrap';
// Create an example popover

  //Scene
const scene = new THREE.Scene();

//Sphere
const geometry = new THREE.DodecahedronGeometry(3, 5);
const material = new THREE.MeshBasicMaterial({
  color: "#A9FC7C",
  wireframe: true,
});
// Mesh = Geometry + Material
const mesh = new THREE.Mesh(geometry, material);
// add mesh to scene
scene.add(mesh);

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Light
const light = new THREE.AmbientLightProbe(0x404040, 5)
light.position.set(0, 10, 10)
//add light to scene
scene.add(light);

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.z = 10;
//add camera to scence
scene.add(camera);


//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
renderer.setPixelRatio(2);
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;

//Resize
window.addEventListener('resize', () => {
  //Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //Update Camera
  camera.updateProjectionMatrix();
  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);
})

const loop = () => {
  //Resize
  controls.update();
  mesh.rotation.x += 0.001;
  mesh.rotation.y += 0.001;
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop();


//Ende THREE.js

//Scroll Effekt Title
var rightItem = document.querySelector('.right-direction'),
    leftItem = document.querySelector('.left-direction');

    window.addEventListener("scroll", function(){

      rightItem.style.transform = "translateX(" + window.pageYOffset + "px)";
      leftItem.style.transform = "translateX(-" + window.pageYOffset + "px)";
    });

//thanks for scrolling...
const thx = document.querySelector('.thanks-text');
const options = {};
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
        console.log(entry);
        entry.target.classList.add("add");
        observer.unobserve(entry.target);
    });

}, options);

observer.observe(thx);

// loop through array

const text = ["Let's start a project together", "Lass uns gemeinsam ein Project starten", "Comencemos un proyecto juntos", "Commençons un projet ensemble", "Начнем проект вместе", "让我们一起开始一个项目"];
function change() {
  let index = 1;
  setInterval(function() {
    const currentValue = text[index];
    const element = document.getElementById("loop");
    
    // Hinzufügen der Transition
    element.style.opacity = 0;
    setTimeout(function() {
      element.innerHTML = currentValue;
      element.style.opacity = 1;
    }, 500);

    index = (index + 1) % text.length;
  }, 2000);
}

// Aufruf der Funktion
change();



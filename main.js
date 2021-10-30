import './style.css'

import * as THREE from 'three';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector("#canvas"),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );


//CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 50;


var animationTriggered = false;


//MOON
const radius = 30;
const detail = 100;
const moon_texture = new THREE.TextureLoader().load('tex/moon/moon_map.jpg');
const moon_displacement = new THREE.TextureLoader().load('tex/moon/moon_displacement.jpg');
const sphereGeometry = new THREE.IcosahedronGeometry(radius, detail);
const moonTextureOptions = {
	map: moon_texture,
	bumpMap: moon_displacement,
	bumpScale: 1,
};
const sphereMaterial = new THREE.MeshStandardMaterial(moonTextureOptions);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0,0,0);
sphere.rotation.y = 80 * (Math.PI/180);
scene.add(sphere);

/*
const boxGeometry = new THREE.BoxGeometry(1,1,1);
const boxMaterial = new THREE.MeshStandardMaterial( {color: 'blue'} );
const cube = new THREE.Mesh( boxGeometry, boxMaterial );
const cube2 = new THREE.Mesh(boxGeometry, boxMaterial );
cube.position.set(1,0,11)
scene.add(cube);
*/
/*
const group = new THREE.Group();
group.add(cube);
group.add(camera);
scene.add(group);
*/

//Dot satellite
/*
var dotGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([0,0,0]);
dotGeometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
dotGeometry.translate(0,60,0);
var dotMaterial = new THREE.PointsMaterial( { size:5, sizeAttenuation: false } );
var dot = new THREE.Points( dotGeometry, dotMaterial );
scene.add( dot );
*/

//AXIS HELPER
//const axesHelper = new THREE.AxesHelper( 20 );
// scene.add( axesHelper );



//Light
const light = new THREE.DirectionalLight('white', 1.5);
const lightHelper = new THREE.DirectionalLightHelper(light, 10);
lightHelper.position.set(0,0,33);
light.position.set(30,0,20);
scene.add(light);
//scene.add(lightHelper);


// CONTROLS
// const controls = new OrbitControls(camera, renderer.domElement);


//TEXT
const loader = new TTFLoader();
const fontLoader = new FontLoader();
var font;
loader.load('./fonts/Space_Mono/SpaceMono-Regular.ttf',(fnt) => {
	font = fontLoader.parse(fnt)

	const textGeometry = new TextGeometry('Antoine ANDO', {
		font: font,
		size: 2.7,
		height: 0,
		curveSegments: 100,
	});

	var textMesh1 = new THREE.Mesh( textGeometry, new THREE.MeshPhongMaterial( { color: 'red', flatShading: true }));
	textMesh1.position.set(-3.5,0,32);
		
	scene.add(textMesh1);
})



var t = 0, dt = 0.005,                   // t (dt delta for demo)
    a = {x: camera.position.x, y: camera.position.y, z: camera.position.z},          // start position
    b = {x: -25, y: -20, z: 45};

function animate() {
	//requestAnimationFrame( animate );
	//renderer.render(scene, camera);

	// controls.update;

	// sphere.rotation.y += 0.001
	//dot.rotation.z += 0.005;
	// rotateAroundPoint(sphere, )

	//group.position.x += 0.01
	//group.position.y += 0.001
	//group.position.z += 0.01

	//cube.rotation.x += 0.005;
	//cube.rotation.y += 0.005;

	if(animationTriggered){
		var newX = lerp(a.x, b.x, ease(t));   // interpolate between a and b where
		var newY = lerp(a.y, b.y, ease(t));   // t is first passed through a easing
		var newZ = lerp(a.z, b.z, ease(t));   // function in this example.
		camera.position.set(newX, newY, newZ);  // set new position
		camera.lookAt(sphere.position)
			t += dt;

		if (t >= 1){
			animationTriggered = false;
		}
	}
       // ping-pong for demo
  renderer.render(scene, camera);
  requestAnimationFrame(animate)

}

document.getElementById('test').addEventListener( 'click', triggerAnimation, false );
function triggerAnimation() {
	animationTriggered = true;
	setTimeout(function(){
		document.getElementById('content').classList.remove("hidden");
	}, 3000)
}

function ease(t) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t}
function lerp(a, b, t) {return a + (b - a) * t}

animate();

import './style.css'

const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

import moonTexture from './tex/moon/moon_map-min.jpg';
import moonBump from './tex/moon/moon_displacement.jpg';
import spaceFontRegular from './fonts/Space_Mono/SpaceMono-Regular.ttf';
import spaceFontBold from './fonts/Space_Mono/SpaceMono-Bold.ttf';

import * as THREE from './node_modules/three/build/three.module';

import { Text, preloadFont } from './node_modules/troika-three-text/dist/troika-three-text.esm';

let loader, sphere, camera, scene, renderer, canvas, mixer, light, titleText, subtitleText, statusText, animationTriggered, destination;
let a,b;

var selectedObject;
var raycaster = new THREE.Raycaster();

var fileArray = [
	{
		name: "moonTexture",
		url	: moonTexture
	},
	{
		name: "moonBump",
		url	: moonBump
	},
];

let navConfiguration;
let textConfiguration;
if (isMobile) {
	navConfiguration = {
		home: {
			buttonLabel: 'About&nbsp;me',
			position: {x: 0, y: 0, z: 90},
			displayContent: false,
		},
		about: {
			buttonLabel: 'Go&nbsp;back',
			position: {x: -10, y: -10, z: 50},
			displayContent: true,
		}
	}

	textConfiguration = {
		title: {
			text: 'Antoine ANDO',
			fontSize: 5,
			position: {
				x:-18,
				y:39,
				z:32,
			},
		},
		subtitleText: {
			text: 'Fullstack JS Developer',
			fontSize: 2.7,
			position: {
				x:-18,
				y:33.5,
				z:32,
			},
		},
		statusText: {
			text: 'Available for freelance work starting Nov 2021',
			fontSize: 2,
			maxWidth: 29,
			position: {
				x:-17.8,
				y:30,
				z:32,
			},
		},
	}

}else{
	navConfiguration = {
		home: {
			buttonLabel: 'About&nbsp;me',
			position: {x: 0, y: 0, z: 50},
			displayContent: false,
		},
		about: {
			buttonLabel: 'Go&nbsp;back',
			position: {x: -10, y: -10, z: 42},
			displayContent: true,
		}
	}

	textConfiguration = {
		title: {
			text: 'Antoine ANDO',
			fontSize: 3,
			position: {
				x:0,
				y:4,
				z:32,
			},
		},
		subtitleText: {
			text: 'Fullstack JS Developer',
			fontSize: 1.62,
			position: {
				x:0,
				y:1,
				z:32,
			},
		},
		statusText: {
			text: 'Available for freelance work starting Nov 2021',
			fontSize: 0.7,
			maxWidth: 6,
			position: {
				x:15.6,
				y:-1.1,
				z:32,
			},
		},
	}
}


const loadTexture = () => {

	loader = new THREE.TextureLoader();

	var promiseArray = [];

    fileArray.forEach( function ( fileOBJ ) {
       promiseArray.push ( new Promise( function ( resolve , reject ) {
            loader.load(
                fileOBJ.url ,
                function ( texture ) {
                    var modelOBJ = new Object();
                    modelOBJ[fileOBJ.name] = texture;
                    if( modelOBJ[fileOBJ.name] instanceof THREE.Texture ) resolve( modelOBJ )
                },
                function ( xhr ) {
                },
                function ( xhr ) {
                    reject( new Error ( xhr + 'An error occurred loading while loading' + fileOBJ.url ) )
                }
            ) 
    	}));
   });


	return Promise.all(promiseArray)

}

function createMoon(map, bumpMap, done){
		//MOON
		const radius = 30;
		const detail = 20;	
		const sphereGeometry = new THREE.IcosahedronGeometry(radius, detail);
		const moonTextureOptions = {
			map: map.moonTexture,
			bumpMap: bumpMap.moonBump,
			bumpScale: 0.8,
		};

		const sphereMaterial = new THREE.MeshStandardMaterial(moonTextureOptions);
		sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
		sphere.position.set(0,0,0);
		sphere.rotation.y = 80 * (Math.PI/180);
		scene.add(sphere);
		done(true);
}

function init(done){

		scene = new THREE.Scene();

		let promiseArray = [];

		promiseArray.push(new Promise((resolve,reject)=>{
			loadTexture()
			.then( function ( textures ) {
				createMoon(textures[0], textures[1], resolve);
			});

		}));

		promiseArray.push(new Promise((resolve, reject)=>{
			preloadFont({
				font: spaceFontBold,
				characters: 'abcdefghijklmnopqrstuvwxyz'
			},()=>{

				titleText.font = spaceFontBold;
				titleText.sync()

				preloadFont({
					font: spaceFontRegular,
					characters: 'abcdefghijklmnopqrstuvwxyz'
				},()=>{
					subtitleText.font = spaceFontRegular;
					subtitleText.sync();

					statusText.font = spaceFontRegular;
					statusText.sync();

					resolve(true);
				});	
			});
		}));

		Promise.all(promiseArray).then((values)=>{
			console.log("All assets are ready");
			console.log(values);
			done()
		});


		titleText = new Text();
		scene.add(titleText);
		titleText.text = textConfiguration.title.text;
		titleText.fontSize = textConfiguration.title.fontSize;
		titleText.position.set(textConfiguration.title.position.x,textConfiguration.title.position.y,textConfiguration.title.position.z);
		titleText.color = '#FC3D21';

		subtitleText = new Text();
		scene.add(subtitleText);
		subtitleText.text = textConfiguration.subtitleText.text;
		subtitleText.fontSize = textConfiguration.subtitleText.fontSize;
		subtitleText.position.set(textConfiguration.subtitleText.position.x,textConfiguration.subtitleText.position.y,textConfiguration.subtitleText.position.z);
		subtitleText.color = 'white';

		statusText = new Text();
		scene.add(statusText);
		statusText.text = textConfiguration.statusText.text;
		statusText.maxWidth = textConfiguration.statusText.maxWidth;
		statusText.textAlign  = 'justify';
		statusText.fontSize = textConfiguration.statusText.fontSize;
		statusText.position.set(textConfiguration.statusText.position.x,textConfiguration.statusText.position.y, textConfiguration.statusText.position.z);
		statusText.color = 'grey';

		renderer = new THREE.WebGLRenderer({
			canvas: document.querySelector("#canvas"),
			antialias: true,
			powerPreference: "high-performance"
		});

		canvas = renderer.domElement;

		let pixelRatio = (window.devicePixelRatio>3)?3:window.devicePixelRatio;

		renderer.setPixelRatio(pixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight );

		//CAMERA
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.x = navConfiguration.home.position.x;
		camera.position.y = navConfiguration.home.position.y;
		camera.position.z = navConfiguration.home.position.z;

		animationTriggered = false;

		//Light
		light = new THREE.DirectionalLight('white', 1.3);
		light.position.set(40,0,20);
		scene.add(light);

		//RAYCASTER - DO NOT DELETE
/*
		canvas.addEventListener('click', ()=>{
			var mouse = new THREE.Vector2();
			mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			var intersects = raycaster.intersectObjects(scene.children); //array
			if (intersects.length > 0) {
				selectedObject = intersects[0];
				if(selectedObject.object.uuid == aboutLink.uuid){
					triggerAnimation();
				}
			}
		})
*/		

		document.getElementById('nav-about').parentElement.addEventListener('click', triggerAnimation, false);

		window.addEventListener("resize", ()=>{
			renderer.setSize( window.innerWidth, window.innerHeight );
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		});
}


var t = 0, dt = 0.001;                

function animate() {
	if(sphere){
		sphere.rotation.y += 0.0002;
	}

	if(animationTriggered){

		var a = {
			x: camera.position.x,
			y: camera.position.y,
			z: camera.position.z,
		}

		var b = {
			x: navConfiguration[destination].position.x,
			y: navConfiguration[destination].position.y,
			z: navConfiguration[destination].position.z
		}

		var newX = lerp(a.x, b.x, ease(t));
		var newY = lerp(a.y, b.y, ease(t));
		var newZ = lerp(a.z, b.z, ease(t));
		camera.position.set(newX, newY, newZ);
		camera.lookAt(sphere.position)
		t += dt;

		if (t >= 0.2){
			animationTriggered = false;
			t=0;
		}
	}

	renderer.render(scene, camera);
	requestAnimationFrame(animate)

}

function triggerAnimation() {
	var buttonSpan = document.getElementById('nav-about')
	buttonSpan.parentElement.classList.add('inactive');
	animationTriggered = true;
	destination = buttonSpan.getAttribute('to');

	if(navConfiguration[destination].displayContent == true){
		setTimeout(()=>{
			document.getElementById('content').classList.remove("hidden");
		}, 3000);
	}else{
		document.getElementById('content').classList.add("hidden");
	}

	setTimeout(function(){
		buttonSpan.classList.add('collapse');
		setTimeout(()=>{
			buttonSpan.innerHTML = navConfiguration[destination].buttonLabel;
			buttonSpan.classList.remove('collapse');
			if(destination == 'home'){
				buttonSpan.setAttribute('to', 'about');
			}else if(destination == 'about'){
				buttonSpan.setAttribute('to', 'home');
			}
			buttonSpan.parentElement.classList.remove('inactive');
		}, 500)
	}, 3000)
}

function removeLoadingScreen(){
    const loadingScreen = document.getElementById('loading-screen');
	loadingScreen.classList.add("hidden");
	loadingScreen.addEventListener( 'transitionend', (event)=>{
		event.target.remove();
	});
}

function ease(t) { return t<0.5 ? 2*t*t : -1+(4-2*t)*t}
function lerp(a, b, t) {return a + (b - a) * t}

init(()=>{
	removeLoadingScreen();
});
animate();

// Set-up 
// -------------------------------------------------------

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var loader = new THREE.OBJLoader();

// Geometry Set-up

/*
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshNormalMaterial(
	{
	  color: 0x00ff00
	});
var cube = new THREE.Mesh(geometry, material); 

scene.add(cube);
camera.position.z = 5; */

// Load resource

loader.load('obj/gallop.obj', function (object) {

	scene.add(object);
	camera.position.z = 5;
	animate();
});


// Event Handlers
// ------------------------------------------------------------


// creates a loop that causes the renderer to draw the scene 60 times per second.
function animate() {
	requestAnimationFrame(animate);
	render();
	// rotates the cube
//	cube.rotation.x += 0.01;
//	cube.rotation.y += 0.03;
}


function render() {
	renderer.render(scene,camera);
}



// Update page
// ----------------------------------------------
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
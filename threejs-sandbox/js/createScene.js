// Set-up 
// -------------------------------------------------------

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

// Geometry Set-up

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

// Event Handlers
// ------------------------------------------------------------
// creates a loop that causes the renderer to draw the scene 60 times per second.
function render() {
	requestAnimationFrame(render);
	// rotates the cube
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.03;
	renderer.render(scene,camera);
}
render();




// Update page
// ----------------------------------------------
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);





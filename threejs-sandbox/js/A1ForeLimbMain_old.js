//Global Variables
var container; 
//stats;
var camera, controls, scene, renderer;
var objects = [];
var plane = new THREE.Plane();
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2(),
	offset = new THREE.Vector3(),
	intersection = new THREE.Vector3(),
	INTERSECTED, SELECTED;
var message, context1, context2, texture1, canvas1, projector;
var fullScreenIcon = document.querySelector(".fullscreen");





init();
animate();





// Three.JS Functions
function init()
{
	container = document.createElement( 'div' );
	document.body.appendChild( container );

//Camera
	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight,1,100 );
	camera.position.x =7;
	camera.position.y =-7;
	camera.position.z =9;
	camera.up = new THREE.Vector3(0,0,1);
				
//Controls
	controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	scene = new THREE.Scene();
	scene.add( new THREE.AmbientLight( 0x000000 ) );

//Light
	var light_ambient = new THREE.AmbientLight(0x6b6b6b);
    scene.add(light_ambient);
    light = new THREE.PointLight(0x999999);
    light.position.set(5.89090, -7.85453, 11.78180);
    scene.add(light);
    light = new THREE.PointLight(0x4C4C4C);
    light.position.set(-7.85453, -7.85453, 5.89090);
    scene.add(light);
    light = new THREE.PointLight(0x4C4C4C);
    light.position.set(0.00000, 7.85453, 7.85453);
    scene.add(light);

// Geometry Floor Pedestal	
	var cubeGeometry = new THREE.CubeGeometry( 2, 2, 0.3 );
	var cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x727272 } );
	cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	cube.position.set(-0.1,-0.9,-5.3);
	cube.name = "Cube";
	scene.add(cube);

// Geometry Anatomy Elements
    create_geometry_0( scene, objects); //metacarpal
    create_geometry_1( scene, objects); //metacarpal splint 1
    create_geometry_2( scene, objects); //metacarpal splint 2
    create_geometry_3( scene, objects); //carpal 2
    create_geometry_4( scene, objects); //Carpal 3
    create_geometry_5( scene, objects); //Carpal 4
  //  create_geometry_6( scene, objects); //Carpal Ulnar
    create_geometry_7( scene, objects); //Distal Phalanx
    create_geometry_8( scene, objects); //Proximal Phalanx
    create_geometry_9( scene, objects); //Middle Phalanx
    create_geometry_10( scene, objects); //Proximal Sesamoid 1
    create_geometry_11( scene, objects); //Proximal Sesamoid 2
 //   create_geometry_12( scene, objects); //Hoof Section
    create_geometry_13( scene, objects); //Carpal Radial
    create_geometry_14( scene, objects); //Carpal Intermediate
    create_geometry_15( scene, objects); //Scapula
    create_geometry_16( scene, objects); //Humerus
    create_geometry_17( scene, objects); //Ulna
    create_geometry_18( scene, objects); //Abductor Pollicis Longus
    create_geometry_19( scene, objects); //Biceps Brachii
    create_geometry_20( scene, objects); //Brachialis
  //  create_geometry_21( scene, objects); //Coracobrachialis texture material not working
    create_geometry_22( scene, objects); //Deltoideus
    create_geometry_23( scene, objects); //Extensor Carpi Radialis
    create_geometry_24( scene, objects); //Extensor Digitorium Communis
    create_geometry_25( scene, objects); //Extensor Digitorium Lateralis
    create_geometry_26( scene, objects); //Flexor Carpi Radialis
    create_geometry_27( scene, objects); //Flexor Carpi Ulnaris
    create_geometry_28( scene, objects); //Flexor Digitorium Profundus
    //create_geometry_29( scene, objects); //Section B 
    create_geometry_30( scene, objects); //Infraspinatus
    //  create_geometry_31( scene, objects); //Ecorche
    // create_geometry_32( scene, objects); //Outside Skin
    create_geometry_33( scene, objects); //Teres Major
    create_geometry_34( scene, objects); //Subscapularis
    //    create_geometry_35( scene, objects); //
    create_geometry_36( scene, objects); //Supraspinatus
    create_geometry_37( scene, objects); //Triceps Brachii Short head
    create_geometry_38( scene, objects); //Triceps Brachii Long Head
    create_geometry_39( scene, objects); //Ulnaris Lateralis 

//Renderer
	renderer = new THREE.WebGLRenderer( { antialias: true } );
//	renderer = new THREE.WebGLRenderer( { canvas1: canvas } );
	renderer.setClearColor( 0x000000 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFShadowMap;
	container.appendChild( renderer.domElement );
//	canvas = document.querySelector("canvas");
	var info = document.createElement( 'div' );
	info.style.position = 'absolute';
	info.style.top = '10px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
//	info.innerHTML = '<a href="http://threejs.org" style="color:#fff">Horse Forelimb Anatomy</a> ';
	container.appendChild( info );
/*
Stats
	stats = new Stats();
	container.appendChild( stats.dom );
	renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
*/
	window.addEventListener( 'resize', onWindowResize, false ); 
}//Function Init


function onWindowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	controls.handleResize();
	render();
}


function onDocumentMouseMove( event, message )
{
	event.preventDefault();
	//update the mouse variable
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, camera );
	if ( SELECTED )
	{
		if ( raycaster.ray.intersectPlane( plane, intersection ) )
		{
			SELECTED.position.copy( intersection.sub( offset ) );
		}
		return;
	}

	// initialize object to perform world/screen calculations
	projector = new THREE.Projector();
	
	// when the mouse moves, call the given function
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	/////// draw text on canvas /////////
	// create a canvas element
	canvas1 = document.createElement('canvas');
	context1 = canvas1.getContext('2d');
	context1.font = "Bold 20px Arial";
	context1.fillStyle = "rgba(0,0,0,0.95)";
    context1.fillText('Hello, world!', 0, 20);
    
	// canvas contents will be used for a texture
	texture1 = new THREE.Texture(canvas1); 
	texture1.needsUpdate = true;

	//create an array containing all objects in the scene with which the ray intersects
	var intersects = raycaster.intersectObjects( objects );

	//if there is one or more intersections
	if ( intersects.length > 0 )
	{
					//if the closest object intersected is not the currently stored intersection object
		if ( INTERSECTED != intersects[ 0 ].object )
		{
			//restore previous intersection object if it exists to its original color
			if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
				//store reference to closest object as current intersection object
				INTERSECTED = intersects[ 0 ].object;
				//store color of closest object for later restoration
				INTERSECTED.currentHex = INTERSECTED.material.color.getHex();


			//set a new color for closest object
			INTERSECTED.material.color.setHex( 0x727272);
			INTERSECTED.material.transparent.set( true );

			// update text, if it has a "name" field.
			if ( intersects[ 0 ].object.name )
			{
			    context1.clearRect(0,0,640,480);
				message = intersects[ 0 ].object.name;
				var metrics = context1.measureText(message);
				var width = metrics.width;
				context1.fillStyle = "rgba(255,0,0,0.95)"; // black border
				context1.fillRect( 0,0, width+8,20+8);
				context1.fillStyle = "rgba(255,255,255,0.95)"; // white filler
				context1.fillRect( 2,2, width+4,20+4 );
				context1.fillStyle = "rgba(0,0,0,1)"; // text color
				context1.fillText( message, 4,20 );
				texture1.needsUpdate = true;
			}
			else
			{
	 			// restore previous intersection object (if it exists)
	 			// to its original color
	 			if ( INTERSECTED ) 
	     		INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
	    		// remove previous intersection object reference
	  		  	// by setting current intersection object to "nothing"
	 	       	INTERSECTED = null;
				context1.clearRect(0,0,300,300);
				texture1.needsUpdate = true;
			}
				INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
				plane.setFromNormalAndCoplanarPoint(
				camera.getWorldDirection( plane.normal ),
				INTERSECTED.position );
		}
			container.style.cursor = 'pointer';
	}
	else
	{
			if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			INTERSECTED = null;
			container.style.cursor = 'auto';
	}

}//function onDocumentMouseMove

function partname (message){
   	var	canva2 = document.createElement('canvas');
	context2 = canvas2.getContext('2d');
	context2.font = "Bold 20px Arial";
	context2.fillStyle = "rgba(0,0,0,0.95)";
    context2.fillText(message, 0, 20);
    
   	}

function onDocumentMouseDown( event )
{
	event.preventDefault();
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( objects );
	if ( intersects.length > 0 ) {
		controls.enabled = false;
		SELECTED = intersects[ 0 ].object;
		if ( raycaster.ray.intersectPlane( plane, intersection ) ) {
			offset.copy( intersection ).sub( SELECTED.position );
		}
		container.style.cursor = 'move';
	}
}


function onDocumentMouseUp( event )
{
	event.preventDefault();
	controls.enabled = true;
	if ( INTERSECTED ) {
		SELECTED = null;
	}
		container.style.cursor = 'auto';
}


//
function animate() {
	requestAnimationFrame( animate );
	render();
	controls.update();
//	stats.update();
}


function render()
{
//	controls.update();
	renderer.render( scene, camera );
}


// Canvas Resizing functions
/*
function onResize(element, callback) {
  var height = element.clientHeight;
  var width  = element.clientWidth;

  return setInterval(function() {
      if (element.clientHeight != height || element.clientWidth != width) {
        height = element.clientHeight;
        width  = element.clientWidth;
        callback();
      }
  }, 500);
}

onResize(canvas, function () {
  canvas.width  = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  renderer.setViewport(0, 0, canvas.clientWidth, canvas.clientHeight);
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
}); */
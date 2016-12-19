//Global Variables
// -----------------------------------------------------------

// for Three.JS 
var container; // stats;
var camera, controls, scene, renderer;
var objects = [];
var plane = new THREE.Plane();
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2(),
	offset = new THREE.Vector3(),
	intersection = new THREE.Vector3(),
	INTERSECTED, SELECTED;
var message, context1, context2, texture1, canvas1, projector;

// for window pop out
var windowObjectReference;
var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

// for Dat.GUI
var gui;
var section1Params;
var section2Params;
var section3Params;
var objectZeroParams;
var objectOneParams;
var objectTwoParams;
var objectThreeParams;
var objectFourParams;
var objectFiveParams;
var objectSixParams;
var objectSevenParams;
var objectEightParams;
var objectNineParams;
var objectTenParams;
var objectElevenParams;
var objectTwelveParams;
var objectThirteenParams;
var objectFourteenParams;
var objectFifteenParams;
var objectSixteenParams;
var objectSeventeenParams;
var objectThirteenParams;
var objectEighteenParams;
var objectNineteenParams;
var objectTwentyParams;
var objectTwentyOneParams;
var objectTwentyTwoParams;
var objectTwentyThreeParams;
var objectTwentyFourParams;
var objectTwentyFiveParams;
var objectTwentySixParams;
var objectTwentySevenParams;
var objectTwentyEightParams;
var objectTwentyNineParams;
var objectThirtyParams;
var objectThirtyOneParams;





// Three.JS events and functions
// ------------------------------------------------------------

init();
animate();

//Functions
function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

//Light	
	scene = new THREE.Scene();
	scene.add( new THREE.AmbientLight( 0x000000 ) );
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
	renderer.setClearColor( 0x000000 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFShadowMap;
	container.appendChild( renderer.domElement );
	var info = document.createElement( 'div' );
	info.style.position = 'absolute';
	info.style.top = '10px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.innerHTML = '<a href="http://threejs.org" style="color:#fff">Horse Forelimb Anatomy</a> ';
	container.appendChild( info );


//Camera
	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight,1,100 );
	camera.position.x =7;
	camera.position.y =-7;
	camera.position.z =9;
	camera.up = new THREE.Vector3(0,0,1);


//Controls
	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;




//Stats
//	stats = new Stats();
//	container.appendChild( stats.dom );
	renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
	//
	window.addEventListener( 'resize', onWindowResize, false );


		// Dat.GUI stuff

    gui = new dat.GUI();
	var folder1 = gui.addFolder('Section1');
	var folder2 = gui.addFolder('Section2');
	var folder3 = gui.addFolder('Section3');

	section1Params = {
		visible: true
	}

	section2Params = {
		visible: true
	}

	section3Params = {
		visible: true
	}

	objectZeroParams = {
		visible: true
	}
	objectOneParams = {
		visible: true
	}
	objectTwoParams = {
		visible: true
	}
	objectThreeParams = {
		visible: true
	}
	objectFourParams = {
		visible: true
	}
	objectFiveParams = {
		visible: true
	}
	objectSixParams = {
		visible: true
	}
	objectSevenParams = {
		visible: true
	}
	objectEightParams = {
		visible: true
	}
	objectNineParams = {
		visible: true
	}
	objectTenParams = {
		visible: true
	}
	objectElevenParams = {
		visible: true
	}
	objectTwelveParams = {
		visible: true
	}
	objectThirteenParams = {
		visible: true
	}
	objectFourteenParams = {
		visible: true
	}
	objectFifteenParams = {
		visible: true
	}
	objectSixteenParams = {
		visible: true
	}
	objectSeventeenParams = {
		visible: true
	}
	objectThirteenParams = {
		visible: true
	}
	objectEighteenParams = {
		visible: true
	}
	objectNineteenParams = {
		visible: true
	}
	objectTwentyParams = {
		visible: true
	}
	objectTwentyOneParams = {
		visible: true
	}
	objectTwentyTwoParams = {
		visible: true
	}
	objectTwentyThreeParams = {
		visible: true
	}
	objectTwentyFourParams = {
		visible: true
	}
	objectTwentyFiveParams = {
		visible: true
	}
	objectTwentySixParams = {
		visible: true
	}
    objectTwentySevenParams = {
		visible: true
	}
	objectTwentyEightParams = {
		visible: true
	}

	objectTwentyNineParams = {
		visible: true
	}
	objectThirtyParams = {
		visible: true
	}
	objectThirtyOneParams = {
		visible: true
	}



	var section1Visible = folder1.add( section1Params, 'visible').name('Section 1 All').listen();
	var section2Visible = folder2.add( section2Params, 'visible').name('Section 2 All').listen();
	var section3Visible = folder3.add( section3Params, 'visible').name('Section 3 All').listen();
	var objectZeroVisible = folder1.add(objectZeroParams, 'visible').name('Metacarpal').listen();
	var objectOneVisible = folder1.add(objectOneParams, 'visible').name('Metacarpal Splint 1').listen();
	var objectTwoVisible = folder1.add(objectTwoParams, 'visible').name('Metacarpal Splint 2').listen();
	var objectThreeVisible = folder1.add(objectThreeParams, 'visible').name('Carpal 2').listen();
	var objectFourVisible = folder1.add(objectFourParams, 'visible').name('Carpal 3').listen();
	var objectFiveVisible = folder1.add(objectFiveParams, 'visible').name('Carpal 4').listen();
	var objectSixVisible = folder1.add(objectSixParams, 'visible').name('Distal Phalanx').listen();
	var objectSevenVisible = folder1.add(objectSevenParams, 'visible').name('Proximal Phalanx').listen();
	var objectEightVisible = folder1.add(objectEightParams, 'visible').name('Middle Phalanx').listen();
	var objectNineVisible = folder1.add(objectNineParams, 'visible').name('Proximal Sesamoid 1').listen();
	var objectTenVisible = folder1.add(objectTenParams, 'visible').name('Proximal Sesamoid 2').listen();
	var objectElevenVisible = folder1.add(objectElevenParams, 'visible').name('Carpal Radial').listen();
	var objectTwelveVisible = folder1.add(objectTwelveParams, 'visible').name('Carpal Intermediate').listen();
	var objectThirteenVisible = folder2.add(objectThirteenParams, 'visible').name('Scapula').listen();
	var objectFourteenVisible = folder2.add(objectFourteenParams, 'visible').name('Humerus').listen();
	var objectFifteenVisible = folder2.add(objectFifteenParams, 'visible').name('Ulna').listen();
	var objectSixteenVisible = folder2.add(objectSixteenParams, 'visible').name('Abductor Pollicis Longus').listen();
	var objectSeventeenVisible = folder2.add(objectSeventeenParams, 'visible').name('Biceps Brachii').listen();
	var objectEighteenVisible = folder2.add(objectEighteenParams, 'visible').name('Brachialis').listen();
	var objectNineteenVisible = folder2.add(objectNineteenParams, 'visible').name('Deltoideus').listen();
	var objectTwentyVisible = folder2.add(objectTwentyParams, 'visible').name('Extensor Carpi Radialis').listen();
	var objectTwentyOneVisible = folder2.add(objectTwentyOneParams, 'visible').name('Extensor Digitorium Communis').listen();
	var objectTwentyTwoVisible = folder2.add(objectTwentyTwoParams, 'visible').name('Flexor Carpi Radialis').listen();
	var objectTwentyThreeVisible = folder2.add(objectTwentyThreeParams, 'visible').name('Flexor Carpi Ulnaris').listen();
	var objectTwentyFourVisible = folder2.add(objectTwentyFourParams, 'visible').name('Flexor Digitorium Profundus').listen();
	var objectTwentyFiveVisible = folder2.add(objectTwentyFiveParams, 'visible').name('Infraspinatus').listen();
	var objectTwentySixVisible = folder3.add(objectTwentySixParams, 'visible').name('Teres Major').listen();
	var objectTwentySevenVisible = folder3.add(objectTwentySevenParams, 'visible').name('Subscapularis').listen();
	var objectTwentyEightVisible = folder3.add(objectTwentyEightParams, 'visible').name('Supraspinatus').listen();
	var objectTwentyNineVisible = folder3.add(objectTwentyNineParams, 'visible').name('Triceps Brachii Short Head').listen();
	var objectThirtyVisible = folder3.add(objectThirtyParams, 'visible').name('Triceps Brachii Long Head').listen();
	var objectThirtyOneVisible = folder3.add(objectThirtyOneParams, 'visible').name('Ulnaris Lateralis').listen();	


// Dat.Gui Events, Params, and Functions

	folder1.open();
	folder2.open();
	folder3.open();

	section1Visible.onChange(function(value) {
		objects[0].visible = value;
		objects[1].visible = value;
		objects[2].visible = value;
		objects[3].visible = value;
		objects[4].visible = value;
		objects[5].visible = value;
		objects[6].visible = value;
		objects[7].visible = value;
		objects[8].visible = value;
		objects[9].visible = value;
		objects[10].visible = value;
		objects[11].visible = value;
		objects[12].visible = value;
	})

	section2Visible.onChange(function(value) {
		objects[13].visible = value;
		objects[14].visible = value;
		objects[15].visible = value;
		objects[16].visible = value;
		objects[17].visible = value;
		objects[18].visible = value;
		objects[19].visible = value;
		objects[20].visible = value;
		objects[21].visible = value;
		objects[22].visible = value;
		objects[23].visible = value;
		objects[24].visible = value;
		objects[25].visible = value;
	})

	section3Visible.onChange(function(value) {
		objects[26].visible = value;
		objects[27].visible = value;
		objects[28].visible = value;
		objects[29].visible = value;
		objects[30].visible = value;
		objects[31].visible = value;
	})

	objectZeroVisible.onChange(function(value) {
		objects[0].visible = value;
	});

	objectOneVisible.onChange(function(value) {
		objects[1].visible = value;
	});

	objectTwoVisible.onChange(function(value) {
		objects[2].visible = value;
	});

	objectThreeVisible.onChange(function(value) {
		objects[3].visible = value;
	});

	objectFourVisible.onChange(function(value) {
		objects[4].visible = value;
	});

	objectFiveVisible.onChange(function(value) {
		objects[5].visible = value;
	});

	objectSixVisible.onChange(function(value) {
		objects[6].visible = value;
	});

	objectSevenVisible.onChange(function(value) {
		objects[7].visible = value;
	});

	objectEightVisible.onChange(function(value) {
		objects[8].visible = value;
	});

	objectNineVisible.onChange(function(value) {
		objects[9].visible = value;
	});

	objectTenVisible.onChange(function(value) {
		objects[10].visible = value;
	});

	objectElevenVisible.onChange(function(value) {
		objects[11].visible = value;
	});

	objectTwelveVisible.onChange(function(value) {
		objects[12].visible = value;
	});

	objectThirteenVisible.onChange(function(value) {
		objects[13].visible = value;
	});

	objectFourteenVisible.onChange(function(value) {
		objects[14].visible = value;
	});

	objectFifteenVisible.onChange(function(value) {
		objects[15].visible = value;
	});

	objectSixteenVisible.onChange(function(value) {
		objects[16].visible = value;
	});

	objectSeventeenVisible.onChange(function(value) {
		objects[17].visible = value;
	});

	objectEighteenVisible.onChange(function(value) {
		objects[18].visible = value;
	});

	objectNineteenVisible.onChange(function(value) {
		objects[19].visible = value;
	});

	objectTwentyVisible.onChange(function(value) {
		objects[20].visible = value;
	});

	objectTwentyOneVisible.onChange(function(value) {
		objects[21].visible = value;
	});

	objectTwentyTwoVisible.onChange(function(value) {
		objects[22].visible = value;
	});

	objectTwentyThreeVisible.onChange(function(value) {
		objects[23].visible = value;
	});

	objectTwentyFourVisible.onChange(function(value) {
		objects[24].visible = value;
	});

	objectTwentyFiveVisible.onChange(function(value) {
		objects[25].visible = value;
	});

	objectTwentySixVisible.onChange(function(value) {
		objects[26].visible = value;
	});

	objectTwentySevenVisible.onChange(function(value) {
		objects[27].visible = value;
	});

	objectTwentyEightVisible.onChange(function(value) {
		objects[28].visible = value;
	});

	objectTwentyNineVisible.onChange(function(value) {
		objects[29].visible = value;
	});

	objectThirtyVisible.onChange(function(value) {
		objects[30].visible = value;
	});

	objectThirtyOneVisible.onChange(function(value) {
		objects[31].visible = value;
	});
}//Function Init


function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}


function onDocumentMouseMove( event, message ) {
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
	if ( intersects.length > 0 ) {
		//if the closest object intersected is not the currently stored intersection object
		if ( INTERSECTED != intersects[ 0 ].object ) {
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
			if ( intersects[ 0 ].object.name ) {
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
			} else {
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

	} else {
			if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			INTERSECTED = null;
			container.style.cursor = 'auto';
	}

}//function onDocumentMouseMove

function partname (message) {
   	var	canvas2 = document.createElement('canvas');
	context2 = canvas2.getContext('2d');
	context2.font = "Bold 20px Arial";
	context2.fillStyle = "rgba(0,0,0,0.95)";
    context2.fillText(message, 0, 20);
    
   	} 

function onDocumentMouseDown( event ) {
	event.preventDefault();
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( objects );
	if ( intersects.length > 0 ) {
		controls.enabled = false;
		SELECTED = intersects[ 0 ].object;
		// this checks if the raycaster object selections matches, then show the appropriate dialog box
		if (intersects[0].object.uuid == objects[30].uuid) {
			$( ".ui-dialog-content" ).dialog( "close" );
 	   		$( "#leftForeLimb_38" ).dialog( "open" );
		} else if (intersects[0].object.uuid == objects[28].uuid) {
			$( ".ui-dialog-content" ).dialog( "close" );
			$( "#leftForeLimb_36" ).dialog( "open" );
		}

		if ( raycaster.ray.intersectPlane( plane, intersection ) ) {
			offset.copy( intersection ).sub( SELECTED.position );
		}
		container.style.cursor = 'move';
	}
}


function onDocumentMouseUp( event ) {
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
//	stats.update();
}


function render() {
	controls.update();
	renderer.render( scene, camera );
}


// Jquery Dialog Box
// ----------------------------------------------------------


// this specifies the positioning of where the dialog opens up as well as not to autoOpen
$( "#leftForeLimb_36" ).dialog({ 
	autoOpen: false,
	position: { my: "left top", at: "left top", of: window },
	buttons: [
		{
			text: "More Detail",
			click: function () {
				windowObjectReference = window.open(
					"file:///Users/stephenlaird/jsd2/threejs-sandbox/SuprastinatusDetail.html",
					"Supraspinatus",
   					strWindowFeatures
  					);
				}
		}
	]
});

$( "#leftForeLimb_38" ).dialog({ 
	autoOpen: false,
	position: { my: "left top", at: "left top", of: window },
	buttons: [
		{
			text: "More Detail",
			click: function () {
				windowObjectReference = window.open(
					"file:///Users/stephenlaird/jsd2/threejs-sandbox/tricepsBrachiiDetail.html",
					"tricepsBrachii",
   					strWindowFeatures
  					);
				}
		}
	]
});


// this specifies what dialog to open when the opener button is clicked
$( "#opener" ).click(function() {
  $( "#dialog" ).dialog( "open" );
}); 





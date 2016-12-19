      var camera, scene, renderer;
      var light;
      var controls;
      var objects = [];

      function CreateCam_0() {
      // Camera name: lft_cam
         var camera_obj = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5.89090,  31.32932);
         camera_obj.position.x = 13.72323;
         camera_obj.position.y = 0.00000;
         camera_obj.position.z = 0.00000;
         camera_obj.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera_obj.lookAt(target);
         return camera_obj;
      }
      function ChangeCam0(){
         camera = CreateCam_0();
         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);
      }
      function CreateCam_1() {
      // Camera name: rgt_cam
         var camera_obj = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 3.94947,  23.56360);
         camera_obj.position.x = -13.72323;
         camera_obj.position.y = 0.00000;
         camera_obj.position.z = 0.00000;
         camera_obj.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera_obj.lookAt(target);
         return camera_obj;
      }
      function ChangeCam1(){
         camera = CreateCam_1();
         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);
      }
      function CreateCam_2() {
      // Camera name: frt_cam
         var camera_obj = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5.89090,  28.90747);
         camera_obj.position.x = 0.00000;
         camera_obj.position.y = -13.11777;
         camera_obj.position.z = 0.00000;
         camera_obj.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera_obj.lookAt(target);
         return camera_obj;
      }
      function ChangeCam2(){
         camera = CreateCam_2();
         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);
      }
      function CreateCam_3() {
      // Camera name: bck_cam
         var camera_obj = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5.89090,  28.90747);
         camera_obj.position.x = 0.00000;
         camera_obj.position.y = 13.11777;
         camera_obj.position.z = 0.00000;
         camera_obj.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera_obj.lookAt(target);
         return camera_obj;
      }
      function ChangeCam3(){
         camera = CreateCam_3();
         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);
      }
      function CreateCam_4() {
      // Camera name: top_cam
         var camera_obj = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 2.91214,  27.35764);
         camera_obj.position.x = 0.00000;
         camera_obj.position.y = 0.00000;
         camera_obj.position.z = 9.75155;
         camera_obj.up = new THREE.Vector3(0, -1, 0);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera_obj.lookAt(target);
         return camera_obj;
      }
      function ChangeCam4(){
         camera = CreateCam_4();
         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);
      }
      function CreateCam_5() {
      // Camera name: iso_cam
         var camera_obj = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 2.94545,  293.21277);
         camera_obj.position.x = 7.83233;
         camera_obj.position.y = -7.22687;
         camera_obj.position.z = 9.81817;
         camera_obj.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera_obj.lookAt(target);
         return camera_obj;
      }
      function ChangeCam5(){
         camera = CreateCam_5();
         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);
      }

      init();
      animate();

      function init() {

         if ( !Detector.webgl ) Detector.addGetWebGLMessage();

         renderer = new THREE.WebGLRenderer();
         renderer.setSize(window.innerWidth, window.innerHeight);
         document.body.appendChild(renderer.domElement);
         renderer.setClearColor(0x000000, 1);

         camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 2.91214,  27.35764);
         camera.position.x = 7;
         camera.position.y = -7;
         camera.position.z = 9.75155;
         camera.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera.lookAt(target);

         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);

         scene = new THREE.Scene();

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


         // Geometry Anatomy Elements
    create_geometry_0( scene, objects); //metacarpal
    create_geometry_1( scene, objects); //metacarpal splint 1
    create_geometry_2( scene, objects); //metacarpal splint 2
    create_geometry_3( scene, objects); //carpal 2
    create_geometry_4( scene, objects); //Carpal 3
    create_geometry_5( scene, objects); //Carpal 4
    //create_geometry_6( scene, objects); //Carpal Ulnar
    create_geometry_7( scene, objects); //Distal Phalanx
    create_geometry_8( scene, objects); //Proximal Phalanx
    create_geometry_9( scene, objects); //Middle Phalanx
    create_geometry_10( scene, objects); //Proximal Sesamoid 1
    create_geometry_11( scene, objects); //Proximal Sesamoid 2
   // create_geometry_12( scene, objects); //Hoof Section
    create_geometry_13( scene, objects); //Carpal Radial
    create_geometry_14( scene, objects); //Carpal Intermediate
    create_geometry_15( scene, objects); //Scapula
    create_geometry_16( scene, objects); //Humerus
    create_geometry_17( scene, objects); //Ulna
    create_geometry_18( scene, objects); //Abductor Pollicis Longus
    create_geometry_19( scene, objects); //Biceps Brachii
    create_geometry_20( scene, objects); //Brachialis
    create_geometry_21( scene, objects); //Coracobrachialis texture material not working
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

         window.addEventListener('resize', onWindowResize, false);
      }

      function onWindowResize() {

         camera.aspect = window.innerWidth / window.innerHeight;
         camera.updateProjectionMatrix();

         renderer.setSize(window.innerWidth, window.innerHeight);

         controls.handleResize();
         render();
      }

      function animate()
      {
         requestAnimationFrame(animate);
         renderer.render(scene, camera);
         controls.update();
      }

      function render()
      {
         renderer.render(scene, camera);
      }

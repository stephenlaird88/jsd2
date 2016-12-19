      var camera, scene, renderer;
      var light;
      var controls;

      function CreateCam_0() {
      // Camera name: lft_cam
         var camera_obj = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 7.68477,  33.54524);
         camera_obj.position.x = 16.07108;
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
         var camera_obj = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 6.98322,  30.73907);
         camera_obj.position.x = -16.07108;
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
         var camera_obj = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 7.68477,  36.87680);
         camera_obj.position.x = 0.00000;
         camera_obj.position.y = -16.90397;
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
         var camera_obj = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 7.68477,  36.87680);
         camera_obj.position.x = 0.00000;
         camera_obj.position.y = 16.90397;
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
         var camera_obj = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 2.30165,  29.69931);
         camera_obj.position.x = 0.00000;
         camera_obj.position.y = 0.00000;
         camera_obj.position.z = 9.72648;
         camera_obj.up = new THREE.Vector3(0, 1, 0);
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
         var camera_obj = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 3.84238,  272.63559);
         camera_obj.position.x = 8.38631;
         camera_obj.position.y = -9.21920;
         camera_obj.position.z = 12.80794;
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

         camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 3.84238,  272.63559);
         camera.position.x = 8.38631;
         camera.position.y = -9.21920;
         camera.position.z = 12.80794;
         camera.up = new THREE.Vector3(0, 0, 1);
         var target = new THREE.Vector3(0.00000, 0.00000, 0.00000);
         camera.lookAt(target);

         controls = new THREE.TrackballControls(camera);
         controls.addEventListener('change', render);

         scene = new THREE.Scene();

         var light_ambient = new THREE.AmbientLight(0x000000);
         scene.add(light_ambient);

         light = new THREE.PointLight(0x999999);
         light.position.set(7.68477, -10.24636, 15.36953);
         scene.add(light);
         light = new THREE.PointLight(0x4C4C4C);
         light.position.set(-10.24636, -10.24636, 7.68477);
         scene.add(light);
         light = new THREE.PointLight(0x4C4C4C);
         light.position.set(0.00000, 10.24636, 10.24636);
         scene.add(light);

         var axes = new THREE.AxisHelper(12.29563);
         scene.add(axes);


         create_geometry_0(scene);

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

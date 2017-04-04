let startGame = () => {
  let siteWidth = document.getElementById('main');
  if (siteWidth) {
    siteWidth = siteWidth.offsetWidth /* minus padding */ - 24 - 24;
  }
  else {
    siteWidth = window.innerWidth;
  }
  let renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(siteWidth, window.innerHeight);

  let el = document.getElementById('game');
  if (el) {
    el.appendChild(renderer.domElement);
  }
  else {
    document.body.appendChild(renderer.domElement);
  }

  let camera = new THREE.PerspectiveCamera(45, siteWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  let scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  let material = new THREE.LineBasicMaterial({ color: 0xf000ff });
  let geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  geometry.vertices.push(new THREE.Vector3(10, 0, 0));
  let line = new THREE.Line(geometry, material);
  scene.add(line);

  // Control framerate
  let now, elapsed, then = Date.now();
  let fpsInterval = 1000 / 1;

  let render = () => {
    requestAnimationFrame(render);

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      material.color = new THREE.Color(getRandomColor());

      renderer.render(scene, camera);
    }
  };

  render();
};

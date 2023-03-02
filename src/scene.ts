import { createPlaneMarker } from "./object/PlaneMaker";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { handleXRHitTest } from "./utils/hitTest";

import {
  AmbientLight,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from "three";

export function createScene(renderer: WebGLRenderer) {
  const scene = new Scene()

  const camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.02,
    20,
  )

  const planeMarker = createPlaneMarker();

  scene.add(planeMarker);

  const renderLoop = (timestamp: number, frame?: XRFrame) => {   
    if (renderer.xr.isPresenting) {

      if (frame) {
        handleXRHitTest(renderer, frame, (hitPoseTransformed: Float32Array) => {
          if (hitPoseTransformed) {
            planeMarker.visible = true;
            planeMarker.matrix.fromArray(hitPoseTransformed);
          }
        }, () => {
          planeMarker.visible = false;
        })
      }
      renderer.render(scene, camera);
    }
  }
  
  let koalaModel: Object3D;
  
  const gltfLoader = new GLTFLoader();

  gltfLoader.load("/models/koala.glb", (gltf: GLTF) => {
    koalaModel = gltf.scene.children[0];
  });

  const controller = renderer.xr.getController(0);
  scene.add(controller);


  controller.addEventListener("select", onSelect);

  function onSelect() {
    if (planeMarker.visible) {
      const model = koalaModel.clone();

      model.position.setFromMatrixPosition(planeMarker.matrix);

      // Rotate the model randomly to give a bit of variation to the scene.
      model.rotation.y = Math.random() * (Math.PI * 2);
      model.visible = true;
      const ambientLight = new AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);
      scene.add(model);
    }
  }

  renderer.setAnimationLoop(renderLoop);
};
import * as BABYLON from "@babylonjs/core";
import SceneComponent from 'babylonjs-hook';
import "./Scene.css";
import "@babylonjs/loaders";
// import { Inspector } from "babylonjs-inspector";

const onSceneReady = (scene) => {
  const camera = new BABYLON.ArcRotateCamera("camera", 
    4 * Math.PI / 2.7, 
    Math.PI / 1.4, 
    5, 
    new BABYLON.Vector3(0, 4.5, 0), 
    scene
  );

  const canvas = scene.getEngine().getRenderingCanvas();

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());
  // camera.lowerAlphaLimit = 4 * Math.PI / 2.7;
  // camera.upperAlphaLimit = 4 * Math.PI / 2.7;
  camera.lowerBetaLimit = Math.PI / 1.4;
  camera.upperBetaLimit = Math.PI / 2.5;
  camera.lowerRadiusLimit = 2.5;
  camera.upperRadiusLimit = 2.5;
  camera.attachControl(canvas, false);

  // Environment
  // scene.createDefaultEnvironment();

  // Load the model
  BABYLON.SceneLoader.Append("/models/", "Sofa_01_2k.gltf", scene, function () {

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.5;

    scene.lights[0].dispose();
    var light1 = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(-2, -3, 1), scene);
    light1.position = new BABYLON.Vector3(6, 9, 3);
    var generator = new BABYLON.ShadowGenerator(512, light1);
    generator.useBlurExponentialShadowMap = true;
    generator.blurKernel = 32;

    scene.meshes[0].position.y = -0.3;

    for (var i = 0; i < scene.meshes.length; i++) {
        generator.addShadowCaster(scene.meshes[i]);    
    }

    var helper = scene.createDefaultEnvironment({
        enableGroundMirror: true,
        groundShadowLevel: 0.6,
    });       

    helper.setMainColor(BABYLON.Color3.Black());
    // helper.ground.position.z = -3;

  });

  // Inspector and Scene Explorer
  // Inspector.Show(scene, {embedMode: false})

  

};

// renders at 60fps
// engine.runRenderLoop(function() {
//   scene.render();
// });

// window.addEventListener("resize", function() {
//   engine.resize();
// });

const Scene1 = () => (
  <div className="scene-container">
    <SceneComponent antialias onSceneReady={onSceneReady} id="renderCanvas" />
  </div>
);

export default Scene1;
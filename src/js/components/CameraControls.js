import React, { useRef, useContext } from "react";
import { extend, useThree, useFrame  } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Context } from "../context/Context";

export default function CameraControls(props) {
  const { cameraZPos  } = props;

  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();

  console.log(cameraZPos >= -200);

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  useFrame(() => {
    if(cameraZPos <= -200) {
      camera.position.set( 0, 0, cameraZPos );
    }
    controls.current.autoRotate = true;
    controls.current.autoRotateSpeed = -2;
    controls.current.update()
  });
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={true}
    />
  );
};


extend({ OrbitControls });
import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const ref = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

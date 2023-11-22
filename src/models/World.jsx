/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/retro-computer-setup-free-82eaf2047e0447a1bfea22482f1d1404
Title: Retro Computer Setup (FREE)
*/

import { useRef, useEffect, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import earth from "../assets/3d/wonderful_world.glb";

export const World = ({ isRotating, setIsRotating, ...props }) => {
  const worldref = useRef();
  const { nodes, materials, animations } = useGLTF(earth);
  const { actions } = useAnimations(animations, worldref);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);

  const dampingFactor = 0.95;

  useEffect(() => {
    const interval = setInterval(() => {
      rotationSpeed.current = (0.001 * Math.PI) / 2;
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      worldref.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      worldref.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      worldref.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      worldref.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = worldref.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      const canvas = gl.domElement;
      canvas.addEventListener("pointerdown", handlePointerDown);
      canvas.addEventListener("pointerup", handlePointerUp);
      canvas.addEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("touchstart", handlePointerDown);
      canvas.addEventListener("touchend", handlePointerUp);
      canvas.addEventListener("touchmove", handlePointerMove);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        canvas.removeEventListener("pointerdown", handlePointerDown);
        canvas.removeEventListener("pointerup", handlePointerUp);
        canvas.removeEventListener("pointermove", handlePointerMove);
        canvas.addEventListener("touchstart", handlePointerDown);
        canvas.addEventListener("touchend", handlePointerUp);
        canvas.addEventListener("touchmove", handlePointerMove);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={worldref} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sphere001_0" scale={2.473}>
                <mesh name="Object_4" castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.material} />
              </group>
              <group name="Sphere002_1" scale={2.444}>
                <mesh name="Object_6" castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.material} />
              </group>
              <group name="Sphere003_2" scale={2.423}>
                <mesh name="Object_8" castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.material} />
              </group>
              <group name="Sphere004_3" scale={2.395}>
                <mesh name="Object_10" castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.material} />
              </group>
              <group name="Sphere005_4" scale={2.367}>
                <mesh name="Object_12" castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.material} />
              </group>
              <group name="Sphere006_5" scale={2.344}>
                <mesh name="Object_14" castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.material} />
              </group>
              <group name="Sphere007_6" scale={2.316}>
                <mesh name="Object_16" castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.material} />
              </group>
              <group name="Sphere008_7" scale={2.289}>
                <mesh name="Object_18" castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.material} />
              </group>
              <group name="Sphere009_8" scale={2.269}>
                <mesh name="Object_20" castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.material} />
              </group>
              <group name="Sphere0010_9" scale={2.243}>
                <mesh name="Object_22" castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.material} />
              </group>
              <group name="Sphere011_10" scale={2.217}>
                <mesh name="Object_24" castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.material} />
              </group>
              <group name="Sphere012_11" scale={22.532}>
                <mesh name="Object_26" castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.material_1} />
              </group>
              <group name="Circle_15" scale={3.736}>
                <group name="Sphere_12" scale={0.67}>
                  <mesh name="Object_29" castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials.material} />
                </group>
                <group name="x_13" scale={0.663}>
                  <mesh name="Object_31" castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials.lights} />
                </group>
                <group name="xxxx_14" scale={0.673}>
                  <mesh name="Object_33" castShadow receiveShadow geometry={nodes.Object_33.geometry} material={materials.material_3} />
                </group>
              </group>
              <group name="Sphere013_16" rotation={[Math.PI / 2, 0, 0]} scale={[0.019, 0.03, 0.019]}>
                <mesh name="Object_35" castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials.material_4} />
              </group>
              <group name="Sphere014_18" rotation={[Math.PI / 2, 0, 0]} scale={[0.017, 0.028, 0.017]}>
                <mesh name="Object_37" castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials.material_5} />
              </group>
              <group name="Sphere015_20" rotation={[Math.PI / 2, 0, 0]} scale={[0.019, 0.03, 0.019]}>
                <mesh name="Object_39" castShadow receiveShadow geometry={nodes.Object_39.geometry} material={materials.material_5} />
              </group>
              <group name="Sphere016_22" rotation={[Math.PI / 2, 0, 0]} scale={[0.016, 0.026, 0.016]}>
                <mesh name="Object_41" castShadow receiveShadow geometry={nodes.Object_41.geometry} material={materials.material_4} />
              </group>
              <group name="Circle005_24" scale={3.736} />
              <group name="Sphere017_25" rotation={[Math.PI / 2, 0, 0]} scale={[0.017, 0.028, 0.017]}>
                <mesh name="Object_44" castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials.material_5} />
              </group>
              <group name="Sphere018_27" rotation={[Math.PI / 2, 0, 0]} scale={[0.017, 0.028, 0.017]}>
                <mesh name="Object_46" castShadow receiveShadow geometry={nodes.Object_46.geometry} material={materials.material_4} />
              </group>
              <group name="Sphere019_29" rotation={[Math.PI / 2, 0, 0]} scale={[0.019, 0.03, 0.019]}>
                <mesh name="Object_48" castShadow receiveShadow geometry={nodes.Object_48.geometry} material={materials.material_4} />
              </group>
              <group name="Sphere020_31" rotation={[Math.PI / 2, 0, 0]} scale={[0.016, 0.026, 0.016]}>
                <mesh name="Object_50" castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials.material_5} />
              </group>
              <group name="Sphere021_33" scale={0}>
                <mesh name="Object_52" castShadow receiveShadow geometry={nodes.Object_52.geometry} material={materials.CORE} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
};

import React, { useState, useRef,  Suspense , useCallback } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { Canvas, extend, useThree } from "react-three-fiber"
import { useFrame } from 'react-three-fiber'
import { useSpring, a } from "react-spring/three"
import './Three.css'
import { useGLTFLoader } from "drei"



extend({ OrbitControls })

const Model = () => {
   
        const  gltf  = useGLTFLoader('/scene.gltf',true);
        return  <primitive object={gltf.scene} dispose={null}/> 
};

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame((state) => orbitRef.current.update())

  

  return (
    <orbitControls
      autoRotate
      enableDamping

    //   maxPolarAngle={Math.PI / 3}
    //   minPolarAngle={Math.PI/3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
    <meshPhysicalMaterial attach="material" color="black" />
  </mesh>
)

const Box = () => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    color: active ? "hotpink" : "lightblue",
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
    
  })

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

export default () => {
  const isBrowser = typeof window !== "undefined"
  const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }))
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => set({ mouse: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])

  return (
    <>
      <h1>Hello everyone!</h1>

      {isBrowser && (
          <div onMouseMove={onMouseMove}>
        <Canvas 
          camera={{ position: [30, 17, 25] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
            <Suspense fallback= {null} >
          <ambientLight intensity={2.5} />
          <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
          <directionalLight position={[10,70,5]} intensity={1} />
          <directionalLight position={[0,-17,0]} intensity={5} />
          <fog attach="fog" args={["black", 20, 40]} />
          <Controls />
          {/* <Box />  */}
          <Plane />
        <mesh position={[0,14,0]} scale={[.1,.1,.1]}>
          <Model /></mesh></Suspense>
        </Canvas>
        </div>
      )}
    </>
  )
}
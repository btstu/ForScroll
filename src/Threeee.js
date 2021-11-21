import React, { useState, useRef,  Suspence } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { Canvas, extend, useThree } from "react-three-fiber"
import { useFrame } from 'react-three-fiber'
import { useSpring, a } from "react-spring/three"
import './Three.css'
import { useGLTFLoader } from "drei"



extend({ OrbitControls })

const Model = () => {
   
        const  gltf  = useGLTFLoader('/jjj.gltf',true);
        return  <primitive object={gltf.scene} dispose={null}/> 
};

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame((state) => orbitRef.current.update())

  

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
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

  return (
    <>
      <h1>Hello everyone!</h1>
      {isBrowser && (
        <Canvas 
          camera={{ position: [0, 0, 5] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
            <Suspence fallback= {null} >
          <ambientLight intensity={0.5} />
          <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
          <fog attach="fog" args={["black", 10, 25]} />
          <Controls />
          <Box /> 
          <Plane />
        <mesh position={[0,35,0]}>
          <Model />
          </mesh>
          </Suspence>
        </Canvas>
      )}
    </>
  )
}
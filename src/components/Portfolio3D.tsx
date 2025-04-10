import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'


function RX7Model() {
  const gltf = useLoader(GLTFLoader, '/models/rx7.glb')
  const ref = useRef<THREE.Group>(null)
  const scroll = useScroll()

  useFrame(() => {
    if (ref.current) {
      const zPos = scroll.offset * 10
      ref.current.position.z = -zPos
      ref.current.rotation.y = scroll.offset * Math.PI
    }
  })

  return <primitive object={gltf.scene} ref={ref} scale={0.5} />
}

export default function Portfolio3D() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />

      <ScrollControls pages={3}>
        <RX7Model />

        <Scroll html>
          <div
            style={{
              position: 'absolute',
              top: '40vh',
              width: '100%',
              textAlign: 'center',
              color: 'white',
              pointerEvents: 'none'
            }}
          >
            <h1 style={{ fontSize: '3rem' }}>My 3D Portfolio</h1>
            <p>Scroll untuk melihat animasi mobil RX-7</p>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}

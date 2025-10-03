import React from 'react'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'

const Shape = () => {
  return (
    <>
                  <mesh>
                        <Sphere args={[1, 100, 200]} 
                        scale={2.4}>
                        <MeshDistortMaterial 
                        color="#FFD54F" 
                        attach="material" 
                        distort={0.5} 
                        speed={2}/>
                        </Sphere>
                        <ambientLight intensity={2} />
                  </mesh>
    </>
  )
}

export default Shape
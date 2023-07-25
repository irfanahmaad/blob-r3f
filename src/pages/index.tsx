import Blob from "@/components/Blob"
import { Canvas } from "@react-three/fiber"

export default function Home() {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      <Blob />
    </Canvas>
  )
}

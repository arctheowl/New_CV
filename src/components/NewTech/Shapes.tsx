import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { transition } from "./settings";
import { Canvas, useThree } from "@react-three/fiber";
import { useSmoothTransform } from "./smoothTransform";
import { Decal, Float, useTexture } from "@react-three/drei";
import data from "../data/cvData.json";

export function Shapes({ title, isHover, isPress, mouseX, mouseY }: any) {
  if (title === "Frontend") {
    return (
      <FrontendShapes
        isHover={isHover}
        isPress={isPress}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    );
  } else if (title === "Backend") {
    return (
      <BackendShapes
        isHover={isHover}
        isPress={isPress}
        mouseX={mouseX}
        mouseY={mouseY}
      />
    );
  }
  return null;
}

export function FrontendShapes({ isHover, isPress, mouseX, mouseY }: any) {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <MotionConfig transition={transition}>
        <motion.group rotation={[lightRotateX, lightRotateY, 0]}>
          <Lights />
        </motion.group>
        <motion.group
          initial={false}
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isPress ? -0.9 : 0 },
          }}
        >
          {data.FrontendTech.map((tech, index) => {
            const position: [number, number, number] = [
              (index % 3) * 1.3 - 1,
              Math.floor(index / 3) * 1.5 - 1,
              0,
            ];

            return (
              <Sphere key={index} position={position} imgUrl={tech.icon} />
            );
          })}
        </motion.group>
      </MotionConfig>
    </Canvas>
  );
}

export function BackendShapes({
  isHover,
  isPress,
  mouseX,
  mouseY,
  title,
}: any) {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <MotionConfig transition={transition}>
        <motion.group rotation={[lightRotateX, lightRotateY, 0]}>
          <Lights />
        </motion.group>
        <motion.group
          initial={false}
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isPress ? -0.9 : 0 },
          }}
        >
          {data.BackendTech.map((tech, index) => {
            const position: [number, number, number] = [
              (index % 3) * 1.3 - 1,
              Math.floor(index / 3) * 1.5 - 1,
              0,
            ];

            return (
              <Sphere key={index} position={position} imgUrl={tech.icon} />
            );
          })}
        </motion.group>
      </MotionConfig>
    </Canvas>
  );
}

export function Lights() {
  return (
    <>
      <spotLight color="#61dafb" position={[-10, -10, -10]} intensity={0.2} />
      <spotLight color="#61dafb" position={[-10, 0, 15]} intensity={0.8} />
      <spotLight color="#61dafb" position={[-5, 20, 2]} intensity={0.5} />
      <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
      <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
      <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
    </>
  );
}

interface SphereProps {
  imgUrl: string;
  position: [number, number, number];
  variants?: {
    hover: {
      z: number;
      x: number;
      rotateX: number;
      rotateZ: number;
    };
  };
}

export function Sphere({ position, imgUrl }: SphereProps) {
  const decal = useTexture(imgUrl);
  return (
    <motion.mesh position={position} variants={{ hover: { z: 2 } }} scale={0.5}>
      <sphereGeometry args={[0.4]} />
      <Material imgUrl={imgUrl} />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </motion.mesh>
  );
}

export function Material({ imgUrl }: any) {
  const decal = useTexture(imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      {/* <directionalLight position={[0, 0, 0.05]} /> */}
      <mesh castShadow receiveShadow scale={1}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="white"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          // @ts-ignore
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
}

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }: any) {
  const cameraX = useSmoothTransform(mouseX, spring, (x: any) => x / 350);
  const cameraY = useSmoothTransform(
    mouseY,
    spring,
    (y: any) => (-1 * y) / 350
  );

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    // if (cam) {
    //   cam.aspect = size.width / size.height;
    //   cam.updateProjectionMatrix();
    // }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      // set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion.perspectiveCamera
      // ref={cameraRef}
      fov={90}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v: any) => (-1 * v) / 140;

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo.jsx";
import arise from "../assets/SKIRK-Arise.mp3";
import { soundoff, soundon } from "../assets/icons/index.js";
import { Satellite } from "../models/Satellite.jsx";
import { World } from "../models/World.jsx";
import { ScrollInfo } from "../components/ScrollInfo.jsx";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const audioRef = useRef(new Audio(arise));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    setIsBottom(bottom);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -8.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative bg-gradient-to-r from-blue-900 to-slate-900">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <HomeInfo currentStage={1} />
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Satellite scale={[0.3, 0.3, 0.3]} />
          <World scale={[7, 7, 7]} position={islandPosition} rotation={[0.1, 4.7, 0]} isRotating={isRotating} setIsRotating={setIsRotating} />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2 z-20 cursor-pointer">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="sound-icn"
          className="w-10 h-10 curser-pointer object-contain"
          onClick={() => {
            setIsPlayingMusic(!isPlayingMusic);
          }}
        />
      </div>
      {!isBottom ? (
        <div className="fixed bottom-2 right-0 left-0 flex justify-center">
          <svg className="animate-bounce h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7l7-7"></path>
          </svg>
        </div>
      ) : null}
      <ScrollInfo />
    </section>
  );
};

export default Home;

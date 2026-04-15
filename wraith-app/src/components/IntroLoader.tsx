import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // The total animation lasts around 5.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 5500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Volumetric Fog / Mist Effects */}
      <motion.div 
        className="absolute w-[150vw] h-[150vh] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%)",
          filter: "blur(40px)"
        }}
        initial={{ opacity: 0, x: -100, y: 50, scale: 1.2 }}
        animate={{ opacity: [0, 0.6, 0], x: 100, y: -50, scale: 1 }}
        transition={{ duration: 5.5, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute w-[120vw] h-[120vh] rounded-full mix-blend-screen pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(180,200,255,0.04) 0%, rgba(0,0,0,0) 50%)",
          filter: "blur(50px)"
        }}
        initial={{ opacity: 0, x: 150, y: -100 }}
        animate={{ opacity: [0, 0.4, 0], x: -100, y: 50 }}
        transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
      />

      {/* 3D Logo Emerging from Behind */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.1, rotateZ: -15, y: 50, filter: "blur(20px)" }}
        animate={{ opacity: 0.15, scale: [0.1, 1.2], rotateZ: 0, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
        transition={{ duration: 4.5, ease: "easeOut", delay: 0.2 }}
      >
        <img 
          src="/logo.png" 
          alt="Brand Aura" 
          className="w-64 md:w-96 h-auto invert brightness-200"
          style={{ filter: "drop-shadow(0px 0px 50px rgba(255,255,255,1))" }}
        />
      </motion.div>

      {/* 3D WRAITH Text with Light Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
        className="relative z-10"
      >
        <motion.h1
          className="font-light text-5xl md:text-7xl lg:text-9xl tracking-[0.4em] md:tracking-[0.6em] select-none text-transparent bg-clip-text relative"
          style={{
            backgroundImage: "linear-gradient(110deg, #111 0%, #333 40%, #fff 50%, #333 60%, #111 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            filter: "drop-shadow(0px 0px 30px rgba(255,255,255,0.1))"
          }}
          animate={{ backgroundPosition: ["200% center", "-200% center"] }}
          transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
        >
          WRAITH
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ perspective: 1200 }}
    >
      {/* 3D Elegant Smooth Logo Entrance without any boxes or gradients */}
      <motion.div
        className="relative z-10 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.5, rotateY: 90, z: -300 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
        exit={{ opacity: 0, scale: 1.2, rotateY: -10, filter: "blur(10px)" }}
        transition={{ duration: 3, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img 
          src="/logo.png" 
          alt="WRAITH Luxury" 
          className="w-48 md:w-72 h-auto invert mix-blend-screen relative z-10 block"
          style={{ 
            filter: "drop-shadow(0px 0px 30px rgba(255,255,255,0.25))",
            WebkitUserDrag: "none"
          }}
        />
      </motion.div>
    </motion.div>
  );
}

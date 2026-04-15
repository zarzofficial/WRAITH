import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500); // Shortened duration slightly for better pacing
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Subtle Static Vignette/Fog background to avoid GPU lag */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,30,30,0.4)_0%,_black_100%)] pointer-events-none" />

      {/* Elegant Smooth Logo Entrance */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img 
          src="/logo.png" 
          alt="WRAITH Luxury" 
          className="w-32 md:w-48 h-auto invert brightness-150 relative z-10"
          style={{ willChange: "transform, opacity, filter" }}
        />
        {/* Subtle glow behind logo */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1.5 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
          style={{
            boxShadow: "0 0 80px 40px rgba(255,255,255,0.05)",
            willChange: "transform, opacity"
          }}
        />
      </motion.div>
    </motion.div>
  );
}

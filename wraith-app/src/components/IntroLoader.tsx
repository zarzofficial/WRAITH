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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <img 
          src="/logo.png" 
          alt="WRAITH Luxury" 
          className="w-40 md:w-64 h-auto invert brightness-125 contrast-125 relative z-10 drop-shadow-2xl"
        />
        {/* Subtle glow behind logo without costly blurs */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1.2 }}
          transition={{ duration: 3.5, ease: "easeOut", delay: 0.2 }}
          style={{
            boxShadow: "0 0 60px 30px rgba(255,255,255,0.08)"
          }}
        />
      </motion.div>
    </motion.div>
  );
}

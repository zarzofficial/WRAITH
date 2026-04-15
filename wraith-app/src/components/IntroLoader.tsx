import { useEffect } from 'react';
import { motion } from 'framer-motion';

const cinematicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-black pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      style={{ perspective: 2200 }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.18, scale: 1.08 }}
        animate={{ opacity: [0.2, 0.34, 0.26], scale: [1.06, 1, 1.03] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 12%, rgba(255,255,255,0.03) 24%, rgba(0,0,0,0) 42%),
            radial-gradient(circle at 50% 54%, rgba(121,121,121,0.18) 0%, rgba(52,52,52,0.1) 20%, rgba(0,0,0,0) 50%),
            linear-gradient(180deg, rgba(5,5,5,0.95) 0%, rgba(0,0,0,1) 100%)
          `,
        }}
      />

      <motion.div
        className="absolute w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] rounded-full"
        animate={{ scale: [0.88, 1.02, 0.94], opacity: [0.24, 0.44, 0.28] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(182,182,182,0.16) 20%, rgba(28,28,28,0.08) 36%, rgba(0,0,0,0) 70%)',
          filter: 'blur(42px)',
        }}
      />

      <motion.div
        className="absolute w-[16rem] h-[25rem] md:w-[22rem] md:h-[34rem] rounded-full"
        animate={{ scaleY: [0.96, 1.08, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(165,165,165,0.08) 28%, rgba(0,0,0,0) 72%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Ultra-Clean Cinematic Logo Entrance without duplicated shadows */}
      <motion.div
        className="relative z-10 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.8, rotateY: 90, z: -150 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img 
          src="/logo.png" 
          alt="WRAITH Luxury" 
          className="w-40 md:w-64 h-auto block invert mix-blend-screen"
          style={{ WebkitUserDrag: "none" }}
        />
        
        {/* Very subtle ambient light behind, completely detached from the logo shape to prevent duplication */}
        <motion.div
        />

        <motion.img
          src="/logo.png"
          alt="WRAITH aura shadow"
          className="absolute w-40 md:w-56 h-auto select-none"
          aria-hidden="true"
          animate={{ x: [10, 14, 10], y: [16, 22, 16], rotateZ: [0, -1.4, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: 'translateZ(-110px)',
            opacity: 0.28,
            filter: 'brightness(0.45) blur(16px)',
          }}
          draggable="false"
        />

        <motion.img
          src="/logo.png"
          alt="WRAITH chrome reflection"
          className="absolute w-40 md:w-56 h-auto select-none"
          aria-hidden="true"
          animate={{ x: [-5, -10, -5], y: [-6, -10, -6], rotateZ: [0, 1.8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: 'translateZ(36px)',
            opacity: 0.28,
            filter: 'brightness(1.45) contrast(1.2)',
            mixBlendMode: 'screen',
          }}
          draggable="false"
        />

        <motion.img
          src="/logo.png"
          alt="WRAITH Luxury"
          className="relative w-40 md:w-56 h-auto select-none"
          animate={{ y: [0, -4, 0], rotateZ: [0, 1.2, -0.8, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: 'translateZ(92px)',
            filter:
              'drop-shadow(0 0 10px rgba(255,255,255,0.14)) drop-shadow(0 0 34px rgba(255,255,255,0.12)) contrast(1.06)',
          }}
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-14 md:bottom-18 text-[0.55rem] md:text-[0.65rem] uppercase tracking-[0.7em] text-white/45"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: [0, 0.62, 0.48], y: [12, 0, 0] }}
        transition={{ duration: 2, delay: 0.55, ease: cinematicEase }}
      >
        Aura Sequence
      </motion.div>
    </motion.div>
  );
}

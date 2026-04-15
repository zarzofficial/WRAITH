import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCartStore } from '../store/useCartStore';

export function Navbar() {
  const itemCount = useCartStore((state) => state.itemCount());
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-transparent backdrop-blur-md">
      {/* Left side: WRAITH text block */}
      <div className="flex-1 flex justify-start">
        <Link to="/" onClick={handleLogoClick} className="text-xl md:text-2xl font-light tracking-[0.5em] text-white">
          WRAITH
        </Link>
      </div>
      
      {/* Center Animated Metallic Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -50, rotateY: 90 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center pointer-events-none"
      >
        <Link to="/" onClick={handleLogoClick} className="pointer-events-auto">
          <motion.img 
            src="/logo.png" 
            alt="Wraith Artifact Logo" 
            className="w-20 md:w-32 h-auto invert mix-blend-screen"
            style={{ filter: "drop-shadow(0px 0px 10px rgba(255,255,255,0.4))" }}
            whileHover={{ 
              scale: 1.1, 
              rotateZ: 3,
              filter: "drop-shadow(0px 0px 20px rgba(255,255,255,0.9)) invert(1)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          />
        </Link>
      </motion.div>

      {/* Right side: Navigation Links */}
      <div className="flex-1 flex justify-end items-center gap-6 md:gap-12 relative z-10">
        <Link
          to="/products"
          className="font-headline tracking-[0.2em] uppercase text-xs md:text-sm text-neutral-400 hover:text-white transition-colors duration-400"
        >
          Shop
        </Link>
        <Link
          to="/contact"
          className="font-headline tracking-[0.2em] uppercase text-xs md:text-sm text-neutral-400 hover:text-white transition-colors duration-400 hidden sm:block"
        >
          Contact
        </Link>
        <Link to="/cart" className="relative hover:opacity-70 transition-opacity text-white flex items-center ml-2 md:ml-0">
          <span className="material-symbols-outlined text-white text-xl md:text-2xl drop-shadow-md">shopping_bag</span>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-white text-black text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

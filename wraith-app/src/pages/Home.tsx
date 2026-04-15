import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export function Home() {
  const { scrollY } = useScroll();
  
  // Parallax effects for scroll
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);
  const yContent = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityContent = useTransform(scrollY, [0, 600], [1, 0]);

  // 3D Parallax Mouse Hover Effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 30, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 30, stiffness: 200 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate values between -0.5 and 0.5
    mouseX.set(x / rect.width - 0.5);
    mouseY.set(y / rect.height - 0.5);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLElement>) {
    if (e.touches.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const y = e.touches[0].clientY - rect.top;
      
      mouseX.set(x / rect.width - 0.5);
      mouseY.set(y / rect.height - 0.5);
    }
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="w-full">
      {/* Intro Section: Full Screen Pitch Black with 3D Parallax */}
      <motion.section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseLeave}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen w-full bg-surface-container-lowest flex flex-col items-center justify-center relative overflow-hidden touch-pan-y"
        style={{ perspective: 1200 }}
      >
        <motion.div 
          style={{ y: yBackground, scale: 1.15 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 z-0 origin-center"
        >
          <img
            alt="Hero Cinematic"
            className="w-full h-full object-cover"
            src="/hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#121212]" />
        </motion.div>

        {/* 3D Floating Content */}
        <motion.div 
          style={{ 
            rotateX, 
            rotateY, 
            y: yContent, 
            opacity: opacityContent,
            transformStyle: "preserve-3d" 
          }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.h1 
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
            style={{ transform: "translateZ(100px)" }}
            className="font-headline text-[13vw] md:text-[10vw] font-light tracking-[0.2em] md:tracking-[0.4em] text-white select-none drop-shadow-2xl text-center w-full"
          >
            WRAITH
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            style={{ transform: "translateZ(140px)" }}
            className="relative mt-8"
          >
            <Link
              to="/products"
              className="inline-block border border-white/40 bg-black/30 backdrop-blur-md px-12 py-4 text-white hover:bg-white hover:text-black transition-all duration-700 font-label tracking-[0.4em] uppercase text-[12px] shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
            >
              Enter the Void
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          onClick={() => document.getElementById('collection-one')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ y: yContent, opacity: opacityContent, transform: "translateZ(50px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20 cursor-pointer"
        >
          <span className="material-symbols-outlined text-white text-4xl">expand_more</span>
        </motion.div>
      </motion.section>

      {/* Secondary Message effect */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="relative py-32 md:py-48 w-full flex items-center px-6 md:px-12 overflow-hidden bg-surface-container-lowest border-t border-neutral-900"
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-headline text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            Redefine the Dark
          </motion.h2>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-body text-xs md:text-lg text-on-surface-variant tracking-[0.2em] md:tracking-[0.3em] uppercase drop-shadow-md px-4"
          >
            Premium Streetwear for the Unseen
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Products: Asymmetric Grid */}
      <motion.section 
        id="collection-one"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-24 md:py-32 px-6 md:px-12 bg-surface"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4 md:gap-8">
          <h3 className="font-headline text-3xl md:text-4xl text-white">Essential Artifacts</h3>
          <span className="font-label text-[10px] tracking-[0.4em] text-outline">
            01 // COLLECTION_ONE
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 overflow-hidden">
          {/* Large Focus Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="md:col-span-7"
          >
            <Link to="/products/obsidian-coat" className="group block">
              <div className="aspect-[4/5] bg-surface-container-lowest overflow-hidden perspective-1000">
                <img
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                  alt="Obsidian Trench Coat"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6QRFKKgjRYd3k9ujbz-5uUz3kD6VzaWZ-3sTVzuH85V3Q3OZCt4HMOmfjfasqrFw8Fekh3ZO4DJnaMGQyfn-Jz8rEhQ1COeC5FdrVVq__YSxU8VKPfkTIHoaKdIZ7zqewqN8PZv_GHHKkNG3Zuxq97M83gFkJw4FLxBT3iauuSw5OTBGI8pmyGROrDYVLKoQd9dsWX3u7ex9LBGyqUa6lwc6TKlJA3TKhQylkkQukKdsA464mhaojtpqNo-sgblAahvOyBLI8MTA"
                />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h4 className="font-body text-lg md:text-xl text-white group-hover:underline">Obsidian Trench Coat</h4>
                  <p className="font-label text-[10px] text-outline mt-2 tracking-widest uppercase">
                    Heavy Wool / Water Repellent
                  </p>
                </div>
                <span className="text-white font-body">$840</span>
              </div>
            </Link>
          </motion.div>

          {/* Smaller Offset Cards */}
          <div className="md:col-span-5 flex flex-col gap-12 md:gap-24 md:mt-32">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <Link to="/products/void-bag" className="group block">
                <div className="aspect-square bg-surface-container-lowest overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    alt="Void Sling Bag"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-cswymoaQfAx6hpskP_f2mq-78MDwfBi-J2jO-lRSfJMTSEgjNKawQRS8ChpjdP3QBReNqcvo-NDZLhEWdfpxjfNZ4FdwNoZ-QykXuXeZdIW18mssqNgiSenUAQtPP1sM4cDeVU73Z4Hc2aZT6mVc6K1ybRMwGdRGw3bvy_EKngdVSa982o4wBIWUgKl3Ihma0YVrv_0QecGq_38EonX_G-vay8SeM1h10EgOAuVQmjkIpBRo1Ip9-xNm0JAluldJo-reLMtcsh0"
                  />
                </div>
                <div className="mt-4 md:mt-6 flex justify-between">
                  <h4 className="font-body text-base md:text-lg text-white group-hover:underline">Void Sling Bag</h4>
                  <span className="text-white font-body">$220</span>
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <Link to="/products/ghost-tee" className="group block">
                <div className="aspect-square bg-surface-container-lowest overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    alt="Ghost Cotton Tee"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCapHDkSNSXgAWAgdxzfDUYOoskj0Hubsl_TZaQNptNONifyGGi6q7kWPjYYd4_QI1ER4KmEf559V9fxEe8KQbANy_x4L8WEQErDMQ8iea_eeLKiT1oLiFczD2aOEakKtMhxZpuUtR8cUCRmIb6VA5B5Hfu42SQfZEeJlO6dMjq3SZ3BcOLcNDYqSA-1l7UEAlw9jH8YGy0fdKJACRPVE-1IlwwW0VKaCksW0yzlsroLw0-vyEIcq6Tj6cR4vzYRVAqtn0X0uJ66fo"
                  />
                </div>
                <div className="mt-4 md:mt-6 flex justify-between">
                  <h4 className="font-body text-base md:text-lg text-white group-hover:underline">Ghost Cotton Tee</h4>
                  <span className="text-white font-body">$115</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* New Arrivals: Horizontal Cinematic Reveal */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-24 md:py-32 bg-surface-container-lowest"
      >
        <div className="px-6 md:px-12 mb-10 md:mb-16">
          <h3 className="font-headline text-2xl md:text-3xl text-white tracking-widest uppercase italic">
            New Arrivals
          </h3>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-6 md:gap-8 px-6 md:px-12 pb-8 md:pb-12 snap-x">
          {/* Item 1 */}
          <Link to="/products/spectral-hoodie" className="flex-none w-[85vw] md:w-[40vw] group block snap-center">
            <div className="relative h-[450px] md:h-[600px] overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[50%]"
                alt="Spectral Hoodie"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKEAYjaOIBeuROvx_xOGHY8uBmsNf5PPkMj2NRFXgbCGGnO2Z6yd5VYidYdgIOXdPOiceOZCrW3NNow76RlF1Es7ATIJZKMrGZ7CLwQp2t6Iit8_jt72Q8OCNDpGyMHvYle9rLta42o86M-qsqXOWrxY0BQOOtUFdyec6IpLnDUa4DTMoZAx8m5DOA-4KqmhzhcnqwUg5TosbkcawZ7eTcxZTjd5FqkZUfvF-WTR4s5rvI3yjKyno1EXHN3pW2WNaxGHdqKR0f6Ak"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm md:backdrop-blur-none md:group-hover:backdrop-blur-sm">
                <span className="border border-white px-8 py-3 text-white font-label text-xs tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                  VIEW DETAILS
                </span>
              </div>
            </div>
            <div className="py-6 border-b border-outline-variant">
              <div className="flex justify-between items-center">
                <span className="font-label text-[10px] text-primary tracking-[0.3em]">DROPPING 05.24</span>
                <h5 className="font-body text-white">Spectral Hoodie</h5>
              </div>
            </div>
          </Link>

          {/* Item 2 */}
          <Link to="/products/eclipse-trousers" className="flex-none w-[85vw] md:w-[40vw] group block snap-center">
            <div className="relative h-[450px] md:h-[600px] overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-[50%]"
                alt="Eclipse Trousers"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE0zuPTvy0XKu3UOI4WXsDl7Z1le0WLyjjoWxxA9ulI1VDdmznpRr-XFC8Qo6tXLsja8eAwFfsqPkPA3CLzAL6Wi6H8aXylhTQkrTJpBuML12qCkxe_fL4963ZRaV0L_vcRvz73YCFcswlbVSd38cYPuGGwHmEQA9lZzQEh3tOhS2Kloo4JzGAoH2gwo4TX2FicUT_wM6UM_07w6ae4u3q3rCGFCuIu7lVezQbCLc5S7t5Sax4LHfndv4bHWBMG3sz7G9lUivmN6w"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm md:backdrop-blur-none md:group-hover:backdrop-blur-sm">
                <span className="border border-white px-8 py-3 text-white font-label text-xs tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                  VIEW DETAILS
                </span>
              </div>
            </div>
            <div className="py-6 border-b border-outline-variant">
              <div className="flex justify-between items-center">
                <span className="font-label text-[10px] text-primary tracking-[0.3em]">DROPPING 05.24</span>
                <h5 className="font-body text-white">Eclipse Trousers</h5>
              </div>
            </div>
          </Link>
        </div>
      </motion.section>

      {/* Brand Story Section: Cinematic Reveal */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="relative py-32 md:py-48 px-6 md:px-12 flex items-center justify-center overflow-hidden"
      >
        <div className="max-w-4xl text-center relative z-10">
          <h2 className="font-headline text-3xl md:text-6xl text-white mb-8 md:mb-12 italic opacity-20 select-none absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-full">
            Atelier of the Void
          </h2>
          <div className="space-y-6 md:space-y-8">
            <p className="font-body text-lg md:text-2xl text-on-surface leading-loose md:leading-relaxed font-light tracking-wide px-4">
              WRAITH is not a brand. It is an exploration of the space between light and dark. Founded in the silence of the night, our atelier crafts garments for those who find comfort in the shadows.
            </p>
            <div className="w-12 h-[1px] bg-white mx-auto" />
            <p className="font-label text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] text-on-surface-variant uppercase">
              ESTABLISHED IN ABSENCE // 2024
            </p>
          </div>
        </div>
        {/* Shadow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      </motion.section>
    </div>
  );
}

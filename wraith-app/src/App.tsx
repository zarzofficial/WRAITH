import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Contact } from "./pages/Contact";
import { IntroLoader } from "./components/IntroLoader";

export default function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return sessionStorage.getItem('wraith-intro-seen') === 'true';
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('wraith-intro-seen', 'true');
    setIntroFinished(true);
  };

  return (
    <>
      <AnimatePresence>
        {!introFinished && <IntroLoader key="loader" onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <div 
        style={{ 
          opacity: introFinished ? 1 : 0, 
          transition: 'opacity 1.5s ease-in-out',
          pointerEvents: introFinished ? 'auto' : 'none'
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Shop />} />
              <Route path="products/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

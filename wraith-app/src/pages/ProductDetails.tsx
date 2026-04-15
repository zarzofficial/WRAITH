import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { useCartStore } from '../store/useCartStore';

export function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: "ghost-tailored-overcoat",
      name: "GHOST TAILORED OVERCOAT",
      price: 2450,
      quantity: 1,
      size: selectedSize,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM6t5CfLmV_F2kBtAiZ4wWrEjHT_XWBu529XNxgPfWq9RLxX9SFSvYoqEXZR_yyz71tW2Qqhp3Di6bURQ7Up8o9t2zNBOI8HxNhEOXNdbrqf8TsvntMigSP8z9CP4xjP8aZkJqhiEZnB7KcfCzsfAk23rV0rGN9OxEZxdRFsKwUHShfzLGxFCKH0yYFhINtqBmGcwaqtPpj0rOb9MvCWx-vuBr3BEegxKKG7DmXDq2JAMs-A9c2U-VmW_8-tHGa8ub88ct3W4CYhY"
    });
    
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  // Mock related products matching the HTML
  const relatedProducts = [
    {
      id: "void-trousers",
      name: "VOID TROUSERS",
      price: "$890.00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQh8vqxDVrWv8zi9N1EgdIpXsvX9weawC57eN-L1K2B466Jx_FG_fyP5-EdUKet_N-M1UgDS58m8yC_OcFqcdWfvMsa-25Dh_FgmkUJZEn69RVPSBpkeS0QGcUfAMFawCuKJZQEORQpNU2ygGPM938lpafjWhz4-1iNuktqE7911iclLcc_vZD6M2ZBzPUtTwCA9xysHFV4UbhwXnQMZPdC1wJPgifDpEsr8M8VtMHkr6XcE3s8r588zoTUaJcgBpHxoNTv7bNGr8",
      imageAlt: "Void Trousers"
    },
    {
      id: "shadow-boots",
      name: "SHADOW BOOTS",
      price: "$1,150.00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY_e7H0hbElJAsxrS_J2f0ZSb5sW37MFIlZ9xZ_b6VJIGy8dbkVM08SmPWV-Ncw27jHgO2rbPdwRtu9gIxF1hoVaOF0STejP9JNp7p2_f-i9A0d1hVjMrvnE1N7kmSdgMw09aWKQ9IwvrY-7aW6eqqKbaHn-nn-8FUURllDbJa-rWX2IN033k1OXlosG-huJJqd89PsDnLCNWEfh6fEBv3BYZYjv38qxQwllzSxTYbxkeCj2pnMu9p1XCB_c3n32riEDWZzHJ8Nas",
      imageAlt: "Shadow Boots"
    },
    {
      id: "obsidian-scarf",
      name: "OBSIDIAN SCARF",
      price: "$450.00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMmr8U0XbUwJpFJlzYmMdy54g1ccYQ5kM4JRXR3F4JL2dpKbB8RW4sTMYEbz2qtz73zEn-E-JSHv2MW13s-7DTJx_fQMmGCqtTsRLWhGSwnZm8NpJeg6AB9NIWY8erEnrDlSOEimm000wOp53_sIgrhY2EYO8P0l3kWchArOOeigwCwTMU6dkIUtLmpqfDuOtbwagn4j0L5G6AH0t-bvAo9Nx3k7zhZcYAneHtJr1Yjr1qv5Xmed6ei9dx-XYyTJevywbdXKAZh7Y",
      imageAlt: "Obsidian Scarf"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Cinematic Layout: Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Main Product Visuals (Left/Center) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative overflow-hidden bg-surface-container-lowest aspect-[4/5]">
              <img
                alt="GHOST TAILORED OVERCOAT"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM6t5CfLmV_F2kBtAiZ4wWrEjHT_XWBu529XNxgPfWq9RLxX9SFSvYoqEXZR_yyz71tW2Qqhp3Di6bURQ7Up8o9t2zNBOI8HxNhEOXNdbrqf8TsvntMigSP8z9CP4xjP8aZkJqhiEZnB7KcfCzsfAk23rV0rGN9OxEZxdRFsKwUHShfzLGxFCKH0yYFhINtqBmGcwaqtPpj0rOb9MvCWx-vuBr3BEegxKKG7DmXDq2JAMs-A9c2U-VmW_8-tHGa8ub88ct3W4CYhY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest aspect-[3/4] overflow-hidden">
                <img
                  alt="Overcoat Detail"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBChmGhWwK4D1zZpiY_qmAk7FdVYJm-sem8fIFBR7igsc5PkV6gdM4dGNRF1Cs3uUrkmWKFH3N6k7E0bHk-BB7kNG1n9dRngrnp-30tK9FCsrtpJypj63B6FuURuIJ6DRMSo_kXNWNSwMjeSBhZIv8WlR3Je4DBXfXyWxy8JYVfZgFXaF5p34Wq3WCxq8zfROCFtozo_FZzfAa637N-xeAdxXW9fDQSrcuMf-D7Yz-NGKnqjndwO6Gn4Ad5Qem3IWQuV0V_rVKrnSg"
                />
              </div>
              <div className="bg-surface-container-lowest aspect-[3/4] overflow-hidden">
                <img
                  alt="Fabric Texture"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEcB4qvd9M3d7gb3KzPm687IiZ0DRkqEUauPT4JJmR4E2TW2rRK2ijy8mKmF86fwlnO8NLQMdmxs3NDxEhgKkeXZiarYV2rs0RbaG1evRbvQfMODJzs-KzlIhAbtkoNtgMzWszKdQl8qCvGIrt2PFdTH4-ZF7nssmdaO6dQbM0td8trOh3M5bccNEFIvnk6cS_N8vd165XcW0zcMgBGE7VskXv42gELrgvu7A8BTfnAvokEUNXrxCjE4sZqfQF5CPkuFZHq-sVmX8"
                />
              </div>
            </div>
          </div>

          {/* Product Info (Right) */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-12">
            <header className="space-y-4">
              <span className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
                Atelier Collection / FW24
              </span>
              <h1 className="font-headline text-5xl md:text-6xl tracking-tight leading-tight text-white">
                GHOST TAILORED OVERCOAT
              </h1>
              <p className="font-headline text-2xl text-secondary">$2,450</p>
            </header>
            <div className="space-y-6">
              <p className="font-body text-on-surface-variant leading-relaxed text-sm max-w-md">
                Engineered with architectural precision, the Ghost Tailored Overcoat represents the pinnacle of high-fashion heritage. Crafted from heavyweight double-faced cashmere and wool, it features invisible seam construction and a silhouette that commands presence through intentional restraint.
              </p>
            </div>

            {/* Size Selector */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-label uppercase tracking-widest text-[10px] text-white">Select Size</span>
                <button className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant underline underline-offset-4">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-4 border text-sm font-label uppercase transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-black'
                        : 'border-outline-variant text-white hover:border-primary hover:text-black hover:bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4">
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`block text-center w-full py-6 font-label uppercase tracking-[0.3em] text-sm font-bold transition-colors duration-400 ${
                  isAdded 
                    ? 'bg-white text-black' 
                    : 'bg-primary text-black hover:bg-white/80'
                }`}
              >
                {isAdded ? 'ADDED TO BAG' : 'ADD TO BAG'}
              </button>
            </div>

            {/* Accordion Sections */}
            <div className="border-t border-outline-variant/30 space-y-0">
              <details className="group border-b border-outline-variant/30 py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-label uppercase tracking-widest text-[11px] text-white">Details</span>
                  <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform text-white">expand_more</span>
                </summary>
                <div className="pt-6 text-sm text-on-surface-variant font-body leading-relaxed">
                  <ul className="space-y-2">
                    <li>• Sharp peaked lapels</li>
                    <li>• Concealed front button fastening</li>
                    <li>• Interior security pockets</li>
                    <li>• Hand-finished architectural shoulders</li>
                  </ul>
                </div>
              </details>
              <details className="group border-b border-outline-variant/30 py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-label uppercase tracking-widest text-[11px] text-white">Composition</span>
                  <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform text-white">expand_more</span>
                </summary>
                <div className="pt-6 text-sm text-on-surface-variant font-body leading-relaxed">
                  <p>Outer: 70% Virgin Wool, 30% Grade A Cashmere.</p>
                  <p className="mt-2">Lining: 100% Cupro silk with signature Wraith jacquard weave.</p>
                </div>
              </details>
              <details className="group border-b border-outline-variant/30 py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-label uppercase tracking-widest text-[11px] text-white">Shipping</span>
                  <span className="material-symbols-outlined text-sm group-open:rotate-180 transition-transform text-white">expand_more</span>
                </summary>
                <div className="pt-6 text-sm text-on-surface-variant font-body leading-relaxed">
                  <p>Complimentary express shipping on all Atelier orders. Delivered in signature black vacuum-sealed archival packaging.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Related Artifacts Section */}
        <section className="mt-48 space-y-12">
          <div className="flex justify-between items-end border-b border-outline-variant/30 pb-8">
            <h2 className="font-headline text-3xl text-white italic">Related Artifacts</h2>
            <Link to="/products" className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant hover:text-white transition-colors">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

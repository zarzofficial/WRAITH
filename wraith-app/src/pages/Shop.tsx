import { ProductCard } from '../components/ProductCard';

const MOCK_PRODUCTS = [
  {
    id: "void-shell-parka",
    name: "Void Shell Parka",
    price: "$850.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_pK55_l59mLz71l-R3rlPk47T0mmlKFeyy4iFZL98W6q0bpl0z1hkNRlAPwWQ0SMwNk51_jD7NnHAhVvmartgtgHRm367ub1b6Ubs3CZKp15ncr9yBDL81LysThEcg8NuYnaL6fkurplvsLv1o7BVHLVN82R88bt0QnUnoziUyy4GhcnUFew_UoQ6fZHi6qd50PWWL1K8E_Ue_6-VwQ6KwBUnjeixWoJpZHFhs1253mQN508wlQvvKWCpzjay5lZoSbzNcxskkH4",
    imageAlt: "Shadow tech jacket",
    isNew: true
  },
  {
    id: "monolith-hoodie",
    name: "Monolith Hoodie",
    price: "$320.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKrC76q1o1IXigP0LEQC8ZIpNys_Fjc0vx2tW-bunC17mtIreBx9n4SY0pzhjg-yBQ09CA68nvOJ83AXkltRdnAjUEWVdbilLwgfUPO7KvtulXRP67rxyJo4iANaYSoZB_Yl7em9VyITo9Mdnt0gN_7tPZJySzAAFDKn8mRdLi5zdvvWXK-vMaP5_gqnbOc3W2pmmuyeUvBxLulMKKltMH2MI-NQMxJwS8X_m-81ioisD_XcWCrvqdEkj_A9DbRk5UNYAqIc6nnfk",
    imageAlt: "Dark hoodie"
  },
  {
    id: "obsidian-overcoat",
    name: "Obsidian Overcoat",
    price: "$1,100.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaOHRCbHLs0CoMoUalEPNLMDkRlwXtsPOxW9J38WM8gI0A-pw2-eJLjV4bO0f3mNNc-Td4KNg1UlBF5l0SCh9fEYEVV39ysYefyNE8DMpVNFMYWk7x8j-899VUK3jopnj97-GZVGaO49A44l8Gz3D_nQjidtccRhKYdqK5D6EOpoeiorkA5oDqXiX54uf4RCAfK5PSr2hWbxyqjnPIy2aOB9q5DF0XwfesccktQNglJXDeM5CvYjTWjuB-3SgIzl0J6JEy9TZb16k",
    imageAlt: "Techwear coat"
  },
  {
    id: "phantom-utility-pant",
    name: "Phantom Utility Pant",
    price: "$450.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD92_tXvuaezwTOiInIbavoD6RaTktBkwlhuvx0uFvdN-N0jaM0BFYV8OTAVctfvMF4D0mXTssiqZr_9lyfWqz8H9E5eZAbcikYyzGVU4udCKOja7QAM46ULAvrsyndugGHAhTIH3NfUSJFNUzRsa_5V-fsA-oydMEbK7RvMstzgJ3vtgL3mNP-rTfn5H9ZQcWIfuUozGwHYMf5_cFP7Mgc0zYcgKAapMSM3Xc7nimFDV_98F3VdPdom-yQRjiXqLn9LoHgC4J0Hs",
    imageAlt: "Cargo pants"
  },
  {
    id: "erosion-knit",
    name: "Erosion Knit",
    price: "$380.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcXHypT5xLXTz-gZZ-_mhIn9ICLErJe5Dd6HFVHxNY_6XXC637FaS9aVmUQLzyHDoNHQjDA161928Am8FTRnS_uJwMnhq_5zE-O47oonojLfj0vXCcbtIeIoJSxLaDsozA_Pgs2xEon57yH3EZ3AwCNc3xMw-tLcxzpWIToej5YKcjm53hCZNiZorfsmAzv9tZxOG1qtVr7hKKbNxPp_klobiYzF_mDRWt3PVffVonTOEoiJ7T0S0aR1s_ABPIel_cp7MzsY6kGMo",
    imageAlt: "Black sweater"
  },
  {
    id: "vector-vest-02",
    name: "Vector Vest 02",
    price: "$290.00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyfrn0E5Lliw1KtJDyd_udGytQMHng2Q-omxqcmyMesJ2y1Ms30GwoCCw2RaUE21HYwuIjj8vkGgSh7Sud3GBK5rHRvi0uaKAtp-nJIkdVQ3lXs5e5EkgOUWPgL_Qi1yF6_kBhp_5YPhc8wqbKOFLFF2rmd13EGc550mRpGjPK5SdCgkVCZg67JLEqAJcaaahAXZ6BTynaZzN_wrZRLqqxJy5DK_H8aG5H3sLLrM-ZAhKWyDVJhzP5HtcU1uEAO1DGnq9Raon79Gc",
    imageAlt: "Streetwear layer",
    isSoldOut: true
  }
];

export function Shop() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Sidebar Filter */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-40 space-y-12">
            <div>
              <h3 className="font-headline text-xs tracking-[0.3em] uppercase mb-8 text-on-surface">Category</h3>
              <ul className="space-y-4 font-label text-[10px] tracking-widest uppercase">
                <li className="text-white cursor-pointer hover:opacity-70 transition-opacity">All Collections</li>
                <li className="text-on-surface-variant cursor-pointer hover:text-white transition-colors">Outerwear</li>
                <li className="text-on-surface-variant cursor-pointer hover:text-white transition-colors">Technical Tops</li>
                <li className="text-on-surface-variant cursor-pointer hover:text-white transition-colors">Utility Pants</li>
                <li className="text-on-surface-variant cursor-pointer hover:text-white transition-colors">Accessories</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-xs tracking-[0.3em] uppercase mb-8 text-on-surface">Size</h3>
              <div className="grid grid-cols-4 gap-2 font-label text-[10px]">
                <button className="py-2 border border-outline-variant hover:border-white transition-colors">S</button>
                <button className="py-2 border border-white text-white">M</button>
                <button className="py-2 border border-outline-variant hover:border-white transition-colors">L</button>
                <button className="py-2 border border-outline-variant hover:border-white transition-colors">XL</button>
              </div>
            </div>
            <div>
              <h3 className="font-headline text-xs tracking-[0.3em] uppercase mb-8 text-on-surface">Price Range</h3>
              <div className="relative w-full h-[1px] bg-outline-variant my-4">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white" />
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white" />
              </div>
              <div className="flex justify-between font-label text-[10px] tracking-widest text-on-surface-variant">
                <span>$200</span>
                <span>$1200</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-grow">
          <header className="mb-12 flex justify-between items-end border-b border-outline-variant pb-6">
            <h1 className="font-headline text-4xl font-light tracking-widest">COLLECTION _01</h1>
            <p className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
              12 Items Found
            </p>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {MOCK_PRODUCTS.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-24 flex items-center justify-center gap-8">
            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">arrow_back_ios</span>
            <div className="flex gap-6 font-label text-xs tracking-widest">
              <span className="text-white border-b border-white">01</span>
              <span className="text-on-surface-variant hover:text-white cursor-pointer transition-colors">02</span>
              <span className="text-on-surface-variant hover:text-white cursor-pointer transition-colors">03</span>
            </div>
            <span className="material-symbols-outlined cursor-pointer hover:text-white transition-colors">arrow_forward_ios</span>
          </div>
        </section>
      </div>
    </main>
  );
}

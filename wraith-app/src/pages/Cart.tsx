import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export function Cart() {
  const { items, updateQuantity, removeItem, cartTotal } = useCartStore();
  const total = cartTotal();

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="font-headline text-4xl md:text-5xl tracking-widest uppercase mb-4 text-white">Shopping Bag</h1>
        <div className="w-12 h-[1px] bg-primary" />
      </header>

      {items.length === 0 ? (
        <div className="text-center py-24 space-y-8">
          <p className="font-body text-xl text-on-surface-variant">Your bag is empty.</p>
          <Link to="/products" className="inline-block bg-primary text-black py-4 px-12 font-label text-xs tracking-[0.4em] uppercase font-bold hover:bg-white/80 transition-colors duration-400">
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <section className="lg:col-span-8 space-y-12">
            <div className="flex flex-col gap-10">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="group flex gap-6 md:gap-10 pb-10 border-b border-outline-variant/20 transition-opacity hover:opacity-100">
                  <div className="w-24 h-32 md:w-32 md:h-44 bg-surface-container-lowest overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                      alt={item.name}
                      src={item.image}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline text-xl tracking-wide text-white uppercase mb-1">{item.name}</h3>
                        <p className="font-label text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">
                          {item.size ? `SIZE ${item.size}` : 'ONE SIZE'}
                        </p>
                      </div>
                      <p className="font-body text-sm tracking-widest text-white">${item.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-6 border border-outline-variant/30 px-4 py-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="hover:text-primary transition-colors duration-300 text-white"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="font-label text-xs tracking-widest text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="hover:text-primary transition-colors duration-300 text-white"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.size)}
                        className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-error transition-colors underline underline-offset-8 decoration-outline-variant/40 hover:decoration-error"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link to="/products" className="font-label text-xs tracking-[0.3em] uppercase text-white hover:opacity-70 transition-opacity flex items-center gap-2 w-max">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Continue Shopping
              </Link>
            </div>
          </section>

          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-container-high p-10 flex flex-col gap-8">
              <h2 className="font-headline text-2xl tracking-widest uppercase text-white">Summary</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">Subtotal</span>
                  <span className="font-body text-sm tracking-widest text-white">${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">Shipping</span>
                  <span className="font-body text-sm tracking-widest text-white">Calculated at checkout</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">Tax</span>
                  <span className="font-body text-sm tracking-widest text-white">$0.00</span>
                </div>
                <div className="h-[1px] bg-outline-variant/30 my-2" />
                <div className="flex justify-between items-center">
                  <span className="font-headline text-lg tracking-widest uppercase text-white">Total</span>
                  <span className="font-body text-lg tracking-widest text-white">${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/checkout" className="block text-center w-full bg-primary text-black py-5 font-label text-xs tracking-[0.4em] uppercase font-bold hover:bg-white/80 transition-colors duration-400">
                  Proceed to Checkout
                </Link>
              </div>
              <div className="flex flex-col gap-4 text-center">
                <p className="font-label text-[8px] tracking-[0.2em] text-on-surface-variant uppercase leading-relaxed">
                  Complimentary shipping on orders over $5,000. Express delivery available.
                </p>
                <div className="flex justify-center gap-4">
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">credit_card</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">account_balance_wallet</span>
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">lock</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}

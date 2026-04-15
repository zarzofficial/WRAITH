import { Link } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';

export function Checkout() {
  const { items, cartTotal } = useCartStore();
  const total = cartTotal();

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
        {/* Left Column: Shipping & Payment */}
        <div className="lg:col-span-7">
          <h1 className="font-headline text-4xl mb-16 tracking-widest uppercase text-white">Checkout</h1>
          
          <form className="space-y-16">
            {/* Contact Details */}
            <section className="space-y-8">
              <h2 className="font-headline text-2xl tracking-widest uppercase text-white border-b border-outline-variant/30 pb-4">Contact</h2>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
              </div>
            </section>

            {/* Shipping Address */}
            <section className="space-y-8">
              <h2 className="font-headline text-2xl tracking-widest uppercase text-white border-b border-outline-variant/30 pb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Address" 
                  className="w-full col-span-2 bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Apartment, suite, etc. (optional)" 
                  className="w-full col-span-2 bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Country" 
                  className="w-full col-span-2 bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                />
              </div>
            </section>

            {/* Payment */}
            <section className="space-y-8">
              <h2 className="font-headline text-2xl tracking-widest uppercase text-white border-b border-outline-variant/30 pb-4">Payment</h2>
              <div className="space-y-4">
                <div className="border border-outline-variant/40 p-4 bg-surface-container-lowest/50 text-white font-body text-sm flex gap-4 items-center">
                  <span className="material-symbols-outlined text-primary">credit_card</span>
                  Credit / Debit Card
                </div>
                <div className="space-y-4 p-6 border border-outline-variant/20 bg-surface-container-lowest/10">
                  <input 
                    type="text" 
                    placeholder="Card Number" 
                    className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="MM / YY" 
                      className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                    />
                    <input 
                      type="text" 
                      placeholder="CVC" 
                      className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                    />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Name on Card" 
                    className="w-full bg-transparent border border-outline-variant/40 px-4 py-4 text-white focus:outline-none focus:border-primary transition-colors font-body text-sm"
                  />
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-lowest border border-neutral-900 p-6 md:p-12 sticky top-32">
            <h2 className="font-headline text-xl md:text-2xl mb-8 md:mb-12 tracking-widest uppercase text-white">Order Summary</h2>
            <div className="space-y-10 mb-8 md:mb-12">
              {items.length === 0 ? (
                <p className="font-body text-sm text-on-surface-variant">Your bag is empty.</p>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-6 items-start">
                    <div className="w-24 h-32 bg-surface-container overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover grayscale brightness-75" alt={item.name} src={item.image} />
                    </div>
                    <div className="flex flex-col flex-grow py-2">
                      <h3 className="font-headline tracking-wide uppercase text-white text-sm mb-1">{item.name}</h3>
                      <p className="font-label text-[9px] tracking-widest uppercase text-on-surface-variant mb-4">
                        {item.size ? `Size ${item.size}` : 'One Size'} • Qty: {item.quantity}
                      </p>
                      <p className="font-body text-sm text-white tracking-widest mt-auto">
                        ${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-6 pt-8 border-t border-outline-variant/20">
              <div className="flex justify-between items-center">
                <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Subtotal</span>
                <span className="font-body text-sm text-white">${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Shipping</span>
                <span className="font-body text-sm text-white">Complimentary</span>
              </div>
              <div className="h-[1px] bg-outline-variant/30 my-4" />
              <div className="flex justify-between items-center">
                <span className="font-headline text-lg tracking-widest uppercase text-white">Total</span>
                <span className="font-body text-lg text-white">${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>

            <button 
              disabled={items.length === 0}
              className={`mt-10 block text-center w-full py-5 font-label text-xs tracking-widest uppercase font-bold transition-colors duration-400 ${
                items.length === 0 
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  : 'bg-primary text-black hover:bg-white'
              }`}
            >
              Place Order
            </button>
            <div className="mt-6 flex justify-center items-center gap-2 font-label text-[9px] tracking-widest uppercase text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">lock</span>
              Secure Encrypted Checkout
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-neutral-950 grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 py-16 md:py-20">
      <div>
        <div className="text-xl font-light tracking-[0.4em] text-white mb-6 md:mb-8 text-center md:text-left">WRAITH</div>
        <p className="font-label tracking-widest uppercase text-[10px] text-neutral-500 leading-loose">
          WRAITH ATELIER<br />
          PARIS / TOKYO / LONDON
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h6 className="font-label tracking-widest uppercase text-[10px] text-white mb-4">Customer Care</h6>
        <Link to="#" className="font-label tracking-widest uppercase text-[10px] text-neutral-500 hover:text-white transition-colors duration-300">Privacy Policy</Link>
        <Link to="#" className="font-label tracking-widest uppercase text-[10px] text-neutral-500 hover:text-white transition-colors duration-300">Terms of Service</Link>
        <Link to="#" className="font-label tracking-widest uppercase text-[10px] text-neutral-500 hover:text-white transition-colors duration-300">Shipping</Link>
        <Link to="#" className="font-label tracking-widest uppercase text-[10px] text-neutral-500 hover:text-white transition-colors duration-300">Returns</Link>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h6 className="font-label tracking-widest uppercase text-[10px] text-white mb-6">Newsletter</h6>
          <div className="flex border-b border-outline-variant pb-2">
            <input
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-[10px] tracking-widest w-full p-0 placeholder:text-neutral-700 text-white"
              placeholder="JOIN THE VOID"
              type="email"
            />
            <button className="text-white hover:text-outline transition-colors">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
        <p className="font-label tracking-widest uppercase text-[10px] text-neutral-500 mt-12">© 2024 WRAITH ATELIER. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

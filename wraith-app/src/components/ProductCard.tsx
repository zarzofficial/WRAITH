import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  isNew?: boolean;
  isSoldOut?: boolean;
}

export function ProductCard({ id, name, price, imageUrl, imageAlt, isNew, isSoldOut }: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="group cursor-pointer block">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-lowest">
        <img 
          alt={imageAlt} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" 
          src={imageUrl} 
        />
        {isNew && (
          <div className="absolute top-4 left-4 font-label text-[9px] tracking-widest bg-white text-black px-2 py-1">
            NEW RELEASE
          </div>
        )}
        {isSoldOut && (
          <div className="absolute top-4 left-4 font-label text-[9px] tracking-widest bg-error text-white px-2 py-1 uppercase">
            Sold Out
          </div>
        )}
      </div>
      <div className={`mt-6 space-y-1 ${isSoldOut ? 'opacity-50' : ''}`}>
        <h2 className="font-body text-sm tracking-widest uppercase group-hover:underline">{name}</h2>
        <p className="font-label text-[11px] text-on-surface-variant">{price}</p>
      </div>
    </Link>
  );
}

import Link from 'next/link';
import { Product } from '../types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <Link href={`/products/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  );
}
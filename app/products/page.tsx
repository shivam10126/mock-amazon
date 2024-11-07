import ProductCard from '../components/ProductCard';
import { Product } from '../types';

async function getProducts() {
  try {
    // Add error handling and proper base URL
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products`, {
      // Add cache configuration
      cache: 'no-store', // Disable static generation for this route
      // Add proper headers
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return empty array instead of throwing to prevent build failures
    return [];
  }
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  // Add error state handling
  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <p className="text-gray-600">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Add dynamic configuration to prevent static generation
export const dynamic = 'force-dynamic';
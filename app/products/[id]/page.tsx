'use client';

import { use } from 'react';
import { useCart } from '../../components/CartProvider';
import { useEffect, useState } from 'react';
import { Product } from '../../types';
import { useToast } from '../../components/ui/use-toast';
import Image from 'next/image';
import { Toaster } from '../../components/ui/toaster';

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  const products = await res.json();
  return products.find((p: Product) => p.id === parseInt(id));
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    getProduct(resolvedParams.id).then(setProduct);
  }, [resolvedParams.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <Image
            src="/placeholder.svg"
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>
          <div className="space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              Add to Cart
            </button>
            <button className="w-full border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 ease-in-out">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
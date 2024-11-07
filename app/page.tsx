import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MockAmazon</h1>
      <p className="mb-8">Discover amazing products at unbeatable prices!</p>
      <Link href="/products" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
        Shop Now
      </Link>
    </div>
  );
}
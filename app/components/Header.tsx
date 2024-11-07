import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">MockAmazon</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/checkout">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}
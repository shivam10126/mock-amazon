import Link from 'next/link';

export default function PaymentFailurePage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
      <p className="mb-8">We&apos;re sorry, but there was an issue processing your payment. Please try again.</p>
      <Link href="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">
        Return to Checkout
      </Link>
    </div>
  );
}
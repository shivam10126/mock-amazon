import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="mb-8">Thank you for your purchase.</p>
      <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Continue Shopping
      </Link>
    </div>
  );
}
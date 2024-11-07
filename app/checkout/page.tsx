'use client';

import { useCart } from '../components/CartProvider';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, removeFromCart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items, total }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        clearCart();
        router.push('/payment/success');
      } else {
        router.push('/payment/failure');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      router.push('/payment/failure');
    }
    setIsProcessing(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-6">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</div>
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
          </button>
        </>
      )}
    </div>
  );
}
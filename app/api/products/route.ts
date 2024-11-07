import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    price: 599.99,
    description: 'Latest model smartphone with advanced features.',
  },
  {
    id: 2,
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop for work and entertainment.',
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    price: 129.99,
    description: 'True wireless earbuds with noise cancellation.',
  },
];

export async function GET() {
  try {
    // Add artificial delay to simulate real API
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return NextResponse.json(products, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
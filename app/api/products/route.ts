import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'Smartphone', price: 599.99, description: 'Latest model smartphone with advanced features.' },
  { id: 2, name: 'Laptop', price: 999.99, description: 'High-performance laptop for work and entertainment.' },
  { id: 3, name: 'Wireless Earbuds', price: 129.99, description: 'True wireless earbuds with noise cancellation.' },
  // Add more products as needed
];

export async function GET() {
  return NextResponse.json(products);
}
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  
  // Simulate payment processing
  const success = Math.random() < 0.8; // 80% success rate

  if (success) {
    return NextResponse.json({body:body, status: 'success', message: 'Payment successful' });
  } else {
    return NextResponse.json({ status: 'failure', message: 'Payment failed' }, { status: 400 });
  }
}
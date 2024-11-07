import { CartProvider } from './components/CartProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
            <Header />
            <main className="container mx-auto py-8">
              {children}
            </main>
            <Footer />
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
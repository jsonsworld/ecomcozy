import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { CartProvider } from './context/CartContext'
import { CartButton } from './components/CartButton'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Cozy Threads - Where Comfort Meets Style',
  description: 'Discover our collection of comfortable and stylish clothing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <CartProvider>
          <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">Cozy Threads</Link>
                <div className="flex items-center space-x-6">
                  <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                  <Link href="/#about" className="text-gray-600 hover:text-gray-900">About</Link>
                  <Link href="/catalog" className="text-gray-600 hover:text-gray-900">Products</Link>
                  <CartButton />
                </div>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-stone-500 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Cozy Threads</h3>
                  <p className="text-white">This is for testing purposes only.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-white hover:text-white">Home</Link></li>
                    <li><Link href="/#about" className="text-white hover:text-white">About</Link></li>
                    <li><Link href="/catalog" className="text-white hover:text-white">Products</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <p className="text-white">Email: jyp@jasonpark.dev</p>
                  <p className="text-white">Phone: +1 (111) 222-3333</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white">
                <p>&copy; Jason Park Sprite Take Home Assignment.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
} 
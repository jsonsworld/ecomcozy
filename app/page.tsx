'use client'

import Image from 'next/image'
import { products } from './data/products'
import { useCart } from './context/CartContext'


export default function Home() {
  const { addToCart } = useCart()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cozythreadsbg.webp"
            alt="Cozy Threads Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-normal text-white mb-4 tracking-wider font-playfair">Cozy Threads</h1>
          <p className="text-xl text-white/90 mb-8">Comfortable, Stylish, and Sustainable</p>
          <button className="bg-stone-700 text-white px-8 py-3 rounded-full hover:bg-stone-900 transition-colors" onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}>
            Shop Now
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
            <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">We believe in creating garments that stand the test of time, using only the finest materials.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🧸</div>
              <h3 className="text-xl font-semibold mb-4">Comfort</h3>
              <p className="text-gray-600">Every piece is designed with your comfort in mind, ensuring you feel at ease all day long.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">We're committed to sustainable practices, making fashion that's kind to the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="collection" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-lg font-semibold mb-4">${product.price}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-stone-700 text-white py-2 rounded hover:bg-stone-900 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 
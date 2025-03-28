'use client'

import Image from 'next/image'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Catalog() {
  const { addToCart } = useCart()

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Product Catalog</h1>
          <p className="text-gray-600 text-center">Discover our full collection of comfortable and sustainable clothing.</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
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
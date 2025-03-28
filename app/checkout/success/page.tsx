'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const searchParams = useSearchParams()

  useEffect(() => {
    const paymentIntent = searchParams.get('payment_intent')
    if (paymentIntent) {
      setStatus('success')
    } else {
      setStatus('error')
    }
  }, [searchParams])

  if (status === 'loading') {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-stone-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Processing your payment...</p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
          <p className="text-gray-600 mb-8">Something went wrong with your payment.</p>
          <Link
            href="/catalog"
            className="bg-stone-700 text-white px-6 py-3 rounded-lg hover:bg-stone-900 transition-colors"
          >
            Return to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
        <Link
          href="/catalog"
          className="bg-stone-700 text-white px-6 py-3 rounded-lg hover:bg-stone-900 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
} 
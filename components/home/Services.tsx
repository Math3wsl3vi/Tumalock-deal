import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
   <section className="bg-gray-50 px-6 md:px-44 py-16 font-poppins text-gray-700">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Section Intro */}
    <div className="flex flex-col justify-center">
      <h4 className="text-pink-600 uppercase font-semibold tracking-widest mb-2">Enjoy</h4>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services.</h2>
      <p className="text-base md:text-lg">
        Pay with Tumalock Deal to eliminate cases of fraud, scams, and conning.
      </p>
    </div>

    {/* Service Cards */}
    <div className="md:col-span-2 space-y-8">
      {/* Deposit Money */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex gap-4">
          <Image width={200} height={200} src="/images/pay.png" alt="Deposit" className="w-12 h-12" />
          <div>
            <h3 className="text-pink-600 font-bold uppercase mb-2 text-lg">
              Deposit Money (Lock Payment)
            </h3>
            <p>
              The buyer dials 👉 <strong>LOCK PAYMENT</strong> and the money meant for purchasing items/services from a seller is deposited into their Tumalock account.
            </p>
            <p className="mt-2">
              Both the seller and the buyer will receive a <strong>LOCKED SUCCESSFULLY</strong> message from TUMALOCK_DL. The seller can then start delivering items as agreed with the buyer.
            </p>
          </div>
        </div>
      </div>

      {/* Release Money */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex gap-4">
          <Image width={200} height={200} src="/images/pay.png" alt="Release" className="w-12 h-12" />
          <div>
            <h3 className="text-pink-600 font-bold uppercase mb-2 text-lg">
              Release Money (Unlock Payment)
            </h3>
            <p>
              When the buyer receives their items/services, they log in and dial 👉 <strong>UNLOCK PAYMENT</strong> to complete the transaction.
            </p>
            <p className="mt-2">
              Both parties receive an <strong>UNLOCKED SUCCESSFULLY</strong> message. The seller then receives the funds to their registered M-Pesa number.
            </p>
          </div>
        </div>
      </div>

       {/* Shop Here */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex gap-4">
          <Image width={200} height={200} src="/images/shop.png" alt="Shop" className="w-12 h-12" />
          <div>
            <h3 className="text-pink-600 font-bold uppercase mb-2 text-lg">
              Shop Here
            </h3>
            <p>
              We’ve included links to platforms like Jiji, Cheki, Pigiame etc., right inside the Tumalock site. You’ll find sellers offering items at fair prices.
            </p>
            <p className="mt-2">
              Just browse, pick what you like, and pay securely using Tumalock Deal.
            </p>
          </div>
        </div>
      </div>

       {/* Agents */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex gap-4">
          <Image width={200} height={200} src="/images/branch.png" alt="Shop" className="w-12 h-12" />
          <div>
            <h3 className="text-pink-600 font-bold uppercase mb-2 text-lg">
              Agents Office
            </h3>
            <p>
              We’ve included links to platforms like Jiji, Cheki, Pigiame etc., right inside the Tumalock site. You’ll find sellers offering items at fair prices.
            </p>
            <p className="mt-2">
              Just browse, pick what you like, and pay securely using Tumalock Deal.
            </p>
          </div>
        </div>
      </div>

       {/* Support*/}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex gap-4">
          <Image width={200} height={200} src="/images/support.png" alt="Shop" className="w-12 h-12" />
          <div>
            <h3 className="text-pink-600 font-bold uppercase mb-2 text-lg">
              Support Ticket
            </h3>
            <p>
              We’ve included links to platforms like Jiji, Cheki, Pigiame etc., right inside the Tumalock site. You’ll find sellers offering items at fair prices.
            </p>
            <p className="mt-2">
              Just browse, pick what you like, and pay securely using Tumalock Deal.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

  )
}

export default Services
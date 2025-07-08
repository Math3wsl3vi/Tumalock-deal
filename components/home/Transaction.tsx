import { UserIcon } from 'lucide-react'
import React from 'react'

const steps = [
  {
    title: 'Buyer and Seller Agree',
    description:
      'The buyer and the seller communicate and agree on the prices, description of items and mode of delivering them. This can happen over a phone call.',
  },
  {
    title: 'Depositing the Funds.',
    description:
      'The buyer deposits the money (LOCK PAYMENT) with Tumalock Deal. The buyer can deposit any amount up to sh.500,000 but remember the maximum deposit limit for M-Pesa is sh.250,000 at once. The funds are then secured until the items are delivered.',
  },
  {
    title: 'Product Delivery / Service Rendering.',
    description:
      "The seller then sends the items to the buyer or provides a service as agreed, after receiving a 'LOCKED SUCCESSFULLY' message. The items may be sent directly to the buyer or delivered through Tumalock agent's office.",
  },
   {
    title: 'RELEASING MONEY TO THE SELLER.',
    description:
      "Once the buyer receives and confirms that the goods are in good condition, they unlock the money to be released to the seller. The locked money cannot be withdrawn by the buyer. The deal is completed and closed once the buyer releases the funds to the seller.",
  },
]

const Transaction = () => {
  return (
     <section className="bg-[#083344] text-white py-20 px-6 md:px-72 font-poppins">
      <div className="text-center mb-16">
        <p className="text-pink-500 uppercase tracking-widest font-medium">Getting Started</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Transaction Process</h2>
        <p className="text-gray-300 mt-2">
          Follow the steps outlined below to get started and transact safely.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex items-start gap-6 bg-[#0f3a45] p-6 rounded-lg border border-[#155e75]"
          >
            <div className="text-xl text-gray-400 font-bold">{String(i + 1).padStart(2, '0')}</div>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center">
                <UserIcon className="text-white w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Transaction
import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Testimonial from '@/components/home/Testimonial'
import Transaction from '@/components/home/Transaction'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        {/* hero */}
        <Hero/>
        {/* about */}
        <About/>
        {/* services */}
        <Services/>
        {/* transaction */}
        <Transaction/>
        {/* testimonial */}
        <Testimonial/>
    </div>
  )
}

export default HomePage
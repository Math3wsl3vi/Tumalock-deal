"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import React from 'react'

const Testimonial = () => {
  return (
     <section className="bg-gray-50 py-16 md:py-24 lg:py-32 font-poppins" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-pink-600 uppercase font-semibold tracking-widest mb-2">TESTIMONIAL</h1>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by businesses and individuals across Kenya
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700">{testimonial.quote}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial

const testimonials = [
  {
    name: "Josephine Wangare.",
    avatar: "/avatars/sarah.jpg",
    quote:
      "Tumalock deal is God sent. I love the way their website is designed. It is easy to follow and enjoyable transacting through their secure platform. Now days I buy everything online.I don't do business with any seller who does not accept to be paid through turnalock deal. I have always been making my purchases from jiji, cheki and other online sites. I highly recommend it to anyone who want to do serious online business.",
  },
  {
    name: "Goeffrey Lagat",
    avatar: "/avatars/james.jpg",
    quote:
      "Tumalock helped me did secure purchase of items online. I recently bought a laptop through it. I send the money to turnalock together with the sellers' mpesa number. The seller received a message from turnalock and sent me the laptop through a Nissan to kericho. I received my laptop in good condition and unlocked the money which had initially been locked. The money was then released to the seller immediately.",
  },
  {
    name: "Omosh Sam.",
    avatar: "/avatars/grace.jpg",
    quote:
      "I have an online store where I sell mobile phones. I do refer my customers to use turnalock deal. They really like it and this has led to an increase in my online sales as well as profits. Since I knew turnalock, I haven't closed a day without selling anything. My customers are distributed countrywide and I just send them items through buses or matutus after I have received messages from turnalock. I love this company.",
  },
];
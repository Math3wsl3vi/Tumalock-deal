"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

import React from 'react'

const Testimonial = () => {
  return (
     <section className="bg-gray-50 py-16 md:py-24 lg:py-32" id="testimonials font-poppins">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-pink-600 uppercase font-semibold tracking-widest mb-2">TESTIMONIAL</h1>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">&apos;{testimonial.quote}&apos;</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Join {testimonials.length * 50}+ satisfied customers using Tumalock
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial

const testimonials = [
  {
    name: "Sarah K.",
    role: "Online Shop Owner",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
    quote:
      "Tumalock has transformed my online business. My customers trust me more knowing their payments are secure, and I've seen a 30% increase in sales since using the platform.",
  },
  {
    name: "James M.",
    role: "Frequent Online Buyer",
    avatar: "/avatars/james.jpg",
    rating: 5,
    quote:
      "I used to be scared of online scams, but with Tumalock I can shop with confidence. The payment protection gives me peace of mind with every purchase.",
  },
  {
    name: "Grace W.",
    role: "E-commerce Entrepreneur",
    avatar: "/avatars/grace.jpg",
    rating: 4,
    quote:
      "The platform is so easy to use. It's eliminated payment disputes with my customers and helped me expand my business across Kenya.",
  },
];
"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white font-poppins">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              BUY AND SELL SAFELY
            </h1>

            <p className="text-lg text-gray-600 md:text-lg">
              <strong>Tumalock Deal</strong> is a secure e-commerce platform
              that protects buyers from fraud by holding payments in trust until
              goods are delivered and verified. Sellers receive funds only after
              successful delivery, ensuring safe and transparent transactions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
           <Button
            size="lg"
            className="h-12 px-8 text-lg text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 transition"
            onClick={() => router.push("/products")}
          >
            Register <ArrowRight className="ml-2 h-5 w-5" />
          </Button>


              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-lg"
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <Image
                    key={item}
                    src={`/avatars/avatar-${item}.jpg`}
                    alt="Happy customer"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium">Trusted by 500+ customers</p>
                <p>Across Kenya</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src="/images/heroImage.png"
                alt="Smart lock"
                width={600}
                height={600}
                className="rounded-xl object-cover shadow-xl"
                priority
              />
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-white p-4 shadow-lg lg:block">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="font-medium">24/7 Active Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;

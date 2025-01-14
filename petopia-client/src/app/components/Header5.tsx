'use client'

import Image from 'next/image'
import { Button } from "@relume_io/relume-ui";

export function Header() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Petopia background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to Petopia – Your Pet&apos;s Happy Place
            </h1>
            <p className="mb-8 text-lg text-white/90 sm:text-xl">
              At Petopia, we believe every pet deserves the best care and joy.
              Explore our range of products and services designed to keep your
              furry friends healthy and happy.
            </p>
            <div className="flex flex-wrap gap-4">
            <Button title="Learn More">Learn More</Button>
              <Button title="Sign Up" variant="secondary-alt">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


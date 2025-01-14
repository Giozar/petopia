"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Product3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-semibold">Shop</p>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Products
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              Explore our wide range of pet products today!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Dog Food</h3>
              <div className="text-sm font-normal">Dry</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Cat Toys</h3>
              <div className="text-sm font-normal">Interactive</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Dog Collar</h3>
              <div className="text-sm font-normal">Leather</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Cat Bed</h3>
              <div className="text-sm font-normal">Plush</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Dog Leash</h3>
              <div className="text-sm font-normal">Reflective</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Cat Carrier</h3>
              <div className="text-sm font-normal">Portable</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Dog Bowl</h3>
              <div className="text-sm font-normal">Stainless</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Cat Scratcher</h3>
              <div className="text-sm font-normal">Cardboard</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
        </div>
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button variant="secondary" size="primary" title="View all">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}

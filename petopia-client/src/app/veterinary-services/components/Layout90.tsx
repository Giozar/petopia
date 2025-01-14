"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Experience Exceptional Veterinary Care Tailored Just for Your
            Beloved Pets
          </h3>
          <p className="md:text-md">
            At our clinic, we prioritize your pet's health with personalized
            care plans designed to meet their unique needs. Our advanced
            diagnostic equipment ensures accurate assessments, allowing us to
            provide the best treatment options. With a compassionate staff
            dedicated to your pet's well-being, you can trust us to treat your
            furry family members like our own.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}

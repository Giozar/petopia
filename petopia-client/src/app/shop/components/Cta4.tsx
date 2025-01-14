"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";

export function Cta4() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Stay Updated on Our Products
          </h2>
          <p className="text-text-alternative md:text-md">
            Join our newsletter for exclusive updates on new products, special offers, and exciting promotions.
          </p>
          <div className="mt-6 w-full max-w-sm md:mt-8">
            <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email Here"
              />
              <Button title="Join Now">Join Now</Button>
            </form>
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <p class='text-xs text-text-alternative'>
                    By clicking Sign Up you're confirming that you agree with our
                    <a href='#' class='underline'>Terms and Conditions</a>.
                  </p>
                `,
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="size-full object-cover"
            alt="Relume placeholder image"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}

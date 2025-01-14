"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
              Schedule Your Pet's Appointment Today
            </h2>
            <p className="md:text-md">
              Contact us for expert pet care and services.
            </p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <Button title="Book">Book</Button>
          <Button title="Inquire" variant="secondary">
            Inquire
          </Button>
        </div>
      </div>
    </section>
  );
}
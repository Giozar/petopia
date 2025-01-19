"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

export function Testimonial4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <div className="mb-6 flex items-center justify-center md:mb-8">
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
            <BiSolidStar className="size-6" />
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            &rdquo;¡El cuidado que mi perro recibió fue excepcional! No podría estar más feliz con los resultados y el personal tan amable.&ldquo;
          </blockquote>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center md:mt-8 md:w-auto md:flex-row md:gap-5 md:text-left">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Avatar del testimonio 1"
                className="size-14 min-h-14 min-w-14 rounded-full object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <p>Jessica Brown</p>
              <p>Propietaria de mascota, en casa</p>
            </div>
            <div className="hidden w-px self-stretch bg-black md:block" />
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                alt="Logo de Webflow 1"
                className="max-h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

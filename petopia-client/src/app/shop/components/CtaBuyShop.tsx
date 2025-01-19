"use client";

import { Button } from "@relume_io/relume-ui";
import Image from "next/image";
import React from "react";

export function CtaBuyShop() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Descubre Nuestros Productos de Calidad para Mascotas
          </h2>
          <p className="text-text-alternative md:text-md">
            Explora nuestra amplia gama de productos diseñados para mantener a tus mascotas
            felices y saludables.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Comprar">Comprar</Button>
            <Button title="Saber Más" variant="secondary-alt">
              Saber Más
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Imagen de marcador de posición de Relume"
          width={100}
          height={100}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
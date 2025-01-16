"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Descubre</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Explora Nuestra Selección de Productos para Mascotas
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Encuentra todo lo que necesitas para tus queridas mascotas en un solo lugar.
              Desde alimentos nutritivos hasta juguetes interactivos, nuestros productos
              destacados satisfacen todas las necesidades de tus amigos peludos. ¡Compra
              ahora y dale lo mejor a tus mascotas!
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Comprar" variant="secondary">
                Comprar
              </Button>
              <Button
                title="Saber Más"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Saber Más
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Imagen de marcador de posición de Relume"
        />
      </div>
    </section>
  );
}
"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Categories() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-semibold md:mb-4">Esenciales</p>
              <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Descubre Nuestros Productos Premium para Mascotas
              </h2>
            </div>
            <div>
              <p className="md:text-md">
                ¡Tus mascotas merecen lo mejor! Explora nuestra selección de
                alimentos, juguetes y ropa diseñados para mantener a tus amigos
                peludos felices y saludables. Compra ahora para encontrar todo
                lo que necesitas para tus queridos compañeros.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Logo de Relume"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Alimenta a tu Mascota con Comida de Calidad
              </h3>
              <p>Nuestras opciones de alimentos son nutritivas y deliciosas.</p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Logo de Relume"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Juguetes Divertidos y Estimulantes para tus Mascotas
              </h3>
              <p>Mantén a tus mascotas entretenidas con nuestros juguetes.</p>
            </div>
            <div>
              <div className="rb-5 mb-5 md:mb-6">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Logo de Relume"
                  className="size-12"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Ropa con Estilo para Cada Temporada
              </h3>
              <p>Viste a tus mascotas con comodidad y estilo.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            <Button variant="secondary">Comprar</Button>
            <Button iconRight={<RxChevronRight />} variant="link" size="link">
              Saber Más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
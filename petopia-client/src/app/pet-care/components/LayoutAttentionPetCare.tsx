"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function LayoutAttentionPetCare() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Servicios</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Atención Integral para tus Mascotas Queridas
            </h2>
            <p className="md:text-md">
              Nuestro equipo dedicado ofrece una variedad de servicios para mantener a tus mascotas saludables y felices. Desde chequeos rutinarios hasta atención de emergencia, te tenemos cubierto.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Imagen de lugar reservado de Relume"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Chequeos Rutinarios para una Salud Óptima
            </h3>
            <p>Los chequeos regulares aseguran que tu mascota se mantenga en la mejor forma posible.</p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Imagen de lugar reservado de Relume"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Servicios de Emergencia Cuando Más los Necesitas
            </h3>
            <p>Nuestro equipo de emergencia está listo 24/7 para cuidado urgente.</p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Imagen de lugar reservado de Relume"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Tratamientos Especializados Adaptados a tu Mascota
            </h3>
            <p>Proporcionamos cuidado especializado para necesidades de salud únicas.</p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          <Button variant="secondary">Aprender Más</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Registrarse
          </Button>
        </div>
      </div>
    </section>
  );
}

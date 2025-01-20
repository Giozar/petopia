"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function LayoutEmergencyPetCare() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="size-20"
                alt="Logotipo de Relume"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Servicios de Emergencia Integrales para tus Mascotas
            </h2>
            <p className="md:text-md">
              Nuestros servicios de emergencia están disponibles 24/7 para asegurar que tus mascotas reciban atención inmediata cuando más lo necesiten. Desde tratamientos urgentes hasta cirugías de emergencia, nuestro equipo capacitado está aquí para proporcionar el más alto nivel de atención médica.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Aprender más" variant="secondary">
                Aprender más
              </Button>
              <Button
                title="Registrarse"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Registrarse
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Imagen de espacio reservado de Relume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

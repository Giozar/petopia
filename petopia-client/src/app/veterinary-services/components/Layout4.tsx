"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Salud</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Por Qué los Chequeos de Rutina Son Esenciales para las Mascotas
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Los chequeos de rutina son vitales para mantener la salud de tu
              mascota. Las evaluaciones regulares ayudan a detectar posibles
              problemas a tiempo, asegurando una vida más larga y feliz.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Cuidado Preventivo
                </h6>
                <p>
                  Anticípate a los problemas de salud con un cuidado veterinario
                  proactivo para tus queridas mascotas.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Orientación Experta
                </h6>
                <p>
                  Nuestros veterinarios experimentados ofrecen consejos
                  personalizados adaptados a las necesidades de tu mascota.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Aprende Más" variant="secondary">
                Aprende Más
              </Button>
              <Button
                title="Regístrate"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Regístrate
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Imagen de ejemplo de Relume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

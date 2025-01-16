"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Esencial</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Protege a tu mascota con nuestros servicios de vacunación
            </h1>
            <p className="md:text-md">
              Las vacunas son cruciales para la salud de tu mascota, protegiéndola contra diversas enfermedades infecciosas. Nuestra clínica veterinaria ofrece una gama completa de vacunas diseñadas tanto para perros como para gatos, asegurando que se mantengan saludables y felices.
            </p>
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
              alt="Imagen de placeholder de Relume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

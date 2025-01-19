"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Cuidado</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Por Qué Elegir Nuestra Clínica Veterinaria Para Tus Mascotas
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Nuestra clínica se enorgullece de proporcionar atención veterinaria de primera clase. Con un equipo de profesionales experimentados y tecnología avanzada, tus mascotas están en buenas manos.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Veterinarios Expertos
                </h6>
                <p>
                  Nuestros veterinarios tienen años de experiencia y una pasión por la salud y el bienestar animal.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Equipamiento Avanzado
                </h6>
                <p>
                  Utilizamos tecnología de última generación para asegurar diagnósticos precisos y tratamientos efectivos.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Aprender Más" variant="secondary">
                Aprender Más
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
              alt="Imagen de lugar de Relume"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

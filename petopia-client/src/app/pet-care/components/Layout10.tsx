"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Cuidado</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Tratamientos especializados integrales para tus mascotas
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Nuestros tratamientos especializados aseguran que tus mascotas reciban la atención de la más alta calidad. Desde la salud dental hasta cirugías avanzadas, priorizamos su bienestar.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Logotipo de Relume 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Cuidado Dental
                </h6>
                <p>
                  Servicios dentales expertos para mantener la sonrisa de tu mascota sana y brillante.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Logotipo de Relume 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Servicios de Dermatología
                </h6>
                <p>
                  Soluciones integrales para el cuidado de la piel, incluyendo alergias, infecciones y otros problemas dermatológicos.
                </p>
              </div>
            </div>
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

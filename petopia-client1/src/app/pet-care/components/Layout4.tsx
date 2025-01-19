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
              Chequeos de rutina integrales para tus mascotas
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Los chequeos de rutina son esenciales para la salud de tu mascota. Nuestros exámenes de bienestar incluyen vacunaciones y cuidado preventivo adaptado a tus amigos peludos.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Exámenes de Bienestar
                </h6>
                <p>
                  Los exámenes regulares ayudan a detectar problemas de salud tempranamente, asegurando que tu mascota se mantenga feliz y saludable.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Vacunaciones
                </h6>
                <p>
                  Mantente al día con las vacunaciones para proteger a tu mascota de enfermedades prevenibles.
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

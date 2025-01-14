"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import usePicture from "../pictures/hooks/usePicture";

export function Layout4() {

   const { catImage, dogImage } = usePicture();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Cuidado</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Tus mascotas merecen el mejor cuidado
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              En Petopia, ofrecemos servicios veterinarios integrales
              diseñados para tus gatos y perros. Nuestro equipo dedicado
              garantiza que tus mascotas reciban atención de la más alta
              calidad en un entorno compasivo.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Cuidado experto
                </h6>
                <p>
                  Veterinarios experimentados comprometidos con la salud y el
                  bienestar de tu mascota.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Servicios de bienestar
                </h6>
                <p>
                  Cuidado preventivo, vacunas y chequeos de bienestar para una
                  mascota feliz y saludable.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Saber más" variant="secondary">
                Saber más
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
               src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              className="w-full object-cover"
              alt="Imagen de ejemplo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

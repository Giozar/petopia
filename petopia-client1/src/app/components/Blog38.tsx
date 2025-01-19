'use client'

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import usePicture from "../pictures/hooks/usePicture";

export function Blog38() {

  const { catImage, dogImage } = usePicture();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Últimos Consejos sobre Cuidado de Mascotas
            </h2>
            <p className="md:text-md">
              Descubre consejos y trucos para tus amigos peludos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src={dogImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt="Imagen de perro"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Salud
              </p>
              <p className="inline text-sm font-semibold">5 min de lectura</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                5 Consejos para una Mascota Saludable
              </h2>
            </a>
            <p>Estrategias simples para mantener a tu mascota feliz y saludable.</p>
            <Button
              title="Leer más"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Leer más
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src={dogImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt="Imagen de perro"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Juguetes
              </p>
              <p className="inline text-sm font-semibold">5 min de lectura</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Los Mejores Juguetes para tu Perro
              </h2>
            </a>
            <p>Descubre los mejores juguetes para mantener a tu perro entretenido.</p>
            <Button
              title="Leer más"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Leer más
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src={catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt="Imagen de gato"
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                Nutrición
              </p>
              <p className="inline text-sm font-semibold">5 min de lectura</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Alimentos Esenciales para Gatos
              </h2>
            </a>
            <p>Conoce las mejores opciones de alimentos para tu amigo felino.</p>
            <Button
              title="Leer más"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Leer más
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button variant="secondary" className="mt-10 md:mt-14 lg:mt-16">
            Ver todos
          </Button>
        </div>
      </div>
    </section>
  );
}

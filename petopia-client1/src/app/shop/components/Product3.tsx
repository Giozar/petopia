"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Product3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-semibold">Tienda</p>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Productos
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              ¡Explora nuestra amplia gama de productos para mascotas hoy!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Comida para Perros</h3>
              <div className="text-sm font-normal">Seca</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Juguetes para Gatos</h3>
              <div className="text-sm font-normal">Interactivos</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Collar para Perros</h3>
              <div className="text-sm font-normal">Cuero</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Cama para Gatos</h3>
              <div className="text-sm font-normal">Felpa</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Correa para Perros</h3>
              <div className="text-sm font-normal">Reflectante</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Transportador para Gatos</h3>
              <div className="text-sm font-normal">Portátil</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Plato para Perros</h3>
              <div className="text-sm font-normal">Acero Inoxidable</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
          <a href="#" className="text-center font-semibold md:text-md">
            <div className="mb-3 aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de marcador de posición de Relume"
                className="size-full object-cover"
              />
            </div>
            <div className="mb-2">
              <h3>Rascador para Gatos</h3>
              <div className="text-sm font-normal">Cartón</div>
            </div>
            <div className="text-md md:text-lg">$55</div>
          </a>
        </div>
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button variant="secondary" size="primary" title="Ver todo">
            Ver todo
          </Button>
        </div>
      </div>
    </section>
  );
}
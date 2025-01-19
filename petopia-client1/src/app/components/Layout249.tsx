"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import usePicture from "../pictures/hooks/usePicture";

export function Layout249() {

  const { catImage, dogImage } = usePicture();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Cuidado</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Cuidado de Mascotas Sin Esfuerzo al Alcance de Tu Mano
            </h2>
            <p className="md:text-md">
              En Petopia, hacemos fácil la reserva de servicios veterinarios y
              el pedido de todo lo que tu mascota necesita. Experimenta un
              proceso fluido diseñado pensando en ti y en tus amigos peludos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt="Imagen de ejemplo"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Reserva Servicios Veterinarios en Solo Unos Pocos Clics
            </h3>
            <p>
              Selecciona el servicio deseado y elige un horario que te convenga.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt="Imagen de ejemplo"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Compra Productos Adaptados a Tu Mascota
            </h3>
            <p>Explora nuestra extensa selección de alimentos, juguetes y más.</p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt="Imagen de ejemplo"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Accede al Cuidado y Soporte en Cualquier Momento y Lugar
            </h3>
            <p>Recibe asesoramiento y apoyo experto a través de nuestra plataforma.</p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          <Button variant="secondary">Saber más</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Registrarse
          </Button>
        </div>
      </div>
    </section>
  );
}

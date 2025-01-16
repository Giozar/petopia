"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Compasión</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Cuidando a las Mascotas
          </h1>
          <p className="md:text-md">
            Tu socio de confianza en la salud de las mascotas, dedicado a proporcionar
            un cuidado excepcional para tus amigos peludos.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Saber Más">Saber Más</Button>
            <Button title="Únete a Nosotros" variant="secondary">
              Únete a Nosotros
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

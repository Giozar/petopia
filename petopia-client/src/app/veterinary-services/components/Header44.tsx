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
            Atención Veterinaria Experta
          </h1>
          <p className="md:text-md">
            Ofrecemos servicios veterinarios integrales para mantener a tus mascotas saludables y felices durante toda su vida.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Aprende Más">Aprende Más</Button>
            <Button title="Regístrate" variant="secondary">
              Regístrate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

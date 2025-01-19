"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Cuidado</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Servicios Integrales para Mascotas
          </h1>
          <p className="md:text-md">
            Proporcionamos cuidados veterinarios excepcionales adaptados a las necesidades únicas y al bienestar de tu mascota.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Aprender más">Aprender más</Button>
            <Button title="Registrarse" variant="secondary">
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Experimenta Cuidados Veterinarios Excepcionales Personalizados para Tus Mascotas Queridas
          </h3>
          <p className="md:text-md">
            En nuestra clínica, priorizamos la salud de tu mascota con planes de cuidado personalizados diseñados para satisfacer sus necesidades únicas. Nuestro equipo de diagnóstico avanzado asegura evaluaciones precisas, permitiéndonos ofrecer las mejores opciones de tratamiento. Con un personal compasivo dedicado al bienestar de tu mascota, puedes confiarnos a tus miembros familiares peludos como si fueran los nuestros.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Imagen de lugar de Relume"
        />
      </div>
    </section>
  );
}

"use client";

import React from "react";
import usePicture from "../pictures/hooks/usePicture";

export function Layout3() {

  const { catImage, dogImage } = usePicture();

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Descubre nuestra extensa selección de productos premium para tus
              amigos peludos
            </h1>
            <p className="md:text-md">
              En Petopia, ofrecemos una amplia variedad de productos de alta
              calidad diseñados para mejorar la vida de tus mascotas. Explora
              nuestra colección y encuentra todo, desde alimentos nutritivos hasta
              juguetes divertidos que a tus gatos y perros les encantarán. Aprende
              más
            </p>
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

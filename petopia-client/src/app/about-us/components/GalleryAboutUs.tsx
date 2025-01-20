'use client';
import usePicture from '@/app/pictures/hooks/usePicture';
import React from 'react';

export function GalleryAboutUs() {
  const { catImage, dogImage } = usePicture();
  
    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Galería de Mascotas
          </h2>
          <p className="md:text-md">
            Explora nuestros momentos alegres con mascotas y personal.
          </p>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-3">
            <a href="#">
            <img
              src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              alt="Imagen de ejemplo 1"
              className="w-full h-full object-cover"
            />
            </a>
          <a href="#">
            <img
              src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              alt="Imagen de ejemplo 2"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              alt="Imagen de ejemplo 3"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              alt="Imagen de ejemplo 4"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              alt="Imagen de ejemplo 5"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              alt="Imagen de ejemplo 6"
              className="size-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
    );
}
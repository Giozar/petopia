"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function TeamAboutUs() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Compasión</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Nuestro Equipo
          </h2>
          <p className="md:text-md">
            Conoce a los profesionales dedicados al cuidado de tus mascotas.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dra. Emily</h5>
              <h6 className="md:text-md">Cirujana Veterinaria</h6>
            </div>
            <p>Especialista en cirugía y atención de emergencia para perros y gatos.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dr. Mark</h5>
              <h6 className="md:text-md">Comportamentalista Animal</h6>
            </div>
            <p>Experto en entrenamiento y problemas de comportamiento en mascotas.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dra. Sarah</h5>
              <h6 className="md:text-md">Técnica Veterinaria</h6>
            </div>
            <p>Proporcionando atención compasiva y apoyo durante la visita de tu mascota.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dr. Alex</h5>
              <h6 className="md:text-md">Nutricionista de Mascotas</h6>
            </div>
            <p>Guiando a los dueños de mascotas sobre la nutrición óptima para sus amigos peludos.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dra. Lisa</h5>
              <h6 className="md:text-md">Médica General</h6>
            </div>
            <p>Proporcionando atención integral para mascotas de todas las edades.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dr. John</h5>
              <h6 className="md:text-md">Especialista en Cirugía</h6>
            </div>
            <p>Enfocado en técnicas quirúrgicas avanzadas para casos complejos.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dra. Mia</h5>
              <h6 className="md:text-md">Veterinaria de Emergencias</h6>
            </div>
            <p>Disponible para atención urgente y situaciones críticas las 24 horas.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="mb-5 md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo"
                className="size-20 min-h-20 min-w-20 rounded-full object-cover"
              />
            </div>
            <div className="mb-3 md:mb-4">
              <h5 className="text-md font-semibold md:text-lg">Dra. Zoe</h5>
              <h6 className="md:text-md">Dentista Veterinaria</h6>
            </div>
            <p>Especialista en salud oral y cuidado dental para mascotas.</p>
            <div className="mt-6 flex gap-3.5">
              <a href="#">
                <BiLogoLinkedinSquare className="size-6" />
              </a>
              <a href="#">
                <FaXTwitter className="size-6 p-0.5" />
              </a>
              <a href="#">
                <BiLogoDribbble className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            ¡Estamos contratando!
          </h4>
          <p className="md:text-md">
            Únete a nuestro apasionado equipo de profesionales del cuidado animal.
          </p>
          <div className="mt-6 md:mt-8">
            <Button variant="secondary">Posiciones abiertas</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer() {
  const formState = useForm();
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="#" className="mb-5 md:mb-6">
              <Image
                src={"https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
                alt="Logo imagen"
                className="inline-block"
                width={100}
                height={100}
              />
            </a>
            <p className="mb-5 md:mb-6">
              Suscríbete a nuestro boletín para recibir las últimas novedades sobre productos y servicios.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Tu correo aquí"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Suscribirse" variant="secondary" size="sm" style={{ backgroundColor: '#6DBF5B' }}>
                  Suscribirse
                </Button>
              </form>
              <p className="text-xs">
                Al suscribirte, aceptas nuestra Política de Privacidad y consientes recibir actualizaciones.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 md:gap-y-4">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Enlaces Rápidos</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Compra Ahora</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Nuestros Servicios</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Sobre Nosotros</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Contáctanos</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Preguntas Frecuentes</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Enlaces de Soporte</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Centro de Ayuda</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Cuidado de Mascotas</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Política de Devoluciones</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Información de Envíos</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <span>Tarjetas de Regalo</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Conéctate con Nosotros</h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoInstagram className="size-6" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>X</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3">
                    <BiLogoYoutube className="size-6" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">© 2024 Petopia. Todos los derechos reservados.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="#">Política de Privacidad</a>
            </li>
            <li className="underline">
              <a href="#">Términos de Servicio</a>
            </li>
            <li className="underline">
              <a href="#">Configuración de Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

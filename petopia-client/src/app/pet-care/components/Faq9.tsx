"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Preguntas Frecuentes
          </h2>
          <p className="md:text-md">
            Encuentra respuestas a tus preguntas más urgentes sobre nuestros servicios veterinarios y precios.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">¿Cuáles son sus precios?</h2>
            <p>
              Nuestros precios varían según el servicio proporcionado. Para un desglose detallado, visita nuestra página de precios. Nos esforzamos por ofrecer tarifas competitivas asegurando la máxima calidad en el cuidado.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">¿Cómo puedo programar una cita?</h2>
            <p>
              Programar una cita es fácil. Puedes reservar en línea a través de nuestro sitio web o llamar directamente a nuestra oficina. Recomendamos programar con anticipación para asegurar tu horario preferido.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              ¿Qué opciones de tratamiento están disponibles?
            </h2>
            <p>
              Ofrecemos una amplia gama de opciones de tratamiento, incluyendo cuidados preventivos, cirugías y servicios de emergencia. Nuestro equipo está dedicado a proporcionar un cuidado personalizado adaptado a las necesidades de tu mascota. Consulta con nuestros veterinarios para recomendaciones específicas.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">¿Aceptan seguro de mascotas?</h2>
            <p>
              Sí, aceptamos varios planes de seguro de mascotas. Es mejor consultar con tu proveedor para detalles específicos de cobertura. Nuestro personal puede ayudarte con cualquier papeleo necesario para las reclamaciones.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pb-10 pt-5 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pb-12 md:pt-6 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">
              ¿Qué pasa si tengo más preguntas?
            </h2>
            <p>
              Si aún tienes preguntas, nuestro equipo está aquí para ayudar. No dudes en contactarnos por teléfono o correo electrónico. Estamos comprometidos a asegurar que tengas toda la información que necesitas.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            ¿Todavía tienes preguntas?
          </h4>
          <p className="md:text-md">
            Estamos aquí para ayudarte con cualquier consulta.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contactar" variant="secondary">
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Preguntas Frecuentes
          </h2>
          <p className="md:text-md">
            Aquí tienes algunas preguntas comunes sobre nuestros servicios veterinarios para ayudarte.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Cómo puedo reservar?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Reservar una cita es fácil. Puedes agendar en línea a través de nuestro sitio web o llamarnos directamente. Recomendamos reservar con anticipación para asegurar tu horario preferido.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Cuáles son los costos?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Los costos varían según los servicios proporcionados. Ofrecemos precios transparentes y un desglose detallado durante tu visita. No dudes en preguntar sobre cualquier tratamiento específico que te interese.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué tratamientos ofrecen?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Proporcionamos una amplia gama de servicios veterinarios, incluyendo vacunas, cuidado dental y cirugías. Nuestro equipo está capacitado para manejar tanto el cuidado rutinario como el de emergencia. La salud y la comodidad de tu mascota son nuestras principales prioridades.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Puedo traer a mi mascota?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              ¡Por supuesto! Te animamos a traer a tu mascota a la cita. Esto nos permite evaluar su salud en un contexto familiar. Asegúrate de que estén debidamente sujetos durante tu visita.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué hago si tengo preocupaciones?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Si tienes alguna preocupación sobre la salud de tu mascota o nuestros servicios, no dudes en comunicarte. Nuestro personal está aquí para escuchar y ofrecer orientación. Tu tranquilidad es importante para nosotros.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            ¿Aún tienes preguntas?
          </h4>
          <p className="md:text-md">
            Estamos aquí para ayudarte con cualquier consulta.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contacto" variant="secondary">
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

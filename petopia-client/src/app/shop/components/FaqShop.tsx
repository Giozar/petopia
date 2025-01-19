"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function FaqShop() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Preguntas Frecuentes
          </h2>
          <p className="md:text-md">
            Aquí hay algunas preguntas comunes sobre la compra de productos, envíos
            y devoluciones.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Qué productos ofrecen?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Ofrecemos una amplia gama de productos para tus mascotas, incluyendo alimentos,
              juguetes, ropa y suministros de salud. Nuestra selección está diseñada para
              gatos y perros, asegurando que encuentres los artículos perfectos para tus
              amigos peludos. Explora nuestras categorías para descubrir todo lo que
              tenemos disponible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Cómo se manejan los envíos?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Los envíos se procesan rápidamente para asegurar que tus productos lleguen a
              tiempo. Ofrecemos varias opciones de envío, incluyendo entrega estándar y
              express. Puedes rastrear tu pedido a través de nuestro sitio web para
              mayor comodidad.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Cuál es su política de devoluciones?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Queremos que estés completamente satisfecho con tu compra. Si no estás
              conforme, puedes devolver la mayoría de los productos dentro de los 30 días
              para un reembolso completo. Por favor, asegúrate de que los artículos estén
              en su condición original para un proceso de devolución sin problemas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Cómo puedo rastrear mi pedido?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Una vez que tu pedido es enviado, recibirás un número de seguimiento por
              correo electrónico. Usa este número en nuestro sitio web para verificar el
              estado de tu entrega. Mantente informado sobre el viaje de tu pedido hasta
              tu puerta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              ¿Puedo modificar mi pedido?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Sí, puedes modificar tu pedido antes de que haya sido procesado.
              Por favor, contacta a nuestro equipo de servicio al cliente lo antes posible.
              Una vez que el pedido ha sido enviado, no se pueden realizar cambios.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            ¿Todavía tienes preguntas?
          </h4>
          <p className="md:text-md">¡Estamos aquí para ayudarte!</p>
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
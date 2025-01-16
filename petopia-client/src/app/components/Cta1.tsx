"use client";

import { Button } from "@relume_io/relume-ui";
import usePicture from "../pictures/hooks/usePicture";

export function Cta1() {

  const { catImage, dogImage } = usePicture();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Únete a nuestra familia Petopia
            </h2>
            <p className="md:text-md">
              ¡Regístrate hoy mismo para recibir ofertas exclusivas, consejos y actualizaciones para tus amigos peludos!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Suscribirse">Suscribirse</Button>
              <Button title="Saber más" variant="secondary">
                Saber más
              </Button>
            </div>
          </div>
          <div>
            <img
              src={dogImage || catImage || "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"}
              className="w-full object-cover"
              alt="Imagen de perro o gato"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

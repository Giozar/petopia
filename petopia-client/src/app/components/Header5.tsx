'use client'

import Image from 'next/image'
import { Button } from "@relume_io/relume-ui";

export function Header() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Fondo Petopia"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Bienvenido a Petopia – El lugar feliz para tu mascota
            </h1>
            <p className="mb-8 text-lg text-white/90 sm:text-xl">
              En Petopia, creemos que cada mascota merece el mejor cuidado y
              felicidad. Explora nuestra gama de productos y servicios diseñados
              para mantener a tus amigos peludos saludables y felices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button title="Saber más">Saber más</Button>
              <Button title="Registrarse" variant="secondary-alt">
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

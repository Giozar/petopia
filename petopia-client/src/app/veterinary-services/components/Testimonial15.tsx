"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";

const useCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index: number) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-black" : "bg-neutral-light"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial15() {
  const { api, setApi, current, handleDotClick, dotClassName } = useCarousel();

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative pt-20 md:pb-20 md:pt-0">
            <CarouselContent className="ml-0">
              <CarouselItem className="pl-0">
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Imagen testimonial 1"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8">
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                    </div>
                    <blockquote className="text-xl font-bold md:text-2xl">
                      "¡La atención que recibió mi perro fue excepcional! No podría estar más feliz con los resultados y el personal compasivo."
                    </blockquote>
                    <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold">Emily Johnson</p>
                        <p>Dueña de mascota, N/A</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
                      <div>
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                          alt="Logo de Webflow 1"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0">
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Imagen testimonial 2"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8">
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                      <BiSolidStar className="size-6" />
                    </div>
                    <blockquote className="text-xl font-bold md:text-2xl">
                      "¡La atención que recibió mi perro fue excepcional! No podría estar más feliz con los resultados y el personal compasivo."
                    </blockquote>
                    <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold">Emily Johnson</p>
                        <p>Dueña de mascota, N/A</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-background-alternative sm:mx-0" />
                      <div>
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                          alt="Logo de Webflow 2"
                          className="max-h-12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute top-0 flex w-full items-start justify-between md:bottom-0 md:top-auto md:items-end">
              <div className="mt-2.5 flex w-full items-start justify-start md:mb-2.5 md:mt-0">
                <button
                  onClick={handleDotClick(0)}
                  className={dotClassName(0)}
                />
                <button
                  onClick={handleDotClick(1)}
                  className={dotClassName(1)}
                />
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
                <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

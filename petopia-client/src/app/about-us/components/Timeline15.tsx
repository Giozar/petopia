"use client";

import {
  Button,
  Tabs,
  TabsContent,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

interface Tab {
  value: string;
  trigger: string;
  content: {
    date: string;
    heading: string;
    description: string;
    buttons: { title: string; variant: string; size?: string; iconRight?: JSX.Element }[];
    image: { src: string; alt: string };
  };
}

const useTabAnimation = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const isTabActive = (index: number) => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return index <= activeIndex;
  };

  const progressWidth = () => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return `${(100 / (tabs.length * 2)) * (activeIndex * 2 + 1)}%`;
  };

  const circleClassName = (index: number) => {
    return `z-20 flex size-[0.9375rem] flex-none items-center justify-center rounded-full shadow-[0_0_0_8px_white] transition-colors duration-300 ${
      isTabActive(index) ? "bg-neutral-black" : "bg-neutral-light"
    }`;
  };

  const triggerClassName = (index: number) => {
    return `relative flex flex-1 flex-col items-center justify-center gap-2 border-0 px-0 transition-colors duration-300 data-[state=active]:bg-transparent ${
      isTabActive(index)
        ? "data-[state=active]:text-text-primary"
        : "text-neutral-light"
    }`;
  };

  return {
    activeTab,
    setActiveTab,
    progressWidth,
    circleClassName,
    triggerClassName,
  };
};

export function Timeline15() {
  const tabAnimation = useTabAnimation({
    tabs: [
      {
        value: "tab-one",
        trigger: "Fecha",
        content: {
          date: "Fecha",
          heading: "Un título largo es lo que ves aquí en esta sección de características",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Botón", variant: "secondary" },
            {
              title: "Botón",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Imagen de ejemplo 1",
          },
        },
      },
      {
        value: "tab-two",
        trigger: "Fecha",
        content: {
          date: "Fecha",
          heading: "Un título largo es lo que ves aquí en esta sección de características",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Botón", variant: "secondary" },
            {
              title: "Botón",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Imagen de ejemplo 2",
          },
        },
      },
      {
        value: "tab-three",
        trigger: "Fecha",
        content: {
          date: "Fecha",
          heading: "Un título largo es lo que ves aquí en esta sección de características",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Botón", variant: "secondary" },
            {
              title: "Botón",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Imagen de ejemplo 3",
          },
        },
      },
      {
        value: "tab-four",
        trigger: "Fecha",
        content: {
          date: "Fecha",
          heading: "Un título largo es lo que ves aquí en esta sección de características",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Botón", variant: "secondary" },
            {
              title: "Botón",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Imagen de ejemplo 4",
          },
        },
      },
      {
        value: "tab-five",
        trigger: "Fecha",
        content: {
          date: "Fecha",
          heading: "Un título largo es lo que ves aquí en esta sección de características",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Botón", variant: "secondary" },
            {
              title: "Botón",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Imagen de ejemplo 5",
          },
        },
      },
    ],
  });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div
          className="absolute bottom-[99px] z-10 h-[3px] bg-neutral-black transition-[width] duration-300 md:bottom-[3.5625rem]"
          style={{ width: tabAnimation.progressWidth() }}
        />
        <Tabs
          defaultValue="tab-one"
          onValueChange={tabAnimation.setActiveTab}
          className="relative flex flex-col"
        >
          {/* Tab contents with dates and details */}
          <TabsContent value="tab-one" className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20">
            {/* First tab content */}
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                2010
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Nuestra clínica abrió sus puertas a la comunidad.
              </h4>
              <p className="md:text-md">
                Desde el primer día, nuestra misión ha sido proporcionar atención
                excepcional para las mascotas. Rápidamente nos convertimos en un
                recurso confiable para los dueños de mascotas.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button title="Aprender más" variant="secondary">
                  Aprender más
                </Button>
                <Button
                  title="Explorar"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Explorar
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Imagen de ejemplo 1"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          {/* Repeat similar blocks for other tabs */}
        </Tabs>
      </div>
    </section>
  );
}

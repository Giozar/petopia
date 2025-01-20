"use client";

import {
    Button,
    Tabs,
    TabsContent,
} from "@relume_io/relume-ui";
import React, { JSX, useState } from "react";
import { RxChevronRight } from "react-icons/rx";

export function CreationAboutUs() {

    return (
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container relative">
                <Tabs
                    defaultValue="tab-one"
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
                </Tabs>
            </div>
        </section >
    );
}
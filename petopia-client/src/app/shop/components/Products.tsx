"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@relume_io/relume-ui";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  species: string[];
  image?: string;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Estados para filtrar
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSpecies, setSelectedSpecies] = useState("Todos");

  // Listas de categorías y especies para el filtro
  const categories = ["Todos", "Juguetes", "Ropa", "Accesorios", "Medicos"];
  const speciesOptions = ["Todos", "Perros", "Gatos"];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data: Product[] = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Mientras cargan los datos
  if (loading) {
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container text-center">
          <p>Cargando productos...</p>
        </div>
      </section>
    );
  }

  // Si no hay productos
  if (!products || products.length === 0) {
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container text-center">
          <h2 className="text-2xl font-bold">No hay productos disponibles</h2>
        </div>
      </section>
    );
  }

  // Filtramos los productos según la categoría y la especie seleccionadas
  const filteredProducts = products.filter((product) => {
    // Filtro por categoría
    if (selectedCategory !== "Todos" && product.category !== selectedCategory) {
      return false;
    }

    // Filtro por especie: validamos si en el array species está la especie seleccionada
    if (
      selectedSpecies !== "Todos" &&
      !product.species.includes(selectedSpecies)
    ) {
      return false;
    }

    return true;
  });

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Título de la sección */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-semibold">Tienda</p>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Productos
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              ¡Explora nuestra amplia gama de productos para mascotas hoy!
            </p>
          </div>
        </div>

        {/* Controles de filtrado */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Filtrar por categoría */}
          <div className="flex items-center gap-2">
            <label htmlFor="category" className="font-semibold">
              Categoría:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Filtrar por especie */}
          <div className="flex items-center gap-2">
            <label htmlFor="species" className="font-semibold">
              Especie:
            </label>
            <select
              id="species"
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              {speciesOptions.map((sp) => (
                <option key={sp} value={sp}>
                  {sp}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grilla de productos filtrados */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 justify-items-start gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              // Si no hay imagen, usar imagen de placeholder
              const imageSrc =
                product.image ||
                "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg";

              return (
                <a
                  key={product._id}
                  href="#"
                  className="text-center font-semibold md:text-md"
                >
                  <div className="mb-3 aspect-[5/6] md:mb-4">
                    <Image
                      src={imageSrc}
                      alt={`Imagen de ${product.name}`}
                      className="size-full object-cover"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="mb-2">
                    <h3>{product.name}</h3>
                    <div className="text-sm font-normal">{product.description}</div>
                  </div>
                  <div className="text-md md:text-lg">${product.price}</div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="text-center mt-6">
            <p>No hay productos para esa combinación de filtros.</p>
          </div>
        )}

        {/* Botón "Ver todo", ejemplo extra */}
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button variant="secondary" size="primary" title="Ver todo">
            Ver todo
          </Button>
        </div>
      </div>
    </section>
  );
}

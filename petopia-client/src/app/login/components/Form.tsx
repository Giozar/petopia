"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

// Definimos un esquema zod para validar los campos
const userSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres").optional(),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres").optional(),
  email: z.string().email("Formato de correo inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Tipos de la API
type UserFormData = z.infer<typeof userSchema>;

interface ApiResponse {
  _id?: string;
  id?: string; // Podría ser 'id' o '_id' según tu backend
  firstName?: string;
  lastName?: string;
  email: string;
  // otros campos opcionales
}

export default function Form() {
  const router = useRouter();
  const { setUser } = useAuth();
  // Estado para alternar entre Login / Register
  const [isLogin, setIsLogin] = useState(true);

  // Estado para guardar datos del formulario
  const [user, setUserFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Mensajes de error / éxito
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Manejador de cambios en los inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...user, [name]: value });
  };

  // Manejador de envío del formulario
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // Validación con Zod
    try {
      if (isLogin) {
        // Para login, solo validamos email y password
        const partialSchema = userSchema.pick({ email: true, password: true });
        partialSchema.parse({
          email: user.email,
          password: user.password,
        });
      } else {
        // Para registro, validamos todos los campos
        userSchema.parse(user);
      }
    } catch (err: any) {
      if (err.errors?.length) {
        setErrorMsg(err.errors[0].message);
      }
      return;
    }

    try {
      // Definimos la ruta en base a si es login o registro
      const endpoint = isLogin
        ? "http://localhost:4000/users/login"   // LOGIN
        : "http://localhost:4000/users";        // REGISTER

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Error al procesar la solicitud");
      }

      // Obtenemos la respuesta de la API
      const data: ApiResponse = await response.json();

      // Guardamos el usuario en el contexto (suponiendo firstName/lastName vienen del backend)
      // Esto permitirá que el Navbar muestre "Hola, <firstName>".
      setUser({
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
      });

      // Mensaje de éxito
      setSuccessMsg(
        isLogin
          ? `¡Bienvenido de nuevo, ${data.firstName || ""}!`
          : `¡Registro exitoso, ${data.firstName || ""}!`
      );

      // Redireccionamos (ejemplo: a la página principal)
      router.push("/");

    } catch (error: any) {
      setErrorMsg(error.message || "Ocurrió un error inesperado");
    }
  };

  return (
    <section className="px-[5%] py-60">
      <div className="mx-auto max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">
          {isLogin ? "Iniciar sesión" : "Registrar"}
        </h2>

        {/* Mensaje de error */}
        {errorMsg && (
          <div className="mb-4 text-red-600 text-center font-semibold">
            {errorMsg}
          </div>
        )}

        {/* Mensaje de éxito */}
        {successMsg && (
          <div className="mb-4 text-green-600 text-center font-semibold">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label htmlFor="firstName">Nombre</label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={user.firstName || ""}
                onChange={handleChange}
                required
              />

              <label htmlFor="lastName">Apellido</label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={user.lastName || ""}
                onChange={handleChange}
                required
              />
            </>
          )}

          <label htmlFor="email">Correo electrónico</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={user.email || ""}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <Input
            id="password"
            name="password"
            type="password"
            value={user.password || ""}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="mt-4 w-full">
            {isLogin ? "Iniciar sesión" : "Registrar"}
          </Button>
        </form>

        <Button
          variant="link"
          className="mt-4 w-full text-center"
          onClick={() => {
            setIsLogin(!isLogin);
            setErrorMsg("");
            setSuccessMsg("");
          }}
        >
          {isLogin
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Inicia sesión"}
        </Button>
      </div>
    </section>
  );
}

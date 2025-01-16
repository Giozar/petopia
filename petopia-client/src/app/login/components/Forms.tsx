'use client';
import React, { useState } from 'react';
import { Button, Input } from '@relume_io/relume-ui';

export default function Forms() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(isLogin ? 'Log in with: ' : 'Registering: ', user);
  };

  return (
    <section className="container px-[5%] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-md">
        <h2 className="mb-6 text-4xl font-bold">
          {isLogin ? 'Iniciar sesión' : 'Registrar'}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <Input
                label="Nombre"
                name="firstName"
                type="text"
                value={user.firstName}
                onChange={handleChange}
                required
              />
              <Input
                label="Apellido"
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
                required
              />
            </>
          )}
          <Input
            label="Correo electrónico"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="mt-4">
            {isLogin ? 'Iniciar sesión' : 'Registrar'}
          </Button>
        </form>
        <Button
          variant="link"
          className="mt-4"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? '¿No tienes cuenta? Regístrate'
            : '¿Ya tienes cuenta? Inicia sesión'}
        </Button>
      </div>
    </section>
  );
}

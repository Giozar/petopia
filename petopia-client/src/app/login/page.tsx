'use client';

import React from 'react';
import Forms from './components/Forms';
import { Navbar3 } from '../components/Navbar3';

export default function Page() {
  return (
    <>
      {/* Mostramos primero el navbar */}
      <Navbar3 />
      {/* Luego el formulario de login / registro */}
      <Forms />
    </>
  );
}

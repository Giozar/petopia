import React from "react";
import { Header44 } from "./components/Header44";
import { Layout240 } from "./components/Layout240";
import { Layout4 } from "./components/Layout4";
import { Layout1 } from "./components/Layout1";
import { Layout4_1 } from "./components/Layout4_1";
import { Layout90 } from "./components/Layout90";
import { Testimonial15 } from "./components/Testimonial15";
import { Cta27 } from "./components/Cta27";
import { Faq2 } from "./components/Faq2";
import { Contact13 } from "./components/Contact13";
import { Navbar3 } from "../components/Navbar3";
import { Footer1 } from "../components/Footer1";


export default function Page() {
  return (
    <main style={{ width: '100%', height: '100vh' }}>
      <Navbar3 />
      <Header44 />
      <Layout240 />
      <Layout4 />
      <Layout1 />
      <Layout4_1 />
      <Layout90 />
      <Testimonial15 />
      <Cta27 />
      <Faq2 />
      <Contact13 />
      <Footer1 />
    </main>
  );
}

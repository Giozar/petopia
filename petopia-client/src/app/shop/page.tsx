"use client";

import { HeaderShop } from "./components/HeaderShop";
import { Categories } from "./components/FeatureProducts";
import { ContactShop } from "./components/ContactShop";
import { CtaBuyShop } from "./components/CtaBuyShop";
import { CtaSuscribeShop } from "./components/CtaSuscribeShop";

export default function page() {
  return (
    <>

        <HeaderShop />
        <Categories />
        <ContactShop />
        <CtaBuyShop/>
        <CtaSuscribeShop/>
    </>
  );
}

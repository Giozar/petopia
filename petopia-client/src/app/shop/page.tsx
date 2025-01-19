"use client";

import { HeaderShop } from "./components/HeaderShop";
import { FeatureProducts } from "./components/FeatureProducts";
import { ContactShop } from "./components/ContactShop";
import { CtaBuyShop } from "./components/CtaBuyShop";
import { CtaSuscribeShop } from "./components/CtaSuscribeShop";
import { Products } from "./components/Products";
import { FaqShop } from "./components/FaqShop";

export default function page() {
  return (
    <>
        <HeaderShop />
        <FeatureProducts />
        <Products/>
        <CtaSuscribeShop/>
        <FaqShop/>
        <ContactShop />
        <CtaBuyShop/>
    </>
  );
}

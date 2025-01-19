"use client";

import { useAuth } from "../login/contexts/AuthContext";
import { HeaderShop } from "./components/HeaderShop";
import { Categories } from "./components/FeatureProducts";

export default function page() {
    const { user } = useAuth();
  return (
    <>

        <HeaderShop />
        <Categories />

    </>
  );
}

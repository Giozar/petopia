import { Navbar3 } from "@/app/components/Navbar3";
import { Header44 } from "./components/Header44";
import { Layout89 } from "./components/Layout89";
import { Footer1 } from "@/app/components/Footer1";
import { Layout245 } from "./components/Layout245";
import { Product3 } from "./components/Product3";
import { Cta3 } from "./components/Cta3";
import { Faq2 } from "./components/Faq2";
import { Contact13 } from "./components/Contact13";
import { Cta4 } from "./components/Cta4";

export default function Page() {
  return (
    <main style={{ width: '100%', height: '100vh' }}>
       <Navbar3 />
      <Header44 />
      <Layout245 />
      <Layout89 />
      <Product3 />
      <Cta3 />
      <Faq2 />
      <Contact13 />
      <Cta4 />
      <Footer1 />
    </main>
  );
}

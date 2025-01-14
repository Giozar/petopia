import { Header } from './components/Header5';
import { Blog38 } from './components/Blog38';
import { Cta1 } from './components/Cta1';
import { Footer1 } from './components/Footer1';
import { Layout249 } from './components/Layout249';
import { Layout3 } from './components/Layout3';
import { Layout4 } from './components/Layout4';
import { Navbar3 } from './components/Navbar3';

export default function Page() {
  return (
    <main style={{ width: '100%', height: '100vh' }}>
      <Navbar3 />
      <Header />
      <Layout249 />
      <Layout4 />
      <Layout3 />
      <Cta1 />
      <Blog38 />
      <Footer1 />
    </main>
  );
}

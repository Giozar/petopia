"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@relume_io/relume-ui";
import { ChevronDown, Menu } from "lucide-react";

// Ejemplo de items de navegación
const navItems = [
  { label: "Página Principal", href: "/" },
  { label: "Compra Ahora", href: "/shop" },
  {
    label: "Nuestros Servicios",
    href: "#",
    children: [
      { label: "Servicios Veterinarios", href: "/veterinary-services" },
      { label: "Cuidado de Mascotas", href: "/pet-care" },
      { label: "Sobre Nosotros", href: "/about-us" },
      { label: "Contáctanos", href: "/contact" },
    ],
  },
];

export function Navbar3() {
  const pathname = usePathname();
  
  // Solo aplicamos "scroll effect" si estamos en la página de inicio ("/")
  const isHome = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  // Efecto para cambiar el estado 'scrolled' SOLO en la Home
  useEffect(() => {
    if (!isHome) {
      // Si no estamos en la Home, forzamos un estilo "scroll" (p.e. fondo blanco) y salimos
      setScrolled(true);
      return;
    }

    // Si estamos en la Home, escuchamos el scroll
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Clases condicionales para el navbar
  // - Si "scrolled" es true, fondo blanco + texto oscuro.
  // - Sino (Home y en top), fondo transparente + texto blanco.
  const navbarClasses = scrolled
    ? "bg-white text-black shadow-md"  // estilo normal
    : "bg-transparent text-white";     // estilo transparente

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b border-border transition-colors duration-300 ${navbarClasses}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Nav items (desktop) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <NavItems scrolled={scrolled} desktop />
        </div>

        {/* Right side: "Unirse" button + mobile menu toggle */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button size="sm" variant={scrolled ? "secondary" : "primary"}>
              Unirse
            </Button>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu}>
        <NavItems scrolled={scrolled} mobile />
      </MobileMenu>
    </nav>
  );
}

function NavItems({
  scrolled,
  desktop = false,
  mobile = false,
}: {
  scrolled: boolean;
  desktop?: boolean;
  mobile?: boolean;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return navItems.map((item) => (
    <div key={item.label} className={mobile ? "py-2" : ""}>
      {item.children ? (
        <div>
          <button
            onClick={() => toggleDropdown(item.label)}
            aria-expanded={openDropdown === item.label}
            className={`flex w-full items-center justify-between ${
              scrolled
                ? "text-black hover:text-gray-800"
                : "text-white hover:text-gray-200"
            }`}
          >
            {item.label}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${
                openDropdown === item.label ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openDropdown === item.label && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className={`overflow-hidden ${
                  desktop ? "absolute mt-2 bg-white shadow-lg" : "mt-2"
                }`}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={item.href}
          className={`${
            scrolled
              ? "text-black hover:text-gray-800"
              : "text-white hover:text-gray-200"
          } ${mobile ? "block" : ""}`}
        >
          {item.label}
        </Link>
      )}
    </div>
  ));
}

function MobileMenu({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white p-4 shadow-lg"
          >
            <div className="mb-4 flex justify-between">
              <Link href="/" className="flex-shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <button onClick={onClose} aria-label="Close menu">
                ✕
              </button>
            </div>
            {children}
            <div className="mt-4">
              <Link href="/login">
                <Button className="w-full">Unirse</Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

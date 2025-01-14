'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@relume_io/relume-ui";
import { ChevronDown, Menu } from 'lucide-react'

const navItems = [
  { label: 'Home Page', href: '/' },
  { label: 'Shop Now', href: '/shop' },
  {
    label: 'Our Services',
    href: '#',
    children: [
      { label: 'Veterinary Services', href: '/veterinary-services' },
      { label: 'Pet Care', href: '/pet-care' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export function Navbar3() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <NavItems desktop />
        </div>

        <div className="flex items-center space-x-4">
          <Button size="sm">Join</Button>
          <button
            onClick={toggleMobileMenu}
            className="text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu}>
        <NavItems mobile />
      </MobileMenu>
    </nav>
  )

  function NavItems({ desktop = false, mobile = false }) {
    return navItems.map((item) => (
      <div key={item.label} className={mobile ? 'py-2' : ''}>
        {item.children ? (
          <div>
            <button
              onClick={() => toggleDropdown(item.label)}
              className="flex w-full items-center justify-between text-foreground"
              aria-expanded={openDropdown === item.label}
            >
              {item.label}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${
                  openDropdown === item.label ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openDropdown === item.label && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`overflow-hidden ${
                    desktop ? 'absolute mt-2 bg-background shadow-lg' : 'mt-2'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm hover:bg-accent"
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
            className={`text-foreground hover:text-foreground/80 ${
              mobile ? 'block' : ''
            }`}
          >
            {item.label}
          </Link>
        )}
      </div>
    ))
  }
}

function MobileMenu({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
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
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-background p-4 shadow-lg"
          >
            <div className="mb-4 flex justify-between">
              <Link href="/" className="flex-shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={onClose}
                className="text-foreground"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            {children}
            <div className="mt-4">
              <Button className="w-full">Join</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


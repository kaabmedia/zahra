"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-white md:hidden">
          <nav className="container flex flex-col space-y-4 p-6">
            <Link
              href="#diensten"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              Diensten
            </Link>
            <Link
              href="#reviews"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-primary transition-colors py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 w-full mt-4">
              <a href="tel:0157851840">
                <Phone className="mr-2 h-4 w-4" />
                Bel: 015 - 785 148 40
              </a>
            </Button>
          </nav>
        </div>
      )}
    </>
  )
}

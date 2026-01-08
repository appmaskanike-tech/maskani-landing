import React from "react"
import Register from "./register"

function Header() {
  return (
    <header
      className="flex items-center w-full justify-between p-4 md:p-8 z-[1000px] flex-wrap gap-4"
      role="banner"
    >
      <nav className="flex space-x-4 items-center z-[1000px]" aria-label="Logo">
        <img
          src="/logo.svg"
          className="h-8 md:h-8"
          alt="Maskani - Property Management Software"
        />
      </nav>

      <nav
        className="hidden md:flex items-center space-x-4 md:space-x-8 text-sm md:text-base"
        aria-label="Main Navigation"
      >
        <a
          href="#pricing"
          className="hover:text-blue-600 transition-colors"
          aria-label="Features and Pricing"
        >
          FEATURES & PRICING
        </a>
        <a
          href="#contact"
          className="hover:text-blue-600 transition-colors"
          aria-label="Contact Us"
        >
          CONTACT
        </a>
      </nav>

      <div className="flex items-center">
        <Register />
      </div>
    </header>
  )
}

export default Header

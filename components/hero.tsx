import React from "react"
import { TypeAnimation } from "react-type-animation"
import Register from "./register"

function Hero() {
  return (
    <section className="w-full mx-auto px-4" aria-labelledby="hero-heading">
      <div className="w-full md:w-[70%] mx-auto py-8 md:py-12 space-y-8 md:space-y-12">
        <h1
          id="hero-heading"
          className="w-4/5 mx-auto md:w-full text-center text-3xl! md:text-5xl! leading-tight md:leading-16 font-bold!"
        >
          <TypeAnimation
            sequence={[
              "Smarter property management built for simplicity.",
              1000,
              "Smarter property management built for control.",
              1000,
              "Smarter property management built for growth.",
              1000,
              "Smarter property management built for transparency.",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="text-center w-full text-base! md:text-xl! font-light! text-gray-500 px-4">
          Property management shouldn't feel like a guessing game or an
          accounting exam. Maskani helps you to accurately and transparently
          manage your properties.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Register />
          <a
            href="#features"
            className="underline tracking-widest text-sm md:text-base hover:text-blue-600 transition-colors mt-4 lg:mt-0 md:ml-4"
            aria-label="Learn how Maskani works"
          >
            HOW IT WORKS
          </a>
        </div>
      </div>
      <img
        src="/hero-image.png"
        className="w-full h-auto"
        alt="Property Management Dashboard - Maskani Software"
        loading="eager"
      />
    </section>
  )
}

export default Hero

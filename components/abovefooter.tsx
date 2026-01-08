import React from "react"
import Register from "./register"

function AboveFooter() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#182330] justify-between! items-center gap-8">
      <div className="p-6 md:p-12 space-y-6 md:space-y-8 w-full lg:w-1/2">
        <h1 className="text-white! font-medium! text-2xl! md:text-3xl! text-center lg:text-left">
          Start transforming your property management
        </h1>
        <p className="text-gray-400! font-light! text-[0.8rem]! md:text-[0.9rem]! text-center lg:text-left">
          Join hundreds of property managers who've got their books in check
          with clarity and simplicity.
        </p>

        <div className="flex justify-center lg:justify-start">
          <Register />
        </div>

        <div className="flex justify-center lg:justify-start mt-6 md:mt-8 space-x-6 md:space-x-12">
          <div className="text-white text-center lg:text-left">
            <strong className="text-3xl! md:text-4xl!">700+</strong>
            <p className="font-extralight! text-gray-400! text-sm md:text-base">
              Listed properties
            </p>
          </div>

          <div className="text-white text-center lg:text-left">
            <strong className="text-3xl! md:text-4xl!">500+</strong>
            <p className="font-extralight! text-gray-400! text-sm md:text-base">
              Satisfied property managers
            </p>
          </div>
        </div>
      </div>

      <img
        src="/above-footer.svg"
        className="w-full max-w-md lg:h-auto lg:max-w-none"
        alt="above-footer"
      />
    </div>
  )
}

export default AboveFooter

import React from "react"
import Register from "./register"

function AppDisplay() {
  return (
    <div className="p-4 md:p-8 bg-[#070E16] space-y-6 md:space-y-8 min-h-[500px] md:h-[700px]">
      <h1 className="text-white text-2xl! md:text-4xl! font-medium! text-center w-full px-4">
        Powerful dashboard features
      </h1>

      <div className="flex justify-center">
        <Register />
      </div>

      <img
        src="/app-display.svg"
        alt="app-display"
        className="w-full max-w-3xl mx-auto h-auto"
      />
    </div>
  )
}

export default AppDisplay

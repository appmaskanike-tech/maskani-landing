import { Button } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react"
import React from "react"

function Register() {
  return (
    <Button p={0} m={0} radius={48} size="sm">
      <div className="flex items-center">
        <span className="tracking-wider font-light px-3 md:px-4 text-sm md:text-base">
          REGISTER
        </span>
        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white text-[#6FA5D6] mr-1 md:mr-0">
          <IconArrowRight className="mt-1.5 ml-1.5 md:mt-2 md:ml-2 -rotate-45 w-3 h-3 md:w-4 md:h-4" />
        </div>
      </div>
    </Button>
  )
}

export default Register

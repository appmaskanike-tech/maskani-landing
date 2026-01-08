import React from "react"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconMail,
  IconPhone,
} from "@tabler/icons-react"
import { ActionIcon, Divider } from "@mantine/core"

function Footer() {
  return (
    <footer id="contact" className="bg-[#070E16] p-4 md:p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 lg:gap-x-12 gap-y-8">
        {/* Socials */}
        <section
          id="contact"
          className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4"
        >
          <div className="flex items-center space-x-4">
            <img src="/logo.svg" alt="logo" className="h-8 md:h-12" />
          </div>
          <span className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light block">
            Manage your property portfolio with smart , automated tools
          </span>

          <div className="hidden md:block">
            <br />
          </div>

          <a
            href="mailto:app.maskani.ke@gmail.com"
            className="flex space-x-4 items-center hover:text-blue-400 transition-colors"
          >
            <IconMail stroke={1} className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light">
              app.maskani.ke@gmail.com
            </span>
          </a>

          <a
            href="tel:+254107641197"
            className="flex space-x-4 items-center hover:text-blue-400 transition-colors"
          >
            <IconPhone stroke={1} className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light">
              +254 107 641 197
            </span>
          </a>

          <div className="hidden md:block">
            <br />
          </div>

          <div className="flex space-x-3 md:space-x-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <ActionIcon variant="light" size={40}>
                <IconBrandInstagram size={24} stroke={1} />
              </ActionIcon>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <ActionIcon variant="light" size={40}>
                <IconBrandTiktok size={24} stroke={1} />
              </ActionIcon>
            </a>

            <a href="#" className="hover:scale-110 transition-transform">
              <ActionIcon variant="light" size={40}>
                <IconBrandFacebook size={24} stroke={1} />
              </ActionIcon>
            </a>
          </div>
        </section>

        {/* Resources */}
        <div className="col-span-1 space-y-4">
          <div className="hidden md:block">
            <br />
          </div>
          <strong className="block text-sm md:text-base">Resources</strong>

          <a
            href="#pricing"
            className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light block hover:text-blue-400 transition-colors"
          >
            Features & Pricing
          </a>
          <a
            href="#"
            className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light block hover:text-blue-400 transition-colors"
          >
            How it works
          </a>
          <a
            href="#"
            className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light block hover:text-blue-400 transition-colors"
          >
            Register
          </a>
        </div>

        {/* Legal */}
        <div className="col-span-1 space-y-4">
          <div className="hidden md:block">
            <br />
          </div>
          <strong className="block text-sm md:text-base">Legal</strong>

          <a
            href="#"
            className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light block hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light block hover:text-blue-400 transition-colors"
          >
            Terms of Use
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <br />
      </div>
      <br />

      <Divider color="gray" />

      <p className="text-[0.8rem]! md:text-[0.9rem]! text-gray-500 font-light mt-4 md:mt-8 text-center">
        © {new Date().getFullYear()} Maskani. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

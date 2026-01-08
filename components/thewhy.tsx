import React, { useRef } from "react"
import { Carousel } from "@mantine/carousel"
import { Card } from "@mantine/core"
import Autoplay from "embla-carousel-autoplay"

function TheWhy() {
  const autoplay = useRef(Autoplay({ delay: 5000 }))

  return (
    <div className="px-4 md:px-8">
      {/* Testimonials */}
      <div className="flex flex-col lg:flex-row p-4 md:p-8 justify-between items-center gap-8">
        <h1 className="font-medium! text-3xl! md:text-4xl! text-center lg:text-left mt-4">
          Everything you need to scale
        </h1>

        <Carousel
          w={400}
          withIndicators={false}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
        >
          <Carousel.Slide>
            <Card
              shadow="xl"
              className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white"
              m={24}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  JM
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-blue-600 font-semibold">
                      JAMES MWANIKI
                    </span>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Maskani completely transformed how we manage our 50+
                    properties. What used to take days now takes hours!"
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                    <span>Property Manager</span>
                    <span>•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              shadow="xl"
              className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white"
              m={24}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  PO
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-green-600 font-semibold">
                      PETER OBIERO
                    </span>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "The automated reporting features save me at least 10 hours
                    per week. I can focus on growing my business instead of
                    paperwork."
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                    <span>Real Estate Investor</span>
                    <span>•</span>
                    <span>Mombasa, Kenya</span>
                  </div>
                </div>
              </div>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              shadow="xl"
              className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white"
              m={24}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  HJ
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-mono text-purple-600 font-semibold">
                      HASSAN JUMA
                    </span>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "As a landlord with multiple properties, Maskani helps me
                    track everything in one place. The tenant portal is a
                    game-changer!"
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                    <span>Landlord</span>
                    <span>•</span>
                    <span>Kisumu, Kenya</span>
                  </div>
                </div>
              </div>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>

      {/* Why choose us */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-4 mt-8 md:mt-12">
        {/* Smart dashboard */}
        <div className="bg-gray-100 aspect-square p-4 md:p-8 relative">
          <h1 className="font-medium! text-lg! md:text-xl!">Smart dashboard</h1>
          <span className="text-gray-500 text-[0.8rem]! md:text-[0.9rem]!">
            Everything updates automatically in real time.
          </span>

          <img
            src="/smart-dashboard.png"
            alt="smart-dashboard"
            className="w-[60%] md:w-3/5 absolute bottom-0 left-1/2 -translate-x-1/2"
          />
        </div>

        {/* Accounting automation */}
        <div className="bg-gray-100 aspect-square p-4 md:p-8 relative">
          <h1 className="font-medium! text-lg! md:text-xl!">
            Accounting automation
          </h1>
          <span className="text-gray-500 text-[0.8rem]! md:text-[0.9rem]!">
            Get paid , we&apos;ll handle the difficult part for you
          </span>

          <img
            src="/accounting-automation.png"
            alt="accounting-automation"
            className="w-2/3 md:w-3/5 absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
          />
        </div>

        {/* Smart insights */}
        <div className="bg-gray-100 aspect-square p-4 md:p-8 relative md:col-span-2 lg:col-span-1">
          <h1 className="font-medium! text-lg! md:text-xl!">Smart insights</h1>
          <span className="text-gray-500 text-[0.8rem]! md:text-[0.9rem]!">
            Make decisions faster , knowing your property
          </span>

          <img
            src="/smart-insights.png"
            alt="smart-insights"
            className="w-2/3 md:w-3/5 absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
    </div>
  )
}

export default TheWhy

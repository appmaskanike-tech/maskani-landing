import React from "react"
import { Card, Button, Badge } from "@mantine/core"
import {
  IconCheck,
  IconBolt,
  IconShield,
  IconChartBar,
} from "@tabler/icons-react"

function Pricing() {
  return (
    <div id="pricing" className="py-16 bg-linear-to-b from-white to-gray-50">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl! font-medium! mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-center w-full text-base! md:text-xl! font-light! text-gray-500">
            Everything you need to manage your properties efficiently, all in
            one place.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <Card
            shadow="xl"
            className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
            p={0}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-32 -mt-32 opacity-50"></div>

            <div className="relative p-12">
              {/* Price Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <Badge
                    variant="filled"
                    color="blue"
                    size="lg"
                    className="text-xs font-semibold tracking-wider"
                  >
                    MOST POPULAR
                  </Badge>
                </div>

                <div className="flex items-baseline justify-center space-x-2 mb-2">
                  <span className="text-3xl! md:text-6xl! font-bold!">
                    Ksh 70
                  </span>
                  <span className="text-gray-500 text-lg">/month per unit</span>
                </div>

                <p className="text-gray-600">
                  Perfect for property managers and landlords
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Property & unit listing
                    </h3>
                    <p className="text-sm text-gray-600">
                      List and manage all your properties in one place
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Tenancy management
                    </h3>
                    <p className="text-sm text-gray-600">
                      Creation, termination, and complete history tracking
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Automatic rent tracking
                    </h3>
                    <p className="text-sm text-gray-600">
                      Smart automation plus manual override options
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Payment notifications
                    </h3>
                    <p className="text-sm text-gray-600">
                      Instant alerts for all payment activities
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Monthly SMS reminders
                    </h3>
                    <p className="text-sm text-gray-600">
                      Automated rent reminders sent to tenants
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Expense recording
                    </h3>
                    <p className="text-sm text-gray-600">
                      Track and categorize all property expenses
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Detailed analytics
                    </h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive reports and performance summaries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Vacancy advertising
                    </h3>
                    <p className="text-sm text-gray-600">
                      Promote your vacant units automatically
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Dedicated support
                    </h3>
                    <p className="text-sm text-gray-600">
                      Personal assistance whenever you need it
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-3 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  No setup fees • Cancel anytime • Full feature access
                </p>
              </div>

              {/* Trust indicators */}
            </div>
          </Card>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Questions?{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing

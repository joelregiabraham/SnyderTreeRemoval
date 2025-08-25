"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TreePine, Scissors, Zap, ArrowRight } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    description: "Safe removal of trees of all sizes",
    features: ["Hazardous trees", "Large specimens", "Complete cleanup"],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    icon: Scissors,
    title: "Tree Pruning",
    description: "Professional pruning and trimming",
    features: ["Crown thinning", "Deadwood removal", "Health improvement"],
    color: "from-forest-500 to-forest-600",
    bgColor: "bg-forest-50 dark:bg-forest-900/20",
  },
  {
    icon: Zap,
    title: "Stump Removal",
    description: "Complete stump grinding services",
    features: ["Stump grinding", "Root removal", "Site restoration"],
    color: "from-earth-500 to-earth-600",
    bgColor: "bg-earth-50 dark:bg-earth-900/20",
  },
]

export default function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Expert Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional tree care solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group ${service.bgColor}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-forest-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div
                  className={`transition-all duration-300 ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                  <Button variant="outline" size="sm" className="group bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>

              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-forest-600 hover:bg-forest-700 px-8 py-4" asChild>
            <a href="#services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

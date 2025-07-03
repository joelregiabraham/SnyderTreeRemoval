import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TreePine, Scissors, Zap, Phone } from "lucide-react"

const services = [
  {
    icon: TreePine,
    title: "Tree Removal",
    description: "Safe and efficient removal of trees of all sizes, including hazardous and hard-to-reach trees.",
    features: ["Hazardous tree removal", "Large tree specialists", "Stump grinding included", "Complete cleanup"],
  },
  {
    icon: Scissors,
    title: "Tree Pruning & Trimming",
    description: "Professional pruning to maintain tree health, improve appearance, and ensure safety.",
    features: ["Crown thinning", "Deadwood removal", "Structural pruning", "Aesthetic shaping"],
  },
  {
    icon: Zap,
    title: "Stump Removal",
    description: "Complete stump grinding and removal services to reclaim your landscape space.",
    features: ["Stump grinding", "Root removal", "Site cleanup", "Soil leveling"],
  },
  {
    icon: Phone,
    title: "Emergency Services",
    description: "24/7 emergency tree services for storm damage, fallen trees, and urgent situations.",
    features: ["24/7 availability", "Storm damage cleanup", "Insurance assistance", "Rapid response"],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Tree Care Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive tree care solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-forest-100 dark:bg-forest-800 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-forest-600 dark:text-forest-400" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-forest-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-forest-600 hover:bg-forest-700" asChild>
            <a href="#contact">Get Your Free Estimate</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

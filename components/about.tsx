import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Shield } from "lucide-react"
import Image from "next/image"

const certifications = [
  "ISA Certified Arborist",
  "Tree Care Industry Association",
  "Licensed & Insured",
  "OSHA Safety Certified",
]

const stats = [
  { icon: Clock, label: "15+ Years", description: "Experience" },
  { icon: Users, label: "1000+", description: "Happy Customers" },
  { icon: Award, label: "100%", description: "Satisfaction Rate" },
  { icon: Shield, label: "Fully", description: "Insured" },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Snyder Tree Removal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A family-owned business serving the community with professional tree care services for over 15 years
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <Image
              src="/image1.jpg"
              alt="Snyder family team"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              About Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Snyder Tree Removal is a family business owned and operated by brothers David and Luke Snyder. Growing up on a dairy farm, we developed a strong work ethic that we now bring to every tree care project.
              <br /><br />
              Trained and certified by Arboriculture Canada, we have the expertise and equipment to handle jobs of any size—from complete tree removal to trimming, storm cleanup, chipping, and stump grinding.
              <br /><br />
              Our business is built on traditional values of hard work, reliability, and respect. At Snyder Tree Removal, we are committed to meeting your needs and providing peace of mind throughout the process.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our commitment to safety, quality workmanship, and customer satisfaction has made us the trusted choice
              for residential and commercial tree care throughout the region.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Certifications & Qualifications
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-forest-100 text-forest-800 dark:bg-forest-800 dark:text-forest-100 px-4 py-2"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

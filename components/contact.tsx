import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "519-570-5900",
    action: "tel:+1519-570-5900",
  },
  {
    icon: Mail,
    title: "Email",
    details: "david@snydertree.ca",
    action: "mailto:david@snydertree.ca",
  },
  {
    icon: MapPin,
    title: "Snyder Tree Removal Ltd",
    details: "1476 Line 41, New Hamburg, ON N3A 4A3",
    action: null,
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 8AM-4PM",
    action: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us Today</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to get started? Contact us for a free estimate on your tree care needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-3 p-3 bg-forest-100 dark:bg-forest-800 rounded-full w-fit">
                      <info.icon className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    {info.action ? (
                      <Button variant="link" className="p-0 h-auto text-gray-600 dark:text-gray-300" asChild>
                        <a href={info.action}>{info.details}</a>
                      </Button>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{info.details}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Get Your Free Estimate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Call us today or send us an email to schedule your free, no-obligation estimate. We'll assess your
                  tree care needs and provide you with a detailed quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-forest-600 hover:bg-forest-700" asChild>
                    <a href="tel:+15551234567">Call Now</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="mailto:david@snydertree.ca">Send Email</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-center">Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.078801796475!2d-80.75421352415245!3d43.41718026766447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf8acd089ec4f%3A0x9666b99519af3081!2sSnyder%20Tree%20Removal%20Ltd!5e0!3m2!1sen!2sca!4v1753403575853!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Snyder Tree Removal Location"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Service Area:</strong> Snyder Tree Removal Ltd
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

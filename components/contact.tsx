import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@snydertreeremoval.com",
    action: "mailto:info@snydertreeremoval.com",
  },
  {
    icon: MapPin,
    title: "Service Area",
    details: "Springfield & Surrounding Areas",
    action: null,
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 7AM-6PM\nSat: 8AM-4PM\nEmergency: 24/7",
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
                    <a href="mailto:info@snydertreeremoval.com">Send Email</a>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMDAuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
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
                    <strong>Service Area:</strong> Springfield and surrounding communities within 50 miles
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

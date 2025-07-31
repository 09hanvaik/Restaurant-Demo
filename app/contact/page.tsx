import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a question, feedback, or just want to say hello? We&apos;d love to hear from you!
        </p>

        {/* Contact Form */}
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Regarding my order..." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here..." rows={5} required />
            </div>
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="space-y-8">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Our Details</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">info@fastbites.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">123 Fast Food Lane, Flavor Town, CA 90210</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-medium">Opening Hours</h3>
                <p className="text-muted-foreground">Mon-Sun: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-card p-4 rounded-lg shadow-sm aspect-video overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop"
            alt="Restaurant Location Map"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

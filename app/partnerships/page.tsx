"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Check, ArrowRight, Building, Handshake, Gift, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PartnershipsPage() {
  return (
    <>
      <HeroSection />
      <PartnershipTypesSection />
      {/* <CurrentPartnersSection /> */}
      {/* <BenefitsSection /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Corporate <span className="text-primary-600 dark:text-primary-400">Partnerships</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Partner with Noor's Path to make a meaningful impact on children's lives while aligning with your company's
            social responsibility goals.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="#contact-section">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function PartnershipTypesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const partnershipTypes = [
    {
      title: "Corporate Sponsorships",
      description:
        "Sponsor specific programs, events, or initiatives that align with your company's values and social responsibility goals.",
      icon: <Building className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: "Strategic Partnerships",
      description:
        "Collaborate on long-term initiatives that leverage both organizations' strengths to create sustainable impact.",
      icon: <Handshake className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: "In-Kind Donations",
      description:
        "Provide goods or services that support our operations and programs, from technology to professional expertise.",
      icon: <Gift className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: "Employee Engagement",
      description:
        "Engage your employees through volunteer opportunities, matching gift programs, and workplace giving campaigns.",
      icon: <Users className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Partnership Opportunities
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We offer various ways for companies to partner with us and make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 w-16 h-16 flex items-center justify-center">
                    {type.icon}
                  </div>
                  <CardTitle>{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{type.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button asChild variant="ghost" className="group">
                    <Link href="#contact-section">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CurrentPartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const partners = [
    { name: "Global Tech Solutions", logo: "/partner-1.svg" },
    { name: "Horizon Healthcare", logo: "/partner-2.svg" },
    { name: "EduFirst Foundation", logo: "/partner-3.svg" },
    { name: "Green Energy Co.", logo: "/partner-4.svg" },
    { name: "Community Bank", logo: "/partner-5.svg" },
    { name: "Bright Future Insurance", logo: "/partner-6.svg" },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Corporate Partners</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We're proud to work with these organizations who share our commitment to creating positive change.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-32 w-full flex items-center justify-center">
                <div className="relative h-16 w-full">
                  <Image
                    src={partner.logo || "/placeholder.svg?height=64&width=120"}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const benefits = [
    "Enhance your company's social responsibility profile",
    "Engage employees in meaningful volunteer opportunities",
    "Receive recognition in our marketing materials and annual report",
    "Participate in exclusive events and networking opportunities",
    "Access impact reports demonstrating the difference your support makes",
    "Align your brand with a respected nonprofit organization",
    "Create positive social impact in communities that need it most",
    "Potential tax benefits for your contributions",
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Benefits of Partnership
            </h2>
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                When you partner with Noor's Path, you're not just supporting a cause – you're investing in a
                relationship that benefits both organizations and the communities we serve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-2xl overflow-hidden"
          >
            <Image src="/partnership-benefits.svg" alt="Partnership Benefits" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const testimonials = [
    {
      quote:
        "Partnering with Noor's Path has been incredibly rewarding for our company. Not only have we been able to make a meaningful impact in children's lives, but our employees have also found great purpose in volunteering with the organization.",
      name: "Sarah Johnson",
      title: "CSR Director, Global Tech Solutions",
      image: "/testimonial-1.svg",
    },
    {
      quote:
        "The team at Noor's Path is professional, passionate, and truly committed to their mission. Our partnership has helped us fulfill our social responsibility goals while making a real difference in the communities where we operate.",
      name: "Michael Chen",
      title: "CEO, Horizon Healthcare",
      image: "/testimonial-2.svg",
    },
    {
      quote:
        "We've seen firsthand the impact of Noor's Path's programs, and we're proud to support their work. The partnership has been beneficial for both organizations and, most importantly, for the children who receive education and healthcare.",
      name: "Aisha Patel",
      title: "Foundation Director, Community Bank",
      image: "/testimonial-3.svg",
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Partner Testimonials</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from some of our corporate partners about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-lg max-w-full">
                <CardHeader>
                  <div className="text-4xl text-primary-600 dark:text-primary-400">"</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 break-words">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=48&width=48"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-primary-600 dark:text-primary-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="contact-section" ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in Partnering With Us?
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Fill out the form below, and our partnerships team will get in touch to discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Your company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Contact Name</Label>
                  <Input id="contact-name" placeholder="Your name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="partnership-type">Partnership Interest</Label>
                <select
                  id="partnership-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select an option</option>
                  <option value="sponsorship">Corporate Sponsorship</option>
                  <option value="strategic">Strategic Partnership</option>
                  <option value="in-kind">In-Kind Donation</option>
                  <option value="employee">Employee Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your company and how you'd like to partner with us"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

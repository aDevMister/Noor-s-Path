"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function GetInvolvedPage() {
  return (
    <>
      <HeroSection />
      <VolunteerSection />
      <EventsSection />
      <PartnershipSection />
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
            Get <span className="text-primary-600 dark:text-primary-400">Involved</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join our community of passionate individuals and organizations making a difference in children's lives.
          </p>
        </div>
      </div>
    </section>
  )
}

function VolunteerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const opportunities = [
    {
      title: "Education Mentor",
      description: "Work directly with children to support their educational journey through tutoring and mentorship.",
      commitment: "4-6 hours per week",
      image: "/IMG_4013.jpg",
    },
    {
      title: "Healthcare Assistant",
      description: "Support our healthcare initiatives by assisting with medical camps, health education, and more.",
      commitment: "6-8 hours per week",
      image: "/IMG_0536.jpg",
    },
    {
      title: "Event Coordinator",
      description: "Help plan and execute fundraising events, awareness campaigns, and community activities.",
      commitment: "Varies by event",
      image: "/IMG_6799.jpg",
    },
    {
      title: "Administrative Support",
      description: "Assist with office tasks, data management, communications, and other administrative needs.",
      commitment: "4-10 hours per week",
      image: "/IMG_6780.jpg",

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Volunteer Opportunities</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how you can contribute your time and skills to make a meaningful impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => (
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
                <div className="relative h-48 w-full">
                  <Image
                    src={opportunity.image || "/placeholder.svg"}
                    alt={opportunity.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{opportunity.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-primary-600 dark:text-primary-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {opportunity.commitment}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{opportunity.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Don't see a role that fits your skills? We're always looking for passionate individuals to join our team.
          </p>
          <Button size="lg" className="rounded-full">
            Contact Us About Volunteering
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const events = [
    {
      title: "Annual Charity Gala",
      date: "September 15, 2023",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Ballroom, City Center",
      description: "Join us for an evening of celebration and fundraising to support our educational initiatives.",
      image: "/IMG_0536.jpg",
    },
  
    {
      title: "Volunteer Training Workshop",
      date: "August 20, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Noor's Path Headquarters",
      description: "Learn about our programs and how you can effectively contribute as a volunteer.",
      image: "/IMG_3997.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Join us at these events to learn more about our work and how you can get involved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
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
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                      {event.location}
                    </div>
                    <p className="pt-2 text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Register</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full">
            View All Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function PartnershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
              Corporate Partnerships
            </h2>
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Partner with Noor's Path to make a meaningful impact on children's lives while aligning with your
                company's social responsibility goals.
              </p>
              <p>We offer various partnership opportunities, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Corporate sponsorships for specific programs or events</li>
                <li>Employee volunteer programs</li>
                <li>Matching gift programs</li>
                <li>In-kind donations of goods or services</li>
                <li>Cause-related marketing campaigns</li>
              </ul>
              <p>
                Our team will work with you to develop a customized partnership that meets your company's objectives
                while making a significant difference in the lives of children in need.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" className="rounded-full">
                Become a Partner
              </Button>
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
            <Image src="/IMG_4013.jpg" alt="Corporate Partnership" fill className="object-cover" />
          </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about getting involved? We're here to help. Fill out the form below and we'll get back to you
            soon.
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
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">I'm interested in</Label>
                <select
                  id="interest"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select an option</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="events">Attending Events</option>
                  <option value="partnership">Corporate Partnership</option>
                  <option value="donation">Making a Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

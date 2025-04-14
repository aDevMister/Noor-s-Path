"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamPage() {
  return (
    <>
      <HeroSection />
      <LeadershipSection />
      <StaffSection />
      <BoardSection />
      <VolunteerSection />
      <JoinSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-primary-600 dark:text-primary-400">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Meet the dedicated individuals who work tirelessly to make our mission a reality.
          </p>
        </div>
      </div>
    </section>
  )
}

function LeadershipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const leadershipTeam = [
    {
      name: "Muzeenat Imam",
      role: "Founder & Executive Director",
      bio: "Noor founded the organization in 2010 with a vision to provide quality education and healthcare to orphans and underprivileged children.",
      image: "/IMG_0588.jpg",
    },
    {
      name: "Medinat Imam",
      role: "Chief Operations Officer",
      bio: "Sarah oversees the day-to-day operations and ensures that our programs are running efficiently and effectively.",
      image: "/IMG_0589.jpg",
    },
    {
      name: "Mohammed Ali",
      role: "Director of Programs",
      bio: "Mohammed develops and implements our educational and healthcare programs, ensuring they meet the needs of the children we serve.",
      image: "/IMG_4049.jpg",
    },
    {
      name: "Amina Hassan",
      role: "Director of Development",
      bio: "Amina leads our fundraising efforts and builds relationships with donors and partners to support our mission.",
      image: "/IMG_6788.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our leadership team brings diverse expertise and a shared passion for creating positive change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadershipTeam.map((member, index) => (
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
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden max-w-full">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image || "/placeholder.svg?height=256&width=384"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary-600 dark:text-primary-400">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
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

function StaffSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const staffMembers = [
    {
      name: "David Chen",
      role: "Education Program Manager",
      image: "/IMG_0593.jpg",
    },
    {
      name: "Fatima Zahra",
      role: "Healthcare Coordinator",
      image: "/IMG_6792.jpg",
    },
    {
      name: "John Doe",
      role: "Community Outreach Specialist",
      image: "/IMG_6788.jpg",
    },
    {
      name: "Aisha Patel",
      role: "Volunteer Coordinator",
      image: "/IMG_0601.jpg",
    },
    {
      name: "Michael Smith",
      role: "Finance Manager",
      image: "/IMG_0581.jpg",
    },
    {
      name: "Leila Abdi",
      role: "Communications Specialist",
      image: "/IMG_6788.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Staff</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our dedicated staff works every day to implement our programs and support the communities we serve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg?height=160&width=160"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BoardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const boardMembers = [
    {
      name: "Dr. Samira Khan",
      role: "Board Chair",
      bio: "Dr. Khan is a renowned pediatrician with over 20 years of experience in children's healthcare.",
      image: "/IMG_0588.jpg",
    },
    {
      name: "Robert Williams",
      role: "Treasurer",
      bio: "Robert brings 15 years of financial expertise from his career in investment banking.",
      image: "/IMG_0605.jpg",
    },
    {
      name: "Elena Rodriguez",
      role: "Secretary",
      bio: "Elena is an education policy expert who has worked with multiple international organizations.",
      image: "/IMG_6794.jpg",
    },
    {
      name: "Hassan Ibrahim",
      role: "Board Member",
      bio: "Hassan is a community leader with deep connections to the regions we serve.",
      image: "/IMG_0589.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Board of Directors</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Our board provides strategic guidance and oversight to ensure we fulfill our mission effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
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
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden max-w-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={member.image || "/placeholder.svg?height=192&width=384"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary-600 dark:text-primary-400">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Volunteers</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We are grateful for the hundreds of volunteers who contribute their time and talents to our mission.
          </p>
        </motion.div>

        <Tabs defaultValue="education" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="admin">Administrative</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="education">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Education Volunteers</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our education volunteers provide tutoring, mentorship, and support to children in our programs. They
                help with homework, teach specialized skills, and serve as positive role models.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tutors</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Provide one-on-one or small group tutoring in various subjects.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mentors</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build relationships with children to provide guidance and support.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Workshop Leaders</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Conduct specialized workshops in arts, technology, and more.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/get-involved">Become an Education Volunteer</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="healthcare">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Healthcare Volunteers</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our healthcare volunteers include medical professionals and support staff who help provide essential
                health services to children and communities in need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Medical Professionals</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Doctors, nurses, and other healthcare providers who offer their services.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Health Educators</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Teach communities about preventive healthcare and hygiene practices.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Support Staff</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Assist with logistics, record-keeping, and other essential tasks.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/get-involved">Become a Healthcare Volunteer</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Event Volunteers</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our event volunteers help plan and execute fundraising events, community gatherings, and awareness
                campaigns that support our mission.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Event Planners</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Help organize and coordinate various events and activities.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Day-of Volunteers</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Assist with setup, registration, activities, and cleanup during events.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Outreach Ambassadors</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Represent our organization at community events and spread awareness.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/get-involved">Become an Event Volunteer</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="admin">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Administrative Volunteers</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our administrative volunteers provide essential behind-the-scenes support that helps our organization
                run smoothly and efficiently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Office Support</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Assist with administrative tasks, data entry, and office organization.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Communications</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Help with social media, newsletter creation, and other communications.
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Conduct research to support grant applications and program development.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/get-involved">Become an Administrative Volunteer</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function JoinSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team, whether as staff members or volunteers.
            Together, we can make a difference in the lives of children in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link href="/careers">View Career Opportunities</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Link href="/get-involved">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

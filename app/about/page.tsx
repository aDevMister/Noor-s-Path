"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Award, Heart, Lightbulb, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <FaqSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-primary-600 dark:text-primary-400">Noor&apos;s Path</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Learn about our journey, mission, and the passionate team behind our work to empower children in need.
          </p>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
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
            className="relative h-[400px] w-full rounded-2xl overflow-hidden"
          >
            <Image src="/about-story.svg" alt="Our Story" fill className="object-cover" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Noor&apos;s Path was founded in 2010 with a simple yet powerful vision: to create a world where every
                child has access to quality education, healthcare, and a supportive community, regardless of their
                circumstances.
              </p>
              <p>
                What began as a small initiative to support a local orphanage has grown into a comprehensive
                organization that has touched the lives of thousands of children across multiple communities.
              </p>
              <p>
                Our founder, Noor Ahmed, was inspired by her own childhood experiences and the transformative power of
                education. She believed that every child deserves the opportunity to reach their full potential, and
                that belief continues to drive our work today.
              </p>
              <p>
                Over the years, we have expanded our programs to include educational support, healthcare initiatives,
                and community development projects, all aimed at creating a brighter future for children in need.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
      title: "Compassion",
      description:
        "We approach our work with empathy and understanding, recognizing the unique needs and potential of each child.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in all our programs and initiatives, ensuring quality support for the children we serve.",
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
      title: "Impact",
      description:
        "We focus on creating sustainable, long-term change that transforms lives and communities for generations to come.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
      title: "Innovation",
      description: "We continuously seek new and effective ways to address challenges and improve our programs.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            These core principles guide our work and shape our approach to creating positive change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const teamMembers = [
    {
      name: "Noor Ahmed",
      role: "Founder & Executive Director",
      image: "/team-1.svg",
    },
    {
      name: "Sarah Johnson",
      role: "Education Program Director",
      image: "/team-2.svg",
    },
    {
      name: "Mohammed Ali",
      role: "Healthcare Initiatives Lead",
      image: "/team-3.svg",
    },
    {
      name: "David Chen",
      role: "Community Outreach Coordinator",
      image: "/team-4.svg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Leadership Team</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated individuals who lead our organization with passion and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-primary-600 dark:text-primary-400">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="/team"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Meet Our Full Team
          </motion.a>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const faqs = [
    {
      question: "How can I get involved with Noor's Path?",
      answer:
        "There are many ways to get involved! You can volunteer your time, make a donation, become a corporate partner, or help spread awareness about our work. Visit our 'Get Involved' page to learn more about specific opportunities.",
    },
    {
      question: "Where does Noor's Path operate?",
      answer:
        "We currently work in several communities across the region, with a focus on areas where children have limited access to education and healthcare. Our goal is to expand our reach to more communities in need.",
    },
    {
      question: "How are donations used?",
      answer:
        "Your donations directly support our programs for children, including educational resources, healthcare services, and community development initiatives. We are committed to transparency and provide regular updates on how funds are used.",
    },
    {
      question: "Can I sponsor a specific child or project?",
      answer:
        "Yes! We offer sponsorship programs that allow you to support a specific child's education or contribute to a particular project. Contact us for more information on how to become a sponsor.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our organization and work.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

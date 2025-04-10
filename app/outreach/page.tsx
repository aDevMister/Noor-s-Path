"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OutreachPage() {
  return (
    <>
      <HeroSection />
      <GallerySection />
      <OutreachStoriesSection />
      <ImpactSection />
      <UpcomingSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-primary-600 dark:text-primary-400">Outreach</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Explore our past initiatives, success stories, and the impact we've made in communities around the world.
          </p>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const [activeTab, setActiveTab] = useState("photos")

  const photos = [
    { src: "/gallery-1.svg", alt: "Children in classroom", caption: "New school opening in rural community" },
    { src: "/gallery-2.svg", alt: "Healthcare checkup", caption: "Medical camp providing free healthcare" },
    { src: "/gallery-3.svg", alt: "Community gathering", caption: "Community development workshop" },
    { src: "/gallery-4.svg", alt: "Children playing", caption: "Recreational activities for children" },
    { src: "/gallery-5.svg", alt: "Education session", caption: "Teacher training program" },
    { src: "/gallery-6.svg", alt: "Donation drive", caption: "Annual donation drive for school supplies" },
  ]

  const videos = [
    { src: "/video-thumbnail-1.svg", alt: "Documentary on education impact", title: "The Power of Education" },
    { src: "/video-thumbnail-2.svg", alt: "Healthcare initiative video", title: "Healing Communities" },
    { src: "/video-thumbnail-3.svg", alt: "Volunteer experience", title: "Volunteer Stories" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            See the impact of our work through photos and videos from our outreach activities.
          </p>
        </motion.div>

        <Tabs defaultValue="photos" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="photos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm">{photo.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={video.src || "/placeholder.svg"}
                      alt={video.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary-600/90 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-gray-900 dark:text-white">{video.title}</h3>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

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
          <Button variant="outline" size="lg" className="rounded-full">
            View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function OutreachStoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const stories = [
    {
      title: "Building Hope: New School in Rural Village",
      date: "March 2023",
      location: "Hopeville Village",
      excerpt:
        "Our team worked with the local community to build a new school that now serves over 200 children who previously had no access to education.",
      image: "/story-1.svg",
    },
    {
      title: "Healthcare for All: Medical Camp Success",
      date: "January 2023",
      location: "Eastwood Community",
      excerpt:
        "Our medical camp provided free healthcare services to over 500 children and families, many of whom had never seen a doctor before.",
      image: "/story-2.svg",
    },
    {
      title: "Empowering Through Education: Teacher Training",
      date: "November 2022",
      location: "Multiple Communities",
      excerpt:
        "We trained 50 local teachers in modern educational techniques, empowering them to provide better education to hundreds of children.",
      image: "/story-3.svg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Outreach Stories</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Read about our recent initiatives and the communities we've impacted.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
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
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardDescription>
                    <div className="flex items-center gap-4 text-primary-600 dark:text-primary-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </div>
                    </div>
                  </CardDescription>
                  <CardTitle className="line-clamp-2">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{story.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group">
                    Read full story{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full">
            View All Stories <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const impactData = [
    { label: "Children Educated", value: "5,000+" },
    { label: "Medical Checkups", value: "10,000+" },
    { label: "Communities Served", value: "25+" },
    { label: "Schools Built", value: "15+" },
    { label: "Teachers Trained", value: "200+" },
    { label: "Volunteer Hours", value: "50,000+" },
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
            Our Impact by the Numbers
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            The measurable difference we've made through our outreach programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-50 dark:bg-gray-800 rounded-lg p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{item.value}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UpcomingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const upcomingOutreach = [
    {
      title: "School Supply Distribution",
      date: "August 15, 2023",
      location: "Riverside Community",
      description: "Join us as we distribute school supplies to 500 children in preparation for the new school year.",
      image: "/upcoming-1.svg",
    },
    {
      title: "Healthcare Awareness Campaign",
      date: "September 5, 2023",
      location: "Multiple Communities",
      description: "A month-long campaign to raise awareness about preventive healthcare and hygiene practices.",
      image: "/upcoming-2.svg",
    },
    {
      title: "Community Development Workshop",
      date: "October 10, 2023",
      location: "Central Community Center",
      description: "Working with community leaders to develop sustainable solutions for local challenges.",
      image: "/upcoming-3.svg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Outreach</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Learn about our planned initiatives and how you can get involved.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingOutreach.map((item, index) => (
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
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardDescription>
                    <div className="flex items-center gap-4 text-primary-600 dark:text-primary-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </CardDescription>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Volunteer for This Event</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

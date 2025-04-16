"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Calendar, Search, Tag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <PressReleasesSection />
      <MediaSection />
      <NewsletterSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            News & <span className="text-primary-600 dark:text-primary-400">Updates</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Stay informed about our latest initiatives, success stories, and upcoming events.
          </p>
        </div>
      </div>
    </section>
  )
}

function NewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const [searchQuery, setSearchQuery] = useState("")

  const newsArticles = [
    {
      title: "New School Opens in Rural Community",
      date: "June 15, 2023",
      author: "Admin",
      excerpt:
        "Noor's Path celebrates the opening of a new school that will serve over 200 children in a rural community, providing access to quality education.",
      image: "/news-1.svg",
      category: "Education",
    },
    {
      title: "Annual Fundraising Gala Raises Record Amount",
      date: "May 3, 2023",
      author: "Admin",
      excerpt:
        "Our annual gala raised over $500,000 to support our education and healthcare initiatives for children in need, thanks to generous donors.",
      image: "/news-2.svg",
      category: "Fundraising",
    },
    {
      title: "Healthcare Program Expands to New Region",
      date: "April 12, 2023",
      author: "Admin",
      excerpt:
        "Noor's Path is excited to announce the expansion of our healthcare program to reach more children in need in the eastern region.",
      image: "/news-3.svg",
      category: "Healthcare",
    },
    {
      title: "Partnership Announced with Global Tech Solutions",
      date: "March 28, 2023",
      author: "Admin",
      excerpt:
        "We're thrilled to announce a new partnership with Global Tech Solutions to provide technology education to underserved communities.",
      image: "/news-1.svg",
      category: "Partnerships",
    },
    {
      title: "Volunteer of the Year Award Ceremony",
      date: "February 15, 2023",
      author: "Admin",
      excerpt:
        "Join us in celebrating the outstanding contributions of our volunteers at the annual Volunteer of the Year Award Ceremony.",
      image: "/news-3.svg",
      category: "Events",
    },
    {
      title: "New Community Development Initiative Launched",
      date: "January 20, 2023",
      author: "Admin",
      excerpt:
        "Noor's Path launches a new community development initiative focused on sustainable infrastructure and economic opportunities.",
      image: "/news-1.svg",
      category: "Community",
    },
  ]

  const filteredNews = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    (<section ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">Latest News</h2>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search news..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge
              variant={searchQuery === "" ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSearchQuery("")}
            >
              All
            </Badge>
            {Array.from(new Set(newsArticles.map((article) => article.category))).map((category) => (
              <Badge
                key={category}
                variant={searchQuery === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSearchQuery(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
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
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow max-w-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image || "/placeholder.svg?height=192&width=384"}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge>{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription>
                    <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                    </div>
                  </CardDescription>
                  <CardTitle className="line-clamp-2 break-words">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group">
                    <Link href={`/news/${article.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No news articles found matching your search.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            Load More News <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>)
  );
}

function PressReleasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const pressReleases = [
    {
      title: "Noor's Path Receives Major Grant for Education Initiatives",
      date: "May 25, 2023",
      excerpt:
        "Noor's Path has been awarded a $1 million grant to expand its education programs in underserved communities.",
    },
    {
      title: "New Executive Director Appointed at Noor's Path",
      date: "April 10, 2023",
      excerpt:
        "The Board of Directors is pleased to announce the appointment of Sarah Johnson as the new Executive Director.",
    },
    {
      title: "Noor's Path Celebrates 10 Years of Impact",
      date: "March 15, 2023",
      excerpt:
        "Noor's Path marks a decade of service with a celebration highlighting the organization's achievements and future plans.",
    },
    {
      title: "Annual Impact Report Released",
      date: "February 1, 2023",
      excerpt:
        "Noor's Path releases its annual impact report, showcasing the organization's achievements and financial transparency.",
    },
  ]

  return (
    (<section ref={ref} className="py-16 md:py-24 bg-primary-50 dark:bg-gray-900">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Press Releases</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Official announcements and statements from Noor's Path.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {pressReleases.map((release, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardDescription>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {release.date}
                    </div>
                  </CardDescription>
                  <CardTitle>{release.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{release.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group">
                    <Link href={`/news/press-releases/${release.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Read full release{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/news/press-releases">
              View All Press Releases <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>)
  );
}

function MediaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const mediaResources = [
    {
      title: "Media Kit",
      description: "Download our media kit, including logos, brand guidelines, and high-resolution images.",
      icon: <Tag className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: "Fact Sheet",
      description: "Key facts and statistics about Noor's Path and our impact on children's lives.",
      icon: <Tag className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: "Annual Reports",
      description: "Access our annual reports showcasing our achievements, financials, and future plans.",
      icon: <Tag className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: "Media Contacts",
      description: "Contact information for media inquiries and interview requests.",
      icon: <Tag className="h-10 w-10 text-primary-600 dark:text-primary-400" />,
    },
  ]

  return (
    (<section ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-950">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Media Resources</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Resources for journalists, bloggers, and anyone interested in sharing our story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaResources.map((resource, index) => (
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
                    {resource.icon}
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{resource.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button asChild>
                    <Link href={`/media/${resource.title.toLowerCase().replace(/\s+/g, "-")}`}>Access Resource</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>)
  );
}

function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest news, events, and success stories. We send out a monthly newsletter with
            highlights of our work and upcoming opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="rounded-full">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-primary-200 mt-4">We respect your privacy. You can unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}

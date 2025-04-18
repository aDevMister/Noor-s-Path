"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <ProgramsSection />
      <TestimonialsSection />
      <NewsSection />
      <CtaSection />
    </>
  );
}

const slides = [
  {
    id: 1,
    image: "/seven.jpg",
    title: "Support Our Mission",
    subtitle: "Bringing light to children’s lives around the world.",
  },
  {
    id: 2,
    image: "/five.jpg",
    title: "Every Child Deserves a Future",
    subtitle: "Help us provide healthcare, education and hope.",
  },
  {
    id: 3,
    image: "/three.jpg",
    title: "Be The Change",
    subtitle: "Join hands with Noor’s Path for a better tomorrow.",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % slides.length);
    };
    timeoutRef.current = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    } else {
      setCurrent((prev) => (prev + 1) % slides.length);
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 mt-[120px] h-[100vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover w-full h-full z-0"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-4xl font-bold mb-4 animate-fadeInUp">
              {slide.title}
            </h2>
            <p className="text-lg animate-fadeInUp delay-100">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={() => scrollCarousel("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-lg z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scrollCarousel("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-2 rounded-full shadow-lg z-20"
      >
        <ChevronRight />
      </button>
    </section>
  );
}

function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We are dedicated to creating a brighter future for children in need
            through education, healthcare, and community support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Providing quality education and learning resources to orphans
                  and less privileged children.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <CardTitle>Healthcare Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Ensuring children have access to essential healthcare services
                  and medical support.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <CardTitle>Supportive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Fostering a supportive community for the holistic development
                  of children.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { value: "500+", label: "Children Supported" },
    { value: "15+", label: "Schools Built" },
    { value: "25+", label: "Communities Reached" },
    { value: "10+", label: "Years of Service" },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-primary-50 dark:bg-gray-900 wave-bg"
    >
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
            Our Impact
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Together, we've made a significant difference in the lives of
            children across communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <p className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const programs = [
    {
      title: "Education Support",
      description:
        "Providing school supplies, scholarships, and educational resources to children in need.",
      image: "/program-education.svg",
      link: "/outreach#education",
    },
    {
      title: "Healthcare Initiatives",
      description:
        "Ensuring access to medical care, nutrition programs, and health education.",
      image: "/program-healthcare.svg",
      link: "/outreach#healthcare",
    },
    {
      title: "Community Development",
      description:
        "Building schools, community centers, and infrastructure to support children's growth.",
      image: "/program-community.svg",
      link: "/outreach#community",
    },
  ];

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
            Our Programs
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the various ways we're making a difference in children's
            lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
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
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={
                      program.image || "/placeholder.svg?height=192&width=384"
                    }
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {program.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group">
                    <Link href={program.link}>
                      Learn more{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const testimonials = [
    {
      quote:
        "Noor's Path has completely transformed my life. I now have access to education and healthcare that I never thought possible.",
      name: "Aisha, 12",
      role: "Student",
    },
    {
      quote:
        "The support from Noor's Path has allowed our community to build a school that serves hundreds of children. Their impact is immeasurable.",
      name: "Mohammed",
      role: "Community Leader",
    },
    {
      quote:
        "Volunteering with Noor's Path has been one of the most rewarding experiences of my life. The organization truly puts children first.",
      name: "Sarah",
      role: "Volunteer",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-primary-700 text-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Voices of Impact
          </h2>
          <div className="w-20 h-1 bg-primary-300 mx-auto mb-6"></div>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Hear from the children, communities, and volunteers whose lives have
            been touched by our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <Card className="h-full bg-primary-800 border-none">
                <CardHeader>
                  <div className="text-4xl text-primary-300">"</div>
                </CardHeader>
                <CardContent>
                  <p className="text-primary-100 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-primary-300">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const news = [
    {
      title: "New School Opens in Rural Community",
      date: "June 15, 2023",
      excerpt:
        "Noor's Path celebrates the opening of a new school that will serve over 200 children in a rural community.",
      image: "/news-1.svg",
      link: "/news/new-school-opens-in-rural-community",
    },
    {
      title: "Annual Fundraising Gala Raises Record Amount",
      date: "May 3, 2023",
      excerpt:
        "Our annual gala raised over $500,000 to support our education and healthcare initiatives for children in need.",
      image: "/news-2.svg",
      link: "/news/annual-fundraising-gala-raises-record-amount",
    },
    {
      title: "Healthcare Program Expands to New Region",
      date: "April 12, 2023",
      excerpt:
        "Noor's Path is excited to announce the expansion of our healthcare program to reach more children in need.",
      image: "/news-3.svg",
      link: "/news/healthcare-program-expands-to-new-region",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
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
            News & Updates
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Stay up to date with our latest news, events, and success stories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
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
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image || "/placeholder.svg?height=192&width=384"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardDescription>{item.date}</CardDescription>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="group">
                    <Link href={item.link}>
                      Read more{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/news">
              View All News <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether through donations, volunteering, or partnerships, your
            support helps us create a brighter future for children in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Check, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonatePage() {
  return (
    <>
      <HeroSection />
      <DonationOptionsSection />
      {/* <ImpactSection /> */}
      <CorporateSection />
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
            Make a <span className="text-primary-600 dark:text-primary-400">Difference</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Your donation helps us provide education, healthcare, and support to children in need.
          </p>
          <Button size="lg" className="rounded-full">
            Donate Now <Heart className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function DonationOptionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const [donationAmount, setDonationAmount] = useState("50")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount("custom")
    setCustomAmount(e.target.value)
  }

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Donation Options</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Choose how you'd like to support our mission to help children in need.
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
            <Tabs defaultValue="donate" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="donate">Donate</TabsTrigger>
                <TabsTrigger value="sponsor">Sponsor a Child</TabsTrigger>
              </TabsList>

              <TabsContent value="donate">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base mb-3 block">Select Donation Type</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType} className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="quarterly" id="quarterly" />
                        <Label htmlFor="quarterly">Quarterly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="annually" id="annually" />
                        <Label htmlFor="annually">Annually</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Select Amount</Label>
                    <RadioGroup
                      value={donationAmount}
                      onValueChange={setDonationAmount}
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                      <Label
                        htmlFor="amount-25"
                        className={`border cursor-pointer rounded-md p-4 flex items-center justify-center gap-2 ${
                          donationAmount === "25"
                            ? "bg-primary-50 border-primary-500 dark:bg-primary-900/30 dark:border-primary-500"
                            : ""
                        }`}
                      >
                        <RadioGroupItem value="25" id="amount-25" className="sr-only" />
                        $25
                      </Label>
                      <Label
                        htmlFor="amount-50"
                        className={`border cursor-pointer rounded-md p-4 flex items-center justify-center gap-2 ${
                          donationAmount === "50"
                            ? "bg-primary-50 border-primary-500 dark:bg-primary-900/30 dark:border-primary-500"
                            : ""
                        }`}
                      >
                        <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                        $50
                      </Label>
                      <Label
                        htmlFor="amount-100"
                        className={`border cursor-pointer rounded-md p-4 flex items-center justify-center gap-2 ${
                          donationAmount === "100"
                            ? "bg-primary-50 border-primary-500 dark:bg-primary-900/30 dark:border-primary-500"
                            : ""
                        }`}
                      >
                        <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                        $100
                      </Label>
                      <Label
                        htmlFor="amount-250"
                        className={`border cursor-pointer rounded-md p-4 flex items-center justify-center gap-2 ${
                          donationAmount === "250"
                            ? "bg-primary-50 border-primary-500 dark:bg-primary-900/30 dark:border-primary-500"
                            : ""
                        }`}
                      >
                        <RadioGroupItem value="250" id="amount-250" className="sr-only" />
                        $250
                      </Label>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="custom-amount" className="text-base mb-3 block">
                      Custom Amount
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        className="pl-8"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full" size="lg">
                      Donate{" "}
                      {donationAmount !== "custom" ? `$${donationAmount}` : customAmount ? `$${customAmount}` : ""}
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sponsor">
                <div className="space-y-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    Sponsor a child for $35/month and provide them with education, healthcare, and basic necessities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Your last name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full" size="lg">
                      Sponsor a Child
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
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

  const impactItems = [
    {
      amount: "$25",
      description: "Provides school supplies for a child for a month",
      image: "/impact-25.svg",
    },
    {
      amount: "$50",
      description: "Provides meals for a child for a month",
      image: "/impact-50.svg",
    },
    {
      amount: "$100",
      description: "Provides healthcare checkups for 5 children",
      image: "/impact-100.svg",
    },
    {
      amount: "$250",
      description: "Sponsors a teacher's salary for a month",
      image: "/impact-250.svg",
    },
    {
      amount: "$500",
      description: "Funds a community development workshop",
      image: "/impact-500.svg",
    },
    {
      amount: "$1,000",
      description: "Helps build infrastructure for a school",
      image: "/impact-1000.svg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Donation's Impact</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            See how your contribution makes a real difference in children's lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactItems.map((item, index) => (
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
                    src={item.image || "/placeholder.svg"}
                    alt={`Impact of ${item.amount}`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600 dark:text-primary-400">{item.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Donate {item.amount}</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CorporateSection() {
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
            <Image src="/IMG_4032.jpg" alt="Corporate Giving" fill className="object-cover" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Corporate Giving</h2>
            <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Partner with Noor's Path to make a significant impact on children's lives while aligning with your
                company's social responsibility goals.
              </p>
              <p>We offer various corporate giving opportunities:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Corporate sponsorships for specific programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Matching gift programs to amplify employee donations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cause-related marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Employee volunteer programs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>In-kind donations of goods or services</span>
                </li>
              </ul>
              <p>
                Our team will work with you to develop a customized partnership that meets your company's objectives
                while making a significant difference in the lives of children in need.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" className="rounded-full">
                Contact Us About Corporate Giving
              </Button>
            </div>
          </motion.div>
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
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, Noor's Path is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a receipt for your donation that can be used for tax purposes.",
    },
    {
      question: "How is my donation used?",
      answer:
        "Your donation directly supports our programs for children, including educational resources, healthcare services, and community development initiatives. We are committed to transparency and provide regular updates on how funds are used.",
    },
    {
      question: "Can I specify how my donation is used?",
      answer:
        "Yes, you can designate your donation for a specific program or initiative. Please include a note with your donation or contact us directly to specify how you would like your contribution to be used.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, PayPal, bank transfers, and checks. For larger donations, we can also accommodate stock transfers and other forms of giving. Please contact us for more information.",
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
            Find answers to common questions about donations and giving.
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

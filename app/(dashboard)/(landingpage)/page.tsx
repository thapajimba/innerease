import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, MessageCircle, Users, Zap } from "lucide-react"
import Navbar from "@/components/nav"
import Footer from "@/components/footer"


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Heart className="h-6 w-6 text-teal-500" />
          <span className="ml-2 text-2xl font-bold text-gray-800">Inner Ease</span>
        </Link> */}
        <Navbar/>
        {/* <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/faq">
            FAQ
          </Link>
        </nav> */}
      {/* </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Inner Ease
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Empowering you with daily wellness tips, inspiration, and personalized guidance. Pay per service and show
                  appreciation through optional tips.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/faq">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-10 w-10 text-teal-500" />
                <h2 className="text-2xl font-bold">Daily Wellness & Inspiration</h2>
                <p className="max-w-[300px] text-gray-600">
                  Access daily wellness tips, inspirational messages, and self-care guidance. Pay per message to receive
                  tailored support.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Heart className="h-10 w-10 text-teal-500" />
                <h2 className="text-2xl font-bold">On-Demand Personalized Tips</h2>
                <p className="max-w-[300px] text-gray-600">
                  Get specific advice, customized meditations, or other resources as needed. Pay only for what you use.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-10 w-10 text-teal-500" />
                <h2 className="text-2xl font-bold">Appreciation Tips</h2>
                <p className="max-w-[300px] text-gray-600">
                  Show extra appreciation for sessions or messages that resonate with you. Tipping is always optional.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <MessageCircle className="h-10 w-10 text-teal-500" />
                <h3 className="text-xl font-bold">Choose Your Service</h3>
                <p className="text-gray-600">
                  Select from daily wellness tips, personalized advice, or custom meditations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-10 w-10 text-teal-500" />
                <h3 className="text-xl font-bold">Pay Per Service</h3>
                <p className="text-gray-600">
                  Only pay for the services you use, with transparent pricing for each offering.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Heart className="h-10 w-10 text-teal-500" />
                <h3 className="text-xl font-bold">Optional Tipping</h3>
                <p className="text-gray-600">
                  Show extra appreciation for particularly helpful content with optional tips.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold">Ready to Start Your Wellness Journey?</h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Join MindfulCare today and access personalized wellness content on-demand.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  {/* <Input type="email" placeholder="Enter your email" required /> */}
                  <Button asChild>
                    <Link href="https://www.facebook.com/profile.php?id=61553113783578&mibextid=ZbWKwL" target="_blank">
                      Get Started
                    </Link>
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
     <Footer/>
    </div>
  )
}
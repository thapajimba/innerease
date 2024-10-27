import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Brain, Smile, Zap, Coffee } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Heart className="h-6 w-6 text-teal-500" />
          <span className="ml-2 text-2xl font-bold text-gray-800">MindfulCare</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Our Services
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center mb-12">
              Discover our range of pay-per-service wellness offerings, designed to support your mental health journey.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-teal-500 mb-2" />
                  <CardTitle>Daily Wellness Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive daily wellness tips and inspirational messages. Pay per tip to access curated content for your
                    well-being.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="h-8 w-8 text-teal-500 mb-2" />
                  <CardTitle>Personalized Advice</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get on-demand, personalized advice tailored to your specific needs. Pay only for the guidance you seek.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Smile className="h-8 w-8 text-teal-500 mb-2" />
                  <CardTitle>Custom Meditations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Access customized meditation sessions designed for your unique situation. Pay per meditation.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-teal-500 mb-2" />
                  <CardTitle>Self-Care Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Explore a variety of self-care resources and tools. Pay for each resource you access.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Coffee className="h-8 w-8 text-teal-500 mb-2" />
                  <CardTitle>Wellness Check-Ins</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Schedule brief wellness check-ins for quick support and guidance. Pay per check-in session.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-8 w-8 text-teal-500 mb-2" />
                  <CardTitle>Appreciation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Show extra appreciation for particularly helpful content or sessions with optional tips.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl mt-4 mb-8">
              Choose the services that resonate with you and begin your wellness journey today.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2023 MindfulCare. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/refund">
            Refund Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
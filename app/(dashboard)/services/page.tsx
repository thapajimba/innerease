import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Brain, Smile, Zap, Coffee } from "lucide-react"
import Navbar from "@/components/nav"
import Footer from "@/components/footer"



export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">

        <Navbar/>

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
            <Button asChild>
                    <Link href="https://www.facebook.com/profile.php?id=61553113783578&mibextid=ZbWKwL" target="_blank">
                      Get Started
                    </Link>
                  </Button><Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
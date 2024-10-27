import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function AboutPage() {
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
          <Link className="text-sm  font-medium hover:underline underline-offset-4" href="/blog">
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              About MindfulCare
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center mb-12">
              Dedicated to providing compassionate, professional counseling services to help you achieve mental wellness and
              personal growth.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At MindfulCare, our mission is to empower individuals to overcome challenges, achieve personal growth, and
                  lead fulfilling lives. We believe in the power of compassionate, evidence-based counseling to transform lives
                  and promote mental wellness.
                </p>
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <p className="text-gray-600 mb-6">
                  We take a holistic, client-centered approach to counseling. Our team of experienced therapists uses a variety
                  of evidence-based techniques tailored to each client's unique needs. We create a safe, non-judgmental space
                  where you can explore your thoughts and feelings, develop coping strategies, and work towards your personal
                  goals.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <p className="text-gray-600 mb-6">
                  Our diverse team of licensed therapists brings a wealth of experience and expertise to MindfulCare. Each
                  member of our team is committed to ongoing professional development to ensure we provide the highest quality
                  care to our clients.
                </p>
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Compassion: We approach every client with empathy and understanding.</li>
                  <li>Integrity: We maintain the highest ethical standards in all our practices.</li>
                  <li>Inclusivity: We welcome and respect clients from all backgrounds and walks of life.</li>
                  <li>
                    Empowerment: We strive to equip our clients with the tools and insights they need to thrive independently.
                  </li>
                  <li>
                    Collaboration: We work together with our clients to create personalized treatment plans and achieve their
                    goals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Start Your Journey Today</h2>
            <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl mb-8">
              Take the first step towards a happier, healthier you. Our team at MindfulCare is here to support you every step
              of the way.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2023 MindfulCare. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
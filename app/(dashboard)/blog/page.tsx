import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
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
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              MindfulCare Blog
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center mb-12">
              Insights, tips, and resources for your mental health journey.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 max-w-4xl mx-auto">
              <article className="space-y-4">
                <h2 className="text-3xl font-bold">5 Simple Mindfulness Techniques for Daily Life</h2>
                <p className="text-gray-600">Published on June 15, 2023 | By Dr. Emily Johnson</p>
                <Image
                  src="/placeholder.svg"
                  alt="Person meditating"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <p className="text-gray-600">
                  Mindfulness is a powerful tool for reducing stress and improving overall well-being. In this post, we&apos;ll
                  explore five simple mindfulness techniques you can easily incorporate into your daily routine.
                </p>
                <h3 className="text-xl font-bold">1. Mindful Breathing</h3>
                <p className="text-gray-600">
                  Take a few minutes each day to focus on your breath. Sit comfortably, close your eyes, and pay attention to
                  the sensation of your breath entering and leaving your body.
                </p>
                <h3 className="text-xl font-bold">2. Body Scan</h3>
                <p className="text-gray-600">
                  Lie down or sit comfortably and slowly scan your body from head to toe, noticing any sensations or tension
                  without judgment.
                </p>
                <h3 className="text-xl font-bold">3. Mindful Eating</h3>
                <p className="text-gray-600">
                  During one meal a day, eat slowly and mindfully. Pay attention to the flavors, textures, and sensations of
                  each bite.
                </p>
                <h3 className="text-xl font-bold">4. Gratitude Practice</h3>
                <p className="text-gray-600">
                  Each day, take a moment to reflect on three things you&apos;re grateful for. This simple practice can shift your
                  focus to the positive aspects of your life.
                </p>
                <h3 className="text-xl font-bold">5. Mindful Walking</h3>
                <p className="text-gray-600">
                  During a short walk, focus on the sensation of your feet touching the ground and the movement of your body.
                  Notice the sights, sounds, and smells around you.
                </p>
                <p className="text-gray-600">
                  Incorporating these simple mindfulness techniques into your daily routine can help reduce stress, improve
                  focus, and enhance overall well-being. Remember, mindfulness is a skill that improves with practice, so be
                  patient and kind to yourself as you develop this beneficial habit.
                </p>
                <div className="flex justify-center mt-8">
                  <Button asChild>
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </article>
            </div>
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

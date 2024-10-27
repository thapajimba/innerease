import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/nav"
import Footer from "@/components/footer"



export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">

        <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center mb-12">
              Find answers to common questions about our services, payment structure, and more.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the payment structure work?</AccordionTrigger>
                <AccordionContent>
                  MindfulCare operates on a pay-per-service model. You only pay for the specific services you use, such as
                  daily wellness tips, personalized advice, or custom meditations. This allows you to tailor your wellness
                  journey to your needs and budget.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why might I pay multiple times a day?</AccordionTrigger>
                <AccordionContent>
                  You might choose to access multiple services throughout the day based on your needs. For example, you could
                  start with a daily wellness tip in the morning, seek personalized advice in the afternoon, and end with a
                  custom meditation in the evening. Each of these would be a separate transaction.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is the purpose of tips?</AccordionTrigger>
                <AccordionContent>
                  Tips are a way for you to show extra appreciation for content or services that you found particularly
                  helpful or inspiring. They are completely optional and are meant to encourage and support the creation of
                  high-quality wellness content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Are tips required?</AccordionTrigger>
                <AccordionContent>
                  No, tips are entirely optional. While they&apos;re appreciated, you are under no obligation to provide tips for
                  any of our services. The base price of each service covers the cost of providing that service.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How secure are my payments?</AccordionTrigger>
                <AccordionContent>
                  We take the security of your payments very seriously. All transactions are processed through Stripe, a
                  leading payment processor known for its robust security measures. Your payment details are encrypted and
                  never stored on our servers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                <AccordionContent>
                  Due to the nature of our digital services, most purchases are non-refundable. However, if you&apos;re unsatisfied
                  with a service, please contact us, and we&apos;ll do our best to address your concerns. Tips are non-refundable.
                  For more details, please refer to our Refund Policy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
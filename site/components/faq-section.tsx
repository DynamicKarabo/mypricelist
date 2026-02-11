"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "What does the free mockup include?",
    a: "You get a fully designed, interactive mockup of your homepage or landing page. It is a real preview of what your final site will look like, built with real code, not a static image. If you love it, we move forward. If not, no obligation.",
  },
  {
    q: "How fast can you deliver a full website?",
    a: "Most websites ship in 3 to 7 days depending on complexity. Landing pages can be done in 1 to 2 days. Web applications with authentication and databases typically take 1 to 3 weeks.",
  },
  {
    q: "Do I own the code after the project?",
    a: "Absolutely. You get 100% ownership of all code, designs, and assets. Full GitHub repository access included. No lock-ins, no monthly fees for your own code.",
  },
  {
    q: "What tech stack do you use?",
    a: "I build with Next.js, React, TypeScript, Tailwind CSS, and deploy on Vercel. For databases I use Supabase or PostgreSQL. For payments, Stripe. This is the same stack used by companies like Vercel, Notion, and Linear.",
  },
  {
    q: "Can you work with my existing brand or design?",
    a: "Yes. If you have brand guidelines, a Figma file, or even just a vibe you are going for, send it over and I will match it. If you do not have any design direction, I will create something fresh for you.",
  },
  {
    q: "What about hosting and maintenance?",
    a: "I deploy your site on Vercel, which offers a generous free tier. You will not need to pay for hosting unless you have very high traffic. I also offer optional maintenance packages if you want ongoing updates.",
  },
]

export function FaqSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref} className="px-6 py-20 md:py-32 border-t">
      <div className="mx-auto max-w-3xl">
        <div
          style={{ opacity: inView ? undefined : 0 }}
          className={`mb-12 text-center ${inView ? "animate-fade-up" : ""}`}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Common questions, straight answers.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display font-medium text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

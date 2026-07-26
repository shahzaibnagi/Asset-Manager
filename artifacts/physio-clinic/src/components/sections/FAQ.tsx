import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a doctor's referral for physiotherapy?",
    a: "No, you do not need a doctor's referral to see a physiotherapist. However, if you plan to claim the sessions through your health insurance, they might require a referral."
  },
  {
    q: "How long does a typical session last?",
    a: "Your initial assessment will take about 45-60 minutes to ensure we thoroughly understand your condition. Follow-up treatment sessions typically last 30-45 minutes."
  },
  {
    q: "Is physiotherapy painful?",
    a: "Physiotherapy should not be painful. Some techniques like deep tissue massage or dry needling may cause temporary discomfort, but we always work within your tolerance limit."
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions depends on the severity of your condition, your body's healing response, and your specific goals. We will provide an estimated treatment plan after your initial assessment."
  },
  {
    q: "What should I wear to my appointment?",
    a: "Please wear loose, comfortable clothing that allows easy access to the area being treated. For example, if you have a knee injury, shorts are recommended."
  },
  {
    q: "Do you accept health insurance?",
    a: "Yes, we accept most major health insurance plans. Please contact our reception with your insurance details prior to your first visit to confirm coverage."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border px-6 rounded-2xl">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-primary py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

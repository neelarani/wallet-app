import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/constants';

const FAQ = () => {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Everything you need to know about Wallet APP, in one place.
        </p>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

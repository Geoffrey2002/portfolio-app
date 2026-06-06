import { faqs } from "@/lib/site-config";

const FAQ = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full px-4 py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[--color-primary] mb-4">
            Frequently Asked Questions
          </p>
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[--color-text]">
            About My Work
          </h2>
          <p className="text-[--color-text-light] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Direct answers about my experience, services, and how to work with me as a frontend developer.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border-2 border-[--color-border] bg-[--color-bg-card] open:border-[--color-primary]/30 transition-colors"
            >
              <summary className="cursor-pointer list-none px-5 py-4 md:px-6 md:py-5 font-semibold text-[--color-text] marker:content-none flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[--color-primary] transition-transform group-open:rotate-45 text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-4 md:px-6 md:pb-5 text-[--color-text-light] text-sm md:text-base leading-relaxed border-t border-[--color-border] pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

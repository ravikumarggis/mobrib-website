import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const faqs = [
  {
    question: "What services does Mobrib provide?",
    answer:
      "We provide custom web development, responsive website design, mobile app development (iOS & Android), and scalable enterprise solutions tailored to business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on complexity and scope. Typically, small projects take 2–4 weeks, while larger applications may take 2–4 months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer ongoing maintenance, performance optimization, and feature upgrades after project deployment.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow industry best practices, agile methodology, and perform thorough testing to ensure secure, scalable, and high-quality solutions.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Everything you need to know about our services and process.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          ref={contentRef}
          className={`space-y-6 ${
            contentVisible ? "animate-slide-in-up opacity-100" : "opacity-0"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-cyan-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100 pb-6"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

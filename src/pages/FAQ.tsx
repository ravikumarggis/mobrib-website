import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Mobrib?',
    answer: 'Mobrib is a peer-to-peer delivery app that connects individuals who need to send parcels with travelers who have spare capacity on their trips. It offers a seamless, affordable, and efficient way to send and receive packages.',
  },
  {
    question: 'How does Mobrib work?',
    answer: 'Senders post their delivery requests with parcel details and destination. Travelers browse and accept requests that match their routes. Payments are handled securely through the app, and both parties can track the parcel in real-time.',
  },
  {
    question: 'How much can I earn as a traveler?',
    answer: 'The earning potential varies depending on the size, distance, and urgency of the parcels you deliver. Mobrib allows travelers to monetize their existing trips, turning empty space into extra income.',
  },
  {
    question: 'Is Mobrib safe and secure?',
    answer: 'Yes, safety and security are top priorities. Mobrib includes features like KYC verification for all users, secure in-app payment processing, and a robust rating system to build trust within the community.',
  },
  {
    question: 'What items can I send through Mobrib?',
    answer: 'Mobrib can accommodate various items, from small documents to larger packages. However, there are restrictions on prohibited items like illegal goods and hazardous materials.',
  },
  {
    question: 'How is Mobrib different from traditional couriers?',
    answer: 'Mobrib offers significantly lower costs, faster delivery times due to real-time matching with travelers, greater flexibility in parcel size and delivery times, and direct communication between sender and traveler.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Mobrib
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

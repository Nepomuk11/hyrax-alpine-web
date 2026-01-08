'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is it safe?',
      answer:
        'Yes. We follow German safety standards with medical support, satellite communication, and proven protocols. All guides are certified and experienced.',
    },
    {
      question: 'How fit do I need to be?',
      answer:
        'You should be in good physical condition and able to hike for 6-8 hours per day. We offer routes for different fitness levels, from beginner to advanced.',
    },
    {
      question: 'What is included?',
      answer:
        'All expeditions include certified guides, porters, meals, camping equipment, park fees, and safety equipment. Transportation to/from Nairobi is also included.',
    },
    {
      question: 'What should I pack?',
      answer:
        'We provide a detailed gear list upon booking. Essential items include proper hiking boots, warm layers, sleeping bag, and headlamp. Most technical gear can be rented.',
    },
    {
      question: 'How do I get to Nairobi?',
      answer:
        'Nairobi has an international airport (NBO) with direct flights from major European cities. We provide airport pickup and drop-off as part of the expedition package.',
    },
    {
      question: 'What about altitude sickness?',
      answer:
        'We follow a slow ascent schedule to minimize altitude sickness risk. Our guides are trained to recognize symptoms and we carry medical oxygen as a precaution.',
    },
    {
      question: 'Can I climb solo?',
      answer:
        'For safety reasons, all expeditions require a minimum group size. However, we can match solo travelers with small groups.',
    },
    {
      question: 'What happens if weather is bad?',
      answer:
        'Safety is our priority. If conditions are dangerous, we may delay or adjust the schedule. We monitor weather forecasts and have flexible itineraries.',
    },
  ];

  return (
    <div className="font-sans tracking-tight bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-12 text-center tracking-tight">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                open={openFaq === index}
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenFaq(openFaq === index ? null : index);
                  }}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 hover:bg-gray-50 transition-colors duration-200 cursor-pointer list-none"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </summary>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

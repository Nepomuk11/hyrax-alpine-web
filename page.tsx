'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, CameraOff, FileCheck, MousePointerClick, Award, CalendarCheck, UserCheck, Plane, MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<typeof testimonials[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      headline: 'The Forgotten African Giant',
      subtext: 'Mount Kenya. The raw alternative.',
      backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop',
    },
    {
      headline: 'We are #2. So We Try Harder.',
      subtext: 'Wilder than Kilimanjaro. Less crowded. More real.',
      backgroundImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=3000',
    },
    {
      headline: 'Your Office Chair Misses You.',
      subtext: 'Just kidding. It doesnt. Go climb a real mountain.',
      backgroundImage: 'https://images.unsplash.com/photo-1545158828-56eb0d15746e?q=80&w=3000',
    },
  ];

  // Auto-play hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const expeditions = [
    {
      slug: 'naro-moru-route',
      title: 'Naro Moru Route',
      badge: 'Best Seller',
      price: '€855',
      details: 'The classic route with stunning views',
      image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=3000',
      bookingLink: '/expeditions/sirimon',
    },
    {
      slug: 'sirimon-route',
      title: 'Sirimon Route',
      badge: 'Beginner',
      price: '€900',
      details: 'Gentle ascent perfect for first-timers',
      image: 'https://images.unsplash.com/photo-1545158828-56eb0d15746e?q=80&w=3000',
      bookingLink: '/expeditions/chogoria',
    },
    {
      slug: 'chogoria-route',
      title: 'Chogoria Route',
      badge: 'Pro',
      price: '€950',
      details: 'The most challenging and rewarding path',
      image: 'https://images.unsplash.com/photo-1605540459523-289b52a514d9?q=80&w=3000',
      bookingLink: '/expeditions/circuit',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      quote: 'Life-changing experience. The guides were incredible and the views were beyond words.',
      image: 'https://images.unsplash.com/photo-1502161254066-6c74af72d5c8?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
    },
    {
      id: 2,
      name: 'James K.',
      quote: 'Wilder than I imagined. Mount Kenya is truly the forgotten giant of Africa.',
      image: 'https://images.unsplash.com/photo-1520972746411-9e8c467a1458?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    },
    {
      id: 3,
      name: 'Emma L.',
      quote: 'Best expedition ever. Already planning my return trip next year!',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
    },
    {
      id: 4,
      name: 'Michael R.',
      quote: 'Unforgettable adventure. The team made everything seamless from start to finish.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
    },
    {
      id: 5,
      name: 'Lisa T.',
      quote: 'Exceeded all expectations. The sunrise from the summit was absolutely magical.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400',
    },
    {
      id: 6,
      name: 'David P.',
      quote: 'Already planning my return. This expedition changed how I see adventure travel.',
      image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
    },
    {
      id: 7,
      name: 'Anna B.',
      quote: 'Raw and authentic. No tourist traps, just pure mountain adventure.',
      image: 'https://images.unsplash.com/photo-1545158828-56eb0d15746e?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
    },
    {
      id: 8,
      name: 'Tom H.',
      quote: 'The adventure of a lifetime. Worth every step to reach that summit.',
      image: 'https://images.unsplash.com/photo-1605540459523-289b52a514d9?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400',
    },
    {
      id: 9,
      name: 'Rachel W.',
      quote: 'Incredible guides, stunning scenery, and memories that will last forever.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
    },
    {
      id: 10,
      name: 'Chris M.',
      quote: 'More challenging than expected, but the team made it feel achievable.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    },
  ];

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
  ];

  return (
    <div className="font-sans tracking-tight">
      {/* Hero Section - Storytelling Slider */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background Images with Fade Transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          />
        ))}
        {/* Heavy dark gradient fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        {/* Text Content - Left Side */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl relative">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                }`}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-4 tracking-tight">
                  {slide.headline}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  {slide.subtext}
                </p>
                <Link
                  href="#expeditions"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  Explore Expeditions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CameraOff className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                No Selfie Queues
              </h3>
              <p className="text-gray-600">
                No tourist highways. Just you, the rock, and raw wilderness.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FileCheck className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                German Bureaucracy (Included)
              </h3>
              <p className="text-gray-600">
                German liability law. 100% insured. Your mom will love this part.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <MousePointerClick className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                Lazy Booking. Hard Hiking.
              </h3>
              <p className="text-gray-600">
                Book in 3 clicks. We automated the boring stuff.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                Local Legends Only
              </h3>
              <p className="text-gray-600">
                Led by Kenya's best. No corporate suits. Pure stoke.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expeditions Section */}
      <section id="expeditions" className="min-h-screen flex flex-col justify-center bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-4 text-center tracking-tight">
            Choose Your Suffering
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            The Scenic. The Steep. The Savage. Compare our 3 main Mount Kenya routes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expeditions.map((expedition) => (
              <div
                key={expedition.slug}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image - Flexible height */}
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={expedition.image}
                    alt={expedition.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                  {/* Badge floating on top-right */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-deep-slate">
                      {expedition.badge}
                    </span>
                  </div>
                </div>
                {/* White box at bottom with heavy rounded corners */}
                <div className="p-6 pb-8 bg-white rounded-b-2xl flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold text-deep-slate mb-2 tracking-tight">
                    {expedition.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{expedition.details}</p>
                  <p className="text-3xl font-bold text-burnt-orange mb-4">
                    from {expedition.price}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/expeditions/${expedition.slug}`}
                      className="inline-block w-full bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-[#C0392B] transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-16 text-center tracking-tight">
            Get On The List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-burnt-orange/20 p-4 rounded-full">
                  <CalendarCheck className="h-12 w-12 text-burnt-orange" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 tracking-tight">
                The Signal
              </h3>
              <p className="text-gray-600">
                Pick your dates. No credit card yet. It's a date proposal, not a marriage contract.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-burnt-orange/20 p-4 rounded-full">
                  <UserCheck className="h-12 w-12 text-burnt-orange" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 tracking-tight">
                We Verify
              </h3>
              <p className="text-gray-600">
                We text our Guides. We check huts, and guide availability. We never overbook.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-burnt-orange/20 p-4 rounded-full">
                  <Plane className="h-12 w-12 text-burnt-orange" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 tracking-tight">
                Green Light
              </h3>
              <p className="text-gray-600">
                You get a secure link. Pay. Get insured. Start breaking in your boots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Instagram Grid */}
      <section className="bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col min-h-[600px]">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-12 text-center tracking-tight">
            They Survived
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 my-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                onClick={() => setSelectedReview(testimonial)}
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square h-40 md:h-48"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.quote}
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quote overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-end justify-center p-3 rounded-xl">
                  <p className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Questions Banner - Floating Container */}
          <div className="bg-slate-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-12">
            <p className="text-white font-bold text-lg md:text-xl">Still have specific questions?</p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-brand-orange text-white py-3 md:py-4 px-6 md:px-8 rounded-full font-black uppercase tracking-widest hover:bg-[#C0392B] transition-colors inline-flex items-center gap-2 text-sm md:text-base"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              Send us a message
            </button>
          </div>
        </div>
      </section>

      {/* Review Modal - Instagram Style */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side - Image */}
            <div className="relative w-full md:w-1/2 h-64 md:h-auto aspect-square">
              <Image
                src={selectedReview.image}
                alt={selectedReview.quote}
                fill
                className="object-cover"
              />
            </div>
            {/* Right Side - Review Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
              {/* User Profile */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={selectedReview.avatar}
                    alt={selectedReview.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{selectedReview.name}</h3>
                  <p className="text-sm text-gray-500">Expedition Participant</p>
                </div>
              </div>
              {/* Review Text */}
              <div className="flex-1 overflow-y-auto">
                <p className="text-gray-700 leading-relaxed">
                  &quot;{selectedReview.quote}&quot;
                </p>
              </div>
              {/* Close Button */}
              <button
                onClick={() => setSelectedReview(null)}
                className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
            {/* X Button (Top Right) */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* About Us Section - 50/50 Split */}
      <section className="min-h-screen flex flex-col justify-center bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Founders Photo */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=3000"
                alt="Hikers in the mountains"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            {/* Right: Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                Managed in Munich.
                <br />
                Guided in Kenya.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We cut out the middlemen to give you the rawest adventure in
                Africa. Our team combines German precision with local expertise,
                ensuring every expedition is both safe and authentic.
              </p>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 bg-deep-slate text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Read our Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser Section */}
      <section id="faq" className="min-h-screen flex flex-col justify-center bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-12 text-center tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-slate-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-deep-slate text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              View All Questions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

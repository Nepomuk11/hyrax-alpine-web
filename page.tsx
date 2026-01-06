'use client';

import { ArrowRight, Users, Shield, DollarSign, Mountain } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const expeditions = [
    {
      slug: 'naro-moru-route',
      title: 'Naro Moru Route',
      badge: 'Pro',
      price: '€1,450',
      image: 'https://source.unsplash.com/800x600/?mountain,kenya',
    },
    {
      slug: 'sirimon-route',
      title: 'Sirimon Route',
      badge: 'Beginner',
      price: '€1,650',
      image: 'https://source.unsplash.com/800x600/?mountain,climbing',
    },
    {
      slug: 'chogoria-route',
      title: 'Chogoria Route',
      badge: 'Pro',
      price: '€1,850',
      image: 'https://source.unsplash.com/800x600/?mountain,summit',
    },
  ];

  const testimonials = [
    {
      quote: 'Life-changing experience',
      image: 'https://source.unsplash.com/400x500/?person,portrait',
    },
    {
      quote: 'Wilder than I imagined',
      image: 'https://source.unsplash.com/400x600/?person,adventure',
    },
    {
      quote: 'Best expedition ever',
      image: 'https://source.unsplash.com/400x450/?person,hiking',
    },
    {
      quote: 'Already planning my return',
      image: 'https://source.unsplash.com/400x550/?person,outdoor',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-deep-slate text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url(https://source.unsplash.com/1920x1080/?mount-kenya)',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-display font-black mb-6 tracking-tight">
            THE FORGOTTEN
            <br />
            GIANT
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-200">
            Wilder than Kilimanjaro. Cheaper than the Alps.
          </p>
          <Link
            href="#expeditions"
            className="inline-flex items-center bg-burnt-orange text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            VIEW ROUTES
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-ghost-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Users className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-slate mb-2">
                No Mass Tourism
              </h3>
              <p className="text-gray-600">
                Exclusive small groups. Maximum 8 climbers per expedition.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <DollarSign className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-slate mb-2">
                Fair Pay
              </h3>
              <p className="text-gray-600">
                Local guides earn 3x industry standard. Real impact, real
                change.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-slate mb-2">
                German Safety Standards
              </h3>
              <p className="text-gray-600">
                Medical support, satellite communication, proven protocols.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Mountain className="h-16 w-16 text-burnt-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-deep-slate mb-2">
                50% Cheaper than Kili
              </h3>
              <p className="text-gray-600">
                Same altitude. Wilder terrain. Half the price tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section
        id="expeditions"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-black text-deep-slate mb-4 text-center">
            Choose Your Suffering
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Three routes. One goal. Your summit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expeditions.map((expedition) => (
              <div
                key={expedition.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={expedition.image}
                    alt={expedition.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        expedition.badge === 'Pro'
                          ? 'bg-burnt-orange text-white'
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {expedition.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-deep-slate mb-2">
                    {expedition.title}
                  </h3>
                  <p className="text-3xl font-bold text-burnt-orange mb-4">
                    from {expedition.price}
                  </p>
                  <Link
                    href={`/expeditions/${expedition.slug}`}
                    className="inline-block w-full bg-deep-slate text-white px-6 py-3 rounded-md font-bold text-center hover:bg-opacity-90 transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-ghost-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-black text-deep-slate mb-12 text-center">
            They Survived
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <div className="relative h-64 md:h-80">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.quote}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

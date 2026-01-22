'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ExpeditionDetailPage({ params }: PageProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [groupSize, setGroupSize] = useState(2);
  const [notes, setNotes] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Route data based on slug
  const routeData: Record<string, any> = {
    'naro-moru-route': {
      title: 'Naro Moru Route',
      price: '€855',
      description:
        'The classic route with stunning views. This is the most popular path to the summit, offering a perfect balance of challenge and accessibility. The route takes you through diverse ecosystems, from dense forests to alpine zones, culminating in a spectacular sunrise summit.',
    },
    'sirimon-route': {
      title: 'Sirimon Route',
      price: '€900',
      description:
        'Gentle ascent perfect for first-timers. The Sirimon Route is known for its gradual incline and beautiful scenery. It\'s ideal for those new to high-altitude climbing, offering a less strenuous path while still providing the full Mount Kenya experience.',
    },
    'chogoria-route': {
      title: 'Chogoria Route',
      price: '€950',
      description:
        'The most challenging and rewarding path. For experienced climbers seeking the ultimate adventure, the Chogoria Route offers rugged terrain, stunning vistas, and a true test of endurance. This route rewards the brave with unparalleled views and a sense of achievement.',
    },
  };

  const route = routeData[params.slug] || routeData['sirimon-route'];

  const galleryImages = [
    'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=3000',
    'https://images.unsplash.com/photo-1545158828-56eb0d15746e?q=80&w=3000',
    'https://images.unsplash.com/photo-1605540459523-289b52a514d9?q=80&w=3000',
    'https://images.unsplash.com/photo-1502161254066-6c74af72d5c8?q=80&w=3000',
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="font-sans tracking-tight bg-white min-h-screen">
      {/* Two Column Layout - Bike Shop Style */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Content (Scrolls) */}
            <div className="lg:col-span-2 space-y-12">
              {/* Main Image Gallery */}
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
                <Image
                  src={galleryImages[currentImageIndex]}
                  alt={`${route.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                />
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-4xl font-display font-black text-slate-900 mb-6 tracking-tight">
                  About the {route.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    {route.description}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    The expedition typically spans 4-5 days, depending on weather
                    conditions and group pace. You'll experience diverse ecosystems,
                    from montane forests to alpine zones, with each day bringing new
                    challenges and breathtaking views.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our experienced guides will ensure your safety while sharing their
                    knowledge of the mountain's history, geology, and wildlife. All
                    equipment, meals, and park fees are included in the price.
                  </p>
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-4xl font-display font-black text-slate-900 mb-6 tracking-tight">
                  Itinerary
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-burnt-orange pl-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Day 1: Arrival & Acclimatization</h3>
                    <p className="text-gray-600">Arrive in Nairobi, meet your guide, and transfer to base camp. Briefing and gear check.</p>
                  </div>
                  <div className="border-l-4 border-burnt-orange pl-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Day 2-3: Ascent</h3>
                    <p className="text-gray-600">Gradual climb through diverse ecosystems. Overnight at mountain huts.</p>
                  </div>
                  <div className="border-l-4 border-burnt-orange pl-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Day 4: Summit</h3>
                    <p className="text-gray-600">Early morning summit attempt. Return to base camp for celebration.</p>
                  </div>
                  <div className="border-l-4 border-burnt-orange pl-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Day 5: Departure</h3>
                    <p className="text-gray-600">Return to Nairobi. Airport transfer included.</p>
                  </div>
                </div>
              </div>

              {/* Elevation Profile */}
              <div>
                <h2 className="text-4xl font-display font-black text-slate-900 mb-6 tracking-tight">
                  Höhenprofil
                </h2>
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3540&auto=format&fit=crop"
                    alt="Elevation Profile"
                    fill
                    className="object-cover rounded-2xl opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 text-lg">Elevation Profile Visualization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sticky Booking Box */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 self-start bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-display font-black text-slate-900 mb-4 tracking-tight">
                  Book Your Expedition
                </h2>

                <div className="space-y-3">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-sm"
                    />
                  </div>

                  {/* Group Size */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Group Size
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="8"
                      value={groupSize}
                      onChange={(e) => setGroupSize(parseInt(e.target.value) || 2)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-sm"
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-sm"
                      placeholder="Any special requests or questions..."
                    />
                  </div>
                </div>

                {/* Price Display */}
                <div className="mt-4 mb-4 pb-4 border-b border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Price</p>
                  <p className="text-3xl font-bold text-burnt-orange">
                    {route.price}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">per person</p>
                </div>

                {/* Request Button */}
                <Link
                  href="/login"
                  className="w-full bg-[#D35400] text-white px-6 py-4 rounded-full font-black uppercase tracking-widest text-center hover:bg-[#C0392B] transition-colors inline-flex items-center justify-center gap-2"
                >
                  CHECK AVAILABILITY
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

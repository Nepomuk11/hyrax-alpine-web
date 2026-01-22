import Image from 'next/image';
import Link from 'next/link';

export default function MissionPage() {
  return (
    <div className="font-sans tracking-tight bg-white min-h-screen">
      {/* Simple Header */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-12 text-center tracking-tight">
            THE MISSION
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Founders Image */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=3000"
                alt="Founders in the mountains"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            {/* Right: Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                No Middlemen
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We cut out the middlemen to give you the rawest adventure in
                Africa. Our team combines German precision with local expertise,
                ensuring every expedition is both safe and authentic.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in Munich, guided in Kenya. We work directly with local
                guides and porters, ensuring fair pay and authentic experiences.
                No tour operators, no markups—just pure adventure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every expedition is limited to 8 climbers. We believe in small
                groups, big experiences, and real connections with the mountain
                and the people who call it home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

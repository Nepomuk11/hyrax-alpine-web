import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function JournalPage() {
  const articles = [
    {
      id: 1,
      title: 'Summit Day: A First-Timer\'s Perspective',
      image: 'https://images.unsplash.com/photo-1502161254066-6c74af72d5c8?q=80&w=3000',
      excerpt: 'What it\'s really like to stand on the peak at 5,199m.',
    },
    {
      id: 2,
      title: 'Training for Mount Kenya: A 12-Week Guide',
      image: 'https://images.unsplash.com/photo-1520972746411-9e8c467a1458?q=80&w=3000',
      excerpt: 'How to prepare your body and mind for the climb.',
    },
    {
      id: 3,
      title: 'The Porters\' Story: Behind the Scenes',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=3000',
      excerpt: 'Meet the local heroes who make every expedition possible.',
    },
  ];

  return (
    <div className="font-sans tracking-tight bg-white min-h-screen">
      {/* Simple Header */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-12 text-center tracking-tight">
            FIELD NOTES
          </h1>
        </div>
      </section>

      {/* Blog Index */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 mb-12 text-center tracking-tight">
            Field Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

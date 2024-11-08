import Image from 'next/image';

export default function FeaturedContent() {
  const features = [
    {
      title: '茶道',
      description: '日本の伝統的なお茶の作法と精神について学びます。',
      image: '/images/tea-ceremony.jpg'
    },
    {
      title: '華道',
      description: '日本の花道の歴史と現代的なアレンジメントを探求します。',
      image: '/images/ikebana.jpg'
    },
    {
      title: '書道',
      description: '漢字の美しさと書道の技法を学びましょう。',
      image: '/images/calligraphy.jpg'
    }
  ];

  return (
    <section className="py-12">
      <h2 className="section-title">文化探訪</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="card group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20">
                <div className="absolute inset-0 japanese-pattern opacity-10" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <button className="mt-4 text-red-700 font-medium hover:text-red-800">
                詳しく見る →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
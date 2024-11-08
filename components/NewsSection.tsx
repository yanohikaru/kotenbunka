import Image from 'next/image';

export default function NewsSection() {
  const news = [
    {
      image: '/images/news-1.jpg',
      date: '2023.09.28',
      title: '伝統工芸の新たな挑戦',
      description: '京都の伝統工芸師たちが、現代のニーズに応える新しい商品開発に取り組んでいます...'
    },
    {
      image: '/images/news-2.jpg',
      date: '2023.09.27',
      title: '若手芸術家の台頭',
      description: '日本の伝統芸術を現代的に解釈する若手アーティストたちの活動が注目を集めています...'
    },
    {
      image: '/images/news-3.jpg',
      date: '2023.09.26',
      title: '海外での評価の高まり',
      description: '日本の伝統文化が海外でも高い評価を受け、新たな展開を見せています...'
    }
  ];

  return (
    <section>
      <h2 className="section-title">最新ニュース</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item, i) => (
          <article key={i} className="card">
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10">
                <div className="absolute inset-0 japanese-pattern opacity-10" />
              </div>
            </div>
            <div className="p-6">
              <span className="text-sm text-red-700">{item.date}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
              <p className="text-gray-600 line-clamp-3">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
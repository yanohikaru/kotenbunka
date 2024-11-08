import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="日本の伝統文化"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="absolute inset-0 japanese-pattern opacity-20" />
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="space-y-6 px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
            日本の心と美
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            古き良き伝統を、現代に紡ぐ
          </p>
          <button className="bg-red-700 text-white px-8 py-3 rounded-full text-lg hover:bg-red-800 transition-colors">
            詳しく見る
          </button>
        </div>
      </div>
    </div>
  );
}
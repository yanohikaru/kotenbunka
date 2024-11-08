import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            和の心
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/news" className="text-gray-600 hover:text-red-700 transition-colors">
              ニュース
            </Link>
            <Link href="/culture" className="text-gray-600 hover:text-red-700 transition-colors">
              文化探訪
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-red-700 transition-colors">
              コミュニティ
            </Link>
            <Link href="/membership" className="text-gray-600 hover:text-red-700 transition-colors">
              会員登録
            </Link>
          </div>

          <button className="md:hidden">
            <span className="sr-only">メニュー</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
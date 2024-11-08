import './globals.css';
import type { Metadata } from 'next';
import { Noto_Serif_JP } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: '和の心 - 日本古典文化の継承と発信',
  description: '日本の伝統文化を世界へ。最新のニュース、コミュニティ、会員限定コンテンツをお届けします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSerifJP.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
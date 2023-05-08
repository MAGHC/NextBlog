import Header from '@/components/Header/Header';
import './globals.css';
import { Oswald } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const owswald = Oswald({ subsets: ['cyrillic'] });

export const metadata = {
  title: '김정수의 블로그',
  description: '모든것을 표현하고싶은 풀스택 개발자 김정수',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={owswald.className}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}

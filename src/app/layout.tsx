import Header from '@/components/Header/Header';
import './globals.css';
import { Oswald } from 'next/font/google';
import Footer from '@/components/Footer/Footer';

const owswald = Oswald({ subsets: ['cyrillic'] });

export const metadata = {
  title: {
    default: '김정수의 블로그',
    template: '김정수의 블로그 | %s',
  },
  description: '모든것을 표현하고싶은 개발자 김정수',
  icons: {
    icon: 'favicon.ico',
  },
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

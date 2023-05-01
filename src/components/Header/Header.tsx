import Link from 'next/link';
import style from './Header.module.css';

const NAV_MENUS = [
  { link: '/', menu: 'Home' },
  { link: '/about', menu: 'About' },
  { link: '/posts', menu: 'Posts' },
  { link: '/contact', menu: 'Contact' },
];

const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <h1 className={style.blogLogo}>{`MAGHC's BLOG`}</h1>
      </Link>

      <nav className={style.nav}>
        {NAV_MENUS.map((nav, i) => {
          return (
            <Link key={i} href={nav.link}>
              {nav.menu}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;

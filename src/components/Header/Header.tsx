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
        <ul className={style.navUl}>
          {NAV_MENUS.map((nav, i) => {
            return (
              <li className={style.navItem} key={i}>
                <Link href={nav.link}>{nav.menu}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

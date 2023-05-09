import style from './AboutSns.module.css';
import Link from 'next/link';

const COMMON_CLIP_STYLE = style.clip;

const SNS_LINKS = [
  {
    css: `${COMMON_CLIP_STYLE} ${style.github} `,
    href: 'https://github.com/MAGHC',
    text: 'GITHUB',
  },
  {
    css: `${COMMON_CLIP_STYLE} ${style.blog}`,
    href: 'https://github.com/MAGHC',
    text: 'BLOG',
  },
  {
    css: `${COMMON_CLIP_STYLE} ${style.portfolio} `,
    href: 'https://aromatic-hosta-c36.notion.site/efeb9b9f68e244adb88cd756bf803960',
    text: 'PORTFOLIO',
  },
];

const AboutSns = () => {
  return (
    <section className={style.aboutSnsSection}>
      <h1 className={style.description}>MY SNS</h1>
      {SNS_LINKS.map((sns, idx) => {
        return (
          <div className={sns.css} key={idx}>
            <Link href={sns.href} target="_blank">
              <h3>{sns.text}</h3>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default AboutSns;

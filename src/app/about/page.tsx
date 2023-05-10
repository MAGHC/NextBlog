import AboutSns from '@/components/AboutSns/AboutSns';

import style from './aboutPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: '하고있는 SNS들',
};

const page = () => {
  return (
    <section className={style.about}>
      <AboutSns></AboutSns>
    </section>
  );
};

export default page;

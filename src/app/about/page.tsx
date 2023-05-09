import AboutSns from '@/components/AboutSns/AboutSns';

import style from './aboutPage.module.css';

const page = () => {
  return (
    <section className={style.about}>
      <AboutSns></AboutSns>
    </section>
  );
};

export default page;

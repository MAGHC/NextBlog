import ContactForm from '@/components/ContactForm/ContactForm';

import style from './contactPage.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ',
  description: '김정수에게 메일보내기',
};

const page = () => {
  return (
    <section className={style.contact}>
      <ContactForm></ContactForm>
    </section>
  );
};

export default page;

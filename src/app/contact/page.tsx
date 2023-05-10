import ContactForm from '@/components/ContactForm/ContactForm';

import style from './contactPage.module.css';

const page = () => {
  return (
    <section className={style.contact}>
      <ContactForm></ContactForm>
    </section>
  );
};

export default page;

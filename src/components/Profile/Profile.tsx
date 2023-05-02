import Image from 'next/image';
import style from './Profile.module.css';
import Link from 'next/link';

const Profile = () => {
  return (
    <section className={style.section}>
      <Image
        className={style.img}
        alt="profile"
        width="200"
        height="200"
        src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      ></Image>
      <div className={style.descriptWrapper}>
        <h1 className={style.description}>
          Hi Im Junior Front-end developer Jungsoo Kim
          <br></br>
          <br />
          무엇이든 표현하고 싶은 <span></span> 을/를 꿈꾸는 개발자!
        </h1>
      </div>
      <Link className={style.contactBtn} href="/contact">
        Contact Me
        <span className={style.contactSpan}></span>
      </Link>
    </section>
  );
};

export default Profile;

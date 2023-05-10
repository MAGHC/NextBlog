'use client';

import { useState } from 'react';

import style from './ContactForm.module.css';
import { StatusBarType } from '../StatusBar/StatusBar';
import StatusBar from '../StatusBar/StatusBar';
import { abstractSendEmail } from '@/service/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_FORM = { from: '', subject: '', message: '' };

const ContactForm = () => {
  const [contactForm, setContactForm] = useState<Form>(DEFAULT_FORM);
  const [statusBar, setStatusBar] = useState<null | StatusBarType>(null);

  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    abstractSendEmail(contactForm)
      .then(() => {
        setStatusBar({ message: '성공', isSuccess: true });
        setContactForm(DEFAULT_FORM);
      })
      .catch(() => {
        setStatusBar({ message: '실패', isSuccess: false });
      })
      .finally(() => {
        setTimeout(() => {
          setStatusBar(null);
        }, 3000);
      });
  };

  return (
    <form onSubmit={submit} className={style.form}>
      {statusBar && <StatusBar status={statusBar}></StatusBar>}
      <div className={style.wrapper}>
        <label htmlFor="from">
          EMAIL <span>*</span>
        </label>
        <input
          onChange={changeForm}
          name="from"
          autoFocus
          required
          id="from"
          type="email"
          value={contactForm.from}
        />
      </div>

      <div className={style.wrapper}>
        <label htmlFor="subject">
          SUBJECT <span>*</span>
        </label>
        <input
          onChange={changeForm}
          name="subject"
          autoFocus
          required
          id="subject"
          type="text"
          value={contactForm.subject}
        />
      </div>
      <div className={style.wrapper}>
        <label htmlFor="message">
          MESSAGE <span>*</span>
        </label>
        <textarea
          onChange={changeForm}
          rows={8}
          name="message"
          autoFocus
          required
          placeholder="보낼메세지를 입력해주세요"
          id="message"
          value={contactForm.message}
        />
      </div>

      <button className={style.submitBtn}>SUBMIT</button>
    </form>
  );
};

export default ContactForm;

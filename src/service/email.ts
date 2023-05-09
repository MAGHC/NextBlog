import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.USER, // generated ethereal user
    pass: process.env.PASS, // generated ethereal password
  },
});
export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.USER,
    subject: `[BLOG] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람 :${from}</p>`,
  };

  return transporter.sendMail(mailData);
}

import { EmailData } from './email';

export async function abstractSendEmail(emailData: EmailData) {
  const res = await fetch('api/conatct', {
    method: 'POST',
    body: JSON.stringify(emailData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  if (!res.ok) throw new Error('something went wrong/500');
  if (res.ok) return data;
}

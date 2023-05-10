import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const schema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!schema.isValidSync(body))
    return new Response(JSON.stringify({ message: '잘못된양식' }), { status: 422 });

  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '성공' }), {
          status: 200,
        }),
    )
    .catch((err) => {
      console.error(err);
      return new Response(JSON.stringify({ message: '실패' }), { status: 500 });
    });
}

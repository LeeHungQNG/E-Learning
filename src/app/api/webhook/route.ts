import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';

// const webhookSecret: string = process.env.WEBHOOK_SECRET || 'your-secret';

export async function POST(req: Request) {
  const svix_id = req.headers.get('svix-id') ?? '';
  const svix_timestamp = req.headers.get('svix-timestamp') ?? '';
  const svix_signature = req.headers.get('svix-signature') ?? '';

  // new config
  if (!process.env.WEBHOOK_SECRET) {
    throw new Error('WEBHOOK_SECRET is not set');
  }

  // new config
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // new config
  const sivx = new Webhook(process.env.WEBHOOK_SECRET);

  let msg: WebhookEvent;

  try {
    msg = sivx.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.log('🚀 ~ POST ~ err:', err);
    return new Response('Bad Request', { status: 400 });
  }

  const eventType = msg.type;
  if (eventType === 'user.created') {
    // create user to database
    console.log('🚀 ~ POST ~ msg.data:', msg.data);
  }

  // Rest

  return new Response('OK', { status: 200 });
}

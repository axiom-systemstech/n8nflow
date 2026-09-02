import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !CHAT_ID) {
      return NextResponse.json({ error: 'Faltan variables de entorno' }, { status: 500 });
    }

    const text = `🚀 **Nuevo Lead en n8nflow**\n\n📧 **Email:** ${email}\n💬 **Mensaje:** ${message || 'Sin mensaje'}`;

    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error enviando notificación' }, { status: 500 });
  }
}


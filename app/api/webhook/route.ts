import { NextRequest, NextResponse } from 'next/server';

// 1. Validação exigida pela Meta (GET)
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const VERIFY_TOKEN = 'credvale_token_secreto_123';

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      return new NextResponse(challenge, { status: 200 });
    } else {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }
  return new NextResponse('Bad Request', { status: 400 });
}

// Função auxiliar para enviar a mensagem via API da Meta
async function sendWhatsAppMessage(recipientPhone: string, messageText: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN; // Token de acesso permanente da Meta
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID; // ID do número de telefone do WhatsApp Business

  if (!token || !phoneNumberId) {
    console.error('Credenciais do WhatsApp (Token ou Phone ID) não configuradas no .env');
    return;
  }

  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipientPhone,
        text: { body: messageText },
      }),
    });

    const data = await response.json();
    console.log('Mensagem enviada com sucesso:', data);
  } catch (error) {
    console.error('Erro ao enviar mensagem para o WhatsApp:', error);
  }
}

// 2. Recebimento das mensagens enviadas pelos clientes (POST)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.object === 'whatsapp_business_account') {
      for (const entry of body.entry) {
        for (const change of entry.changes) {
          const value = change.value;
          if (value.messages && value.messages.length > 0) {
            const message = value.messages[0];
            const senderPhone = message.from; // Número do cliente
            const messageText = message.text?.body?.toLowerCase() || '';

            console.log(`Mensagem recebida de ${senderPhone}: ${messageText}`);

            // Texto do menu interativo da CredVale
            const menuResposta = 
              `Olá! Seja bem-vindo à *CredVale Soluções*. 🤝\n\n` +
              `Especialistas em consórcios e seguros sob medida. Como podemos ajudar hoje?\n\n` +
              `1️⃣ *Consórcio Imobiliário* (Realize o sonho da casa própria)\n` +
              `2️⃣ *Consórcio de Automóveis* (Planeje seu veículo com segurança)\n` +
              `3️⃣ *Seguros sob medida* (Proteção para o que importa)\n` +
              `4️⃣ *Falar com um Especialista*\n\n` +
              `Responda com o número da opção desejada para continuarmos!`;

            // Envia a resposta automática para o número que mandou a mensagem
            await sendWhatsAppMessage(senderPhone, menuResposta);
          }
        }
      }
      return new NextResponse('EVENT_RECEIVED', { status: 200 });
    }

    return new NextResponse('Not Found', { status: 404 });
  } catch (error) {
    console.error('Erro no webhook:', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
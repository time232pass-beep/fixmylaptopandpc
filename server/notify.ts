import nodemailer from 'nodemailer';

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export async function notifyAll(payload: ContactPayload) {
  const results: { email?: unknown; whatsapp?: unknown } = {};

  // Email (Nodemailer)
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyTo = process.env.NOTIFY_TO || 'fixmylaptopandpc@gmail.com';

  console.log('[NOTIFY] Email config check:', {
    hasSmtpUser: !!smtpUser,
    hasSmtpPass: !!smtpPass,
    notifyTo,
    smtpUserPrefix: smtpUser?.substring(0, 5) + '***'
  });

  if (smtpUser && smtpPass) {
    try {
      console.log('[NOTIFY] Creating email transporter...');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: smtpUser, pass: smtpPass },
      });

      const subject = `New Contact Submission: ${payload.name || 'Unknown'}`;
      const text = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Service: ${payload.service}`,
        `Message: ${payload.message}`,
      ].join('\n');

      console.log('[NOTIFY] Sending email to:', notifyTo);
      const info = await transporter.sendMail({
        from: smtpUser,
        to: notifyTo,
        subject,
        text,
      });
      console.log('[NOTIFY] Email sent successfully:', info.messageId);
      results.email = { messageId: info.messageId };
    } catch (e) {
      // Log error but don't break request flow
      console.error('[NOTIFY] Email send error:', (e as Error).message);
      results.email = { error: (e as Error).message };
    }
  } else {
    console.log('[NOTIFY] Email skipped - missing SMTP credentials');
  }

  // WhatsApp (Meta Cloud API)
  const waToken = process.env.WHATSAPP_TOKEN; // permanent token
  const waPhoneId = process.env.WHATSAPP_PHONE_ID; // phone number ID
  const waTo = (process.env.WHATSAPP_TO || '+919373285987').replace(/\s+/g, '');

  if (waToken && waPhoneId) {
    try {
      const body = {
        messaging_product: 'whatsapp',
        to: waTo,
        type: 'text',
        text: {
          body: `New contact inquiry\n\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nService: ${payload.service}\nMessage: ${payload.message}`,
        },
      };

      const resp = await fetch(`https://graph.facebook.com/v19.0/${waPhoneId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${waToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const json = await resp.json();
      results.whatsapp = json;
    } catch (e) {
      results.whatsapp = { error: (e as Error).message };
    }
  }

  return results;
}

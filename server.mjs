import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import express from 'express';
import nodemailer from 'nodemailer';

const root = resolve('.');

loadLocalEnv();

const app = express();
const distDir = join(root, 'dist');
const port = Number(process.env.PORT || 3001);
const registrationTo = process.env.REGISTRATION_TO || 'Plq@Deawakf.Org';

app.use(express.json({ limit: '64kb' }));

app.post('/api/register', async (request, response) => {
  const { fields = [], language = 'ar' } = request.body || {};

  if (!Array.isArray(fields) || fields.length === 0) {
    return response.status(400).json({ message: 'Registration fields are required.' });
  }

  const missingConfig = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'].filter((key) => !process.env[key]);

  if (missingConfig.length > 0) {
    return response.status(503).json({
      message: `Email service is not configured. Missing: ${missingConfig.join(', ')}`,
    });
  }

  const safeFields = fields.map((field) => ({
    label: String(field.label || '').slice(0, 80),
    value: String(field.value || '-').slice(0, 1000),
  }));
  const subject = language === 'en' ? 'New conference registration' : 'تسجيل جديد في المؤتمر';
  const htmlRows = safeFields
    .map(({ label, value }) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`)
    .join('');
  const text = safeFields.map(({ label, value }) => `${label}: ${value}`).join('\n');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: registrationTo,
    replyTo: safeFields.find((field) => /mail|بريد/i.test(field.label))?.value,
    subject,
    text,
    html: `
      <div dir="${language === 'en' ? 'ltr' : 'rtl'}" style="font-family: Arial, sans-serif; line-height: 1.7;">
        <h2>${escapeHtml(subject)}</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          ${htmlRows}
        </table>
      </div>
    `,
  });

  return response.json({ ok: true });
});

if (existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get(/^(?!\/api\/).*/, (request, response, next) => {
    if (request.path.startsWith('/api/')) {
      return next();
    }

    response.sendFile(join(distDir, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Registration server listening on http://localhost:${port}`);
});

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function loadLocalEnv() {
  const envPath = join(root, '.env');

  if (!existsSync(envPath)) {
    return;
  }

  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) {
      continue;
    }

    const [key, ...rest] = trimmed.split('=');
    const value = rest.join('=').trim().replace(/^["']|["']$/g, '');
    process.env[key.trim()] ||= value;
  }
}

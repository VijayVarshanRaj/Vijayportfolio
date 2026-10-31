import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Rate limiter storage: IP -> Array of timestamps
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

/**
 * Basic in-memory IP rate limiter to protect endpoint from abuse
 */
export function checkRateLimit(clientIp) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(clientIp) || [];

  // Clean expired timestamps
  const validTimestamps = timestamps.filter(time => now - time < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = validTimestamps[0];
    const waitSeconds = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 1000);
    return { allowed: false, waitSeconds };
  }

  validTimestamps.push(now);
  rateLimitMap.set(clientIp, validTimestamps);
  return { allowed: true };
}

/**
 * Sanitize text to prevent HTML injection in emails
 */
export function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Validate input fields
 */
export function validateContactForm({ name, email, subject, message }) {
  const errors = {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    errors.name = 'Your name is required.';
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (name.trim().length > 100) {
    errors.name = 'Name must be under 100 characters.';
  }

  if (email && typeof email === 'string' && email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    } else if (email.trim().length > 150) {
      errors.email = 'Email address is too long.';
    }
  }

  if (!subject || typeof subject !== 'string' || !subject.trim()) {
    errors.subject = 'Subject / Discussion Topic is required.';
  } else if (subject.trim().length < 2) {
    errors.subject = 'Subject must be at least 2 characters.';
  } else if (subject.trim().length > 200) {
    errors.subject = 'Subject must be under 200 characters.';
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    errors.message = 'Message content is required.';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (message.trim().length > 5000) {
    errors.message = 'Message must be under 5000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Send email via Resend SDK
 */
export async function sendContactEmail({ name, email, subject, message, clientIp }) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !apiKey.trim() || apiKey.trim() === '') {
    throw new Error('RESEND_NOT_CONFIGURED');
  }

  const resend = new Resend(apiKey.trim());

  const recipient  = process.env.CONTACT_EMAIL || 'iamvarshanraj@gmail.com';
  const fromEmail  = process.env.FROM_EMAIL     || 'onboarding@resend.dev';
  const fromName   = process.env.FROM_NAME      || 'Vijay Portfolio Contact Form';

  const senderEmail  = email ? email.trim() : null;
  const safeName     = sanitize(name.trim());
  const safeSubject  = sanitize(subject.trim());
  const safeMessage  = sanitize(message.trim()).replace(/\n/g, '<br/>');
  const safeEmail    = senderEmail ? sanitize(senderEmail) : 'Not provided';
  const timestamp    = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

  // Cinematic dark + crimson styled HTML email
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #090909; color: #F5F5F5; margin: 0; padding: 24px; }
      .card { max-width: 600px; margin: 0 auto; background-color: #111111; border: 1px solid #303030; border-radius: 12px; overflow: hidden; }
      .header { background: linear-gradient(135deg, #191919 0%, #251014 100%); padding: 24px; border-bottom: 2px solid #D7192D; }
      .badge { display: inline-block; font-size: 11px; font-weight: 700; color: #D7192D; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; }
      .title { font-size: 20px; font-weight: 800; color: #FFFFFF; margin: 0; }
      .content { padding: 24px; }
      .field { margin-bottom: 16px; }
      .label { font-size: 11px; font-weight: 700; color: #A6A6A6; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
      .value { font-size: 14px; color: #FFFFFF; background-color: #191919; padding: 10px 14px; border-radius: 6px; border: 1px solid #292929; word-break: break-all; }
      .message-box { background-color: #191919; padding: 16px; border-radius: 8px; border: 1px solid #303030; color: #F5F5F5; font-size: 14px; line-height: 1.6; }
      .footer { padding: 16px 24px; background-color: #0d0d0d; border-top: 1px solid #202020; font-size: 11px; color: #737373; text-align: center; }
      .reply-btn { display: inline-block; margin-top: 16px; background-color: #D7192D; color: #FFFFFF !important; text-decoration: none; font-weight: 700; font-size: 12px; padding: 10px 20px; border-radius: 6px; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="header">
        <div class="badge">Portfolio Inquiry</div>
        <h1 class="title">${safeSubject}</h1>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Sender Name</div>
          <div class="value">${safeName}</div>
        </div>
        <div class="field">
          <div class="label">Reply-To Email</div>
          <div class="value">${safeEmail}</div>
        </div>
        <div class="field">
          <div class="label">Received At</div>
          <div class="value">${timestamp} (IST)</div>
        </div>
        <div class="field">
          <div class="label">Message</div>
          <div class="message-box">${safeMessage}</div>
        </div>
        ${senderEmail ? `<a href="mailto:${senderEmail}?subject=Re: ${encodeURIComponent(subject.trim())}" class="reply-btn">Reply Directly to ${safeName}</a>` : ''}
      </div>
      <div class="footer">
        Delivered from Vijay Varshan Raj G J · Portfolio Contact System
      </div>
    </div>
  </body>
</html>`;

  const text = `[Portfolio Inquiry] ${subject.trim()}

Sender: ${name.trim()}
Email: ${senderEmail || 'Not provided'}
Date: ${timestamp} IST

Message:
${message.trim()}

---
Delivered from Vijay Varshan Raj G J Portfolio`.trim();

  const payload = {
    from: `${fromName} <${fromEmail}>`,
    to:   [recipient],
    subject: `[Portfolio Inquiry] ${subject.trim()} — from ${name.trim()}`,
    html,
    text,
  };

  // Set Reply-To to visitor's email when provided
  if (senderEmail) {
    payload.reply_to = `${name.trim()} <${senderEmail}>`;
  }

  const { data, error } = await resend.emails.send(payload);

  if (error) {
    console.error('[Resend] Delivery error:', error);
    throw new Error(error.message || 'EMAIL_DELIVERY_FAILED');
  }

  return data;
}

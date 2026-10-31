import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { validateContactForm, checkRateLimit, sendContactEmail } from './mailer.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend
app.use(cors({
  origin: true,
  credentials: true
}));

// Body parser with 50kb limit to prevent payload attacks
app.use(express.json({ limit: '50kb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    recipient: process.env.CONTACT_EMAIL || process.env.RECIPIENT_EMAIL || 'iamvarshanraj@gmail.com',
    resendConfigured: Boolean(process.env.RESEND_API_KEY)
  });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const clientIp = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';

    // 1. In-memory Rate Limiting
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return res.status(429).json({
        success: false,
        error: 'RATE_LIMITED',
        message: `Too many submissions from your connection. Please wait ${rateCheck.waitSeconds} seconds before trying again.`
      });
    }

    // 2. Validate incoming fields
    const { name, email, subject, message } = req.body || {};
    const validation = validateContactForm({ name, email, subject, message });

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'VALIDATION_FAILED',
        errors: validation.errors,
        message: 'Please review and correct the errors in the form.'
      });
    }

    // 3. Attempt Email Delivery
    try {
      await sendContactEmail({ name, email, subject, message, clientIp });

      return res.status(200).json({
        success: true,
        message: "Message sent successfully! I'll get back to you soon."
      });
    } catch (mailError) {
      console.error('[Email Error]:', mailError);

      if (mailError.message === 'RESEND_NOT_CONFIGURED' || mailError.message === 'SMTP_NOT_CONFIGURED') {
        return res.status(503).json({
          success: false,
          error: 'EMAIL_SERVICE_NOT_CONFIGURED',
          message: 'Email service credentials are not yet configured on the server. Please email directly to iamvarshanraj@gmail.com.'
        });
      }

      return res.status(500).json({
        success: false,
        error: 'DELIVERY_FAILED',
        message: "Message could not be sent. Please try again or email me directly."
      });
    }
  } catch (err) {
    console.error('[Server Error]:', err);
    return res.status(500).json({
      success: false,
      error: 'SERVER_ERROR',
      message: 'An unexpected error occurred. Please try again or reach out directly.'
    });
  }
});

// Start listening if run directly
app.listen(PORT, () => {
  console.log(`[Vijay Portfolio API] Server running on http://127.0.0.1:${PORT}`);
  console.log(`[Recipient]: ${process.env.RECIPIENT_EMAIL || 'iamvarshanraj@gmail.com'}`);
  console.log(`[SMTP Configured]: ${Boolean(process.env.SMTP_USER && process.env.SMTP_PASS)}`);
});

export default app;

import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import { validateContactForm, checkRateLimit, sendContactEmail } from './server/mailer.js';

function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url) {
          next();
          return;
        }

        if (req.url === '/api/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            status: 'ok',
            recipient: process.env.CONTACT_EMAIL || process.env.RECIPIENT_EMAIL || 'iamvarshanraj@gmail.com',
            resendConfigured: Boolean(process.env.RESEND_API_KEY)
          }));
          return;
        }

        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1';
              const rateCheck = checkRateLimit(clientIp);
              if (!rateCheck.allowed) {
                res.statusCode = 429;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'RATE_LIMITED',
                  message: `Too many submissions. Please wait ${rateCheck.waitSeconds} seconds before trying again.`
                }));
                return;
              }

              let data: any = {};
              try {
                data = JSON.parse(body || '{}');
              } catch {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload' }));
                return;
              }

              const { name, email, subject, message } = data;
              const validation = validateContactForm({ name, email, subject, message });
              if (!validation.isValid) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'VALIDATION_FAILED',
                  errors: validation.errors,
                  message: 'Please review and correct the errors in the form.'
                }));
                return;
              }

              try {
                await sendContactEmail({ name, email, subject, message, clientIp });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: true,
                  message: "Message sent successfully! I'll get back to you soon."
                }));
              } catch (mailError: any) {
                console.error('[Dev API Mail Error]:', mailError);
                if (mailError && (mailError.message === 'RESEND_NOT_CONFIGURED' || mailError.message === 'SMTP_NOT_CONFIGURED')) {
                  res.statusCode = 503;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({
                    success: false,
                    error: 'EMAIL_SERVICE_NOT_CONFIGURED',
                    message: 'Email service credentials are not yet configured on the server. Please email directly to iamvarshanraj@gmail.com.'
                  }));
                  return;
                }
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'DELIVERY_FAILED',
                  message: "Message could not be sent. Please try again or email me directly."
                }));
              }
            } catch (err) {
              console.error('[Dev API Server Error]:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: 'SERVER_ERROR',
                message: 'An unexpected error occurred. Please try again or reach out directly.'
              }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
  server: {
    port: 5173,
    open: false,
    host: true
  }
});

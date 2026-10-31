import { validateContactForm, checkRateLimit, sendContactEmail } from '../../server/mailer.js';

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };
  }

  try {
    const clientIp = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown';

    // 1. Rate Limit
    const rateCheck = checkRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return {
        statusCode: 429,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          error: 'RATE_LIMITED',
          message: `Too many submissions. Please wait ${rateCheck.waitSeconds} seconds before trying again.`
        })
      };
    }

    // 2. Validate
    let data = {};
    try {
      data = JSON.parse(event.body || '{}');
    } catch {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, message: 'Invalid JSON payload' })
      };
    }

    const { name, email, subject, message } = data;
    const validation = validateContactForm({ name, email, subject, message });

    if (!validation.isValid) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          error: 'VALIDATION_FAILED',
          errors: validation.errors,
          message: 'Please review and correct the errors in the form.'
        })
      };
    }

    // 3. Send Email
    try {
      await sendContactEmail({ name, email, subject, message, clientIp });

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          message: "Message sent successfully! I'll get back to you soon."
        })
      };
    } catch (mailError) {
      console.error('[Netlify Mail Error]:', mailError);

      if (mailError.message === 'RESEND_NOT_CONFIGURED' || mailError.message === 'SMTP_NOT_CONFIGURED') {
        return {
          statusCode: 503,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: false,
            error: 'EMAIL_SERVICE_NOT_CONFIGURED',
            message: 'Email service credentials are not yet configured on the server. Please email directly to iamvarshanraj@gmail.com.'
          })
        };
      }

      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: false,
          error: 'DELIVERY_FAILED',
          message: "Message could not be sent. Please try again or email me directly."
        })
      };
    }
  } catch (err) {
    console.error('[Netlify Function Error]:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error: 'SERVER_ERROR',
        message: 'An unexpected error occurred. Please try again or reach out directly.'
      })
    };
  }
};

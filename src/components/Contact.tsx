import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, AlertCircle, CheckCircle2, Loader2, ExternalLink } from 'lucide-react';
import { profileData } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface SubmissionStatus {
  type: 'success' | 'error';
  message: string;
  mailtoFallback?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject or discussion topic.';
    } else if (formData.subject.trim().length < 2) {
      errs.subject = 'Subject must be at least 2 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    // Clear status message when user modifies input
    if (submissionStatus && submissionStatus.type === 'error') {
      setSubmissionStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Build fallback mailto URL in case backend is offline or SMTP is unconfigured
    const senderNote = formData.email ? `From: ${formData.name} <${formData.email}>` : `From: ${formData.name}`;
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailBody = encodeURIComponent(`${senderNote}\n\nMessage:\n${formData.message}\n\n---\nSent via Vijay Varshan Raj Portfolio`);
    const mailtoUrl = `mailto:${profileData.contact.email}?subject=${mailSubject}&body=${mailBody}`;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim() || undefined,
          subject: formData.subject.trim(),
          message: formData.message.trim()
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        // Success: display required text and reset form
        setSubmissionStatus({
          type: 'success',
          message: "Message sent successfully! I'll get back to you soon."
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // Failure: keep form values and display error + direct mail fallback
        const errorMessage = result.message || "Message could not be sent. Please try again or email me directly.";
        setSubmissionStatus({
          type: 'error',
          message: errorMessage,
          mailtoFallback: mailtoUrl
        });
      }
    } catch {
      // Network failure / server unreachable: keep form values and provide fallback
      setSubmissionStatus({
        type: 'error',
        message: "Message could not be sent. Please try again or email me directly.",
        mailtoFallback: mailtoUrl
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#090909] relative border-t border-[#303030]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D7192D]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4A0711]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#111111] border border-[#303030] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7192D]" />
            <span className="text-xs font-mono tracking-widest text-[#A6A6A6] uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-condensed font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
            HAVE AN IDEA?
          </h2>
          <h3 className="font-condensed font-black text-3xl sm:text-4xl text-[#D7192D] tracking-wide uppercase mt-1">
            LET'S BUILD SOMETHING MEANINGFUL.
          </h3>
          <p className="text-sm text-[#A6A6A6] max-w-2xl mt-4 leading-relaxed">
            "I'm open to AI/ML engineering opportunities, software development roles, technical collaborations, and research projects that turn ideas into practical solutions."
          </p>
        </div>

        {/* Two Large Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">

          {/* LEFT CARD: Direct Channels */}
          <div className="lg:col-span-5 bg-[#111111] border border-[#303030] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#D7192D] uppercase font-bold block mb-2">
                DIRECT CHANNELS
              </span>
              <h4 className="font-condensed font-bold text-2xl text-white uppercase mb-6">
                CONTACT INFORMATION
              </h4>

              <div className="space-y-5">
                {/* Email Item with COPY EMAIL */}
                <div className="p-4 rounded-xl bg-[#191919] border border-[#252525] hover:border-[#D7192D]/60 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D7192D]" />
                      <span className="text-[10px] font-mono text-[#A6A6A6] uppercase">
                        Official Email
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111] hover:bg-[#D7192D] text-[10px] font-mono text-white transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">COPIED!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#A6A6A6]" />
                          <span>COPY EMAIL</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-sm font-semibold text-white hover:text-[#D7192D] transition-colors break-all"
                  >
                    {profileData.contact.email}
                  </a>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-[#191919] border border-[#252525] hover:border-[#D7192D]/60 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Phone className="w-4 h-4 text-[#D7192D]" />
                    <span className="text-[10px] font-mono text-[#A6A6A6] uppercase">
                      Phone / Mobile
                    </span>
                  </div>
                  <a
                    href={`tel:${profileData.contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-[#D7192D] transition-colors"
                  >
                    {profileData.contact.phone}
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-[#191919] border border-[#252525]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <MapPin className="w-4 h-4 text-[#D7192D]" />
                    <span className="text-[10px] font-mono text-[#A6A6A6] uppercase">
                      Location
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {profileData.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social / Developer Profiles */}
            <div className="mt-8 pt-6 border-t border-[#252525]">
              <span className="text-[10px] font-mono text-[#737373] uppercase tracking-widest block mb-3">
                PROFESSIONAL PROFILES
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#D7192D] text-xs font-bold text-white transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#D7192D]" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#191919] hover:bg-[#202020] border border-[#303030] hover:border-[#D7192D] text-xs font-bold text-white transition-all"
                >
                  <Github className="w-4 h-4 text-[#D7192D]" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Send A Message Direct Backend Flow */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#303030] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono tracking-widest text-[#D7192D] uppercase font-bold">
                  DIRECT API DELIVERY
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#191919] border border-[#303030] text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SMTP Endpoint
                </span>
              </div>
              <h4 className="font-condensed font-bold text-2xl text-white uppercase mb-6">
                DISCUSS AN OPPORTUNITY
              </h4>

              {/* Success Notification */}
              {submissionStatus && submissionStatus.type === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-[#191919] border border-emerald-500/60 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-xs mb-0.5">Message Sent</p>
                    <p className="text-xs text-gray-200">{submissionStatus.message}</p>
                  </div>
                </div>
              )}

              {/* Error Notification with Fallback Link */}
              {submissionStatus && submissionStatus.type === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-[#191919] border border-[#D7192D]/70 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#D7192D] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-xs mb-0.5">Delivery Notice</p>
                      <p className="text-xs text-gray-200">{submissionStatus.message}</p>
                    </div>
                  </div>

                  {submissionStatus.mailtoFallback && (
                    <div className="pt-2 border-t border-[#292929] flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-[#A6A6A6]">
                        Send via your mail client instead:
                      </span>
                      <a
                        href={submissionStatus.mailtoFallback}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#D7192D]/20 hover:bg-[#D7192D] border border-[#D7192D]/40 text-[#D7192D] hover:text-white text-xs font-mono font-bold transition-all"
                      >
                        <span>Open Prefilled Email</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Row: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#191919] border ${
                        errors.name ? 'border-red-500' : 'border-[#303030]'
                      } focus:border-[#D7192D] text-sm text-white placeholder-gray-600 transition-colors focus:outline-none disabled:opacity-60`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 font-mono mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase mb-1.5">
                      YOUR EMAIL (OPTIONAL)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg bg-[#191919] border ${
                        errors.email ? 'border-red-500' : 'border-[#303030]'
                      } focus:border-[#D7192D] text-sm text-white placeholder-gray-600 transition-colors focus:outline-none disabled:opacity-60`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 font-mono mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-gray-300 uppercase mb-1.5">
                    SUBJECT / DISCUSSION TOPIC *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="e.g. AI / ML Engineering Opportunity"
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#191919] border ${
                      errors.subject ? 'border-red-500' : 'border-[#303030]'
                    } focus:border-[#D7192D] text-sm text-white placeholder-gray-600 transition-colors focus:outline-none disabled:opacity-60`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 font-mono mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Describe your technical challenge, collaboration, or opportunity..."
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#191919] border ${
                      errors.message ? 'border-red-500' : 'border-[#303030]'
                    } focus:border-[#D7192D] text-sm text-white placeholder-gray-600 transition-colors focus:outline-none resize-none disabled:opacity-60`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 font-mono mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Bottom Row */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-[#737373]">
                    Delivers to <strong className="text-gray-300">{profileData.contact.email}</strong>
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-[#D7192D] hover:bg-[#b51425] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(215,25,45,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE DIRECTLY</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle2, AlertCircle, BookOpen, Facebook } from 'lucide-react';
import { portfolioData } from '../data';

export default function Contact({ onNotify }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Verification Errors State
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('rifat_portfolio_transmissions');
    return saved ? JSON.parse(saved) : [];
  });

  const clearMessages = () => {
    localStorage.removeItem('rifat_portfolio_transmissions');
    setMessages([]);
    onNotify({
      title: 'Transmissions Purged',
      message: 'Self-sent outbox cached data cleared successfully.',
      type: 'info'
    });
  };

  const validateForm = () => {
    const tempErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    if (!formData.name.trim()) tempErrors.name = 'Full name is required.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email format.';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject heading is required.';
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Detailed message is required.';
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = 'Message must contain at least 15 characters.';
    }

    setErrors(tempErrors);
    return !tempErrors.name && !tempErrors.email && !tempErrors.subject && !tempErrors.message;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Dismiss field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      onNotify({
        title: 'Validation Failed',
        message: 'Please resolve errors in the form input fields and try again.',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate Server Endpoint Dispatch (AJAX)
    setTimeout(() => {
      const newMsg = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      const updated = [newMsg, ...messages];
      setMessages(updated);
      localStorage.setItem('rifat_portfolio_transmissions', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      onNotify({
        title: 'Message Dispatched',
        message: `Thank you, ${formData.name}! Your message has been sent to ${portfolioData.email} successfully.`,
        type: 'success'
      });
      
      // Clear inputs
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear Success message overlay after a few seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative px-6 sm:px-8 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900/40"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-[#14b8a6] font-bold block mb-2"
          >
            S06 // DIALOGUE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white mb-3 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <div className="w-12 h-1 bg-[#104e5b] dark:bg-[#14b8a6] mx-auto rounded-full" />
        </div>

        {/* Double Column content frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column Detail Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-sans">
                Let's discuss something great!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                I am actively seeking professional collaboration opportunities, engineering internships, and frontend development positions. Feel free to reach out via email or submit the secure form directly!
              </p>

              {/* Informative nodes lists */}
              <div className="space-y-4">
                {/* Node Email */}
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#0c2e36] border border-slate-200/40 dark:border-[#103d47] p-4 rounded-2xl group hover:border-[#14b8a6]/40 transition-all shadow-sm">
                  <div className="p-3 bg-teal-500/10 text-[#14b8a6] rounded-xl group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-none mb-1">E-Mail Address</span>
                    <a href={`mailto:${portfolioData.email}`} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#14b8a6] transition-colors font-sans">
                      {portfolioData.email}
                    </a>
                  </div>
                </div>

                {/* Node Telephone */}
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#0c2e36] border border-slate-200/40 dark:border-[#103d47] p-4 rounded-2xl group hover:border-[#14b8a6]/40 transition-all shadow-sm">
                  <div className="p-3 bg-teal-500/10 text-[#14b8a6] rounded-xl group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Call</span>
                    <a href={`tel:${portfolioData.phone}`} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#14b8a6] transition-colors font-sans">
                      {portfolioData.phone}
                    </a>
                  </div>
                </div>

                {/* Node Map */}
                <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#0c2e36] border border-slate-200/40 dark:border-[#103d47] p-4 rounded-2xl group hover:border-[#14b8a6]/40 transition-all shadow-sm">
                  <div className="p-3 bg-teal-500/10 text-[#14b8a6] rounded-xl group-hover:scale-105 transition-transform">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-none mb-1">Standard Location</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 font-sans">
                      {portfolioData.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Social Network blocks */}
            <div className="mt-8 pt-8 border-t border-slate-150 dark:border-[#103d47]/60">
              <span className="block font-mono text-[10px] text-slate-405 uppercase tracking-widest mb-4">
                Other Network Rails
              </span>
              <div className="flex gap-3">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-[#0c2e36] border border-slate-200/50 dark:border-[#103d47] text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] dark:hover:text-[#14b8a6] hover:border-[#14b8a6]/45 flex items-center justify-center transition-all hover:-translate-y-1"
                  aria-label="Connect GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-[#0c2e36] border border-slate-200/50 dark:border-[#103d47] text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] dark:hover:text-[#14b8a6] hover:border-[#14b8a6]/45 flex items-center justify-center transition-all hover:-translate-y-1"
                  aria-label="Connect LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={portfolioData.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-[#0c2e36] border border-slate-200/50 dark:border-[#103d47] text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] dark:hover:text-[#14b8a6] hover:border-[#14b8a6]/45 flex items-center justify-center transition-all hover:-translate-y-1 font-mono hover:font-bold text-xs"
                  aria-label="LeetCode Profile"
                >
                  LC
                </a>
                <a
                  href={portfolioData.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-[#0c2e36] border border-slate-200/50 dark:border-[#103d47] text-slate-600 dark:text-slate-300 hover:text-[#14b8a6] dark:hover:text-[#14b8a6] hover:border-[#14b8a6]/45 flex items-center justify-center transition-all hover:-translate-y-1"
                  aria-label="Facebook Profile"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Outbox log queue */}
            {messages.length > 0 && (
              <div className="mt-8 pt-6 border-t border-slate-150 dark:border-[#103d47]/60">
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-404 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-ping inline-block" />
                    Transmission Outbox ({messages.length})
                  </span>
                  <button 
                    type="button"
                    onClick={clearMessages}
                    className="text-[9px] font-mono font-bold text-red-500 hover:text-red-600 tracking-wider uppercase underline cursor-pointer"
                  >
                    Clear Cache
                  </button>
                </div>
                <div className="space-y-3 max-h-52 overflow-y-auto pr-1">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className="p-3.5 bg-slate-50 dark:bg-[#0c2e36]/70 border border-slate-200/50 dark:border-[#103d47] rounded-xl space-y-1 text-left text-xs shadow-sm"
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                        <span className="font-bold text-[#14b8a6] truncate max-w-[120px]">{msg.name}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <p className="font-semibold text-slate-700 dark:text-slate-200 truncate font-sans">Sub: {msg.subject}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] line-clamp-2 leading-tight font-sans">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>

          {/* Right Column Form Space */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#f8fafc] dark:bg-[#0c2e36] p-8 rounded-[2rem] border border-slate-200/40 dark:border-[#103d47] relative overflow-hidden flex flex-col justify-center text-left"
          >
            {/* Dynamic Success View Overlay */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0c2e36] z-10 flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-teal-500/10 text-[#14b8a6] flex items-center justify-center mb-2 shadow-inner">
                      <CheckCircle2 size={38} className="animate-bounce" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      Message Transmitted!
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out. Your transmission has successfully completed and reached {portfolioData.name}'s secure inbox.
                    </p>
                    <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-[#103d47] rounded-xl">
                      <span className="font-mono text-[9px] text-slate-400">SESSION_STATUS // SAFE_DISPATCH</span>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* True Interactive Form */}
            <form onSubmit={handleSubmit} className="space-y-5 relative">
              
              {/* Row 1 Grid: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="form-name" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-300 text-left">
                    FULL NAME *
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`px-4 py-3 bg-white dark:bg-slate-950 rounded-xl border ${
                      errors.name ? 'border-red-500 focus:ring-red-500 font-sans' : 'border-slate-200 dark:border-[#103d47] focus:ring-[#14b8a6] focus:border-[#14b8a6] font-sans'
                    } text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all focus:ring-1`}
                    placeholder={`e.g. ${portfolioData.name}`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-0.5 text-left">
                      <AlertCircle size={10} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Field Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="form-email" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-300 text-left">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`px-4 py-3 bg-white dark:bg-slate-950 rounded-xl border ${
                      errors.email ? 'border-red-500 focus:ring-red-500 font-sans' : 'border-slate-200 dark:border-[#103d47] focus:ring-[#14b8a6] focus:border-[#14b8a6] font-sans'
                    } text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all focus:ring-1`}
                    placeholder="e.g. recruit@company.com"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-0.5 text-left">
                      <AlertCircle size={10} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1">
                <label htmlFor="form-subject" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-300 text-left">
                  SUBJECT LINE *
                </label>
                <input
                  id="form-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`px-4 py-3 bg-white dark:bg-slate-950 rounded-xl border ${
                    errors.subject ? 'border-red-500 font-sans' : 'border-slate-200 dark:border-[#103d47] focus:ring-[#14b8a6] focus:border-[#14b8a6] font-sans'
                  } text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 transition-all`}
                  placeholder="e.g. Junior Frontend Generalist Recruitment"
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-0.5 text-left">
                    <AlertCircle size={10} />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Box */}
              <div className="flex flex-col gap-1">
                <label htmlFor="form-message" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-300 text-left">
                  DETAILED MESSAGE * (MIN. 15 CHARACTERS)
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`px-4 py-3 bg-white dark:bg-slate-950 rounded-xl border ${
                    errors.message ? 'border-red-500 font-sans' : 'border-slate-200 dark:border-[#103d47] focus:ring-[#14b8a6] focus:border-[#14b8a6] font-sans'
                  } text-sm text-slate-900 dark:text-white placeholder-slate-405 focus:outline-none focus:ring-1 transition-all resize-none`}
                  placeholder={`Hello ${portfolioData.name.split(' ')[0]}, we reviewed your MERN stack portfolio and would love to collaborate...`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 font-mono flex items-center gap-1 mt-0.5 text-left">
                    <AlertCircle size={10} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submitting Trigger Trigger */}
              <button
                id="contact-submit-trigger"
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#104e5b] hover:bg-[#156170] dark:bg-[#14b8a6] dark:text-[#07242a] text-white font-bold text-sm transition-all active:scale-98 hover:-translate-y-0.5 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed shadow-md cursor-pointer mt-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                    <span>Transmitting Data...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

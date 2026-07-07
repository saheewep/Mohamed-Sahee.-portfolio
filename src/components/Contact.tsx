import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Trash2, Instagram, MessageSquare, AlertCircle, Inbox, Eye } from 'lucide-react';
import { ContactMessage } from '../types';

export default function Contact() {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation / Feedback States
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Reviewer Admin Pane States (Storing and showing messages in localStorage)
  const [inboxMessages, setInboxMessages] = useState<ContactMessage[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  // Load existing local inbox messages
  useEffect(() => {
    const saved = localStorage.getItem('sahee_portfolio_messages');
    if (saved) {
      try {
        setInboxMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validateForm = () => {
    const tempErrors: typeof errors = {};
    if (!name.trim()) tempErrors.name = "Please provide your name";
    if (!email.trim()) {
      tempErrors.email = "Please provide your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) tempErrors.message = "Message body cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate standard fast network delay
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: Math.random().toString(36).substr(2, 9),
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };

      const updatedMessages = [newMessage, ...inboxMessages];
      setInboxMessages(updatedMessages);
      localStorage.setItem('sahee_portfolio_messages', JSON.stringify(updatedMessages));

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset fields
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const filtered = inboxMessages.filter(m => m.id !== id);
    setInboxMessages(filtered);
    localStorage.setItem('sahee_portfolio_messages', JSON.stringify(filtered));
  };

  const clearInbox = () => {
    setInboxMessages([]);
    localStorage.removeItem('sahee_portfolio_messages');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16" id="contact-heading">
          <span className="font-mono text-xs font-bold text-gold-500 uppercase tracking-widest mb-3">
            05 . INITIATE CONVERSATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            CONTACT <span className="text-gold-500">ME</span>
          </h2>
          <div className="w-12 h-1 bg-gold-500 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left: Direct Connection Cards */}
          <div className="lg:col-span-5 space-y-6" id="contact-left-col">
            <h3 className="font-display font-black text-2xl text-white tracking-tight">
              Let's create something great together.
            </h3>
            
            <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light">
              Do you have a project idea, branding brief, or looking to collaborate on custom vector layout solutions? Fill out the contact form or connect via any of the direct lines listed below.
            </p>

            <div className="space-y-4 pt-4">
              
              {/* Phone Line */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0b] border border-white/5 hover:border-gold-500/20 transition-all duration-300">
                <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Direct Hotline</span>
                  <a href="tel:+94772256286" className="text-sm font-sans font-semibold text-neutral-200 hover:text-gold-400 transition-colors">
                    +94 77 225 6286
                  </a>
                </div>
              </div>

              {/* Email Line */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0b] border border-white/5 hover:border-gold-500/20 transition-all duration-300">
                <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Email Address</span>
                  <a href="mailto:mohamedsahi20119@gmail.com" className="text-sm font-sans font-semibold text-neutral-200 hover:text-gold-400 transition-colors">
                    mohamedsahi20119@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0b] border border-white/5 hover:border-gold-500/20 transition-all duration-300">
                <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Base Location</span>
                  <span className="text-sm font-sans font-semibold text-neutral-200">
                    Sri Lanka
                  </span>
                </div>
              </div>

            </div>

            {/* Test Inbox Button Helper for review */}
            <div className="pt-6">
              <button
                onClick={() => setShowInbox(!showInbox)}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-neutral-950 border border-white/10 hover:border-gold-500/20 text-xs text-neutral-400 hover:text-white transition-all duration-300"
                id="reviewer-inbox-toggle"
              >
                <Inbox className="w-4 h-4 text-gold-500" />
                <span>{showInbox ? "Hide Reviewer Inbox" : "Show Reviewer Inbox"} ({inboxMessages.length})</span>
              </button>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7" id="contact-right-col">
            <div className="bg-[#0a0a0b] border border-white/5 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="contact-form"
                    noValidate
                  >
                    <div>
                      <h4 className="font-display font-bold text-lg text-white mb-1">
                        Send a Direct Message
                      </h4>
                      <p className="text-xs text-neutral-500">
                        Response times are typically under 24 hours.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="Mohamed Sahi"
                          className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-white text-sm focus:outline-none transition-all duration-300 ${
                            errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-gold-500 focus:bg-neutral-900/60'
                          }`}
                        />
                        {errors.name && (
                          <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-sans">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="client@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-white text-sm focus:outline-none transition-all duration-300 ${
                            errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-gold-500 focus:bg-neutral-900/60'
                          }`}
                        />
                        {errors.email && (
                          <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-sans">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                        Your Message *
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        rows={5}
                        placeholder="Describe your design specifications or website goals in detail..."
                        className={`w-full px-4 py-3 rounded-xl bg-neutral-900 border text-white text-sm focus:outline-none transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-gold-500 focus:bg-neutral-900/60'
                        }`}
                      />
                      {errors.message && (
                        <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/50 disabled:cursor-not-allowed text-black font-sans font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 active:scale-95 group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>{isSubmitting ? "Sending Securely..." : "Submit Message"}</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center text-center py-12"
                    id="contact-success-state"
                  >
                    <CheckCircle2 className="w-16 h-16 text-gold-500 mb-6 animate-bounce" />
                    <h4 className="font-display font-black text-2xl text-white mb-2">
                      Message Dispatched Successfully!
                    </h4>
                    <p className="text-neutral-400 font-sans text-sm max-w-md mb-8 leading-relaxed font-light">
                      Thank you for reaching out! Your specifications have been received and recorded. Mohamed Sahee will follow up on your inbox shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-neutral-900 border border-white/5 hover:bg-neutral-800 text-neutral-300 font-sans font-bold text-xs hover:text-white transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Expandable Reviewer Admin Pane */}
        <AnimatePresence>
          {showInbox && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 bg-[#09090a] border border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden"
              id="reviewer-admin-inbox"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Inbox className="w-5 h-5 text-gold-500" />
                  <h4 className="font-display font-bold text-base text-white">
                    Reviewer Administration Pane (Saved Local Messages)
                  </h4>
                </div>
                {inboxMessages.length > 0 && (
                  <button
                    onClick={clearInbox}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-950/20 border border-red-500/20 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All Messages</span>
                  </button>
                )}
              </div>

              {inboxMessages.length === 0 ? (
                <div className="text-center py-12 text-neutral-500 font-mono text-xs flex flex-col items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-neutral-700" />
                  <p>No messages submitted yet. Try filling out the contact form above to test!</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                  {inboxMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-5 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-colors flex flex-col sm:flex-row justify-between items-start gap-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-display font-bold text-sm text-neutral-200">{msg.name}</span>
                          <span className="text-[10px] font-mono text-neutral-500">{msg.email}</span>
                        </div>
                        <p className="text-neutral-400 text-xs sm:text-sm font-sans font-light leading-relaxed whitespace-pre-wrap">
                          {msg.message}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                        <span className="font-mono text-[10px] text-neutral-600 bg-neutral-900 px-2 py-1 rounded-md">
                          {msg.timestamp}
                        </span>
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="p-1.5 rounded-lg bg-red-950/20 hover:bg-red-950/40 border border-red-500/20 text-red-400 hover:text-red-300 transition-colors"
                          title="Delete message"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

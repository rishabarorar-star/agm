import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertTriangle, Loader2, Mail, User, Building, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { productData } from '../data/productData';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    product: productData.fullName
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (apiKey && apiKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Official Web3Forms API Endpoint
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: apiKey,
            subject: `New Product Enquiry: AGM Voyage (${formData.name})`,
            from_name: formData.name,
            name: formData.name,
            company: formData.company || 'N/A',
            email: formData.email,
            phone: formData.phone || 'N/A',
            message: formData.message,
            product: formData.product
          })
        });

        const result = await response.json();
        if (result.success) {
          setSubmitStatus('success');
          setStatusMessage('Thank you. Your enquiry has been received. Our team will contact you shortly.');
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            product: productData.fullName
          });
        } else {
          setSubmitStatus('error');
          setStatusMessage(result.message || "We couldn't submit your enquiry. Please try again.");
        }
      } else {
        // Demo Fallback Simulation Mode (when VITE_WEB3FORMS_ACCESS_KEY is not configured in local environment)
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setSubmitStatus('success');
        setStatusMessage('Thank you. Your enquiry has been received. Our team will contact you shortly.');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          product: productData.fullName
        });
      }
    } catch (err) {
      setSubmitStatus('error');
      setStatusMessage("We couldn't submit your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 bg-[#05070B] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-[#00D9FF]/10 via-[#4EA8FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#081019] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>COMMERCIAL ENQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            REQUEST PRODUCT INFORMATION
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Get in touch with our team for product information, specifications, availability and commercial enquiries.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#081019]/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Prefilled Product Field */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>INTERESTED PRODUCT</span>
              </label>
              <input
                type="text"
                name="product"
                value={formData.product}
                readOnly
                className="w-full px-4 py-3 rounded-lg border border-cyan-500/30 bg-[#05070B] text-gray-300 font-mono text-xs cursor-not-allowed focus:outline-none"
              />
            </div>

            {/* Name + Company Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>FULL NAME *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg border bg-[#05070B] text-white text-sm focus:outline-none transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/10 focus:border-[#00D9FF]'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-400 font-mono">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Building className="w-3.5 h-3.5 text-cyan-400" />
                  <span>COMPANY / ORGANIZATION</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Defense Optics Inc."
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#05070B] text-white text-sm focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
              </div>
            </div>

            {/* Email + Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>EMAIL ADDRESS *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@organization.com"
                  className={`w-full px-4 py-3 rounded-lg border bg-[#05070B] text-white text-sm focus:outline-none transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-white/10 focus:border-[#00D9FF]'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-400 font-mono">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PHONE NUMBER</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#05070B] text-white text-sm focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-300 uppercase tracking-wider flex items-center space-x-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>MESSAGE *</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Specify your inquiry details, technical requirements, or procurement timeline..."
                className={`w-full px-4 py-3 rounded-lg border bg-[#05070B] text-white text-sm focus:outline-none transition-colors ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-white/10 focus:border-[#00D9FF]'
                }`}
              />
              {errors.message && <p className="text-xs text-red-400 font-mono">{errors.message}</p>}
            </div>

            {/* Status Notifications */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-sm font-sans flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block font-heading">Enquiry Received</span>
                    <span>{statusMessage}</span>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 text-sm font-sans flex items-start space-x-3"
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block font-heading">Submission Error</span>
                    <span>{statusMessage}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-[#00D9FF] via-[#4EA8FF] to-[#00D9FF] text-black font-bold text-xs font-mono tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,217,255,0.7)] disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>SENDING ENQUIRY...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-black" />
                  <span>SEND ENQUIRY</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

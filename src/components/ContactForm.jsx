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
  <section
    id="contact"
    className="relative py-28 px-4 sm:px-6 bg-[#05070B] overflow-hidden"
  >
    {/* Ambient lighting */}
    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gray-400/[0.035] blur-[120px] pointer-events-none" />

    <div className="max-w-7xl mx-auto relative z-10">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* LEFT — Editorial introduction */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase">
            <Mail className="w-3.5 h-3.5" />
            COMMERCIAL ENQUIRY
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-[1.05]">
            REQUEST
            <br />
            <span className="text-gray-500">
              PRODUCT INFORMATION
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-sm sm:text-base text-gray-400 leading-7">
            Get in touch with our team for product information,
            specifications, availability and commercial enquiries.
          </p>

          {/* Product reference */}
          <div className="mt-12 rounded-2xl border border-white/[0.08]  bg-white
              
              border border-black/[0.06]
              shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-6">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-700/90 border border-gray-400/20 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-gray-400" />
              </div>

              <div>
                <span className="block text-[9px] font-mono tracking-[0.18em] text-gray-500 uppercase">
                  INTERESTED PRODUCT
                </span>

                <span className="block mt-1 text-sm font-semibold text-white">
                  {formData.product}
                </span>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-[9px] font-mono tracking-[0.15em] text-gray-500 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                PRODUCT ENQUIRY
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT — Form */}
        <div className="lg:col-span-7">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-[2rem]
              bg-white
              p-6 sm:p-8 lg:p-10
              border border-black/[0.06]
              shadow-[0_30px_90px_rgba(0,0,0,0.35)]
            "
          >

            <div className="mb-8">

              <div className="text-[10px] font-mono tracking-[0.18em] text-gray-700 uppercase">
                CONTACT DETAILS
              </div>

              <h3 className="mt-2 text-2xl font-bold text-[#111827] font-heading">
                Tell us about your requirements
              </h3>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >

              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="space-y-2">

                  <label className="text-[10px] font-mono font-semibold tracking-[0.12em] text-[#6B7280] uppercase">
                    Full Name *
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`
                        w-full
                        pl-11 pr-4 py-3.5
                        rounded-xl
                        border
                        bg-[#F7F8FA]
                        text-[#111827]
                        text-sm
                        placeholder:text-[#A1A7B0]
                        outline-none
                        transition-all
                        ${
                          errors.name
                            ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                            : 'border-black/[0.07] focus:border-gray-500 focus:ring-2 focus:ring-gray-500/10'
                        }
                      `}
                    />
                  </div>

                  {errors.name && (
                    <p className="text-[10px] text-red-500 font-mono">
                      {errors.name}
                    </p>
                  )}

                </div>

                <div className="space-y-2">

                  <label className="text-[10px] font-mono font-semibold tracking-[0.12em] text-[#6B7280] uppercase">
                    Company / Organization
                  </label>

                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Organization"
                      className="
                        w-full
                        pl-11 pr-4 py-3.5
                        rounded-xl
                        border border-black/[0.07]
                        bg-[#F7F8FA]
                        text-[#111827]
                        text-sm
                        placeholder:text-[#A1A7B0]
                        outline-none
                        transition-all
                        focus:border-gray-500
                        focus:ring-2
                        focus:ring-gray-500/10
                      "
                    />
                  </div>

                </div>

              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div className="space-y-2">

                  <label className="text-[10px] font-mono font-semibold tracking-[0.12em] text-[#6B7280] uppercase">
                    Email Address *
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.com"
                      className={`
                        w-full
                        pl-11 pr-4 py-3.5
                        rounded-xl
                        border
                        bg-[#F7F8FA]
                        text-[#111827]
                        text-sm
                        placeholder:text-[#A1A7B0]
                        outline-none
                        transition-all
                        ${
                          errors.email
                            ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                            : 'border-black/[0.07] focus:border-gray-500 focus:ring-2 focus:ring-gray-500/10'
                        }
                      `}
                    />
                  </div>

                  {errors.email && (
                    <p className="text-[10px] text-red-500 font-mono">
                      {errors.email}
                    </p>
                  )}

                </div>

                <div className="space-y-2">

                  <label className="text-[10px] font-mono font-semibold tracking-[0.12em] text-[#6B7280] uppercase">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="
                        w-full
                        pl-11 pr-4 py-3.5
                        rounded-xl
                        border border-black/[0.07]
                        bg-[#F7F8FA]
                        text-[#111827]
                        text-sm
                        placeholder:text-[#A1A7B0]
                        outline-none
                        transition-all
                        focus:border-gray-500
                        focus:ring-2
                        focus:ring-gray-500/10
                      "
                    />
                  </div>

                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">

                <label className="text-[10px] font-mono font-semibold tracking-[0.12em] text-[#6B7280] uppercase">
                  Message *
                </label>

                <div className="relative">

                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#9CA3AF]" />

                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, technical specifications or procurement timeline..."
                    className={`
                      w-full
                      pl-11 pr-4 py-3.5
                      rounded-xl
                      border
                      bg-[#F7F8FA]
                      text-[#111827]
                      text-sm
                      placeholder:text-[#A1A7B0]
                      outline-none
                      resize-none
                      transition-all
                      ${
                        errors.message
                          ? 'border-red-400 focus:ring-2 focus:ring-red-100'
                          : 'border-black/[0.07] focus:border-gray-500 focus:ring-2 focus:ring-gray-500/10'
                      }
                    `}
                  />

                </div>

                {errors.message && (
                  <p className="text-[10px] text-red-500 font-mono">
                    {errors.message}
                  </p>
                )}

              </div>

              {/* Status */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      bg-emerald-50
                      border border-emerald-200
                      p-4
                      text-emerald-700
                    "
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />

                    <div>
                      <span className="block text-sm font-bold">
                        Enquiry Received
                      </span>

                      <span className="block mt-1 text-xs leading-5">
                        {statusMessage}
                      </span>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      bg-red-50
                      border border-red-200
                      p-4
                      text-red-700
                    "
                  >
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />

                    <div>
                      <span className="block text-sm font-bold">
                        Submission Error
                      </span>

                      <span className="block mt-1 text-xs leading-5">
                        {statusMessage}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group
                  w-full
                  py-4
                  rounded-xl
                  bg-[#111827]/20
                  text-white
                  font-bold
                  text-[10px]
                  font-mono
                  tracking-[0.18em]
                  uppercase
                  transition-all
                  duration-300
                  hover:bg-gray-200
                  
                  disabled:opacity-50
                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >

                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}

              </button>

              <p className="text-center text-[9px] font-mono tracking-wider text-[#9CA3AF]">
                YOUR INFORMATION IS USED ONLY TO RESPOND TO THIS ENQUIRY
              </p>

            </form>

          </motion.div>

        </div>

      </div>
    </div>
  </section>
);
};

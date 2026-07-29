'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FadeUp, SectionLabel } from '@/components/site/motion-primitives';
import { SITE } from '@/lib/siteData';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+]?[\d\s()-]{7,16}$/, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Please write at least 10 characters'),
});

const INFO = [
  { icon: MapPin, title: 'Visit Us', lines: [SITE.address] },
  { icon: Phone, title: 'Call Us', lines: [SITE.phone, SITE.phone2] },
  { icon: Mail, title: 'Email Us', lines: [SITE.email, SITE.salesEmail] },
  { icon: Clock, title: 'Working Hours', lines: [SITE.hours] },
];

const App = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('fullName', data.fullName);
      fd.append('companyName', data.companyName);
      fd.append('email', data.email);
      fd.append('phone', data.phone);
      fd.append('message', data.message);
      const res = await fetch('/api/contact', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to send message');
      toast.success('Message received!', {
        description: `Thank you, ${data.fullName}. Our team will get back to you within one business day.`,
      });
      reset();
    } catch (err) {
      toast.error('Could not send your message', {
        description: err.message || `Please try again or email us directly at ${SITE.email}.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="relative bg-[#1a2845] overflow-hidden" data-testid="contact-hero">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel light>Contact Us</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] max-w-2xl">
              Let's talk about your <span className="text-[#d9b25f]">components.</span>
            </h1>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">
              Whether you need a price, a sample or a technical opinion — our team responds within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-5">
              {INFO.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.08}>
                  <div className="flex gap-5 border border-slate-200 p-6 hover:border-[#b7852c]/50 transition-colors" data-testid={`contact-info-${i}`}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#1a2845]">
                      <item.icon className="h-5 w-5 text-[#d9b25f]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#1a2845]">{item.title}</h3>
                      {item.lines.map((l) => (
                        <p key={l} className="mt-1 text-sm text-slate-600">{l}</p>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="lg:col-span-8">
              <FadeUp delay={0.1}>
                <div className="border border-slate-200 p-8 lg:p-10">
                  <h2 className="font-heading text-2xl font-bold text-[#1a2845]">Send us a message</h2>
                  <p className="mt-2 text-sm text-slate-500">Fields marked * are required.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" data-testid="contact-form" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-[#1a2845] font-medium">Full Name *</Label>
                        <Input id="fullName" placeholder="e.g. Rajesh Patel" className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('fullName')} data-testid="contact-fullname-input" />
                        {errors.fullName && <p className="text-xs text-red-600" data-testid="contact-fullname-error">{errors.fullName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-[#1a2845] font-medium">Company Name *</Label>
                        <Input id="companyName" placeholder="e.g. Apex Automotive Ltd." className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('companyName')} data-testid="contact-company-input" />
                        {errors.companyName && <p className="text-xs text-red-600">{errors.companyName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1a2845] font-medium">Email Address *</Label>
                        <Input id="email" type="email" placeholder="you@company.com" className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('email')} data-testid="contact-email-input" />
                        {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#1a2845] font-medium">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('phone')} data-testid="contact-phone-input" />
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#1a2845] font-medium">Message *</Label>
                      <Textarea id="message" rows={6} placeholder="Tell us about your requirement — component type, quantities, target market..." className="rounded-none border-slate-300 focus-visible:ring-[#1a2845] resize-none" {...register('message')} data-testid="contact-message-input" />
                      {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" disabled={submitting} className="rounded-none h-13 px-10 py-6 bg-[#1a2845] hover:bg-[#233459] text-white text-sm font-bold tracking-wide w-full sm:w-auto" data-testid="contact-submit-btn">
                      {submitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" /> Send Message</>
                      )}
                    </Button>
                  </form>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

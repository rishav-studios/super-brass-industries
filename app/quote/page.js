'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { FileUp, Send, Loader2, Clock3, ShieldCheck, BadgeIndianRupee, FileCheck2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FadeUp, SectionLabel } from '@/components/site/motion-primitives';

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+]?[\d\s()-]{7,16}$/, 'Please enter a valid phone number'),
  projectDetails: z.string().min(20, 'Please describe your project in at least 20 characters'),
  drawing: z.any().optional(),
});

const PROMISES = [
  { icon: Clock3, title: '24-Hour Response', desc: 'Detailed quotation with pricing, lead time and material options within one business day.' },
  { icon: ShieldCheck, title: 'NDA Protected', desc: 'Your drawings and specifications remain strictly confidential. NDA available on request.' },
  { icon: BadgeIndianRupee, title: 'Factory-Direct Pricing', desc: 'You quote with the manufacturer — no trading margins, no hidden costs.' },
  { icon: FileCheck2, title: 'Engineering Review', desc: 'Our engineers review every drawing and flag cost-saving or manufacturability improvements.' },
];

const App = () => {
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(quoteSchema) });

  const onSubmit = async (data) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success('Quote request submitted!', {
      description: `Thank you, ${data.fullName}. Our engineering team will send your detailed quotation within 24 hours.`,
    });
    reset();
    setFileName('');
  };

  const drawingReg = register('drawing');

  return (
    <div className="bg-white">
      <section className="relative bg-[#1a2845] overflow-hidden" data-testid="quote-hero">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-[#d9b25f]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-16 lg:pt-44 lg:pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionLabel light>Request a Quote</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] max-w-2xl">
              Your drawing today. Our quote <span className="text-[#d9b25f]">tomorrow.</span>
            </h1>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-xl">
              Share your specifications and receive a detailed, factory-direct quotation within 24 hours — including pricing, lead time and material recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
              <FadeUp>
                <div className="border border-slate-200 p-8 lg:p-10">
                  <h2 className="font-heading text-2xl font-bold text-[#1a2845]">Tell us what you need</h2>
                  <p className="mt-2 text-sm text-slate-500">Fields marked * are required. Attach a drawing for the fastest, most accurate quote.</p>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6" data-testid="quote-form" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-[#1a2845] font-medium">Full Name *</Label>
                        <Input id="fullName" placeholder="e.g. Rajesh Patel" className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('fullName')} data-testid="quote-fullname-input" />
                        {errors.fullName && <p className="text-xs text-red-600" data-testid="quote-fullname-error">{errors.fullName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-[#1a2845] font-medium">Company Name *</Label>
                        <Input id="companyName" placeholder="e.g. Apex Automotive Ltd." className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('companyName')} data-testid="quote-company-input" />
                        {errors.companyName && <p className="text-xs text-red-600">{errors.companyName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1a2845] font-medium">Email Address *</Label>
                        <Input id="email" type="email" placeholder="you@company.com" className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('email')} data-testid="quote-email-input" />
                        {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#1a2845] font-medium">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 98765 43210" className="rounded-none h-12 border-slate-300 focus-visible:ring-[#1a2845]" {...register('phone')} data-testid="quote-phone-input" />
                        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectDetails" className="text-[#1a2845] font-medium">Project Details *</Label>
                      <Textarea id="projectDetails" rows={6} placeholder="Component description, material grade, annual quantities, target price (if any), surface finish, delivery location..." className="rounded-none border-slate-300 focus-visible:ring-[#1a2845] resize-none" {...register('projectDetails')} data-testid="quote-details-input" />
                      {errors.projectDetails && <p className="text-xs text-red-600">{errors.projectDetails.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="drawing" className="text-[#1a2845] font-medium">Technical Drawing (optional)</Label>
                      <label htmlFor="drawing" className="flex cursor-pointer items-center justify-center gap-3 border-2 border-dashed border-slate-300 px-6 py-8 hover:border-[#b7852c]/60 hover:bg-[#f6f7f9] transition-colors" data-testid="quote-drawing-dropzone">
                        <FileUp className="h-6 w-6 text-[#b7852c]" />
                        <div className="text-center">
                          <p className="text-sm font-medium text-[#1a2845]">{fileName || 'Click to attach your drawing'}</p>
                          <p className="text-xs text-slate-500 mt-1">PDF, DWG, DXF, STEP, IGES, JPG or PNG — up to 20 MB</p>
                        </div>
                      </label>
                      <input
                        id="drawing"
                        type="file"
                        accept=".pdf,.dwg,.dxf,.step,.stp,.igs,.iges,.jpg,.jpeg,.png"
                        className="hidden"
                        {...drawingReg}
                        onChange={(e) => {
                          drawingReg.onChange(e);
                          setFileName(e.target.files?.[0]?.name || '');
                        }}
                        data-testid="quote-drawing-input"
                      />
                    </div>
                    <Button type="submit" disabled={submitting} className="rounded-none h-13 px-10 py-6 bg-[#d9b25f] hover:bg-[#c9a24b] text-[#1a2845] text-sm font-bold tracking-wide w-full sm:w-auto" data-testid="quote-submit-btn">
                      {submitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" /> Get My Quote in 24 Hours</>
                      )}
                    </Button>
                  </form>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2">
              <FadeUp delay={0.1}>
                <div className="bg-[#1a2845] p-8 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern-dark" />
                  <div className="relative space-y-7">
                    <h3 className="font-heading text-xl font-bold text-white">Why quote with us?</h3>
                    {PROMISES.map((p) => (
                      <div key={p.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#d9b25f]/40">
                          <p.icon className="h-5 w-5 text-[#d9b25f]" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-white text-sm">{p.title}</h4>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-white/10 pt-6">
                      <p className="text-xs text-slate-400 leading-relaxed">
                        “We switched three component lines to Super Brass and haven't had a single rejection in 14 months.”
                      </p>
                      <p className="mt-3 text-xs font-semibold text-[#d9b25f] uppercase tracking-[0.15em]">— Purchase Head, European Auto Tier-1</p>
                    </div>
                  </div>
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

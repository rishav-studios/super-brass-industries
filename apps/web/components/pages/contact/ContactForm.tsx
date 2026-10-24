"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "@super/ui/components/shadcn/sonner";
import {
    contactFormSchema,
    ContactFormData,
    POPULAR_SUBJECTS,
    MAX_FILE_SIZE,
} from "@/lib/schemas/contact.schema";
import {
    User,
    Mail,
    Phone,
    Building2,
    FileText,
    UploadCloud,
    Paperclip,
    X,
    CheckCircle2,
    Loader2,
    ArrowRight,
    AlertCircle,
    Copy,
    Check,
} from "lucide-react";

export default function ContactForm() {
    const t = useTranslations("Contact");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedRef, setSubmittedRef] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [copied, setCopied] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            contact: "",
            company_name: "",
            subject: "",
            message: "",
            attachment: null,
        },
        mode: "onTouched",
    });

    const currentSubject = watch("subject");

    // Handle file changes from input
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            setSelectedFile(file);
            setValue("attachment", file, { shouldValidate: true });
        }
    };

    // Handle drag events
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0] || null;
        if (file) {
            setSelectedFile(file);
            setValue("attachment", file, { shouldValidate: true });
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        setValue("attachment", null, { shouldValidate: true });
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("contact", data.contact);
            if (data.company_name) {
                formData.append("company_name", data.company_name);
            }
            formData.append("subject", data.subject);
            formData.append("message", data.message);

            if (data.attachment && data.attachment instanceof File) {
                formData.append("attachment", data.attachment);
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const resData = await response.json();

            if (!response.ok || !resData.success) {
                throw new Error(resData.message || "Failed to submit inquiry.");
            }

            setSubmittedRef(resData.referenceId || "SBI-RFQ-CONFIRMED");
            setIsSubmitted(true);
            toast.success("Inquiry sent successfully! Our engineering team will review it within 24 hours.");
        } catch (error: any) {
            console.error("Submission error:", error);
            toast.error(error.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        reset();
        setSelectedFile(null);
        setIsSubmitted(false);
        setSubmittedRef(null);
    };

    const copyReferenceId = () => {
        if (submittedRef) {
            navigator.clipboard.writeText(submittedRef);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            toast.info("Reference ID copied to clipboard!");
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-xl shadow-slate-100/60 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                <div className="text-center max-w-lg mx-auto">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-primary mb-3">
                        {t("form.successTitle")}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                        {t("form.successDesc")}{" "}
                        <span className="font-semibold text-primary">{submittedRef}</span>
                    </p>

                    {/* Reference ID card */}
                    {submittedRef && (
                        <div className="flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 mb-6">
                            <div className="text-left">
                                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                                    RFQ Reference ID
                                </span>
                                <span className="font-mono text-sm sm:text-base font-bold text-primary">
                                    {submittedRef}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={copyReferenceId}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                            >
                                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    )}

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-8 text-left">
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong className="text-amber-900 block mb-1">What happens next?</strong>
                            {t("form.successFollowup")}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                        {t("form.sendAnother")}
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-xl shadow-slate-100/60 relative">
            {/* Header */}
            <div className="mb-8 border-b border-slate-100 pb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/20 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    RFQ & Engineering Desk
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                    {t("form.title")}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-2 leading-relaxed">
                    {t("form.subtitle")}
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1: Name & Business Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                        >
                            {t("form.nameLabel")} <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <User className="w-4 h-4" />
                            </div>
                            <input
                                id="name"
                                type="text"
                                placeholder={t("form.namePlaceholder")}
                                {...register("name")}
                                className={`w-full pl-10 pr-3.5 py-2.5 text-sm sm:text-base rounded-xl border bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                                    errors.name
                                        ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                                        : "border-slate-200 focus:border-primary focus:ring-primary/10"
                                }`}
                            />
                        </div>
                        {errors.name && (
                            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                        >
                            {t("form.emailLabel")} <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Mail className="w-4 h-4" />
                            </div>
                            <input
                                id="email"
                                type="email"
                                placeholder={t("form.emailPlaceholder")}
                                {...register("email")}
                                className={`w-full pl-10 pr-3.5 py-2.5 text-sm sm:text-base rounded-xl border bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                                    errors.email
                                        ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                                        : "border-slate-200 focus:border-primary focus:ring-primary/10"
                                }`}
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 2: Contact & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Contact Number Field */}
                    <div>
                        <label
                            htmlFor="contact"
                            className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                        >
                            {t("form.contactLabel")} <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Phone className="w-4 h-4" />
                            </div>
                            <input
                                id="contact"
                                type="tel"
                                placeholder={t("form.contactPlaceholder")}
                                {...register("contact")}
                                className={`w-full pl-10 pr-3.5 py-2.5 text-sm sm:text-base rounded-xl border bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                                    errors.contact
                                        ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                                        : "border-slate-200 focus:border-primary focus:ring-primary/10"
                                }`}
                            />
                        </div>
                        {errors.contact && (
                            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                                {errors.contact.message}
                            </p>
                        )}
                    </div>

                    {/* Company Name Field (Optional) */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label
                                htmlFor="company_name"
                                className="block text-xs sm:text-sm font-semibold text-slate-700"
                            >
                                {t("form.companyLabel")}
                            </label>
                            <span className="text-[11px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                                {t("form.optionalBadge")}
                            </span>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Building2 className="w-4 h-4" />
                            </div>
                            <input
                                id="company_name"
                                type="text"
                                placeholder={t("form.companyPlaceholder")}
                                {...register("company_name")}
                                className="w-full pl-10 pr-3.5 py-2.5 text-sm sm:text-base rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Subject Field & Quick Pills */}
                <div>
                    <label
                        htmlFor="subject"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                    >
                        {t("form.subjectLabel")} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative mb-2.5">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FileText className="w-4 h-4" />
                        </div>
                        <input
                            id="subject"
                            type="text"
                            placeholder={t("form.subjectPlaceholder")}
                            {...register("subject")}
                            className={`w-full pl-10 pr-3.5 py-2.5 text-sm sm:text-base rounded-xl border bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                                errors.subject
                                    ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                                    : "border-slate-200 focus:border-primary focus:ring-primary/10"
                            }`}
                        />
                    </div>

                    {/* Quick Topics */}
                    <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-medium text-slate-400 mr-1">
                            {t("form.quickSubjectsLabel")}
                        </span>
                        {POPULAR_SUBJECTS.map((subj) => (
                            <button
                                key={subj}
                                type="button"
                                onClick={() => setValue("subject", subj, { shouldValidate: true })}
                                className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                                    currentSubject === subj
                                        ? "bg-primary text-white border-primary shadow-xs"
                                        : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80"
                                }`}
                            >
                                {subj}
                            </button>
                        ))}
                    </div>

                    {errors.subject && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                    >
                        {t("form.messageLabel")} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder={t("form.messagePlaceholder")}
                        {...register("message")}
                        className={`w-full p-3.5 text-sm sm:text-base rounded-xl border bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y ${
                            errors.message
                                ? "border-rose-400 focus:ring-rose-200 focus:border-rose-500"
                                : "border-slate-200 focus:border-primary focus:ring-primary/10"
                        }`}
                    />
                    {errors.message && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Attachment Dropzone Field */}
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs sm:text-sm font-semibold text-slate-700">
                            {t("form.attachmentLabel")}
                        </label>
                        <span className="text-[11px] font-medium text-slate-400">
                            Max 15MB
                        </span>
                    </div>

                    {/* Hidden file input */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg,.webp,.svg,.dwg,.dxf,.step,.stp,.iges,.igs,.zip,.rar,.7z,.doc,.docx"
                    />

                    {/* Active Selected File State */}
                    {selectedFile ? (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-between p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="p-2 bg-amber-500 text-white rounded-lg shrink-0">
                                    <Paperclip className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                                        {selectedFile.name}
                                    </p>
                                    <p className="text-[11px] text-slate-500">
                                        {formatFileSize(selectedFile.size)} • Ready to upload
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="text-xs text-slate-600 hover:text-primary font-medium px-2 py-1 hover:bg-white rounded transition-colors cursor-pointer"
                                >
                                    Change
                                </button>
                                <button
                                    type="button"
                                    onClick={removeFile}
                                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                                    title={t("form.removeFile")}
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        /* Drag and drop box */
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all ${
                                isDragging
                                    ? "border-amber-500 bg-amber-50/50 scale-[1.01]"
                                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 bg-slate-50/30"
                            }`}
                        >
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-500 group-hover:scale-110 transition-transform">
                                <UploadCloud className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 font-medium">
                                <span className="text-primary font-semibold underline decoration-primary/40 underline-offset-4">
                                    {t("form.dropzoneBrowse")}
                                </span>{" "}
                                or drag and drop files here
                            </p>
                            <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 max-w-md mx-auto">
                                {t("form.attachmentHint")}
                            </p>
                        </div>
                    )}

                    {errors.attachment && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.attachment.message as string}
                        </p>
                    )}
                </div>

                {/* Submit Action */}
                <div className="pt-3">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-xl font-heading font-semibold text-base text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                            isSubmitting
                                ? "bg-primary/70 cursor-not-allowed"
                                : "bg-primary hover:bg-primary/95 shadow-primary/20 hover:shadow-primary/30 active:scale-[0.99]"
                        }`}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>{t("form.submittingButton")}</span>
                            </>
                        ) : (
                            <>
                                <span>{t("form.submitButton")}</span>
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-3">
                        🔒 Super Brass Industries guarantees non-disclosure and intellectual property protection for all uploaded drawings.
                    </p>
                </div>
            </form>
        </div>
    );
}

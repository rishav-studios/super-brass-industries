"use client";

import { useTranslations } from "next-intl";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    CheckCircle2,
    MessageSquare,
    ExternalLink,
    FileCheck,
    Globe,
    Building,
} from "lucide-react";

export default function ContactInfo() {
    const t = useTranslations("Contact");

    const timezones = [
        { label: "India (IST)", hours: "8:00 AM – 8:00 PM", status: "Active Now" },
        { label: "Europe (CET)", hours: "9:00 AM – 5:00 PM", status: "Sales Desk" },
        { label: "USA (EST)", hours: "8:00 AM – 5:00 PM", status: "24h Response" },
        { label: "Middle East (GST)", hours: "8:30 AM – 5:30 PM", status: "Export Line" },
    ];

    const checklistItems = [
        t("info.checklist.item1"),
        t("info.checklist.item2"),
        t("info.checklist.item3"),
        t("info.checklist.item4"),
        t("info.checklist.item5"),
    ];

    return (
        <div className="space-y-6">
            {/* Factory & Headquarters Card */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-100/60 relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md w-max mb-4">
                    <Building className="w-3.5 h-3.5" />
                    Jamnagar • India's Brass Capital
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary mb-3">
                    {t("info.factory.title")}
                </h3>

                <div className="flex items-start gap-3 text-slate-600 mb-5">
                    <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm sm:text-base font-medium leading-relaxed">
                            {t("info.factory.address")}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                            {t("info.factory.note")}
                        </p>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                    {/* Sales Phone & WhatsApp */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 text-primary rounded-lg">
                                <Phone className="w-4 h-4" />
                            </div>
                            <div>
                                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                                    {t("info.directHotlines.salesPhoneLabel")}
                                </span>
                                <a
                                    href={`tel:${t("info.directHotlines.salesPhone")}`}
                                    className="text-sm sm:text-base font-bold text-primary hover:text-amber-600 transition-colors"
                                >
                                    {t("info.directHotlines.salesPhone")}
                                </a>
                            </div>
                        </div>
                        <a
                            href="https://wa.me/918320776463"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors"
                        >
                            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                        </a>
                    </div>

                    {/* RFQ Email */}
                    <div className="flex items-center gap-3 pt-2">
                        <div className="p-2 bg-slate-100 text-primary rounded-lg">
                            <Mail className="w-4 h-4" />
                        </div>
                        <div>
                            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                                Official Quotation Desk
                            </span>
                            <a
                                href={`mailto:${t("info.directHotlines.rfqEmail")}`}
                                className="text-sm sm:text-base font-bold text-primary hover:text-amber-600 transition-colors"
                            >
                                {t("info.directHotlines.rfqEmail")}
                            </a>
                        </div>
                    </div>

                    {/* Plant Operations Phone */}
                    <div className="flex items-center gap-3 pt-2">
                        <div className="p-2 bg-slate-100 text-primary rounded-lg">
                            <Building className="w-4 h-4" />
                        </div>
                        <div>
                            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                                {t("info.directHotlines.adminPhoneLabel")}
                            </span>
                            <a
                                href={`tel:${t("info.directHotlines.adminPhone")}`}
                                className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
                            >
                                {t("info.directHotlines.adminPhone")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Operating Hours & Response Time */}
            <div className="bg-[#f8f9fc] rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 bg-primary text-white rounded-md">
                        <Globe className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading text-base sm:text-lg font-bold text-primary">
                        Global Desks & Timezones
                    </h4>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    {timezones.map((tz) => (
                        <div key={tz.label} className="p-3 bg-white rounded-xl border border-slate-100">
                            <span className="text-xs font-semibold text-slate-800 block truncate">
                                {tz.label}
                            </span>
                            <span className="text-[11px] text-slate-400 block mt-0.5">
                                {tz.hours}
                            </span>
                            <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                {tz.status}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-500 pt-3 border-t border-slate-200/70">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{t("info.hours.schedule")}</span>
                </div>
            </div>

            {/* RFQ Drawing Guidelines Checklist */}
            <div className="bg-primary text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 mb-3">
                    <FileCheck className="w-5 h-5 text-amber-400" />
                    <h4 className="font-heading font-bold text-lg text-white">
                        {t("info.checklist.title")}
                    </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                    To expedite your precision pricing and engineering lead times, please ensure your inquiry includes:
                </p>

                <ul className="space-y-3">
                    {checklistItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

"use client";

import Container from "@/components/layout/Container";
import { CustomLink } from "@/components/shared/clickables/CustomLink";
import { CategoryTableData } from "@/constants/category-details";
import { ArrowRight, Info, Search, Table } from "lucide-react";
import { useState } from "react";

interface CategoryDataTableProps {
    tableData: CategoryTableData;
    categoryTitle: string;
    categoryShortTitle: string;
}

export default function CategoryDataTable({
    tableData,
    categoryTitle,
    categoryShortTitle,
}: CategoryDataTableProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredRows = tableData.rows.filter((row) =>
        row.some((cell) => cell.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
            <Container>
                {/* Header & Search Bar Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                            <Table className="w-3.5 h-3.5" />
                            <span>Dimensional Data & Engineering Matrix</span>
                        </div>
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a2845] tracking-tight">
                            {tableData.title}
                        </h2>
                        {tableData.subtitle && (
                            <p className="mt-2 text-slate-500 text-xs sm:text-sm">
                                {tableData.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Search / Filter Bar */}
                    <div className="w-full md:w-72 relative">
                        <div className="relative">
                            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Filter sizes, threads, specs..."
                                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        {searchQuery && (
                            <span className="text-[11px] text-slate-400 mt-1 block">
                                Showing {filteredRows.length} of {tableData.rows.length} rows
                            </span>
                        )}
                    </div>
                </div>

                {/* Table Container Card */}
                <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden">
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300">
                        <table className="w-full text-left border-collapse min-w-170">
                            {/* Table Header */}
                            <thead>
                                <tr className="bg-[#1a2845] text-white text-xs font-semibold uppercase tracking-wider">
                                    {tableData.headers.map((header, idx) => (
                                        <th
                                            key={idx}
                                            className="py-4 px-4 sm:px-6 font-heading border-r border-white/10 last:border-r-0"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                                {filteredRows.length > 0 ? (
                                    filteredRows.map((row, rowIdx) => {
                                        const isLastRow = row[0]?.toLowerCase().includes("custom");
                                        return (
                                            <tr
                                                key={rowIdx}
                                                className={`transition-colors ${isLastRow
                                                        ? "bg-amber-50/60 font-semibold text-[#1a2845] hover:bg-amber-100/60"
                                                        : rowIdx % 2 === 0
                                                            ? "bg-white hover:bg-slate-50/80 text-slate-700"
                                                            : "bg-slate-50/40 hover:bg-slate-50 text-slate-700"
                                                    }`}
                                            >
                                                {row.map((cell, cellIdx) => (
                                                    <td
                                                        key={cellIdx}
                                                        className={`py-3.5 px-4 sm:px-6 border-r border-slate-100 last:border-r-0 ${cellIdx === 0
                                                                ? "font-semibold text-[#1a2845]"
                                                                : ""
                                                            }`}
                                                    >
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={tableData.headers.length}
                                            className="text-center py-12 text-slate-400 text-sm"
                                        >
                                            No dimensions found matching "{searchQuery}".
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer with Note & Action */}
                    <div className="p-4 sm:p-5 bg-slate-50/80 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                            <Info className="w-4 h-4 text-primary shrink-0" />
                            <span>
                                {tableData.note ||
                                    "Custom sizes and special alloy formulations manufactured to drawing specifications."}
                            </span>
                        </div>

                        <CustomLink
                            href={`/quote?category=${encodeURIComponent(categoryShortTitle)}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-amber-600 transition-colors shrink-0"
                        >
                            <span>Request Custom Dimension RFQ</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </CustomLink>
                    </div>
                </div>
            </Container>
        </section>
    );
}

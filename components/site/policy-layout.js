import { SectionLabel } from '@/components/site/motion-primitives';

const PolicyLayout = ({ label, title, updated, children }) => {
  return (
    <div className="bg-white">
      <section className="relative bg-[#1a2845] overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-36 pb-14 lg:pt-44 lg:pb-16">
          <SectionLabel light>{label}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08]">{title}</h1>
          <p className="mt-4 text-sm text-slate-400">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">{children}</div>
      </section>
    </div>
  );
};

export const PolicySection = ({ heading, children }) => {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-[#1a2845] mb-3">{heading}</h2>
      <div className="text-slate-600 leading-relaxed space-y-3 text-[15px]">{children}</div>
    </div>
  );
};

export default PolicyLayout;

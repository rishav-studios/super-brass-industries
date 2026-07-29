'use client';

import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const EASE = [0.22, 1, 0.36, 1];

export const FadeUp = ({ children, delay = 0, className = '', y = 28 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export const Counter = ({ value, suffix = '', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

export const SectionLabel = ({ children, light = false }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-[#b7852c]" />
      <span className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${light ? 'text-[#d9b25f]' : 'text-[#b7852c]'}`}>
        {children}
      </span>
    </div>
  );
};

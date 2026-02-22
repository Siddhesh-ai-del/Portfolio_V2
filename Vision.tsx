import { Section } from './ui/Section';
import { motion } from 'motion/react';

export function Vision() {
  return (
    <Section id="vision" className="text-center py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-sm font-mono text-teal-400 tracking-widest uppercase mb-6">The Vision</h2>
        <p className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          "My goal is not just to use AI, but to <span className="text-gradient">engineer</span> the systems that will define the next decade of intelligence."
        </p>
        <p className="text-gray-500 text-lg">
          Aspiring to contribute to research, build scalable models, and solve complex problems.
        </p>
      </motion.div>
    </Section>
  );
}

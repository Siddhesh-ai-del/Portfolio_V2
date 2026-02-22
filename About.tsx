import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'motion/react';

export function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Foundations First</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I am a First Year B.Tech student specializing in Artificial Intelligence & Data Science. 
              Unlike the rush to build flashy wrappers, my focus is on deep understanding.
            </p>
            <p>
              I am building a comprehensive foundation in mathematics, algorithms, and system design 
              to become a complete AI Engineer. My approach is structured, rigorous, and long-term.
            </p>
            <p>
              Currently, I am mastering Python and the mathematical underpinnings of Machine Learning 
              while exploring the Google Arcade ecosystem.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Current Status" value="FE Student" sub="AI & DS" />
          <StatCard label="Focus" value="Foundations" sub="Math & Python" />
          <StatCard label="Goal" value="AI Engineer" sub="Mastery" />
          <StatCard label="Location" value="India" sub="Remote Ready" />
        </div>
      </div>
    </Section>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <GlassCard className="flex flex-col justify-center items-center text-center py-8">
      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">{label}</span>
      <span className="text-xl font-bold text-white mb-1">{value}</span>
      <span className="text-sm text-teal-400/80">{sub}</span>
    </GlassCard>
  );
}

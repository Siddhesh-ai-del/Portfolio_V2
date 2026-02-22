import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'motion/react';
import { BookOpen, Brain, Code2, Flame } from 'lucide-react';

export function Dashboard() {
  return (
    <Section id="dashboard">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">Journey Log</h2>
        <p className="text-gray-400">Quantifying the effort.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          icon={<Flame className="text-orange-400" />} 
          value="120+" 
          label="Days Coding" 
        />
        <MetricCard 
          icon={<BookOpen className="text-blue-400" />} 
          value="4" 
          label="Books in Progress" 
        />
        <MetricCard 
          icon={<Brain className="text-violet-400" />} 
          value="15+" 
          label="Concepts Mastered" 
        />
        <MetricCard 
          icon={<Code2 className="text-teal-400" />} 
          value="Active" 
          label="GitHub Status" 
        />
      </div>
    </Section>
  );
}

function MetricCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <GlassCard className="flex flex-col items-center justify-center text-center py-8 gap-3">
      <div className="p-3 rounded-full bg-white/5">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold font-mono">{value}</div>
        <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{label}</div>
      </div>
    </GlassCard>
  );
}

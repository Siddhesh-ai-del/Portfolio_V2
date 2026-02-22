import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        
        <GlassCard className="py-16 flex flex-col items-center justify-center border-dashed border-gray-700">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="mb-6"
          >
            <Loader2 size={48} className="text-teal-500" />
          </motion.div>
          <h3 className="text-xl font-semibold mb-2">Projects Loading Soon</h3>
          <p className="text-gray-400">
            Building foundations first. Real engineering takes time.
          </p>
        </GlassCard>
      </motion.div>
    </Section>
  );
}

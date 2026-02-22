import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'motion/react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const roadmap = [
  {
    phase: "Current Focus",
    icon: <Clock className="text-teal-400" />,
    items: ["Deep Python Fundamentals", "Problem Solving Patterns", "ML Math Foundations"],
    active: true
  },
  {
    phase: "Next Phase",
    icon: <Circle className="text-blue-400" />,
    items: ["NumPy & Pandas Mastery", "Data Structures & Algorithms", "ML Algorithms from Scratch"],
    active: false
  },
  {
    phase: "Future Horizon",
    icon: <Circle className="text-violet-400" />,
    items: ["Deep Learning Architectures", "Model Deployment & MLOps", "Large Scale System Design"],
    active: false
  }
];

export function Roadmap() {
  return (
    <Section id="roadmap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-2">Growth Trajectory</h2>
        <p className="text-gray-400">A structured path to mastery.</p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Connecting Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-blue-500/30 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {roadmap.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-gray-700 z-10 mt-6 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${phase.active ? 'bg-teal-400 animate-pulse' : 'bg-gray-700'}`} />
              </div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-1/2 px-4">
                <GlassCard className={`${phase.active ? 'border-teal-500/30 bg-teal-500/5' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {phase.icon}
                    <h3 className="text-lg font-bold">{phase.phase}</h3>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
              
              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

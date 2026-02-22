import { Section } from './ui/Section';
import { GlassCard } from './ui/GlassCard';
import { motion } from 'motion/react';

const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 65, status: "Advancing" },
      { name: "C++", level: 40, status: "Basics" },
      { name: "SQL", level: 30, status: "Learning" }
    ]
  },
  {
    category: "Mathematics",
    items: [
      { name: "Linear Algebra", level: 50, status: "In Progress" },
      { name: "Probability", level: 40, status: "Foundations" },
      { name: "Calculus", level: 45, status: "Reviewing" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git & GitHub", level: 70, status: "Daily Use" },
      { name: "Linux / Zorin", level: 60, status: "Comfortable" },
      { name: "Google Arcade", level: 50, status: "Active" }
    ]
  }
];

export function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-2">Technical Arsenal</h2>
        <p className="text-gray-400">Building the toolkit for intelligent systems.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((category, idx) => (
          <GlassCard key={idx} className="h-full">
            <h3 className="text-xl font-semibold mb-6 text-teal-300">{category.category}</h3>
            <div className="space-y-6">
              {category.items.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-xs font-mono text-gray-500">{skill.status}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

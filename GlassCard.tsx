import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = '', hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 ${className}`}
      whileHover={hoverEffect ? { y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

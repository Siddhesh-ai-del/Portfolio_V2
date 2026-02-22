import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20">
      <div className="absolute inset-0 z-0">
        {/* Subtle animated particles could go here, for now using the global background */}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-4xl"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel text-xs font-mono text-teal-300 tracking-wider">
          AI ENGINEER IN TRAINING
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Siddhesh <span className="text-gradient">Kadlag</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Engineering intelligence. One system at a time.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
          <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
          <SocialLink href="mailto:contact@example.com" icon={<Mail size={20} />} label="Email" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-gray-500 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      className="p-3 rounded-full glass-panel text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

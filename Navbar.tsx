import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-8">
        <a href="#" className="font-bold text-lg tracking-tight">SK</a>
        <div className="hidden md:flex gap-6 text-sm text-gray-400">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#roadmap">Roadmap</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </div>
        <a 
          href="mailto:contact@example.com" 
          className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full text-sm transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-white transition-colors">
      {children}
    </a>
  );
}

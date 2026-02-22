/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Roadmap } from './components/Roadmap';
import { Dashboard } from './components/Dashboard';
import { Projects } from './components/Projects';
import { Vision } from './components/Vision';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen text-gray-200 selection:bg-teal-500/30">
      <Background />
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      <Roadmap />
      <Dashboard />
      <Projects />
      <Vision />
      <Footer />
    </main>
  );
}

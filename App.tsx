
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Briefcase, GraduationCap, CheckCircle2, Code2, Database, Layout, Settings } from 'lucide-react';
import FloatingCube from './components/FloatingCube';
import AIAssistant from './components/AIAssistant';
import { FAIZAN_DATA } from './constants';

const App: React.FC = () => {
  // Group skills by category for organized display
  const categories = Array.from(new Set(FAIZAN_DATA.skills.map(s => s.category)));

  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <Canvas>
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <FloatingCube />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-gray-950/50 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            FK.DEV
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
            <a href="#experience" className="hover:text-white transition-colors cursor-pointer">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors cursor-pointer">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors cursor-pointer">Skills</a>
          </div>
          <div className="flex items-center gap-4">
            <a href={`https://${FAIZAN_DATA.github}`} target="_blank" rel="noreferrer"><Github size={20} className="hover:text-indigo-400 transition-colors" /></a>
            <a href={`https://${FAIZAN_DATA.linkedin}`} target="_blank" rel="noreferrer"><Linkedin size={20} className="hover:text-indigo-400 transition-colors" /></a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20 scroll-mt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-indigo-500 font-semibold tracking-widest uppercase text-sm">Portfolio 2024</h2>
                <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white">
                  Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Faizan Khan</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mx-auto lg:mx-0">
                  {FAIZAN_DATA.objective}
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
                  <MapPin size={18} />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
                  <GraduationCap size={18} />
                  <span>Galgotias University</span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6">
                <a 
                  href="#projects" 
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:translate-y-[-2px] shadow-lg shadow-indigo-600/20"
                >
                  View My Work
                </a>
                <a 
                  href={`mailto:${FAIZAN_DATA.email}`}
                  className="text-white border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Profile Image Container */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <div className="relative group">
                {/* Animated Gradient Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={FAIZAN_DATA.profileImage} 
                    alt={FAIZAN_DATA.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-24 px-6 bg-gray-950/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            
            <div className="space-y-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                  <Briefcase size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Experience</h2>
              </div>
              
              <div className="space-y-8">
                {FAIZAN_DATA.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-gray-800 group">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    <div className="space-y-2">
                      <span className="text-xs text-indigo-400 font-mono tracking-wider">{exp.period}</span>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-gray-400 font-medium">{exp.company}</p>
                      <ul className="space-y-2 pt-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-gray-500 leading-relaxed">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Education</h2>
              </div>
              
              <div className="space-y-8">
                {FAIZAN_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-emerald-500/30 transition-colors">
                    <span className="text-xs text-emerald-400 font-mono tracking-wider">{edu.period}</span>
                    <h3 className="text-xl font-bold pt-2 text-white">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-emerald-400/80 font-semibold pt-4">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                A curated showcase of <span className="text-white font-bold">innovative digital solutions</span> and <span className="text-white font-bold">high-impact architectures</span> designed to bridge the gap between complex logic and seamless user experience.
              </p>
            </div>
            <a href={`https://${FAIZAN_DATA.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold group">
              Explore More on GitHub <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {FAIZAN_DATA.projects.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm flex flex-col h-full shadow-xl shadow-black/40">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8 space-y-6 flex-grow flex flex-col">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm font-medium">{project.description}</p>
                    
                    {/* Detailed Features */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Key Features</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-indigo-500/10 text-[10px] font-bold text-indigo-300 border border-indigo-500/20 uppercase tracking-tighter">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex gap-4">
                      <a 
                        href={`https://${project.github}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border border-gray-700 hover:border-gray-500"
                      >
                        <Github size={16} /> Codebase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 bg-gray-950/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">Technical Arsenal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {categories.map((category) => (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="text-indigo-400">
                      {category === 'Language' && <Code2 size={20} />}
                      {category === 'Frontend' && <Layout size={20} />}
                      {category === 'Backend' && <Database size={20} />}
                      {category === 'Fundamental' && <GraduationCap size={20} />}
                      {category === 'Tool' && <Settings size={20} />}
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{category}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {FAIZAN_DATA.skills
                      .filter(skill => skill.category === category)
                      .map((skill, idx) => (
                        <div 
                          key={idx} 
                          className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all cursor-default group flex flex-col items-center text-center gap-3"
                        >
                          <div className="text-2xl group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </div>
                          <span className="text-gray-400 group-hover:text-white transition-colors text-xs font-semibold leading-tight">{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 bg-gray-950 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2 text-white">Faizan Khan</h4>
              <p className="text-gray-500 text-sm max-w-xs">Crafting scalable web experiences with passion and precision.</p>
            </div>
            
            <div className="flex gap-6">
              <a href={`mailto:${FAIZAN_DATA.email}`} className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-indigo-500 transition-colors text-white">
                <Mail size={20} />
              </a>
              <a href={`https://${FAIZAN_DATA.linkedin}`} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-indigo-500 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href={`https://${FAIZAN_DATA.github}`} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-gray-900 border border-gray-800 hover:border-indigo-500 transition-colors text-white">
                <Github size={20} />
              </a>
            </div>

            <p className="text-gray-500 text-xs">
              © 2024 Faizan Khan. Built with React & Three.js.
            </p>
          </div>
        </footer>

      </div>

      {/* AI Assistant Button & Widget */}
      <AIAssistant />
    </div>
  );
};

export default App;

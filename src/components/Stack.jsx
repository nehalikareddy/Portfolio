import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaChartBar } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiJavascript, SiVercel, SiTailwindcss, SiPostman, SiPython, SiRedux, SiRender, SiHoppscotch, SiJsonwebtokens } from 'react-icons/si';
import './Stack.css';

const Stack = () => {
  const [filter, setFilter] = useState('frontend');

  const skills = [
    { name: 'JavaScript', category: 'languages', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'Java', category: 'languages', icon: <FaJava color="#007396" /> },
    { name: 'Python (Basics)', category: 'languages', icon: <SiPython color="#3776AB" /> },

    { name: 'React', category: 'frontend', icon: <FaReact color="#61DAFB" /> },
    { name: 'HTML5', category: 'frontend', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', category: 'frontend', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Bootstrap', category: 'frontend', icon: <FaBootstrap color="#7952B3" /> },
    { name: 'Material UI', category: 'frontend', icon: <div className="text-blue-400 font-bold">MUI</div> },
    { name: 'Redux', category: 'frontend', icon: <SiRedux color="#764ABC" /> },
    { name: 'Redux Toolkit', category: 'frontend', icon: <SiRedux color="#764ABC" /> },

    { name: 'Node.js', category: 'backend', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express.js', category: 'backend', icon: <SiExpress color="#fff" /> },
    { name: 'REST API', category: 'backend', icon: <div className="text-green-400 font-bold">API</div> },
    { name: 'JWT Auth', category: 'backend', icon: <SiJsonwebtokens color="#06B6D4" /> },

    { name: 'MongoDB', category: 'database', icon: <SiMongodb color="#47A248" /> },
    { name: 'MySQL', category: 'database', icon: <SiMysql color="#4479A1" /> },

    { name: 'Git', category: 'tools', icon: <div className="text-orange-500 font-bold">Git</div> },
    { name: 'GitHub', category: 'tools', icon: <FaGithub color="#fff" /> },
    { name: 'Vercel', category: 'tools', icon: <SiVercel color="#fff" /> },
    { name: 'Render', category: 'tools', icon: <SiRender color="#46E3B7" /> },
    { name: 'Postman', category: 'tools', icon: <SiPostman color="#FF6C37" /> },
    { name: 'Hoppscotch', category: 'tools', icon: <SiHoppscotch color="#31C48D" /> },
    { name: 'Power BI', category: 'tools', icon: <FaChartBar color="#F2C811" /> },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'languages', label: 'Languages' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter(skill => skill.category === filter);

  return (
    <section id="stack" className="stack-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mono"
        >
          <span className="text-gradient">02.</span> Tech Stack
        </motion.h2>

        <div className="stack-filters mono">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              /{cat.label.toLowerCase()}
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid-new">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="skill-badge card"
              >
                <div className="skill-badge-icon">
                  {skill.icon}
                </div>
                <span className="skill-badge-name">{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Stack;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    "Building intelligent systems",
    "Developing scalable web apps",
    "Solving complex problems"
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        setTypingSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing next word
      }
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="developer-declaration mono"
          >
            <span className="keyword">const</span> <span className="variable">developer</span> = <span className="string">"Nehalika Nadikatla"</span>;
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            Full-Stack Developer
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            {text}<span className="cursor">|</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-description"
          >
            Motivated AIML Undergraduate and aspiring software engineer with hands-on experience building full-stack web applications. Dedicated to developing intelligent solutions and strengthening problem-solving skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-actions"
          >
            <a href="#projects" className="btn btn-primary btn-green">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-tags mono"
          >
            //front-end //backend //problem-solver
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-right-container"
        >
          <div className="mantra-card">
            <span className="quote-mark">"</span>
            <p className="mantra-text">Design with intent. Develop with discipline.</p>
            <div className="mantra-footer">
              <span className="mantra-line"></span>
              <span className="mantra-label mono">CODING MANTRA</span>
            </div>
          </div>

          <div className="decorative-brackets mono text-gradient">
            {'</>'}
          </div>
          <div className="decorative-dots"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

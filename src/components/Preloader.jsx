import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('counting'); // counting, sliding-in, sliding-out

  useEffect(() => {
    // 1. Counting phase
    const duration = 2000; // 2 seconds
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min(Math.floor((step / totalSteps) * 100), 100);
      setProgress(currentProgress);

      if (step >= totalSteps) {
        clearInterval(timer);
        // Start sliding the blue panel in after hitting 100%
        setTimeout(() => {
          setPhase('sliding-in');
          
          // After sliding in, start sliding out
          setTimeout(() => {
            setPhase('sliding-out');
            
            // Notify parent to show main content
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 600);
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        className="preloader-wrapper"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1, delay: 0.5 } }}
      >
        {/* The Dark Screen with Percentage */}
        <div className="preloader-bg">
          {phase === 'counting' && (
            <>
              <button className="skip-btn mono" onClick={onComplete}>Skip Intro</button>
              <motion.div 
                className="progress-container"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="progress-line">
                  <motion.div 
                    className="progress-line-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <h1 className="progress-text">{progress.toString().padStart(2, '0')}%</h1>
              </motion.div>
            </>
          )}
        </div>

        {/* The Blue Panel that slides right to left */}
        <motion.div 
          className="blue-panel"
          initial={{ x: '100%' }}
          animate={{ 
            x: phase === 'sliding-in' ? '0%' : phase === 'sliding-out' ? '-100%' : '100%' 
          }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;

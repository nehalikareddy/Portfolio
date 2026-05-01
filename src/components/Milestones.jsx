import React from 'react';
import { motion } from 'framer-motion';
import './Milestones.css';

const Milestones = () => {
  return (
    <section id="milestones" className="milestones-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="milestones-header"
        >
          <span className="section-tag mono">// MILESTONES</span>
          <h2 className="section-title mono">
            <span className="text-gradient">04.</span> Achievements
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="milestone-card"
        >
          <div className="milestone-image-container">
            <img src="/hackfest.jpeg" alt="Hackfest 2nd Runner Up" className="milestone-image" />
            <div className="milestone-badge mono">
              <span className="dot dot-green"></span> PODIUM FINISH
            </div>
          </div>

          <div className="milestone-content">
            <div className="milestone-location mono">
              HACKFEST &bull; NMAM INSTITUTE OF TECHNOLOGY, NITTE
            </div>
            
            <h3 className="milestone-title">2ND RUNNER UP — HACKFEST</h3>
            
            <p className="milestone-description">
              Competed against the sharpest builders in the region — our team was shortlisted into the <span className="highlight-white">top 50 finalists from 750+ applicant teams</span> across colleges. In that high-pressure final arena, we secured a <span className="highlight-green">podium finish (3rd place)</span>, demonstrating rapid system design, AI integration under time constraints, and real-world execution.
            </p>
            
            <div className="milestone-stats">
              <div className="stat-item">
                <h4 className="stat-value">750+</h4>
                <p className="stat-label">Applicant Teams</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-value">50</h4>
                <p className="stat-label">Finalists Selected</p>
              </div>
              <div className="stat-item">
                <h4 className="stat-value">#3</h4>
                <p className="stat-label">Final Ranking</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Milestones;

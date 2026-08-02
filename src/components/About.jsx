import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Top: Image card + Text content */}
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image-card"
          >
            <div className="about-image-wrapper">
              <img src="/me.jpeg" alt="Nehalika Nadikatla" className="about-img" />
              <div className="about-image-overlay">
                <h3 className="overlay-title">Nehalika Nadikatla</h3>
                <p className="overlay-subtitle mono">AIML Undergrad</p>
              </div>
            </div>
            <div className="about-connect-bar">
              <div className="connect-info">
                <img src="/me.jpeg" alt="Avatar" className="connect-avatar" />
                <div className="connect-details">
                  <span className="mono text-gradient">@nehalika</span>
                  <span className="connect-desc mono">Undergrad Student</span>
                  <span className="connect-loc mono">From India</span>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/nadikatla-nehalika" target="_blank" rel="noreferrer" className="btn-connect mono">
                Let's Connect
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-text-content"
          >
            <h2 className="about-title">
              A developer who <span className="text-gradient">cares about the details</span>
            </h2>

            <p className="about-bio">Open to internships, research collaborations, and full-time development roles.</p>

            <div className="highlight-text">
              <h4 className="interests-title">Certifications</h4>
              <div className="certs-list">
                <div className="cert-item">
                  <div className="cert-icon">🏅</div>
                  <div className="cert-details">
                    <p className="cert-name">Oracle Cloud Infrastructure AI Foundations Associate</p>
                    <p className="cert-issuer mono">Oracle</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🏅</div>
                  <div className="cert-details">
                    <p className="cert-name">Full Stack Web Development</p>
                    <p className="cert-issuer mono">Apna College</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="interests-section">
              <h4 className="interests-title">Interests</h4>
              <ul className="interests-list">
                <li><span className="dot"></span> Software Development</li>
                <li><span className="dot"></span> Web Technologies</li>
                <li><span className="dot"></span> AI & Machine Learning</li>
                <li><span className="dot"></span> Problem Solving</li>
              </ul>
            </div>

            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
              View Full Resume <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        {/* Education Timeline — full width below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="education-section"
        >
          <h3 className="interests-title education-heading">Education Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <span className="timeline-badge mono">2023 — Present</span>
                <h4 className="timeline-title">B.E. in Artificial Intelligence & Machine Learning</h4>
                <p className="timeline-institution">Sir M. Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru</p>
                <p className="timeline-score text-gradient">CGPA: 8.94 / 10</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <span className="timeline-badge mono">Pre-University</span>
                <h4 className="timeline-title">Vasishta Pre University College</h4>
                <p className="timeline-institution">PUC (Science)</p>
                <p className="timeline-score text-gradient">88.7%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <span className="timeline-badge mono">Secondary School</span>
                <h4 className="timeline-title">Basavarajeshwari Public School and College</h4>
                <p className="timeline-institution">ICSE Board</p>
                <p className="timeline-score text-gradient">92.4%</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const mailtoLink = `mailto:nehalikareddy@gmail.com?subject=${encodeURIComponent(`${service} - ${name}`)}&body=${encodeURIComponent(`Hi Nehalika,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-left"
        >
          <div className="available-badge mono">
            <span className="avail-dot"></span> AVAILABLE FOR WORK
          </div>
          <h2 className="contact-heading">
            LET'S<br />
            WORK<br />
            <span className="contact-highlight">TOGETHER.</span>
          </h2>

        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-form-wrapper"
        >
          <p className="form-label mono">SEND A MESSAGE</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="input-label mono">NAME</label>
                <input type="text" name="name" placeholder="Nehalika Nadikatla" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="input-label mono">EMAIL</label>
                <input type="email" name="email" placeholder="nehalikareddy@gmail.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label className="input-label mono">SERVICE NEEDED</label>
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="" disabled>Select a service...</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="AI/ML Integration">AI/ML Integration</option>
                <option value="Internship Opportunity">Internship Opportunity</option>
                <option value="Research Collaboration">Research Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="input-label mono">WHAT CAN I HELP YOU WITH?</label>
              <textarea name="message" rows={5} placeholder="Hello, I'd like to enquire about..." value={formData.message} onChange={handleChange} required />
            </div>
            <div className="form-footer">
              <span className="reply-note mono">I reply within 24 hrs</span>
              <button type="submit" className="btn-send mono">SEND MESSAGE →</button>
            </div>
          </form>
        </motion.div>

      </div>

      {/* Footer Bar */}
      <div className="contact-footer-bar">
        <div className="footer-item">
          <span className="footer-item-label mono">EMAIL</span>
          <a href="mailto:nehalikareddy@gmail.com" className="footer-item-value">nehalikareddy@gmail.com</a>
        </div>
        <div className="footer-item footer-socials">
          <span className="footer-item-label mono">PROFILES</span>
          <div className="footer-social-icons">
            <a href="https://github.com/nehalikareddy" target="_blank" rel="noreferrer">
              <FaGithub size={20} /> <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/nadikatla-nehalika" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

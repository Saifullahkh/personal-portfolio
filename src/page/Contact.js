import React, { useState } from 'react';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message sent! I will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Submission failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section py-5 position-relative" id='contact'>
      <ToastContainer theme="colored" />
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <span className="badge-tech mb-2">Available for Hire</span>
          <h2 className="display-5 fw-bold text-dark">Let's Build Something <span className="text-teal">Great</span></h2>
          <div className="title-line mx-auto"></div>
        </div>

        <div className="row g-5">
          {/* Left Column - Contact Info Cards */}
          <div className="col-lg-5">
            <div className="contact-info-wrapper">
              <h4 className="fw-bold mb-4">Contact Details</h4>
              
              <div className="info-item-card d-flex align-items-center mb-4">
                <div className="info-icon"><FaEnvelope /></div>
                <div className="ms-3">
                  <p className="text-muted small mb-0">Email Me</p>
                  <h6 className="fw-bold mb-0">atifullahkhan47@gmail.com</h6>
                </div>
              </div>

              <div className="info-item-card d-flex align-items-center mb-4">
                <div className="info-icon"><FaPhone /></div>
                <div className="ms-3">
                  <p className="text-muted small mb-0">Call Me</p>
                  <h6 className="fw-bold mb-0">+92 335 9199919</h6>
                </div>
              </div>

              <div className="info-item-card d-flex align-items-center mb-5">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div className="ms-3">
                  <p className="text-muted small mb-0">Location</p>
                  <h6 className="fw-bold mb-0">Islamabad, Pakistan</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium Form */}
          <div className="col-lg-7">
            <div className="contact-form-card shadow-lg p-4 p-md-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating custom-input">
                      <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                      <label htmlFor="name">Full Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating custom-input">
                      <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating custom-input">
                      <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} style={{height: '150px'}} placeholder="Message" required></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn-send-main w-100 py-3" disabled={isSubmitting}>
                      {isSubmitting ? 'Processing...' : <><FaPaperPlane className="me-2"/> Send Message</>}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
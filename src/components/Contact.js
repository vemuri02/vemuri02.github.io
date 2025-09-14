// src/components/Contact.js
import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Send, Github, Linkedin, Twitter, ExternalLink, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            label: 'Email',
            value: 'svemuri6@hawk.illinoistech.edu',
            link: 'mailto:svemuri6@hawk.illinoistech.edu'
        },
        {
            icon: <MapPin size={20} />,
            label: 'Location',
            value: 'DA Lab, Siegel Hall, Illinois Institute of Technology, Chicago, IL',
            link: null
        },
        {
            icon: <Calendar size={20} />,
            label: 'Availability',
            value: 'Flexible / Research Lab',
            link: null
        }

    ];

    const socialLinks = [
        {
            platform: 'GitHub',
            icon: <Github size={20} />,
            url: 'https://github.com/vemuri02',
            handle: '@vemuri02'
        },
        {
            platform: 'LinkedIn',
            icon: <Linkedin size={20} />,
            url: 'https://linkedin.com/in/vemuri02',
            handle: '/in/vemuri02'
        },
        // {
        //     platform: 'Twitter',
        //     icon: <Twitter size={20} />,
        //     url: 'https://twitter.com/yourusername',
        //     handle: '@yourusername'
        // },
        {
            platform: 'Google Scholar',
            icon: <ExternalLink size={20} />,
            url: 'https://scholar.google.com/citations?user=XLwLD0IAAAAJ&hl=en',
            // handle: 'Publications'
        }
    ];

    const collaborationTypes = [
        {
            title: 'Research Collaboration',
            description: 'Interested in joint research projects in deep learning or edge AI',
            icon: <MessageSquare size={24} />
        },
        {
            title: 'Speaking Opportunities',
            description: 'Available for talks, workshops, and conference presentations',
            icon: <ExternalLink size={24} />
        },
        {
            title: 'Industry Partnerships',
            description: 'Open to internships and research partnerships with tech companies',
            icon: <Clock size={24} />
        },
        {
            title: 'Mentoring',
            description: 'Happy to mentor undergraduate students in ML/AI research',
            icon: <MessageSquare size={24} />
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        setIsSubmitting(false);
        alert('Thank you for your message! I\'ll get back to you soon.');
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Let's discuss research, collaboration opportunities, or any questions you might have
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h3 className="subsection-title">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="research-collaboration">Research Collaboration</option>
                                    <option value="speaking-opportunity">Speaking Opportunity</option>
                                    <option value="industry-partnership">Industry Partnership</option>
                                    <option value="mentoring">Mentoring Request</option>
                                    <option value="general-inquiry">General Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    placeholder="Tell me about your project, idea, or question..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h3 className="subsection-title">Contact Information</h3>
                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-icon">{info.icon}</div>
                                    <div className="contact-content">
                                        <span className="contact-label">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="contact-value">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="contact-value">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="social-section">
                            <h4>Connect with me</h4>
                            <div className="social-links-grid">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link"
                                    >
                                        <div className="social-icon">{social.icon}</div>
                                        <div className="social-info">
                                            <span className="social-platform">{social.platform}</span>
                                            <span className="social-handle">{social.handle}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Response Time */}
                        <div className="response-info">
                            <Clock size={16} />
                            <div>
                                <strong>Response Time</strong>
                                <p>I typically respond within 24-48 hours during weekdays.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Collaboration Opportunities */}
                {/* <div className="collaboration-section">
                    <h3 className="subsection-title">Collaboration Opportunities</h3>
                    <div className="collaboration-grid">
                        {collaborationTypes.map((collab, index) => (
                            <div key={index} className="collaboration-card">
                                <div className="collab-icon">{collab.icon}</div>
                                <div className="collab-content">
                                    <h4 className="collab-title">{collab.title}</h4>
                                    <p className="collab-description">{collab.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}


                {/* FAQ Section */}
                <div className="faq-section">
                    <h3 className="subsection-title">Frequently Asked Questions</h3>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Are you available for research collaborations?</h4>
                            <p>Yes! I'm always interested in collaborative projects in deep learning, edge AI, and hardware-aware optimization. Please feel free to reach out with your ideas.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Can we co-author papers or projects together?</h4>
                            <p>Definitely. I'm open to joint publications, workshop submissions, and research projects that align with my PhD work.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Do you attend academic conferences?</h4>
                            <p>Yes. I regularly attend conferences in AI/ML and embedded systems, and I’m available for research presentations and poster sessions.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Are you interested in academic networking?</h4>
                            <p>Absolutely. I value connecting with fellow researchers, labs, and professors to explore potential collaborations and knowledge sharing.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
// src/components/About.js
import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, MapPin, Calendar, Book, Code, Users, Target, Star, GitBranch, Github, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import profilePic from "../data/profile.jpg";
import ProjectDetail from './ProjectDetail';

const About = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Configure your GitHub username and repository names
    const githubUsername = "vemuri02"; // Replace with your GitHub username
    const repositoryNames = [
        "Efficient-Vision-Transformer-for-Object-Recognition",
        "Image-Translation-using-Self-Attention-GAN",
        "Seismic-Image-Segmentation-using-UNet",
        "Image-Generation-GANs",
    ];

    useEffect(() => {
        fetchProjectsData();
    }, []);

    const fetchProjectsData = async () => {
        try {
            setLoading(true);
            setError(null);

            const projectPromises = repositoryNames.map(async (repoName, index) => {
                try {
                    // Fetch repository data
                    const repoResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}`);
                    if (!repoResponse.ok) {
                        throw new Error(`Failed to fetch ${repoName}: ${repoResponse.status}`);
                    }
                    const repoData = await repoResponse.json();

                    // Fetch languages data
                    const languagesResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}/languages`);
                    const languagesData = languagesResponse.ok ? await languagesResponse.json() : {};

                    // Process languages data
                    const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
                    const processedLanguages = Object.entries(languagesData).map(([name, bytes]) => ({
                        name,
                        percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0
                    })).sort((a, b) => b.percentage - a.percentage);

                    return {
                        id: index + 1,
                        title: repoData.name,
                        description: repoData.description || 'No description provided',
                        languages: processedLanguages,
                        stars: repoData.stargazers_count,
                        updatedDate: new Date(repoData.updated_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        htmlUrl: repoData.html_url,
                        cloneUrl: repoData.clone_url,
                        homepage: repoData.homepage
                    };
                } catch (error) {
                    console.error(`Error fetching ${repoName}:`, error);
                    return {
                        id: index + 1,
                        title: repoName,
                        description: 'Error loading project data',
                        languages: [],
                        stars: 0,
                        updatedDate: 'Unknown',
                        htmlUrl: null,
                        cloneUrl: null,
                        homepage: null,
                        error: true
                    };
                }
            });

            const projects = await Promise.all(projectPromises);
            setProjectsData(projects);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const education = [
        {
            year: '2022 - Present',
            title: 'PhD in Computer Science & Engineering',
            institution: 'Illinois Institute of Technology',
            description: 'Researching HW/SW co-design for ML/DL on edge devices, focusing on object detection, semantic segmentation, and LiDAR camera fusion for ADAS and autonomous driving.'
        },
        {
            year: '2018 - 2022',
            title: 'B.Tech in Computer Science and Engineering',
            institution: 'Jawaharlal Nehru Technological University',
            description: 'Completed undergraduate studies in Computer Science with focus on AI and machine learning applications.'
        }
    ];

    const experience = [
        {
            year: '2024 - Present',
            title: 'Research and Teaching Assistant',
            institution: 'Illinois Institute of Technology',
            description: 'Working on model optimization using NAS, quantization, knowledge distillation, and pruning. TA for Hardware Acceleration for ML course covering GPUs, NPUs, and FPGAs.'
        },
        {
            year: '2024 - 2025',
            title: 'AI Research Intern',
            institution: 'SoundSafe.ai',
            description: 'Leading development of AI-driven audio security solutions, focusing on speech authentication and audio forensics using self-supervised learning.'
        },
        {
            year: '2020 - 2022',
            title: 'AI Engineer Intern',
            institution: 'Aster Ramesh Hospitals',
            description: 'Developed deep learning models for medical image segmentation using YOLOv4, Faster R-CNN, and Mask R-CNN. Achieved 95% F1 score, 93% accuracy, and 90% precision in medical condition detection.'
        },
        {
            year: '2018 - 2019',
            title: 'Network Engineer Industrial Trainee',
            institution: 'Sir C R Reddy Polytechnic',
            description: 'Gained practical experience in TCP/IP, OSI model, subnetting, and network configuration. Worked with network security, firewall configurations, and VPN setups.'
        }
    ];

    const skills = [
        {
            category: 'Data Science & AI',
            items: ['Image Classification', 'Object Detection', 'Semantic Segmentation', 'Feature Extraction', 'Augmentation']
        },
        {
            category: 'Programming Languages',
            items: ['Python', 'R', 'C++', 'Java', 'SQL', 'NoSQL', 'CUDA']
        },
        {
            category: 'ML Frameworks & Tools',
            items: ['PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'scikit-image', 'NLTK', 'LangChain', 'spaCy']
        },
        {
            category: 'Big Data & Cloud',
            items: ['AWS (S3, EC2, Glue, SageMaker, Lambda)', 'PySpark', 'Databricks', 'Hadoop', 'Apache Airflow', 'Azure']
        },
        {
            category: 'Model Optimization',
            items: ['Neural Architecture Search (NAS)', 'Pruning', 'Quantization', 'Knowledge Distillation']
        },
        {
            category: 'Generative AI',
            items: ['Transformer Models', 'BERT', 'LLM', 'Reinforcement Learning', 'GANs', 'VAEs', 'Diffusion Models']
        }
    ];

    const certifications = [
        {
            title: 'AWS Certified ML Specialist',
            organization: 'Udemy',
            description: 'Certified in Machine Learning Specialty demonstrating cloud ML expertise',
            link: 'https://www.udemy.com/certificate/UC-69c3d313-4dd6-4923-b26d-ecadc4d24719/' // Replace with actual link
        },
        {
            title: 'ML Certificate',
            organization: 'Stanford University (Coursera)',
            description: 'Completed comprehensive Machine Learning course from Stanford University',
            link: 'https://www.coursera.org/account/accomplishments/certificate/TDB23JKME49P' // Replace with actual link
        },
    ];

    const interests = [
        'Hardware-Software Co-design',
        'Edge AI & Mobile Applications',
        'Medical Image Analysis',
        'Audio Security & Forensics',
        'Autonomous Driving Systems',
        'Knowledge Distillation',
        'Neural Architecture Search',
        'Computer Vision',
        'Natural Language Processing'
    ];

    const publications = [
        {
            title: 'CB-DistillGrad: A Class-Balanced Knowledge Distillation Loss for Long-Tailed Visual Recognition',
            journal: 'Under Review',
            authors: 'Vemuri, S.M.; Gundrapally, A.; Kim, T.; Kim, J. (Senior Member, IEEE); Choi, K. (Senior Member, IEEE)'
        },
        {
            title: 'Hardware Accelerator Design by Using RT-Level Power Optimization Techniques on FPGA for Future AI Mobile Applications',
            journal: 'Electronics, vol. 14, no. 16, 2025',
            authors: 'Gundrapally, A.; Shah, Y.A.; Vemuri, S.M.; Choi, K.'
        }
    ];

    const getLanguageColor = (language) => {
        const colors = {
            "JavaScript": "#f1e05a",
            "Python": "#3776ab",
            "Java": "#b07219",
            "C++": "#f34b7d",
            "C": "#555555",
            "C#": "#239120",
            "PHP": "#4F5D95",
            "Ruby": "#701516",
            "Go": "#00ADD8",
            "Swift": "#fa7343",
            "Kotlin": "#F18E33",
            "Rust": "#dea584",
            "TypeScript": "#2b7489",
            "Shell": "#89e051",
            "HTML": "#e34c26",
            "CSS": "#1572B6",
            "Jupyter Notebook": "#DA5B0B",
            "CUDA": "#76B900",
            "R": "#198CE7",
            "MATLAB": "#e16737",
            "Dart": "#00B4AB",
            "Scala": "#c22d40",
            "Perl": "#0298c3",
            "Lua": "#000080",
            "Haskell": "#5e5086",
            "Clojure": "#db5855",
            "Elixir": "#6e4a7e",
            "Erlang": "#B83998",
            "F#": "#b845fc",
            "OCaml": "#3be133",
            "Vim script": "#199f4b",
            "PowerShell": "#012456",
            "Dockerfile": "#384d54",
            "Makefile": "#427819"
        };
        return colors[language] || "#6b7280";
    };

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    };

    const handleBackToAbout = () => {
        setSelectedProject(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // If a project is selected, show the project detail view
    if (selectedProject) {
        return (
            <ProjectDetail
                projectId={selectedProject}
                onBack={handleBackToAbout}
                githubUsername={githubUsername}
                repositoryNames={repositoryNames}
            />
        );
    }

    return (
        <section className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        PhD researcher specializing in Computer Vision, Edge AI, and Model Optimization
                    </p>
                </div>

                <div className="about-content">
                    {/* Personal Introduction */}
                    <div className="intro-section">
                        <div className="intro-text">
                            <h3>Hello, I'm Sai Manohar Vemuri</h3>
                            <p>Research focuses on Edge AI, computer vision, and deep learning with an emphasis on optimization theory and accelerator design. Core areas include model compression, low-rank tensor factorization, structured sparsity, quantization, and knowledge distillation for reducing model complexity under resource constraints. Hardware–software co-design leverages high-level synthesis (HLS), FPGA-based accelerators, and custom IP generation to optimize latency, throughput, and energy efficiency. The work integrates principles from approximation theory, information theory, and neural architecture search to advance scalable, real-time inference on embedded and edge computing platforms.</p>


                            <div className="personal-info">
                                <div className="info-item">
                                    <MapPin size={16} />
                                    <span>Chicago, IL</span>
                                </div>
                                <div className="info-item">
                                    <GraduationCap size={16} />
                                    <span>PhD Computer Science & Engineering (Expected 2028)</span>
                                </div>
                                <div className="info-item">
                                    <Calendar size={16} />
                                    <span>2+ years research experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="profile-image">
                            <img src={profilePic} alt="Sai Manohar Vemuri" />
                        </div>
                    </div>

                    {/* Education */}
                    <div className="education-section">
                        <h3 className="subsection-title">Education</h3>
                        <div className="timeline">
                            {education.map((item, index) => (
                                <div key={index} className="timeline-item education">
                                    <div className="timeline-marker">
                                        <GraduationCap size={16} />
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4 className="timeline-title">{item.title}</h4>
                                            <span className="timeline-year">{item.year}</span>
                                        </div>
                                        <div className="timeline-institution">{item.institution}</div>
                                        <p className="timeline-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="experience-section">
                        <h3 className="subsection-title">Professional Experience</h3>
                        <div className="timeline">
                            {experience.map((item, index) => (
                                <div key={index} className="timeline-item work">
                                    <div className="timeline-marker">
                                        <Code size={16} />
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4 className="timeline-title">{item.title}</h4>
                                            <span className="timeline-year">{item.year}</span>
                                        </div>
                                        <div className="timeline-institution">{item.institution}</div>
                                        <p className="timeline-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="skills-section">
                        <h3 className="subsection-title">Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="skill-group">
                                    <h4 className="skill-category">{skillGroup.category}</h4>
                                    <div className="skill-items">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="certifications-section">
                        <h3 className="subsection-title">Awards & Certifications</h3>
                        <div className="certifications-grid">
                            {certifications.map((certification, index) => (
                                <a
                                    key={index}
                                    href={certification.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certification-card-link"
                                >
                                    <div className="certification-card">
                                        <Award className="certification-icon" />
                                        <div className="certification-content">
                                            <h4 className="certification-title">{certification.title}</h4>
                                            <div className="certification-org">{certification.organization}</div>
                                            <p className="certification-description">{certification.description}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Research Interests */}
                    <div className="interests-section">
                        <h3 className="subsection-title">Research Interests</h3>
                        <div className="interests-cloud">
                            {interests.map((interest, index) => (
                                <span key={index} className="interest-tag">
                                    <Target size={14} />
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="projects-section">
                        <h3 className="subsection-title">Academic Projects</h3>

                        {loading && (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <Loader2 size={24} className="animate-spin" style={{ margin: '0 auto 1rem' }} />
                                <p>Loading projects from GitHub...</p>
                            </div>
                        )}

                        {error && (
                            <div style={{
                                textAlign: 'center',
                                padding: '2rem 0',
                                backgroundColor: '#fef2f2',
                                borderRadius: '8px',
                                margin: '1rem 0',
                                border: '1px solid #fecaca'
                            }}>
                                <AlertCircle size={24} style={{ color: '#ef4444', margin: '0 auto 1rem' }} />
                                <p style={{ color: '#dc2626', marginBottom: '1rem' }}>
                                    Error loading projects: {error}
                                </p>
                                <button
                                    onClick={fetchProjectsData}
                                    style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#ef4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                        {!loading && !error && (
                            <div className="projects-grid">
                                {projectsData.map((project) => (
                                    <div
                                        key={project.id}
                                        className={`project-card ${project.error ? 'error-card' : ''}`}
                                        onClick={() => !project.error && handleProjectClick(project.id)}
                                        style={project.error ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
                                    >
                                        <div className="project-content">
                                            <div className="project-header">
                                                <h4
                                                    className="project-title"
                                                    onClick={() => !project.error && handleProjectClick(project.id)}
                                                    style={project.error ? { color: '#6b7280' } : {}}
                                                >
                                                    {project.title}
                                                </h4>
                                            </div>

                                            <p className="project-description">{project.description}</p>

                                            {!project.error && (
                                                <div className="project-links">
                                                    {project.cloneUrl && (
                                                        <a
                                                            href={project.cloneUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-btn"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <GitBranch size={16} />
                                                            Clone Project
                                                        </a>
                                                    )}
                                                    {project.htmlUrl && (
                                                        <a
                                                            href={project.htmlUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-btn"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <Github size={16} />
                                                            Repo
                                                        </a>
                                                    )}
                                                    {project.homepage && (
                                                        <a
                                                            href={project.homepage}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="link-btn"
                                                            onClick={(e) => e.stopPropagation()}
                                                            style={{ textDecoration: 'none' }}
                                                        >
                                                            <ExternalLink size={16} />
                                                            Demo
                                                        </a>
                                                    )}
                                                </div>
                                            )}

                                            <div className="project-meta">
                                                {project.languages.length > 0 && (
                                                    <div className="project-languages">
                                                        <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>Languages:</span>
                                                        {project.languages.slice(0, 3).map((lang, index) => (
                                                            <span key={index} style={{ marginRight: '0.5rem' }}>
                                                                <span
                                                                    style={{
                                                                        display: 'inline-block',
                                                                        width: '12px',
                                                                        height: '12px',
                                                                        borderRadius: '50%',
                                                                        backgroundColor: getLanguageColor(lang.name),
                                                                        marginRight: '4px',
                                                                        verticalAlign: 'middle'
                                                                    }}
                                                                ></span>
                                                                {lang.name}: {lang.percentage}%
                                                                {index < Math.min(project.languages.length, 3) - 1 && ', '}
                                                            </span>
                                                        ))}
                                                        {project.languages.length > 3 && (
                                                            <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                                                                +{project.languages.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                                <div style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginTop: '1rem',
                                                    fontSize: '0.875rem',
                                                    color: '#6b7280'
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                        <Star size={14} />
                                                        <span>{project.stars} Stars</span>
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                        <Calendar size={14} />
                                                        <span>Updated {project.updatedDate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!loading && !error && projectsData.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <p>No projects found. Please check your repository names and GitHub username.</p>
                            </div>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="contact-section">
                        <h3 className="subsection-title">Let's Connect</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <a href="mailto:vemurimanohar6642@gmail.com" target="_blank" rel="noopener noreferrer">
                                    📧 vemurimanohar6642@gmail.com
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="tel:+13126875356">
                                    📱 (312) 687-5356
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="https://www.linkedin.com/in/vemuri02" target="_blank" rel="noopener noreferrer">
                                    🔗 linkedin.com/in/vemuri02
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="https://github.com/vemuri02" target="_blank" rel="noopener noreferrer">
                                    💻 github.com/vemuri02
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
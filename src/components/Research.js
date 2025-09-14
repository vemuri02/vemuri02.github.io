// src/components/Research.js
import React, { useState } from 'react';
import { ExternalLink, Github, Star, Calendar, Users, BookOpen } from 'lucide-react';
import rscd from '../data/rscd_image.jpg';
import quantization from '../data/quantization.png';
import ResearchDetail from './ResearchDetail';


const Research = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    // ../data
    const data = {};
    const req1 = require.context('../data', false, /\.(png|jpe?g|svg)$/);
    req1.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        data[fileName] = req1(key);
    });

    // ../data/KETI
    const keti_data = {};
    const req2 = require.context('../data/KETI', false, /\.(png|jpe?g|svg)$/);
    req2.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        keti_data[fileName] = req2(key);
    });

    const projects = [
        
        
        {
            
            id: "CB_DistillGrad",
            title: "Model–Accelerator Co-Design for Real-Time Road Surface Condition Estimation Using Camera and LiDAR Fusion",
            category: "edge-ai",
            status: "in-progress",
            description: "Developing lightweight AI models for road surface condition estimation using camera and LiDAR fusion, optimized through KD, pruning, quantization, and NAS for efficient FPGA deployment.",
            technologies: ["PyTorch","CUDA", "ONNX", "ARM Cortex", "HLS", "Vitis AI"],
            // paper: "https://arxiv.org/example",
            code: "https://github.com/vemuri02/CB_Distillation",
            // demo: "https://your-demo-site.com",
            image: data['rscd_image.jpg'],
            metrics: {
                accuracy: "87.11%",
                parameters: "0.13M",
                inference: "1.05ms"
            },
            collaborators: ["Achyuth Gundrapally", "Dr. Zhengyu Xia", "Dr. Kyuwon Choi","Dr. Joohee Kim"],
            venue: "IEEE Access, 2025"
        },
        {
            id: "lowPowerAI",
            title: "Low-Power FPGA Accelerators for Edge AI",
            category: "optimization",
            status: "published",
            description: "FPGA-based designs achieving 30–69× energy efficiency over GPUs for real-time AI inference.",
            technologies: ["PyTorch", "CUDA", "TensorRT","FPGA (Xilinx ZCU104)", "Titan GPU", "Jetson Orin", "Vivado", "Tensil Toolchain", "COCO Dataset"],
            paper: null,
            code: "https://github.com/yourusername/qat-research",
            demo: null,
            image: keti_data['keti_overview.png'],
            // metrics: {
            //     compression: "75%",
            //     accuracy_drop: "<2%",
            //     speedup: "3.2x"
            // },
            metrics: {
                "FPGA vs GPU Power": "69× more efficient",
                "Dynamic Power Reduction": "36%",
                "Inference Latency": "Real-time object detection achieved",
                "SRAM CIM Design": "~70% power reduction",
                "Overall Efficiency": "30× vs GPU baseline"
            },
            collaborators: ["Achyuth Gundrapally","Yatrik Shah", "Dr. Kyuwon Choi"],
            venue: "MDPI Electronics & IEEE (2023-2025)"
        },

    ];

    const publications = [
        {
            title: 'CB-DistillGrad: A Class-Balanced Knowledge Distillation Loss for Long-Tailed Visual Recognition',
            authors: 'Vemuri, S.M.; Gundrapally, A.; Kim, T.; Kim, J. (Senior Member, IEEE); Choi, K. (Senior Member, IEEE)',
            venue: "IEEE Access, 2025",
            type: "Journal Paper",
            link: "https://arxiv.org/example"
        },
        {
            title: 'Hardware Accelerator Design by Using RT-Level Power Optimization Techniques on FPGA for Future AI Mobile Applications',
            authors: 'Gundrapally, A.; Shah, Y.A.; Vemuri, S.M.; Choi, K.',
            venue: 'Electronics, vol. 14, no. 16, 2025',
            type: "Journal Paper",
            link: "https://doi.org/10.3390/electronics14163317"
        }
    ];

    const filteredProjects = selectedFilter === 'all'
        ? projects
        : projects.filter(project => project.category === selectedFilter);
        
    if (selectedProjectId) {
        return (
            <ResearchDetail
                projectId={selectedProjectId}

                onBack={() => setSelectedProjectId(null)}
            />
        );
    }

    return (
        <section className="research-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Research Portfolio</h2>
                    <p className="section-subtitle">
                        Exploring the intersection of deep learning and edge computing
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons">
                    <button
                        onClick={() => setSelectedFilter('all')}
                        className={selectedFilter === 'all' ? 'active' : ''}
                    >
                        All Projects
                    </button>
                    <button
                        onClick={() => setSelectedFilter('edge-ai')}
                        className={selectedFilter === 'edge-ai' ? 'active' : ''}
                    >
                        Edge AI
                    </button>
                    <button
                        onClick={() => setSelectedFilter('optimization')}
                        className={selectedFilter === 'optimization' ? 'active' : ''}
                    >
                        Optimization
                    </button>
                    {/* <button
                        onClick={() => setSelectedFilter('federated-learning')}
                        className={selectedFilter === 'federated-learning' ? 'active' : ''}
                    >
                        Federated Learning
                    </button> */}
                </div>

                {/* Research Projects */}
                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id}
                            className="project-card"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSelectedProjectId(project.id)}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-status">
                                    <span className={`status-badge ${project.status}`}>
                                        {project.status === 'published' ? 'Completed' : 'On Going'}
                                    </span>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3
                                    className="project-title"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setSelectedProjectId(project.id)}
                                >
                                    {project.title}
                                </h3>

                                <p className="project-description">{project.description}</p>

                                <div className="project-metrics">
                                    {Object.entries(project.metrics).map(([key, value]) => (
                                        <div key={key} className="metric">
                                            <span className="metric-label">{key.replace('_', ' ')}:</span>
                                            <span className="metric-value">{value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="project-tech">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-meta">
                                    <div className="collaborators">
                                        <Users size={20} />
                                        <span>{project.collaborators.join(', ')}</span>
                                    </div>
                                    <div className="venue">
                                        <Calendar size={16} />
                                        <span>{project.venue}</span>
                                    </div>
                                </div>

                                <div className="project-links">
                                    {project.paper && (
                                        <a href={project.paper} target="_blank" rel="noopener noreferrer" className="link-btn">
                                            <BookOpen size={16} />
                                            Paper
                                        </a>
                                    )}
                                    {project.code && (
                                        <a href={project.code} target="_blank" rel="noopener noreferrer" className="link-btn">
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn">
                                            <ExternalLink size={16} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Publications Section */}
                <div className="publications-section">
                    <h3 className="subsection-title">Recent Publications</h3>
                    <div className="publications-list">
                        {publications.map((pub, index) => (
                            <div key={index} className="publication-item">
                                <div className="publication-content">
                                    <h4 className="publication-title">{pub.title}</h4>
                                    <p className="publication-authors">{pub.authors}</p>
                                    <p className="publication-venue">{pub.venue}</p>
                                    <div className="publication-meta">
                                        <span className="publication-type">{pub.type}</span>
                                        {/* <div className="citation-count">
                                            <Star size={14} />
                                            <span>{pub.citations} citations</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="publication-actions">
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="link-btn">
                                        <ExternalLink size={10} />
                                        View Paper
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
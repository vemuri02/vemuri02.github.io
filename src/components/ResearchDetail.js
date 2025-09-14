// src/components/ResearchDetail.js
// import React, { useEffect, useState } from 'react';
import {
    ArrowLeft,
    Calendar,
    Star,
    Users,
    Target,
    BookOpen,
    CheckCircle,
    ExternalLink,
    Github,
    Brain,
    Zap,
    Award,
    TrendingUp,
    Database,
    Cpu,
    BarChart3,
    FileText,
    Download,
    Lightbulb,
    Settings,
    Timeline,
    Flag,
    GitBranch,
    DollarSign,
    AlertCircle,
    Eye,
    Clock,
    Image as ImageIcon,
    X,
    ZoomIn
} from 'lucide-react';
import rscd from '../data/rscd_image.jpg';
import quantization from '../data/quantization.png';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ResearchDetail = ({ projectId, onBack }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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




    // const allImages = [
    //     "/images/img1.jpg",
    //     "/images/img2.jpg",
    //     "/images/img3.jpg"
    // ];
    const openImageModal = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };
    
    // Navigation for modal: next/prev image in project.images
    const navigateImage = (direction) => {
        if (!project.images || project.images.length < 2) return;
        setCurrentImageIndex((prev) => {
            if (direction === 'next') {
                return (prev + 1) % project.images.length;
            } else {
                return (prev - 1 + project.images.length) % project.images.length;
            }
        });
        setSelectedImage(project.images[
            direction === 'next'
                ? (currentImageIndex + 1) % project.images.length
                : (currentImageIndex - 1 + project.images.length) % project.images.length
        ]);
    };

    // Scroll to top on project change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [projectId]);

    // Handle ESC and body scroll
    




    // Global research data - easily add new projects here
    const researchProjects = {


        "CB_DistillGrad": {
            title: "Model–Accelerator Co-Design for Real-Time Road Surface Condition Estimation Using Camera and LiDAR Fusion",
            shortDescription: "Developing lightweight AI models for road surface condition estimation using camera and LiDAR fusion, optimized through KD, pruning, quantization, and NAS for efficient FPGA deployment.",

            longDescription: "This ongoing project explores model–accelerator co-design for road surface condition estimation in autonomous vehicles. Lightweight neural networks are being developed and optimized using techniques such as knowledge distillation, pruning, quantization, and NAS to meet strict accuracy, latency, and energy constraints. The optimized models are deployed on FPGA hardware through custom accelerators and IP blocks, enabling real-time, energy-efficient inference. Future extensions include camera-based segmentation and multimodal fusion with LiDAR to enhance robustness under diverse environmental conditions, ultimately improving the safety and reliability of autonomous driving systems.",

            category: "Edge AI",
            status: "Ongoing (Classification Completed, Deployment in Progress)",
            heroImage: rscd,

            images: [
                {
                    src: data['rscd_image.jpg'],
                    caption: "Road surface classification results showing different road conditions",
                    title: "Classification Results"
                },
                {
                    src: data['iso_visit2.jpg'],
                    caption: "ISO/TC 204/WG 17 Meeting has been proceeded at the Illinois Institute of Technology"
                    +" (IIT) in Chicago for reviewing all the documents of more than 20 projects under development by SWG 17.1, SWG 17.2 and SWG 17.3.",
                    title: "ISO Meeting at Illinois Tech"
                },
                {
                    src: data['visit1.jpg'],
                    caption: "Real-time inference performance on various edge devices",
                    title: "Visitors from Chicago Departement of Transportation for future collaboration"
                },

            ],

            researchObjectives: [
                "Develop lightweight AI models for real-time road surface condition estimation using camera–LiDAR fusion",
                "Optimize models through KD, NAS, pruning, quantization, and compression for embedded deployment",
                "Design and implement custom accelerators and IP blocks on FPGAs for energy-efficient inference",
                "Ensure robustness of models under diverse road, lighting, and weather conditions",
                "Establish a comprehensive evaluation framework for accuracy, latency, and power efficiency in autonomous driving scenarios"
            ],

            methodology: "The research methodology follows a phased approach that combines AI model development, hardware-aware optimization, and real-time deployment. In the first phase, camera-based classification models were developed using knowledge distillation and quantization, achieving lightweight yet accurate performance. Deployment of these optimized models on FPGA hardware using HLS, Vivado, and Vitis AI is currently in progress. The second phase will extend the approach to camera-based segmentation, enabling more detailed road surface understanding. The third phase will integrate LiDAR data with camera inputs, enabling multimodal fusion for robust road surface perception under challenging conditions such as rain, snow, and low visibility.",

            keyContributions: [
                "Lightweight CNN with only 0.13M parameters achieving 87.1% accuracy",
                "Knowledge distillation framework maintaining 96.7% of teacher performance",
                "Quantization applied for edge deployment readiness",
                "Real-time deployment pipeline under development for FPGA-based accelerators"
            ],

            technicalApproach: [
                "Phase 1 – camera-based classification using KD and quantization (completed, deployment ongoing)",
                "Phase 2 – extend to camera-based segmentation (planned)",
                "Phase 3 – multimodal camera–LiDAR fusion for robust perception (planned)",
                "Optimize models through pruning, quantization, and, when required, neural architecture search (NAS)",
                "Replace computationally expensive operations with hardware-friendly activations and approximations",
                "Translate optimized models into custom IP blocks using HLS, Vivado, and Vitis AI for FPGA deployment",
                "Evaluate models and hardware co-designs across accuracy, latency, throughput, and power efficiency"
            ],

            results: {
                "Model Scope": "Classification model (Phase 1)",
                "Top-1 Accuracy": "87.11%",
                "Model Parameters": "0.13M",
                "Inference Time": "1.05ms",
                "Memory Usage": "~36MB",
                "Energy Consumption": "45mJ per inference"
            },

            challenges: [
                "Achieving high accuracy with extreme parameter constraints",
                "Handling diverse road surface textures and lighting conditions",
                "Real-time inference requirements on resource-limited hardware",
                "Generalizing across different camera sensors and mounting positions",
                "Maintaining robustness in adverse weather conditions"
            ],

            futureWork: [
                "Camera-based road surface segmentation",
                "Multi-modal fusion with LiDAR and radar sensors",
                "Temporal consistency for video-based road surface tracking",
                "Adaptive model selection based on driving conditions",
                "Integration with vehicle control systems for dynamic response",
                "Federated learning for continuous model improvement"
            ],

            technologies: ["PyTorch", "TensorFlow Lite", "ONNX", "ARM Cortex", "NVIDIA Jetson", "OpenCV"],
            collaborators: ["Achyuth Gundrapally", "Dr. Zhengyu Xia", "Dr. Kyuwon Choi", "Dr. Joohee Kim"],
            venue: "IEEE Access, 2025",
            fundingSource: "Ministry of Trade, Industry and Energy (MOTIE) - 1.6M USD",
            duration: "Sep 2024 - Dec 2028",
            paperLink: "https://ieeexplore.ieee.org/document/example",
            codeLink: "https://github.com/vemuri02/CB_Distillation",
            // demoLink: "https://road-surface-demo.com",

            publications: [
                {
                    title: "CB-DistillGrad: Class-Balanced Distillation and Gradient Conflict Resolution for Low Power Edge AI Applications",
                    venue: "IEEE Access, 2025",
                    status: "Under Review",
                    type: "Journal Paper",
                    link: "https://arxiv.org/example"
                }
            ],

            datasets: [
                "Road Surface Condition Dataset (RSCD) with 27 classes",
                "Cityscapes for urban road validation",
                "KITTI dataset for autonomous driving scenarios",
                "Custom collected data under various weather and lighting conditions"
            ]
        }, 





        
        "lowPowerAI": {
            title: "Low-Power FPGA Accelerators for Edge AI",
            shortDescription: "FPGA-based designs achieving 30–69× energy efficiency over GPUs for real-time AI inference.",
            longDescription: "This project developed hardware-aware optimizations for edge AI, focusing on FPGA implementations of real-time object detection. By integrating Tiny YOLOv4 with camera and LiDAR sensors, we benchmarked Titan GPUs, Jetson Orin, and FPGA boards. Results show that FPGA-based accelerators consume up to 69× less additional power than GPUs. Further, RTL-level design optimizations—operand gating, memory splitting, adaptive frequency scaling—reduced dynamic power by 36%. These advances establish FPGA as a highly energy-efficient platform for future edge AI applications.",
            category: "Hardware Acceleration",
            status: "Completed",
            heroImage: keti_data['keti_overview.png'],

            images: [
                {
                    src: keti_data['keti_testbed.png'],
                    caption: "FPGA testbed setup with camera and LiDAR for real-time object detection",
                    title: "Experimental Testbed"
                },
                {
                    src: keti_data['keti_results1.png'],
                    caption: "Comparison of Titan GPU vs FPGA power consumption during YOLOv4 inference",
                    title: "GPU vs FPGA Power Analysis"
                },
                {
                    src: keti_data["optimization_results.png"],
                    caption: "Dynamic power reduction achieved through FPGA-level design optimizations",
                    title: "Hardware Optimization Results"
                },
                {
                    src: keti_data['keti_realtime_detection.png'],
                    caption: "Real-time object detection results on FPGA with camera sensor",
                    title: "Real-Time Detection"
                },
                {
                    src: keti_data['keti_realtime_detection2.png'],
                    caption: "Real-time object detection results on FPGA with camera sensor",
                    title: "Real-Time Detection"
                },
                {
                    src: keti_data['keti_workflow.png'],
                    caption: "Overall workflow from model quantization to FPGA deployment",
                    title: "Deployment Workflow"
                },

            ],

            researchObjectives: [
                "Develop FPGA-based low-power AI acceleration techniques",
                "Integrate quantization with RT-level hardware optimization",
                "Demonstrate efficiency gains across Titan GPU, Jetson Orin, and FPGA platforms",
                "Validate real-time object detection with camera and LiDAR sensors",
                "Achieve energy-efficient inference for edge AI applications"
            ],

            methodology: "We constructed hardware testbeds (GPU, FPGA, Jetson) connected to camera and LiDAR sensors. Using Tiny YOLOv4 on the COCO dataset, we measured system power consumption under real-time inference. FPGA-specific optimizations such as operand-based gating, memory splitting, and adaptive frequency scaling were applied. Power measurements were benchmarked against GPU and Jetson platforms, demonstrating superior efficiency of FPGA accelerators.",

            keyContributions: [
                "First comparative testbed showing FPGA 69× more energy-efficient than Titan GPU",
                "RT-level optimization framework reducing dynamic power by 36%",
                "Integration of quantization with hardware-aware optimization for edge AI",
                "Evaluation across multiple hardware platforms (GPU, FPGA, Jetson)",
                "Published peer-reviewed papers and open benchmarks"
            ],

            technicalApproach: [
                "Adaptive quantization applied to YOLOv4 model",
                "FPGA RT-level optimizations (clock gating, operand isolation, frequency scaling)",
                "Comparative analysis of GPU vs FPGA vs Jetson platforms",
                "Custom sensor integration for real-time workloads",
                "Energy measurement pipeline using Vivado simulation and hardware monitors"
            ],

            results: {
                "FPGA vs GPU Power": "69× more efficient",
                "Dynamic Power Reduction": "36%",
                "Inference Latency": "Real-time object detection achieved",
                "SRAM CIM Design": "~70% power reduction",
                "Overall Efficiency": "30× vs GPU baseline"
            },

            challenges: [
                "Maintaining accuracy under aggressive quantization",
                "Ensuring compatibility across heterogeneous platforms",
                "Optimizing memory access bottlenecks",
                "Stability in low-bit precision backward passes",
                "Scalability to larger models like transformers"
            ],

            futureWork: [
                "Extension to transformer-based models",
                // "Integration with Neural Architecture Search (NAS)",
                "Real-time adaptive quantization per input",
                // "Federated learning with quantized models",
                "Deployment on next-gen AI accelerators"
            ],

            technologies: ["FPGA (Xilinx ZCU104)", "Titan GPU", "Jetson Orin", "Vivado", "Tensil Toolchain", "COCO Dataset"],
            collaborators: ["Achyuth GUndrapally","Yatrik Shah","Dr. Kyuwon Ken Choi", "Dr. YoungBae Kim", ],
            venue: "IEEE Access, Electronics",
            fundingSource: "Korea Electronics Technology Institute (KETI) - 800K USD",
            duration: "Jan 2023 - Dec 2025",
            paperLink: null,
            codeLink: "https://github.com/yourusername/fpga-lowpower-ai",
            demoLink: null,

            publications: [
                {
                    title: "Hardware Accelerator Design by Using RT-Level Power Optimization Techniques on FPGA for Future AI Mobile Applications",
                    venue: "Electronics, vol. 14, no. 16, p. 3317, Aug. 2025",
                    status: "Published",
                    link: "https://doi.org/10.3390/electronics14163317",
                    type: "Journal Paper"
                },
                {
                    title: "Novel Low-Power Computing-In-Memory (CIM) Design for Binary and Ternary Deep Neural Networks by Using 8T XNOR SRAM",
                    venue: "Electronics, vol. 13, no. 23, p. 4828, Dec. 2024",
                    status: "Published",
                    link:"https://doi.org/10.3390/electronics13234828",
                    type: "Journal Paper"
                },
                {
                    title: "A High-Performance and Ultra-Low-Power Accelerator Design for Advanced Deep Learning Algorithms on an FPGA",
                    venue: "Electronics, vol. 13, no. 13, p. 2676, July 2024",
                    status: "Published",
                    link:"https://doi.org/10.3390/electronics13132676",
                    type: "Journal Paper"
                },
                {
                    title: "A Novel CNFET SRAM-Based Compute-In-Memory for BNN Considering Chirality and Nanotubes",
                    venue: "Electronics, vol. 13, no. 11, p. 2192, Jan. 2024",
                    status: "Published",
                    link:"https://doi.org/10.3390/electronics13112192",
                    type: "Journal Paper"
                },
            ],


            datasets: [
                "COCO 2017 for object detection",
                "Custom real-time edge benchmark with camera + LiDAR"
            ],

            // impact: {
            //     "Citations": "50+",
            //     "Downloads": "3K+",
            //     "GitHub Stars": "200+",
            //     "Industry Adoption": "Automotive and Embedded AI sectors"
            // }
        }

        

    };

    const project = researchProjects[projectId];
    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedImage(null);
            }
            if (e.key === 'ArrowLeft') {
                navigateImage('prev');
            }
            if (e.key === 'ArrowRight') {
                navigateImage('next');
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage, currentImageIndex, project.images]);

    if (!project) {
        return (
            <div style={{
                padding: '2rem',
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
                <button
                    onClick={onBack}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        marginBottom: '2rem'
                    }}
                >
                    <ArrowLeft size={16} />
                    Back to Research
                </button>
                <AlertCircle size={48} style={{ color: '#ef4444', marginBottom: '1rem' }} />
                <h2>Research Project Not Found</h2>
                <p>The requested research project could not be found.</p>
            </div>
        );
    }

    // Global styling object - reusable across all research projects
    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            lineHeight: '1.6',
            color: '#1f2937'
        },
        backButton: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '2rem',
            transition: 'all 0.2s ease'
        },
        heroSection: {
            marginBottom: '3rem',
            padding: '2rem',
            backgroundColor: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
        },
        heroImage: {
            width: '100%',
            height: '400px',
            objectFit: 'fill',
            borderRadius: '8px',
            marginBottom: '1.5rem',
            cursor: 'pointer',
            transition: 'transform 0.2s ease'
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#111827'
        },
        shortDescription: {
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '1.5rem'
        },
        metaGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
        },
        metaItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e5e7eb',
            fontSize: '0.875rem'
        },
        section: {
            marginBottom: '3rem',
            padding: '1.5rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
        },
        sectionTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#111827'
        },
        list: {
            listStyle: 'none',
            padding: 0
        },
        listItem: {
            padding: '0.75rem',
            marginBottom: '0.5rem',
            backgroundColor: '#f9fafb',
            borderRadius: '6px',
            borderLeft: '4px solid #3b82f6'
        },
        techGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '0.5rem'
        },
        techTag: {
            padding: '0.5rem 1rem',
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            borderRadius: '20px',
            fontSize: '0.875rem',
            fontWeight: '500',
            textAlign: 'center'
        },
        resultsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 10fr))',
            gap: '1rem'
        },
        resultCard: {
            padding: '0.5rem',
            backgroundColor: '#f0f9ff',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #bae6fd'
        },
        resultValue: {
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#0284c7',
            marginBottom: '0.5rem'
        },
        resultLabel: {
            fontSize: '0.875rem',
            color: '#64748b',
            fontWeight: '500'
        },
        imageGallery: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginTop: '1rem'
        },
        imageItem: {
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
            position: 'relative'
        },
        galleryImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.2s ease'
        },
        imageCaption: {
            padding: '1rem'
        },
        imageCaptionTitle: {
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: '#111827'
        },
        imageCaptionText: {
            fontSize: '0.875rem',
            color: '#6b7280'
        },
        imageOverlay: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: '0',
            transition: 'all 0.3s ease',
            color: 'white'
        },
        linkButton: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            marginRight: '0.5rem',
            marginBottom: '0.5rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
        },
        publicationItem: {
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#f9fafb',
            borderRadius: '6px',
            borderLeft: '4px solid #10b981'
        },
        publicationTitle: {
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: '#111827'
        },
        publicationVenue: {
            fontSize: '0.875rem',
            color: '#059669',
            fontWeight: '500'
        },
        // Modal styles
        modalOverlay: {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '1000',
            padding: '2rem'
        },
        modalContent: {
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
        },
        modalImage: {
            width: '100%',
            height: 'auto',
            maxHeight: '70vh',
            objectFit: 'contain',
            display: 'block'
        },
        modalImageInfo: {
            padding: '1.5rem',
            backgroundColor: 'white'
        },
        modalTitle: {
            fontSize: '1.25rem',
            fontWeight: '600',
            marginBottom: '0.5rem',
            color: '#111827'
        },
        modalCaption: {
            fontSize: '0.875rem',
            color: '#6b7280',
            lineHeight: '1.5'
        },
        closeButton: {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'white',
            transition: 'background-color 0.2s ease',
            zIndex: '1001'
        }
    };

    return (
        <>
            <div style={styles.container}>
                <button
                    onClick={onBack}
                    style={styles.backButton}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#e2e8f0';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#f8fafc';
                    }}
                >
                    <ArrowLeft size={16} />
                    Back to Research
                </button>

                {/* Hero Section */}
                <div style={styles.heroSection}>
                    {project.heroImage && (
                        <img
                            src={project.heroImage}
                            alt={project.title}
                            style={styles.heroImage}
                            onClick={() => setSelectedImage({
                                src: project.heroImage,
                                title: project.title,
                                caption: project.shortDescription
                            })}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'scale(1.02)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'scale(1)';
                            }}
                        />
                    )}
                    <h1 style={styles.title}>{project.title}</h1>
                    <p style={styles.shortDescription}>{project.shortDescription}</p>

                    {/* Meta Information */}
                    <div style={styles.metaGrid}>
                        <div style={styles.metaItem}>
                            <Flag size={20} />
                            <span><strong>Status:</strong> {project.status}</span>
                        </div>
                        <div style={styles.metaItem}>
                            <Target size={16} />
                            <span><strong>Category:</strong> {project.category}</span>
                        </div>
                        <div style={styles.metaItem}>
                            <Calendar size={16} />
                            <span><strong>Duration:</strong> {project.duration}</span>
                        </div>
                        <div style={styles.metaItem}>
                            <Users size={16} />
                            <span><strong>Team:</strong> {project.collaborators.length + 1} members</span>
                        </div>
                        {project.fundingSource && (
                            <div style={styles.metaItem}>
                                <DollarSign size={50} />
                                <span><strong>Funding:</strong> {project.fundingSource}</span>
                            </div>
                        )}
                        <div style={styles.metaItem}>
                            <BookOpen size={16} />
                            <span><strong>Venue:</strong> {project.venue}</span>
                        </div>
                    </div>

                    {/* Action Links */}
                    <div>
                        {project.paperLink && (
                            <a href={project.paperLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
                                <FileText size={16} />
                                View Paper
                            </a>
                        )}
                        {project.codeLink && (
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
                                <Github size={16} />
                                Source Code
                            </a>
                        )}
                        {project.demoLink && (
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={styles.linkButton}>
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Overview Section */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <BookOpen size={20} />
                        Research Overview
                    </h2>
                    <p>{project.longDescription}</p>
                </div>

                {/* Research Objectives */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Target size={20} />
                        Research Objectives
                    </h2>
                    <ul style={styles.list}>
                        {project.researchObjectives.map((objective, index) => (
                            <li key={index} style={styles.listItem}>{objective}</li>
                        ))}
                    </ul>
                </div>

                {/* Methodology */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Settings size={20} />
                        Methodology
                    </h2>
                    <p>{project.methodology}</p>
                </div>

                {/* Key Contributions */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Award size={20} />
                        Key Contributions
                    </h2>
                    <ul style={styles.list}>
                        {project.keyContributions.map((contribution, index) => (
                            <li key={index} style={styles.listItem}>{contribution}</li>
                        ))}
                    </ul>
                </div>

                {/* Technical Approach */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Cpu size={20} />
                        Technical Approach
                    </h2>
                    <ul style={styles.list}>
                        {project.technicalApproach.map((approach, index) => (
                            <li key={index} style={styles.listItem}>{approach}</li>
                        ))}
                    </ul>
                </div>

                {/* Results */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <BarChart3 size={20} />
                        Results & Performance
                    </h2>
                    <div style={styles.resultsGrid}>
                        {Object.entries(project.results).map(([key, value]) => (
                            <div key={key} style={styles.resultCard}>
                                <div style={styles.resultValue}>{value}</div>
                                <div style={styles.resultLabel}>{key}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Images Gallery */}
                {project.images && project.images.length > 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <ImageIcon size={20} />
                            Research Images & Results
                        </h2>
                        <div style={styles.imageGallery}>
                            {project.images.map((image, index) => (
                                <div
                                    key={index}
                                    style={styles.imageItem}
                                    onClick={() => openImageModal(image, index)}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                                        const overlay = e.currentTarget.querySelector('[data-overlay]');
                                        if (overlay) {
                                            overlay.style.opacity = '1';
                                            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                                        }
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        const overlay = e.currentTarget.querySelector('[data-overlay]');
                                        if (overlay) {
                                            overlay.style.opacity = '0';
                                            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                                        }
                                    }}
                                >
                                    <div style={{ position: 'relative', height: '200px' }}>
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            style={styles.galleryImage}
                                        />
                                        <div data-overlay style={styles.imageOverlay}>
                                            <ZoomIn size={24} />
                                        </div>
                                    </div>
                                    <div style={styles.imageCaption}>
                                        <h4 style={styles.imageCaptionTitle}>{image.title}</h4>
                                        <p style={styles.imageCaptionText}>{image.caption}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Database size={20} />
                        Technologies & Tools
                    </h2>
                    <div style={styles.techGrid}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} style={styles.techTag}>{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Publications */}
                {project.publications && project.publications.length > 0 && (
                <div className="publications-section">
                    <h3 className="subsection-title">Recent Publications</h3>
                    <div className="publications-list">
                        {project.publications.map((pub, index) => (
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
                )}

                {/* Impact */}
                {project.impact && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <TrendingUp size={20} />
                            Research Impact
                        </h2>
                        <div style={styles.resultsGrid}>
                            {Object.entries(project.impact).map(([key, value]) => (
                                <div key={key} style={styles.resultCard}>
                                    <div style={styles.resultValue}>{value}</div>
                                    <div style={styles.resultLabel}>{key}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Challenges */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <AlertCircle size={20} />
                        Challenges & Solutions
                    </h2>
                    <ul style={styles.list}>
                        {project.challenges.map((challenge, index) => (
                            <li key={index} style={styles.listItem}>{challenge}</li>
                        ))}
                    </ul>
                </div>

                {/* Future Work */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Lightbulb size={20} />
                        Future Work
                    </h2>
                    <ul style={styles.list}>
                        {project.futureWork.map((work, index) => (
                            <li key={index} style={styles.listItem}>{work}</li>
                        ))}
                    </ul>
                </div>

                {/* Collaborators */}
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>
                        <Users size={20} />
                        Research Team
                    </h2>
                    <div style={styles.techGrid}>
                        {project.collaborators.map((collaborator, index) => (
                            <span key={index} style={{
                                ...styles.techTag,
                                backgroundColor: '#dcfce7',
                                color: '#166534'
                            }}>{collaborator}</span>
                        ))}
                    </div>
                </div>

                {/* Datasets */}
                {project.datasets && project.datasets.length > 0 && (
                    <div style={styles.section}>
                        <h2 style={styles.sectionTitle}>
                            <Database size={20} />
                            Datasets Used
                        </h2>
                        <ul style={styles.list}>
                            {project.datasets.map((dataset, index) => (
                                <li key={index} style={styles.listItem}>{dataset}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    style={styles.modalOverlay}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setSelectedImage(null);
                        }
                    }}
                >
                    <div style={styles.modalContent}>
                        <button
                            style={styles.closeButton}
                            onClick={() => setSelectedImage(null)}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                            }}
                        >
                            <X size={20} />
                        </button>

                        {/* Navigation buttons - only show if more than one image */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '1rem',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        zIndex: '1001'
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('prev');
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                                    }}
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '1rem',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: 'white',
                                        zIndex: '1001'
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('next');
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                                    }}
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        {/* Image counter */}
                        {project.images.length > 1 && (
                            <div style={{
                                position: 'absolute',
                                bottom: '0rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                color: '#111827',
                                background: 'rgba(255,255,255,0.85)',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontWeight: '50',
                                fontSize: '1rem',
                                zIndex: '1002'
                            }}>
                                {currentImageIndex + 1} of {project.images.length}
                            </div>
                        )}

                        <img
                            src={project.images[currentImageIndex].src}
                            alt={project.images[currentImageIndex].title}
                            style={styles.modalImage}
                        />
                        <div style={styles.modalImageInfo}>
                            <h3 style={styles.modalTitle}>{project.images[currentImageIndex].title}</h3>
                            <p style={styles.modalCaption}>{project.images[currentImageIndex].caption}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResearchDetail;
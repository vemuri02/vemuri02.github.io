// src/components/TAResources.js
import React, { useState } from 'react';
import { BookOpen, Code, Download, ExternalLink, Calendar, Users, FileText, Play, ChevronDown, ChevronRight } from 'lucide-react';

const TAResources = () => {
    const [activeTab, setActiveTab] = useState('course-materials');
    const [expandedSection, setExpandedSection] = useState(null);

    const courses = [
        {
            id: 'cs229',
            name: 'CS 229 - Machine Learning',
            semester: 'Fall 2024',
            students: 150,
            description: 'Introduction to machine learning algorithms and applications'
        },
        {
            id: 'cs231n',
            name: 'CS 231n - Deep Learning for Computer Vision',
            semester: 'Spring 2024',
            students: 120,
            description: 'Convolutional neural networks and computer vision applications'
        }
    ];

    const courseMaterials = [
        {
            id: 1,
            course: 'CS 229',
            title: 'Linear Regression and Gradient Descent',
            type: 'slides',
            week: 1,
            description: 'Introduction to linear regression, cost functions, and gradient descent optimization',
            files: [
                { name: 'week1_slides.pdf', size: '2.3 MB', type: 'pdf' },
                { name: 'gradient_descent_demo.py', size: '1.2 KB', type: 'python' },
                { name: 'dataset_housing.csv', size: '890 KB', type: 'csv' }
            ],
            lastUpdated: '2024-09-01'
        },
        {
            id: 2,
            course: 'CS 229',
            title: 'Logistic Regression and Classification',
            type: 'slides',
            week: 2,
            description: 'Binary and multiclass classification using logistic regression',
            files: [
                { name: 'week2_slides.pdf', size: '1.8 MB', type: 'pdf' },
                { name: 'logistic_regression.py', size: '2.1 KB', type: 'python' }
            ],
            lastUpdated: '2024-09-08'
        },
        {
            id: 3,
            course: 'CS 231n',
            title: 'Convolutional Neural Networks',
            type: 'slides',
            week: 3,
            description: 'CNN architectures, convolution operations, and pooling layers',
            files: [
                { name: 'cnn_fundamentals.pdf', size: '3.2 MB', type: 'pdf' },
                { name: 'cnn_implementation.py', size: '4.5 KB', type: 'python' },
                { name: 'cifar10_example.ipynb', size: '156 KB', type: 'notebook' }
            ],
            lastUpdated: '2024-02-15'
        }
    ];

    const labTutorials = [
        {
            id: 1,
            title: 'Setting Up Your ML Environment',
            description: 'Step-by-step guide to installing Python, PyTorch, and essential libraries',
            difficulty: 'Beginner',
            duration: '30 min',
            type: 'setup',
            resources: [
                { name: 'Installation Guide', type: 'pdf', link: '#' },
                { name: 'Environment Setup Script', type: 'script', link: '#' },
                { name: 'Video Tutorial', type: 'video', link: '#' }
            ]
        },
        {
            id: 2,
            title: 'Building Your First Neural Network',
            description: 'Hands-on tutorial for creating a simple neural network from scratch',
            difficulty: 'Intermediate',
            duration: '45 min',
            type: 'coding',
            resources: [
                { name: 'Tutorial Notebook', type: 'notebook', link: '#' },
                { name: 'Solution Code', type: 'python', link: '#' },
                { name: 'Dataset', type: 'csv', link: '#' }
            ]
        },
        {
            id: 3,
            title: 'Debugging Common ML Issues',
            description: 'Learn to identify and fix common problems in machine learning projects',
            difficulty: 'Advanced',
            duration: '60 min',
            type: 'debugging',
            resources: [
                { name: 'Debugging Checklist', type: 'pdf', link: '#' },
                { name: 'Common Errors Demo', type: 'notebook', link: '#' },
                { name: 'Troubleshooting Guide', type: 'pdf', link: '#' }
            ]
        }
    ];

    const officeHours = [
        {
            day: 'Monday',
            time: '2:00 PM - 4:00 PM',
            location: 'Gates 392',
            type: 'In-person'
        },
        {
            day: 'Wednesday',
            time: '10:00 AM - 12:00 PM',
            location: 'Zoom (link in Canvas)',
            type: 'Virtual'
        },
        {
            day: 'Friday',
            time: '3:00 PM - 5:00 PM',
            location: 'Gates 392',
            type: 'In-person'
        }
    ];

    const announcements = [
        {
            id: 1,
            title: 'Assignment 2 Extended Deadline',
            date: '2024-09-10',
            priority: 'high',
            content: 'Due to technical issues with the server, Assignment 2 deadline has been extended to September 15th, 11:59 PM.'
        },
        {
            id: 2,
            title: 'Additional Office Hours This Week',
            date: '2024-09-08',
            priority: 'medium',
            content: 'I will be holding additional office hours on Thursday 2-4 PM to help with midterm preparation.'
        },
        {
            id: 3,
            title: 'New Tutorial: Data Preprocessing',
            date: '2024-09-05',
            priority: 'low',
            content: 'A new tutorial on data preprocessing techniques has been added to the Lab Tutorials section.'
        }
    ];

    const getFileIcon = (type) => {
        switch (type) {
            case 'pdf':
                return <FileText size={16} className="file-icon pdf" />;
            case 'python':
                return <Code size={16} className="file-icon python" />;
            case 'notebook':
                return <BookOpen size={16} className="file-icon notebook" />;
            case 'csv':
                return <FileText size={16} className="file-icon csv" />;
            case 'video':
                return <Play size={16} className="file-icon video" />;
            default:
                return <FileText size={16} className="file-icon" />;
        }
    };

    const toggleSection = (sectionId) => {
        setExpandedSection(expandedSection === sectionId ? null : sectionId);
    };

    return (
        <section className="ta-resources-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">TA Resources</h2>
                    <p className="section-subtitle">
                        Course materials, lab tutorials, and resources for students
                    </p>
                </div>

                {/* Course Overview */}
                <div className="courses-overview">
                    <h3 className="subsection-title">Current Courses</h3>
                    <div className="courses-grid">
                        {courses.map(course => (
                            <div key={course.id} className="course-card">
                                <div className="course-header">
                                    <h4 className="course-name">{course.name}</h4>
                                    <span className="course-semester">{course.semester}</span>
                                </div>
                                <p className="course-description">{course.description}</p>
                                <div className="course-stats">
                                    <div className="stat">
                                        <Users size={16} />
                                        <span>{course.students} students</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="tab-navigation">
                    <button
                        onClick={() => setActiveTab('course-materials')}
                        className={activeTab === 'course-materials' ? 'active' : ''}
                    >
                        <BookOpen size={18} />
                        Course Materials
                    </button>
                    <button
                        onClick={() => setActiveTab('lab-tutorials')}
                        className={activeTab === 'lab-tutorials' ? 'active' : ''}
                    >
                        <Code size={18} />
                        Lab Tutorials
                    </button>
                    <button
                        onClick={() => setActiveTab('office-hours')}
                        className={activeTab === 'office-hours' ? 'active' : ''}
                    >
                        <Calendar size={18} />
                        Office Hours
                    </button>
                    <button
                        onClick={() => setActiveTab('announcements')}
                        className={activeTab === 'announcements' ? 'active' : ''}
                    >
                        <FileText size={18} />
                        Announcements
                    </button>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {activeTab === 'course-materials' && (
                        <div className="materials-section">
                            <h3 className="subsection-title">Course Materials</h3>
                            <div className="materials-list">
                                {courseMaterials.map(material => (
                                    <div key={material.id} className="material-item">
                                        <div className="material-header">
                                            <div className="material-info">
                                                <span className="course-tag">{material.course}</span>
                                                <span className="week-tag">Week {material.week}</span>
                                                <h4 className="material-title">{material.title}</h4>
                                                <p className="material-description">{material.description}</p>
                                            </div>
                                            <button
                                                onClick={() => toggleSection(material.id)}
                                                className="expand-btn"
                                            >
                                                {expandedSection === material.id ? <ChevronDown /> : <ChevronRight />}
                                            </button>
                                        </div>

                                        {expandedSection === material.id && (
                                            <div className="material-files">
                                                <h5>Files & Resources:</h5>
                                                <div className="files-list">
                                                    {material.files.map((file, index) => (
                                                        <div key={index} className="file-item">
                                                            {getFileIcon(file.type)}
                                                            <span className="file-name">{file.name}</span>
                                                            <span className="file-size">{file.size}</span>
                                                            <button className="download-btn">
                                                                <Download size={14} />
                                                                Download
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="material-meta">
                                                    <span>Last updated: {material.lastUpdated}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'lab-tutorials' && (
                        <div className="tutorials-section">
                            <h3 className="subsection-title">Lab Tutorials</h3>
                            <div className="tutorials-grid">
                                {labTutorials.map(tutorial => (
                                    <div key={tutorial.id} className="tutorial-card">
                                        <div className="tutorial-header">
                                            <h4 className="tutorial-title">{tutorial.title}</h4>
                                            <div className="tutorial-badges">
                                                <span className={`difficulty-badge ${tutorial.difficulty.toLowerCase()}`}>
                                                    {tutorial.difficulty}
                                                </span>
                                                <span className="duration-badge">{tutorial.duration}</span>
                                            </div>
                                        </div>

                                        <p className="tutorial-description">{tutorial.description}</p>

                                        <div className="tutorial-resources">
                                            <h5>Resources:</h5>
                                            {tutorial.resources.map((resource, index) => (
                                                <div key={index} className="resource-item">
                                                    {getFileIcon(resource.type)}
                                                    <span className="resource-name">{resource.name}</span>
                                                    <button className="resource-link">
                                                        <ExternalLink size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'office-hours' && (
                        <div className="office-hours-section">
                            <h3 className="subsection-title">Office Hours Schedule</h3>
                            <div className="office-hours-grid">
                                {officeHours.map((session, index) => (
                                    <div key={index} className="office-hours-card">
                                        <div className="session-day">{session.day}</div>
                                        <div className="session-time">{session.time}</div>
                                        <div className="session-location">
                                            <span className="location-text">{session.location}</span>
                                            <span className={`session-type ${session.type.toLowerCase()}`}>
                                                {session.type}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="office-hours-info">
                                <h4>Office Hours Guidelines</h4>
                                <ul>
                                    <li>Come prepared with specific questions</li>
                                    <li>Bring your code and any error messages</li>
                                    <li>For virtual sessions, have your screen sharing ready</li>
                                    <li>Check Canvas for any schedule changes</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'announcements' && (
                        <div className="announcements-section">
                            <h3 className="subsection-title">Recent Announcements</h3>
                            <div className="announcements-list">
                                {announcements.map(announcement => (
                                    <div key={announcement.id} className={`announcement-item priority-${announcement.priority}`}>
                                        <div className="announcement-header">
                                            <h4 className="announcement-title">{announcement.title}</h4>
                                            <div className="announcement-meta">
                                                <Calendar size={14} />
                                                <span>{announcement.date}</span>
                                                <span className={`priority-badge ${announcement.priority}`}>
                                                    {announcement.priority} priority
                                                </span>
                                            </div>
                                        </div>
                                        <p className="announcement-content">{announcement.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TAResources;
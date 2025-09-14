// src/components/ProjectDetail.js
import React, { useState, useEffect } from 'react';
import {
    ArrowLeft,
    Calendar,
    Star,
    GitBranch,
    Target,
    Code,
    BookOpen,
    CheckCircle,
    ExternalLink,
    Database,
    Brain,
    Zap,
    Github,
    Eye,
    Download,
    AlertCircle,
    Loader2
} from 'lucide-react';

const ProjectDetail = ({ projectId, onBack, githubUsername, repositoryNames }) => {
    const [projectData, setProjectData] = useState(null);
    const [languages, setLanguages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fetchProjectData();
    }, [projectId, githubUsername, repositoryNames]);

    const fetchProjectData = async () => {
        if (!repositoryNames || !repositoryNames[projectId - 1]) {
            setError('Repository not found');
            setLoading(false);
            return;
        }

        const repoName = repositoryNames[projectId - 1];

        try {
            setLoading(true);
            setError(null);

            // Fetch repository data
            const repoResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}`);
            if (!repoResponse.ok) {
                throw new Error(`Failed to fetch repository: ${repoResponse.status}`);
            }
            const repoData = await repoResponse.json();

            // Fetch languages data
            const languagesResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}/languages`);
            const languagesData = languagesResponse.ok ? await languagesResponse.json() : {};

            // Fetch README for additional project details
            let readmeContent = '';
            try {
                const readmeResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}/readme`);
                if (readmeResponse.ok) {
                    const readmeData = await readmeResponse.json();
                    readmeContent = atob(readmeData.content);
                }
            } catch (readmeError) {
                console.log('README not found or accessible');
            }

            // Process languages data
            const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
            const processedLanguages = Object.entries(languagesData).map(([name, bytes]) => ({
                name,
                percentage: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
                bytes
            })).sort((a, b) => b.percentage - a.percentage);

            setProjectData(repoData);
            setLanguages(processedLanguages);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

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

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const extractTechStack = (description, readmeContent) => {
        // Common tech keywords to look for
        const techKeywords = [
            'React', 'Vue', 'Angular', 'Node.js', 'Express', 'Django', 'Flask', 'FastAPI',
            'TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib',
            'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'MongoDB', 'PostgreSQL', 'MySQL',
            'Redis', 'GraphQL', 'REST', 'API', 'TypeScript', 'JavaScript', 'Python',
            'Machine Learning', 'Deep Learning', 'AI', 'Neural Network', 'CNN', 'RNN',
            'Transformer', 'BERT', 'GPT', 'NLP', 'Computer Vision', 'Data Science'
        ];

        const text = (description + ' ' + readmeContent).toLowerCase();
        return techKeywords.filter(tech =>
            text.includes(tech.toLowerCase())
        );
    };

    if (loading) {
        return (
            <div className="project-detail-container">
                <button onClick={onBack} className="back-button">
                    <ArrowLeft size={16} />
                    Back to About
                </button>
                <div className="project-detail-section" style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <Loader2 size={32} className="animate-spin" style={{ margin: '0 auto 1rem' }} />
                    <h2>Loading project details...</h2>
                    <p style={{ color: '#6b7280' }}>Fetching data from GitHub</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="project-detail-container">
                <button onClick={onBack} className="back-button">
                    <ArrowLeft size={16} />
                    Back to About
                </button>
                <div className="project-detail-section" style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <AlertCircle size={32} style={{ margin: '0 auto 1rem', color: '#ef4444' }} />
                    <h2>Error loading project</h2>
                    <p style={{ color: '#6b7280' }}>{error}</p>
                    <button
                        onClick={fetchProjectData}
                        style={{
                            marginTop: '1rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                        }}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (!projectData) {
        return (
            <div className="project-detail-container">
                <button onClick={onBack} className="back-button">
                    <ArrowLeft size={16} />
                    Back to About
                </button>
                <div className="project-detail-section">
                    <h2>Project not found</h2>
                    <p>The requested project could not be found.</p>
                </div>
            </div>
        );
    }

    const techStack = extractTechStack(projectData.description || '', '');

    return (
        <div className="project-detail-container">
            <button onClick={onBack} className="back-button">
                <ArrowLeft size={16} />
                Back to About
            </button>

            <div className="project-detail-header">
                <h1 className="project-detail-title">{projectData.name}</h1>
                <p className="project-detail-description">
                    {projectData.description || 'No description provided'}
                </p>

                <div className="project-detail-meta">
                    <div className="meta-item">
                        <Star size={16} />
                        <span>{projectData.stargazers_count} Stars</span>
                    </div>
                    <div className="meta-item">
                        <Calendar size={16} />
                        <span>Updated: {formatDate(projectData.updated_at)}</span>
                    </div>
                    <div className="meta-item">
                        <Code size={16} />
                        <span>{languages.length} Language{languages.length !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="meta-item">
                        <Eye size={16} />
                        <span>{projectData.watchers_count} Watchers</span>
                    </div>
                    <div className="meta-item">
                        <GitBranch size={16} />
                        <span>{projectData.forks_count} Forks</span>
                    </div>
                    <div className="meta-item">
                        <Download size={16} />
                        <span>Size: {Math.round(projectData.size / 1024)} MB</span>
                    </div>
                </div>

                {techStack.length > 0 && (
                    <div className="tech-stack">
                        {techStack.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                )}

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <a
                        href={projectData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            backgroundColor: '#24292e',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '6px',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}
                    >
                        <Github size={16} />
                        View on GitHub
                    </a>
                    {projectData.clone_url && (
                        <a
                            href={projectData.clone_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#10b981',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                fontSize: '0.875rem',
                                fontWeight: '500'
                            }}
                        >
                            <Download size={16} />
                            Clone Repository
                        </a>
                    )}
                </div>
            </div>

            <div className="project-detail-section">
                <h2 className="section-title">
                    <BookOpen size={20} style={{ marginRight: '0.5rem', display: 'inline' }} />
                    Repository Information
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                    <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>Created</h4>
                        <p style={{ margin: 0, color: '#6b7280' }}>{formatDate(projectData.created_at)}</p>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>License</h4>
                        <p style={{ margin: 0, color: '#6b7280' }}>
                            {projectData.license ? projectData.license.name : 'No license specified'}
                        </p>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>Default Branch</h4>
                        <p style={{ margin: 0, color: '#6b7280' }}>{projectData.default_branch}</p>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>Open Issues</h4>
                        <p style={{ margin: 0, color: '#6b7280' }}>{projectData.open_issues_count}</p>
                    </div>
                </div>
            </div>

            {languages.length > 0 && (
                <div className="project-detail-section">
                    <h2 className="section-title">
                        <Database size={20} style={{ marginRight: '0.5rem', display: 'inline' }} />
                        Programming Languages
                    </h2>
                    <div style={{ marginBottom: '1rem' }}>
                        {languages.slice(0, 5).map((lang, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '0.75rem',
                                padding: '0.5rem',
                                backgroundColor: '#f8fafc',
                                borderRadius: '6px'
                            }}>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        backgroundColor: getLanguageColor(lang.name),
                                        marginRight: '0.75rem'
                                    }}
                                ></span>
                                <span style={{ fontWeight: '500', marginRight: '0.5rem', flex: 1 }}>
                                    {lang.name}
                                </span>
                                <span style={{
                                    color: '#6b7280',
                                    fontSize: '0.875rem',
                                    backgroundColor: 'white',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '4px'
                                }}>
                                    {lang.percentage}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {projectData.topics && projectData.topics.length > 0 && (
                <div className="project-detail-section">
                    <h2 className="section-title">
                        <Target size={20} style={{ marginRight: '0.5rem', display: 'inline' }} />
                        Topics & Tags
                    </h2>
                    <div className="tech-stack">
                        {projectData.topics.map((topic, index) => (
                            <span key={index} className="tech-tag" style={{ backgroundColor: '#e0f2fe' }}>
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="project-detail-section">
                <h2 className="section-title">
                    <ExternalLink size={20} style={{ marginRight: '0.5rem', display: 'inline' }} />
                    Repository Links
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a
                        href={projectData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#3b82f6',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <Github size={16} />
                        Repository: {projectData.html_url}
                    </a>
                    <a
                        href={projectData.clone_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#10b981',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <Download size={16} />
                        Clone URL: {projectData.clone_url}
                    </a>
                    {projectData.homepage && (
                        <a
                            href={projectData.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#8b5cf6',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <ExternalLink size={16} />
                            Homepage: {projectData.homepage}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
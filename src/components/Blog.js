// src/components/Blog.js
import React, { useState } from 'react';
import { Calendar, Clock, Tag, ChevronRight, Search } from 'lucide-react';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const blogPosts = [
        {
            id: 1,
            title: "Optimizing Neural Networks for Edge Devices: A Practical Guide",
            excerpt: "Exploring quantization techniques and model compression methods that can reduce model size by up to 90% while maintaining accuracy.",
            category: "edge-ai",
            date: "2024-03-15",
            readTime: "8 min read",
            tags: ["Neural Networks", "Edge Computing", "Optimization"],
            image: "/api/placeholder/600/300",
            featured: true
        },
        {
            id: 2,
            title: "Understanding Transformer Architectures: From Attention to GPT",
            excerpt: "A deep dive into the transformer architecture, explaining the attention mechanism and how it revolutionized natural language processing.",
            category: "deep-learning",
            date: "2024-02-28",
            readTime: "12 min read",
            tags: ["Transformers", "Attention", "NLP"],
            image: "/api/placeholder/600/300",
            featured: false
        },
        {
            id: 3,
            title: "Setting Up Your First PyTorch Project: Best Practices",
            excerpt: "A beginner-friendly guide to structuring PyTorch projects with proper data loading, model training, and evaluation pipelines.",
            category: "tutorials",
            date: "2024-02-10",
            readTime: "15 min read",
            tags: ["PyTorch", "Python", "Machine Learning"],
            image: "/api/placeholder/600/300",
            featured: false
        },
        {
            id: 4,
            title: "Federated Learning: Privacy-Preserving AI Training",
            excerpt: "How federated learning enables collaborative model training without sharing sensitive data, and its applications in edge computing.",
            category: "research",
            date: "2024-01-22",
            readTime: "10 min read",
            tags: ["Federated Learning", "Privacy", "Distributed Systems"],
            image: "/api/placeholder/600/300",
            featured: true
        },
        {
            id: 5,
            title: "Common Mistakes in Deep Learning Projects (And How to Avoid Them)",
            excerpt: "Learn from common pitfalls in deep learning projects, from data preprocessing errors to architectural choices that hurt performance.",
            category: "tutorials",
            date: "2024-01-05",
            readTime: "6 min read",
            tags: ["Deep Learning", "Best Practices", "Debugging"],
            image: "/api/placeholder/600/300",
            featured: false
        }
    ];

    const categories = [
        { id: 'all', label: 'All Posts', count: blogPosts.length },
        { id: 'edge-ai', label: 'Edge AI', count: blogPosts.filter(p => p.category === 'edge-ai').length },
        { id: 'deep-learning', label: 'Deep Learning', count: blogPosts.filter(p => p.category === 'deep-learning').length },
        { id: 'tutorials', label: 'Tutorials', count: blogPosts.filter(p => p.category === 'tutorials').length },
        { id: 'research', label: 'Research', count: blogPosts.filter(p => p.category === 'research').length }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = searchTerm === '' ||
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter(post => post.featured);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <section className="blog-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Blog & Insights</h2>
                    <p className="section-subtitle">
                        Sharing knowledge about deep learning, edge AI, and research experiences
                    </p>
                </div>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <div className="featured-section">
                        <h3 className="subsection-title">Featured Posts</h3>
                        <div className="featured-posts">
                            {featuredPosts.map(post => (
                                <div key={post.id} className="featured-post">
                                    <div className="post-image">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span className="post-category">{post.category}</span>
                                            <div className="post-date">
                                                <Calendar size={14} />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                            <div className="read-time">
                                                <Clock size={14} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="post-title">{post.title}</h3>
                                        <p className="post-excerpt">{post.excerpt}</p>
                                        <div className="post-tags">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="tag">
                                                    <Tag size={12} />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <button className="read-more-btn">
                                            Read More <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Search and Filter */}
                <div className="blog-controls">
                    <div className="search-box">
                        <Search size={20} />
                        <input
                            type="text"
                            placeholder="Search posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={selectedCategory === category.id ? 'active' : ''}
                            >
                                {category.label} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>

                {/* All Posts Grid */}
                <div className="posts-grid">
                    {filteredPosts.map(post => (
                        <article key={post.id} className="post-card">
                            <div className="post-image">
                                <img src={post.image} alt={post.title} />
                                <div className="post-overlay">
                                    <span className="post-category">{post.category}</span>
                                </div>
                            </div>

                            <div className="post-content">
                                <div className="post-meta">
                                    <div className="post-date">
                                        <Calendar size={14} />
                                        <span>{formatDate(post.date)}</span>
                                    </div>
                                    <div className="read-time">
                                        <Clock size={14} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-excerpt">{post.excerpt}</p>

                                <div className="post-tags">
                                    {post.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="tag">
                                            <Tag size={12} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="read-more-btn">
                                    Read More <ChevronRight size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="no-posts">
                        <p>No posts found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSearchTerm('');
                            }}
                            className="btn-secondary"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;

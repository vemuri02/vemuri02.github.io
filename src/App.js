import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Research from './components/Research';
import Blog from './components/Blog';
import TAResources from './components/TAResources';
import Contact from './components/Contact';
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    const renderSection = () => {
        switch (activeSection) {
            case 'home': return <Home />;
            case 'about': return <About setActiveSection={setActiveSection} />;
            case 'research': return <Research />;
            case 'blog': return <Blog />;
            case 'ta-resources': return <TAResources />;
            case 'contact': return <Contact />;
            default: return <Home />;
        }
    };

    // ✅ Log visitor in the real browser only
    useEffect(() => {
        // Only run if window exists (prevents prerender issues)
        if (typeof window === 'undefined') return;

        async function logVisitor() {
            try {
                // Fetch real location from ipapi
                const res = await fetch("https://ipapi.co/json/");
                const location = await res.json();

                // POST to serverless function
                await fetch("/.netlify/functions/log-visitor", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        country: location.country_name,
                        city: location.city,
                        page: window.location.pathname,
                        timestamp: new Date().toISOString(),
                    }),
                });
            } catch (err) {
                console.error("Analytics failed:", err);
            }
        }

        // Use setTimeout to ensure prerendering has finished
        setTimeout(logVisitor, 1000);
    }, []);


    // Scroll to top when section changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSection]);

    return (
        <div className="App">
            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
            <main>{renderSection()}</main>
        </div>
    );
}

export default App;

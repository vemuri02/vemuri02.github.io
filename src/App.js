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
            case 'home':
                return <Home />;
            case 'about':
                return <About
                    setActiveSection={setActiveSection}
                />;
            case 'research':
                return <Research />;
            case 'blog':
                return <Blog />;
            case 'ta-resources':
                return <TAResources />;
            case 'contact':
                return <Contact />;
            default:
                return <Home />;
        }
    };

    // Scroll to top whenever the section changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeSection]);

    return (
        <div className="App">
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main>
                {renderSection()}
            </main>
        </div>
    );
}

export default App;

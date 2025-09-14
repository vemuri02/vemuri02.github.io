import React from 'react';

// Mock components for demonstration - replace with your actual imports
const Container = ({ children, ...props }) => (
  <div className="container" {...props}>
    {children}
  </div>
);

const Row = ({ children, className = "", ...props }) => (
  <div className={`row ${className}`} {...props}>
    {children}
  </div>
);

const Jumbotron = ({ className, children, ...props }) => (
  <div className={`py-3 ${className}`} {...props}>
    <div className="container py-5">
      {children}
    </div>
  </div>
);

const EducationCard = ({ data, index }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const cardStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
    transition: 'all 0.6s ease',
    transitionDelay: `${index * 0.1}s`
  };

  const containerStyle = {
    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%)',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.1), 0 1px 8px rgba(102, 126, 234, 0.05)',
    border: '1px solid rgba(102, 126, 234, 0.08)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  };

  const imageContainerStyle = {
    position: 'relative',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100px',
    minWidth: '140px'
  };

  const imageStyle = {
    maxWidth: '120px',
    maxHeight: '80px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease'
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const roleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '0.5rem',
    lineHeight: '1.4'
  };

  const dateStyle = {
    fontSize: '1rem',
    color: '#667eea',
    fontWeight: '500',
    marginBottom: '0.25rem'
  };

  const decorativeElementStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    opacity: '0.1',
    transform: 'scale(0)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4" ref={cardRef}>
      <div
        style={{ ...containerStyle, ...cardStyle }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.15), 0 10px 20px rgba(102, 126, 234, 0.1)';
          const decorative = e.currentTarget.querySelector('.decorative-element');
          const image = e.currentTarget.querySelector('.education-image');
          if (decorative) decorative.style.transform = 'scale(1)';
          if (image) image.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.1), 0 1px 8px rgba(102, 126, 234, 0.05)';
          const decorative = e.currentTarget.querySelector('.decorative-element');
          const image = e.currentTarget.querySelector('.education-image');
          if (decorative) decorative.style.transform = 'scale(0)';
          if (image) image.style.transform = 'scale(1)';
        }}
      >
        <div className="decorative-element" style={decorativeElementStyle}></div>

        <div style={imageContainerStyle}>
          {data.companylogo ? (
            <img
              className="education-image"
              style={imageStyle}
              src={data.companylogo}
              alt={`${data.role} logo`}
            />
          ) : (
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {data.role ? data.role.charAt(0).toUpperCase() : 'E'}
            </div>
          )}
        </div>

        <div style={contentStyle}>
          <div style={roleStyle}>
            {data.role}
          </div>
          <div style={dateStyle}>
            {data.date}
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = ({
  education = {
    heading: "Education",
    data: [
      {
        companylogo: "https://via.placeholder.com/100x60/667eea/ffffff?text=University",
        role: "Master of Computer Science",
        date: "2020 - 2022"
      },
      {
        companylogo: "https://via.placeholder.com/100x60/764ba2/ffffff?text=College",
        role: "Bachelor of Technology",
        date: "2016 - 2020"
      },
      {
        companylogo: "https://via.placeholder.com/100x60/667eea/ffffff?text=School",
        role: "High School Diploma",
        date: "2014 - 2016"
      }
    ]
  }
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Add CSS animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .education-section {
        position: relative;
        background: linear-gradient(135deg, #f8f9ff 0%, #e6f3ff 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      .education-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
      }

      .floating-element {
        position: absolute;
        border-radius: 50%;
        background: rgba(102, 126, 234, 0.05);
        animation: educationFloat 8s ease-in-out infinite;
      }

      .element-1 {
        width: 200px;
        height: 200px;
        top: 15%;
        left: 5%;
        animation-delay: 0s;
      }

      .element-2 {
        width: 150px;
        height: 150px;
        top: 60%;
        right: 10%;
        animation-delay: 3s;
      }

      .element-3 {
        width: 100px;
        height: 100px;
        bottom: 20%;
        left: 60%;
        animation-delay: 6s;
      }

      @keyframes educationFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-20px) rotate(60deg); }
        66% { transform: translateY(10px) rotate(-30deg); }
      }

      .section-heading {
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        margin-bottom: 3rem;
        position: relative;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.8s ease forwards;
      }

      .section-heading::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 4px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        border-radius: 2px;
        animation: expandLine 1s ease 0.5s forwards;
      }

      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes expandLine {
        to {
          width: 100px;
        }
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
      }

      .col-lg-4 {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        padding: 0 15px;
      }

      .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
      }

      .mb-4 {
        margin-bottom: 1.5rem;
      }

      @media (max-width: 991px) {
        .col-lg-4 {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }

      @media (max-width: 768px) {
        .section-heading {
          font-size: 2.5rem;
        }
        
        .floating-element {
          display: none;
        }

        .col-lg-4,
        .col-md-6 {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }

      @media (max-width: 480px) {
        .section-heading {
          font-size: 2rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const sectionStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'all 0.8s ease'
  };

  return (
    <section className="education-section" ref={sectionRef} style={sectionStyle}>
      {/* Background decoration */}
      <div className="education-background">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Jumbotron className="bg-transparent" style={{ background: 'transparent' }}>
          <h2 className="section-heading">
            {education.heading}
          </h2>
          <Row className="justify-content-center">
            {education.data.map((data, index) => (
              <EducationCard key={index} data={data} index={index} />
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Education;
import React from "react";
import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize = 300, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Inline styles
  const sectionStyle = {
    position: 'relative',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 0
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 0.8s ease'
  };

  const contentWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: showPic ? 'auto 1fr' : '1fr',
    gap: '4rem',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '3rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };

  const profileSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imageContainerStyle = {
    position: 'relative',
    display: 'inline-block'
  };

  const skeletonStyle = {
    width: `${imgSize}px`,
    height: `${imgSize}px`,
    borderRadius: '50%',
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'skeleton-loading 1.5s infinite',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const profileImageStyle = {
    borderRadius: '50%',
    objectFit: 'cover',
    opacity: imageLoaded ? 1 : 0,
    transform: imageLoaded ? 'scale(1)' : 'scale(0.8)',
    transition: 'all 0.6s ease',
    position: 'relative',
    zIndex: 2,
    display: imageLoaded ? 'block' : 'none'
  };

  const imageBorderStyle = {
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    right: '-8px',
    bottom: '-8px',
    border: '3px solid transparent',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #667eea, #764ba2, #667eea)',
    animation: 'borderRotate 3s linear infinite'
  };

  const textSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: !showPic ? 'center' : 'left'
  };

  const textContentStyle = {
    animation: 'slideInRight 0.8s ease 0.2s both'
  };

  const headingStyle = {
    position: 'relative',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const headingTextStyle = {
    fontSize: '3.5rem',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1.2,
    position: 'relative',
    zIndex: 2
  };

  const messageStyle = {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    color: '#4a5568',
    textAlign: 'center',
    margin: '0 0 2.5rem 0',
    fontWeight: 400
  };

  const ctaSectionStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const buttonStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.875rem 2rem',
    fontSize: '1.125rem',
    fontWeight: 600,
    color: 'white',
    textDecoration: 'none',
    borderRadius: '50px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    transform: 'translateY(0)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };

  const buttonContentStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative',
    zIndex: 3
  };

  const buttonIconStyle = {
    width: '20px',
    height: '20px',
    strokeWidth: 2.5
  };

  // Add CSS animations to the document head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes skeleton-loading {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      @keyframes borderRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes slideInRight {
        0% { opacity: 0; transform: translateX(30px); }
        100% { opacity: 1; transform: translateX(0); }
      }

      .floating-shape {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(10px);
        animation: float 6s ease-in-out infinite;
      }

      .shape-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        left: -5%;
        animation-delay: 0s;
      }

      .shape-2 {
        width: 200px;
        height: 200px;
        top: 60%;
        right: -10%;
        animation-delay: 2s;
      }

      .shape-3 {
        width: 150px;
        height: 150px;
        bottom: 20%;
        left: 50%;
        animation-delay: 4s;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
        33% { transform: translateY(-30px) rotate(120deg); opacity: 1; }
        66% { transform: translateY(15px) rotate(240deg); opacity: 0.5; }
      }

      .resume-button:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4) !important;
        text-decoration: none !important;
        color: white !important;
      }

      @media (max-width: 768px) {
        .content-wrapper-responsive {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
          padding: 2rem !important;
          text-align: center !important;
        }
        
        .heading-text-responsive {
          font-size: 2.5rem !important;
        }
        
        .message-responsive {
          font-size: 1.125rem !important;
        }
        
        .floating-shape {
          display: none !important;
        }
      }

      @media (max-width: 480px) {
        .heading-text-responsive {
          font-size: 2rem !important;
        }
        
        .content-wrapper-responsive {
          padding: 1.5rem !important;
        }
        
        .resume-button {
          padding: 0.75rem 1.5rem !important;
          font-size: 1rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Jumbotron id="aboutme" className="m-0" style={sectionStyle}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div style={containerStyle}>
        <div style={contentWrapperStyle} className="content-wrapper-responsive">
          {/* Profile picture section */}
          {showPic && (
            <div style={profileSectionStyle}>
              <div style={imageContainerStyle}>
                {!imageLoaded && (
                  <div style={skeletonStyle}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: '#ddd',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                )}
                <img
                  style={profileImageStyle}
                  src={profilePicUrl}
                  alt="Profile"
                  width={imgSize}
                  height={imgSize}
                  onLoad={handleImageLoad}
                />
                <div style={imageBorderStyle}></div>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 1,
                  animation: 'pulse 2s ease-in-out infinite'
                }}></div>
              </div>
            </div>
          )}

          {/* Content section */}
          <div style={textSectionStyle}>
            <div style={textContentStyle}>
              <h2 style={headingStyle}>
                <span style={headingTextStyle} className="heading-text-responsive">{heading}</span>
                <div style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h2>

              <div style={{ marginBottom: '2.5rem' }}>
                <p style={messageStyle} className="message-responsive">{message}</p>
              </div>

              {resume && (
                <div style={ctaSectionStyle}>
                  <a
                    className="resume-button"
                    style={buttonStyle}
                    href={resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="View Resume/CV"
                  >
                    <span style={buttonContentStyle}>
                      <svg style={buttonIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span style={{ fontWeight: 600 }}>View Resume</span>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
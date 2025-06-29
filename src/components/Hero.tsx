import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Full Stack Developer',
    'Generative AI Builder',
    'Content Creator',
    'Tech Innovator'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sandeep_Kotari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen relative z-10 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Enhanced Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #3b82f6, #a855f7, #10b981, #3b82f6)',
                padding: '3px'
              }}
            >
              <div className="w-full h-full rounded-full bg-dark-bg"></div>
            </motion.div>

            {/* Middle Pulsing Ring */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-2 rounded-full bg-gradient-to-r from-electric-blue/30 via-neon-violet/30 to-soft-green/30 backdrop-blur-sm"
            ></motion.div>

            {/* Inner Glassmorphism Frame */}
            <div className="absolute inset-4 rounded-full glass-morphism border-2 border-white/20 shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-blue/10 via-transparent to-neon-violet/10"></div>
            </div>

            {/* Tech UI Overlays */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Corner Tech Elements */}
              <div className="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-electric-blue/60"></div>
              <div className="absolute top-8 right-8 w-6 h-6 border-r-2 border-t-2 border-neon-violet/60"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border-l-2 border-b-2 border-soft-green/60"></div>
              <div className="absolute bottom-8 right-8 w-6 h-6 border-r-2 border-b-2 border-electric-blue/60"></div>

              {/* Scanning Lines */}
              <motion.div
                animate={{
                  y: [-100, 100, -100]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute left-1/2 w-px h-8 bg-gradient-to-b from-transparent via-electric-blue to-transparent opacity-60"
              ></motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  className="absolute w-1 h-1 bg-electric-blue rounded-full"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 3) * 20}%`
                  }}
                ></motion.div>
              ))}
            </div>

            {/* Profile Image */}
            <motion.div
              className="relative z-10 w-80 h-80 rounded-full overflow-hidden shadow-inner"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-transparent to-neon-violet/20 z-10"></div>
              <img
                src="https://res.cloudinary.com/dlvc4lbod/image/upload/v1751114300/Dark_Blue_Modern_Professional_Recruitment_LinkedIn_Profile_Picture_vorby8.png"
                alt="Sandeep Kotari"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 shadow-inner-custom"></div>
            </motion.div>

            {/* Motion Aura Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/20 via-neon-violet/20 to-soft-green/20 blur-xl"
            ></motion.div>

            {/* Status Indicator */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
              className="absolute bottom-6 right-6 w-4 h-4 bg-soft-green rounded-full border-2 border-white/30 shadow-lg z-20"
            ></motion.div>
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">Sandeep Kotari</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl font-semibold mb-8 h-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-electric-blue">{text}</span>
            <span className="animate-blink border-r-2 border-electric-blue ml-1"></span>
          </motion.div>

          {/* Professional Summary Box with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 2,
              rotateX: 2,
            }}
            className="glass-morphism p-6 rounded-2xl mb-8 border border-white/10 relative overflow-hidden group"
          >
            {/* Floating Background Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-electric-blue rounded-full"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 25}%`
                  }}
                ></motion.div>
              ))}
            </div>

            {/* Animated Border Glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-electric-blue/20 via-neon-violet/20 to-soft-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></motion.div>

            {/* Content with Staggered Animation */}
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Experienced full-stack developer skilled in{' '}
              </motion.span>
              <motion.span 
                className="text-electric-blue font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
              >
                React.js, Node.js, Java, Spring Boot
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                ,{' '}
              </motion.span>
              <motion.span 
                className="text-neon-violet font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                whileHover={{ scale: 1.05 }}
              >
                MySQL, MongoDB, and Firebase
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                {' '}with strong{' '}
              </motion.span>
              <motion.span 
                className="text-soft-green font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                whileHover={{ scale: 1.05 }}
              >
                DSA and API integration expertise
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.6 }}
              >
                .
                I build scalable web/mobile apps, AI/deep learning models, and deliver content through writing, 
                video editing, and voiceovers. From full stack projects to REST APIs and creative tech solutions, 
                I help turn{' '}
              </motion.span>
              <motion.span 
                className="text-gradient font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.8 }}
                whileHover={{ scale: 1.05 }}
              >
                real-world problems into impactful digital experiences
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 3.0 }}
              >
                .
              </motion.span>
            </motion.p>

            {/* Tech Corner Accents */}
            <div className="absolute top-3 right-3 w-6 h-6 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
              <motion.div 
                className="absolute top-0 right-0 w-3 h-0.5 bg-electric-blue"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute top-0 right-0 w-0.5 h-3 bg-electric-blue"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons with Enhanced Animations */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              {
                icon: Download,
                label: "Download Resume",
                onClick: handleResumeDownload,
                gradient: "from-electric-blue to-neon-violet",
                delay: 0
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://linkedin.com/in/sandeep-kotari-9b650b268/",
                gradient: "from-blue-600 to-blue-700",
                delay: 0.1
              },
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/sandeepkotari",
                gradient: "from-gray-700 to-gray-800",
                delay: 0.2
              },
              {
                icon: Mail,
                label: "Email Me",
                href: "mailto:sandeepkotari19@gmail.com",
                gradient: "from-soft-green to-green-600",
                delay: 0.3
              }
            ].map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + button.delay,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {button.onClick ? (
                  <motion.button
                    className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${button.gradient} text-white rounded-xl font-semibold text-sm hover-glow relative overflow-hidden group`}
                    onClick={button.onClick}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    ></motion.div>
                    
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="relative z-10"
                    >
                      <button.icon size={18} />
                    </motion.div>
                    <span className="relative z-10">{button.label}</span>
                  </motion.button>
                ) : (
                  <motion.a
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${button.gradient} text-white rounded-xl font-semibold text-sm hover-glow relative overflow-hidden group`}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    ></motion.div>
                    
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative z-10"
                    >
                      <button.icon size={18} />
                    </motion.div>
                    <span className="relative z-10">{button.label}</span>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-electric-blue" />
      </motion.div>
    </section>
  );
};

export default Hero;
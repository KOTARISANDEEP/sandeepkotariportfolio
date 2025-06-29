import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Server, PenTool, Video, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Full Stack Project Development',
      description: 'End-to-end web app development using MERN or Java + Spring Boot, built for performance and scalability.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-electric-blue to-neon-violet'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Model Building',
      description: 'From deep learning models to smart AI tools — I build intelligent systems that solve real problems.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-neon-violet to-soft-green'
    },
    {
      icon: Server,
      title: 'REST API Design & Integration',
      description: 'Secure and scalable APIs using Node.js, Express, Java, or Flask — built for real-time apps and mobile platforms.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-soft-green to-electric-blue'
    },
    {
      icon: PenTool,
      title: 'Content Writing & Blogging',
      description: 'SEO-friendly, high-quality technical content for blogs, websites, and personal branding — written to convert and engage.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-electric-blue to-neon-violet'
    },
    {
      icon: Video,
      title: 'Video Editing & Voice-Over Creation',
      description: 'Tech videos, reels, AI explainers — complete editing with effects, subtitles, and pro voice-overs using tools like CapCut and ElevenLabs.',
      image: 'https://images.pexels.com/photos/7688047/pexels-photo-7688047.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-neon-violet to-soft-green'
    },
    {
      icon: Lightbulb,
      title: 'Project Exploration & Tech Guidance',
      description: 'I help individuals and startups brainstorm, structure, and scale their ideas into real-world tech solutions.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-soft-green to-electric-blue'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services I <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional tech solutions tailored to bring your ideas to life with cutting-edge technology and creative innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl glass-morphism hover-glow"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 2,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full rounded-full bg-dark-bg/90 flex items-center justify-center">
                    <service.icon size={28} className="text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover Effect - Glowing Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                
                {/* Tech Accent Lines */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-4 h-0.5 bg-electric-blue"></div>
                  <div className="absolute top-0 right-0 w-0.5 h-4 bg-electric-blue"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-neon-violet"></div>
                  <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-neon-violet"></div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
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
                        left: `${20 + i * 25}%`,
                        top: `${30 + (i % 2) * 30}%`
                      }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            className="glass-morphism p-8 rounded-2xl max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Let's discuss how I can help bring your ideas to life with professional development and innovative solutions
            </p>
            <motion.a
              href="mailto:sandeepkotari19@gmail.com?subject=Project Inquiry&body=Hi Sandeep, I'm interested in discussing a project with you."
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-violet text-white rounded-full font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
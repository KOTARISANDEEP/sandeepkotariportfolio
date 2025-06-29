import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Hungry Saver – Social Impact App',
      description: 'A smart mobile app to rescue leftover food, help stray animals, support emergency patients, and fund education for poor children.',
      technologies: ['Flutter', 'Supabase', 'Firebase', 'AI Tools'],
      image: 'https://res.cloudinary.com/dlvc4lbod/image/upload/v1751133311/Blue_and_White_Modern_Website_Development_Facebook_Cover_1_cqcetu.png',
      tags: ['#Flutter', '#AI', '#SocialImpact', '#MobileApp'],
      github: '#',
      demo: '#',
      type: 'image'
    },
    {
      title: 'Smart Color Sorting System with ML & Raspberry Pi',
      description: 'This project features a custom ML model integrated with OpenCV on Raspberry Pi for accurate real-time color detection, even under varying lighting. Paired with Arduino-controlled servo motors, it ensures precise, efficient sorting.',
      technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'Arduino'],
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['#MachineLearning', '#RaspberryPi', '#OpenCV', '#Robotics', '#Automation'],
      github: '#',
      demo: '#',
      type: 'image'
    },
    {
      title: 'Intelligent E-Learning Platform with AI Smartboard & NLP',
      description: 'Built a next-gen, AI-powered e-learning platform featuring an AI smart board, video summarization, and chatbot for personalized learning, enhanced with 3D modules and real-time NLP to boost engagement and accessibility.',
      technologies: ['Python', 'PyTorch', 'React.js', 'Next.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['#AI', '#EdTech', '#NextJS', '#React', '#NLP', '#SmartLearning', '#Python'],
      github: '#',
      demo: '#',
      type: 'image'
    },
    {
      title: 'Sign Language Detection using Deep Learning',
      description: 'A deep learning model using CNN + RNN that translates hand gestures into text to support speech- and hearing-impaired individuals.',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      image: 'https://i0.wp.com/ahmedesoliman.com/wp-content/uploads/2021/01/handform-and-facial-gestures.png?fit=1390%2C822&ssl=1',
      tags: ['#Accessibility', '#DeepLearning', '#AIForGood'],
      github: '#',
      demo: '#',
      type: 'image'
    },
    {
      title: 'Food Freshness Detection using Deep Learning',
      description: 'A computer vision-based system to detect spoiled vs. fresh food using a trained CNN model. Useful for smart kitchens, food donation centers, and restaurants.',
      technologies: ['Python', 'Keras', 'TensorFlow', 'OpenCV'],
      image: 'https://everylastrecipe.com/wp-content/uploads/2023/11/can-you-import-recipes-into-weight-watchers-app-1024x585.jpg',
      tags: ['#ComputerVision', '#FoodTech', '#AI'],
      github: '#',
      demo: '#',
      type: 'image'
    },
    {
      title: 'AI Health Prediction & Medicine Recommendation',
      description: 'A machine learning model that predicts potential health conditions based on symptoms and suggests medicine or doctor alerts.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
      image: 'https://blog.opalgroup.net/wp-content/uploads/2023/03/article-health.jpg',
      tags: ['#HealthAI', '#PredictiveModel', '#MLHealthcare'],
      github: '#',
      demo: '#',
      type: 'image'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
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
    <section id="projects" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technology and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Media Section */}
              <motion.div
                className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative group overflow-hidden rounded-2xl glass-morphism p-2">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        console.log('Image failed to load:', project.image);
                        // Fallback to a placeholder if image fails
                        e.currentTarget.src = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    
                    {/* Special badge for Hungry Saver */}
                    {index === 0 && (
                      <div className="absolute top-4 right-4 bg-soft-green/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        FEATURED
                      </div>
                    )}

                    {/* Special badge for new projects */}
                    {(index === 1 || index === 2) && (
                      <div className="absolute top-4 right-4 bg-electric-blue/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        NEW
                      </div>
                    )}
                  </div>
                  
                  {/* Hover Overlay with Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="p-4 glass-morphism rounded-full hover-glow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        className="p-4 glass-morphism rounded-full hover-glow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass-morphism p-8 rounded-2xl hover-glow">
                  <motion.h3 
                    className="text-3xl font-bold mb-4 text-gradient"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-4 py-2 bg-electric-blue/20 text-electric-blue rounded-full text-sm font-medium border border-electric-blue/30"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.3)' }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-neon-violet/20 text-neon-violet rounded-full text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 px-6 py-3 glass-morphism rounded-full hover-glow font-semibold"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue/20 to-neon-violet/20 text-white rounded-full hover-glow font-semibold border border-electric-blue/30"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                      <ArrowRight size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Want to see more projects?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more innovative solutions and open-source contributions
            </p>
            <motion.a
              href="https://github.com/sandeepkotari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-violet text-white rounded-full font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
              Visit GitHub Profile
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
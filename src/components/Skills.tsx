import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Video, Smartphone, Palette, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Full Stack Development',
      skills: ['MERN Stack', 'Spring Boot', 'Node.js', 'PostgreSQL'],
      color: 'electric-blue'
    },
    {
      icon: Cpu,
      title: 'Generative AI',
      skills: ['Pika AI', 'ElevenLabs', 'Leonardo AI', 'OpenAI'],
      color: 'neon-violet'
    },
    {
      icon: Video,
      title: 'Video & Content',
      skills: ['Premiere Pro', 'Runway ML', 'After Effects', 'DaVinci'],
      color: 'soft-green'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Firebase', 'Supabase'],
      color: 'electric-blue'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      skills: ['Tailwind CSS', 'Figma', 'Framer Motion', 'Responsive Design'],
      color: 'neon-violet'
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      skills: ['CNN/RNN', 'TensorFlow', 'PyTorch', 'Computer Vision'],
      color: 'soft-green'
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technologies and creative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-morphism p-8 rounded-2xl hover-glow group"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`w-16 h-16 rounded-full bg-${category.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={32} className={`text-${category.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-electric-blue transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
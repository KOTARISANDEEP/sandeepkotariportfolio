import React from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, Users } from 'lucide-react';

const Content: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: 'AI Tools That Will Change Everything',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '45K',
      duration: '12:34'
    },
    {
      id: 2,
      title: 'Full Stack Development in 2025',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '28K',
      duration: '18:45'
    },
    {
      id: 3,
      title: 'Building the Future with Code',
      thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      views: '62K',
      duration: '15:20'
    }
  ];

  return (
    <section id="content" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Aspiro Edu</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Building India's next tech story through short-form content and tutorials. 
            Follow my journey @AspiroEdu
          </p>
          <motion.div
            className="flex items-center justify-center gap-4 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Youtube className="text-red-500" size={28} />
            <span className="text-gray-300">Subscribe for weekly tech content</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-morphism rounded-2xl overflow-hidden hover-glow group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={24} className="text-white ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Youtube size={24} />
            Visit Aspiro Edu Channel
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
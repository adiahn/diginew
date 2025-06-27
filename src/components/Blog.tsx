import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Digital Transformation',
      excerpt: 'Explore how artificial intelligence is reshaping business operations and customer experiences across industries.',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2024',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Cloud Security Best Practices for 2025',
      excerpt: 'Essential security strategies and practices to protect your cloud infrastructure from emerging threats.',
      author: 'Michael Chen',
      date: 'Dec 12, 2024',
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Building Scalable Web Applications',
      excerpt: 'Learn the architecture patterns and technologies that enable web applications to scale efficiently.',
      author: 'Emily Rodriguez',
      date: 'Dec 10, 2024',
      category: 'Development',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Mobile-First Design Strategies',
      excerpt: 'Discover how to create exceptional mobile experiences that drive user engagement and business growth.',
      author: 'David Park',
      date: 'Dec 8, 2024',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Data Analytics Trends to Watch',
      excerpt: 'Stay ahead of the curve with the latest trends in data analytics and business intelligence.',
      author: 'Lisa Wang',
      date: 'Dec 5, 2024',
      category: 'Analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Digital Marketing ROI Optimization',
      excerpt: 'Maximize your marketing investment with data-driven strategies and performance optimization techniques.',
      author: 'Alex Thompson',
      date: 'Dec 3, 2024',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Technology', 'Security', 'Development', 'Design', 'Analytics', 'Marketing'];

  return (
    <section id="blog" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Blog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, trends, and best practices in 
            digital technology and business transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className="px-6 py-3 bg-slate-800 text-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-700 hover:border-blue-500"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-400 text-sm font-medium">
                    {post.readTime}
                  </span>
                  <motion.button
                    className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
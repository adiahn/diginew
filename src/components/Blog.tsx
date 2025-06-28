import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Globe,
  Zap,
  Star,
  Play,
  ExternalLink,
  Clock,
  Tag
} from 'lucide-react';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 12 },
    { id: 'success-stories', name: 'Success Stories', count: 4 },
    { id: 'events', name: 'Events', count: 3 },
    { id: 'updates', name: 'Project Updates', count: 3 },
    { id: 'technology', name: 'Technology', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Digital Katsina Project Launches Phase 2: Scaling to All 34 LGAs",
      excerpt: "The Digital Katsina Project enters its second phase with ambitious plans to extend digital infrastructure and training programs to all 34 Local Government Areas.",
      category: "updates",
      author: "Digital Katsina Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "🚀",
      featured: true,
      tags: ["Infrastructure", "Expansion", "LGAs"]
    },
    {
      id: 2,
      title: "From Student to Tech Entrepreneur: Aisha's Success Story",
      excerpt: "Meet Aisha Bello, a 22-year-old graduate who transformed her life through the Digital Skills Academy and now runs a successful tech startup.",
      category: "success-stories",
      author: "Success Stories Team",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "👩‍💼",
      featured: false,
      tags: ["Success Story", "Entrepreneurship", "Youth"]
    },
    {
      id: 3,
      title: "Katsina Innovation Hub Opens Doors to 100+ Startups",
      excerpt: "The newly inaugurated Innovation Hub provides co-working spaces, mentorship, and funding opportunities for tech entrepreneurs across Katsina State.",
      category: "events",
      author: "Innovation Hub",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "🏢",
      featured: false,
      tags: ["Innovation Hub", "Startups", "Funding"]
    },
    {
      id: 4,
      title: "Digital Education Platform Goes Live: 100+ Schools Connected",
      excerpt: "Katsina State launches its comprehensive digital education platform, connecting over 100 schools with e-learning resources and tools.",
      category: "updates",
      author: "Digital Education Team",
      date: "March 8, 2024",
      readTime: "4 min read",
      image: "📚",
      featured: false,
      tags: ["Digital Education", "E-Learning", "Schools"]
    },
    {
      id: 5,
      title: "Rural Digital Inclusion: Bringing Internet to 500+ Communities",
      excerpt: "Our rural connectivity initiative has successfully brought high-speed internet to over 500 rural communities across Katsina State.",
      category: "updates",
      author: "Infrastructure Team",
      date: "March 5, 2024",
      readTime: "7 min read",
      image: "🌐",
      featured: false,
      tags: ["Rural", "Connectivity", "Infrastructure"]
    },
    {
      id: 6,
      title: "AI and Machine Learning Training Program Launches",
      excerpt: "The Digital Skills Academy introduces cutting-edge AI and ML courses, preparing students for the future of technology.",
      category: "technology",
      author: "Academy Team",
      date: "March 3, 2024",
      readTime: "5 min read",
      image: "🤖",
      featured: false,
      tags: ["AI", "Machine Learning", "Training"]
    },
    {
      id: 7,
      title: "Musa's Journey: From Civil Servant to Digital Leader",
      excerpt: "Musa Ibrahim shares how digital training transformed his approach to public service and improved citizen satisfaction.",
      category: "success-stories",
      author: "Success Stories Team",
      date: "March 1, 2024",
      readTime: "6 min read",
      image: "👨‍💼",
      featured: false,
      tags: ["Civil Service", "Digital Transformation", "Leadership"]
    },
    {
      id: 8,
      title: "Startup Pitch Competition: ₦50M in Funding Awarded",
      excerpt: "The inaugural startup pitch competition saw 20 innovative teams compete for funding, with ₦50 million awarded to winning startups.",
      category: "events",
      author: "Innovation Hub",
      date: "February 28, 2024",
      readTime: "5 min read",
      image: "🏆",
      featured: false,
      tags: ["Pitch Competition", "Funding", "Startups"]
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8"
          >
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Latest Updates</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Digital Katsina
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              News & Stories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Stay updated with the latest news, success stories, and developments from the Digital Katsina Project. 
            Discover how we're transforming lives and building Nigeria's digital future.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-2xl shadow-emerald-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                      <span className="text-emerald-400 text-sm font-medium">Featured</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/30 rounded-full text-sm text-gray-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <motion.button
                      className="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Read Full Story</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="text-8xl">{featuredPost.image}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts
              .filter(post => !post.featured || activeCategory !== 'all')
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {post.image}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 border border-slate-600/30 rounded-full text-xs text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>

                      <motion.button
                        className="group/btn text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300">Get the latest news and updates from Digital Katsina Project</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
              />
              <motion.button
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
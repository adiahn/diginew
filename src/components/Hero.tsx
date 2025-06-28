import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Globe, Users, TrendingUp, Zap, Star, MapPin, BookOpen, Lightbulb } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const slides = [
    {
      title: "Digital Katsina",
      subtitle: "Nigeria's Smart State",
      description: "Transforming Katsina into Africa's digital powerhouse through innovation, education, and technology-driven growth.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-emerald-400 to-cyan-600"
    },
    {
      title: "Youth Empowerment",
      subtitle: "Future-Ready Skills",
      description: "Upskilling thousands of youths with cutting-edge digital skills for global competitiveness and local innovation.",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Digital Education",
      subtitle: "Learning Revolution",
      description: "Revolutionizing education through digital platforms, e-learning tools, and interactive learning experiences for all ages.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-orange-400 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <ThreeBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-transparent to-slate-900/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-medium">Katsina State, Nigeria</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                <motion.div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {slides[currentSlide].icon}
                </motion.div>
              </div>

              <motion.h1 
                className="text-6xl md:text-8xl font-black text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].title}
                <br />
                <span className={`bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent`}>
                  {slides[currentSlide].subtitle}
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Join the Digital Revolution</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>

            <motion.button
              className="group border-2 border-emerald-400 text-emerald-400 px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:bg-emerald-400 hover:text-white transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play size={24} className="relative z-10" />
              <span className="relative z-10">Watch Our Vision</span>
              <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "50K+", label: "Youth Trained", icon: <Users className="w-6 h-6" /> },
              { number: "100+", label: "Tech Startups", icon: <Zap className="w-6 h-6" /> },
              { number: "34", label: "LGAs Connected", icon: <Globe className="w-6 h-6" /> },
              { number: "95%", label: "Digital Literacy", icon: <Star className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full mb-4 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Slide indicators */}
        <motion.div 
          className="flex justify-center space-x-3 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-emerald-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-slate-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <Play size={64} className="mx-auto mb-4" />
                  <p className="text-xl">Digital Katsina Vision Video</p>
                  <p className="text-gray-400 mt-2">Coming Soon</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
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
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
      color: "from-emerald-400 to-cyan-600"
    },
    {
      title: "Youth Empowerment",
      subtitle: "Future-Ready Skills",
      description: "Upskilling thousands of youths with cutting-edge digital skills for global competitiveness and local innovation.",
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" />,
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Digital Education",
      subtitle: "Learning Revolution",
      description: "Revolutionizing education through digital platforms, e-learning tools, and interactive learning experiences for all ages.",
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-2 sm:px-0">
      <ThreeBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-2 w-40 h-40 sm:w-72 sm:h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-2 w-56 h-56 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-transparent to-slate-900/90"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 text-center flex flex-col items-center justify-center">
        {/* Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-white/20 text-xs sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
            <span className="text-white font-medium">Katsina State, Nigeria</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex justify-center">
                <motion.div
                  className={`p-2 sm:p-4 rounded-2xl bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {slides[currentSlide].icon}
                </motion.div>
              </div>

              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight break-words"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentSlide].title}
                <br />
                <span className={`block bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2`}>
                  {slides[currentSlide].subtitle}
                </span>
              </motion.h1>

              <motion.p 
                className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-2"
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
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Join the Digital Revolution</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>

            <motion.button
              className="group border-2 border-emerald-400 text-emerald-400 w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 hover:bg-emerald-400 hover:text-white transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play size={20} className="relative z-10" />
              <span className="relative z-10">Watch Our Vision</span>
              <div className="absolute inset-0 bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-8 sm:mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "50K+", label: "Youth Trained", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { number: "100+", label: "Tech Startups", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { number: "34", label: "LGAs Connected", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { number: "95%", label: "Digital Literacy", icon: <Star className="w-5 h-5 sm:w-6 sm:h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full mb-2 sm:mb-4 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium text-xs sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Slide indicators + Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 z-20">
          <motion.div
            className="flex justify-center space-x-2 sm:space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-emerald-400 rounded-full flex justify-center items-start">
              <div className="w-1 h-2 sm:w-1 sm:h-3 bg-emerald-400 rounded-full mt-1 sm:mt-2" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-lg sm:max-w-4xl aspect-video bg-slate-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <Play size={40} className="mx-auto mb-4" />
                  <p className="text-lg sm:text-xl">Digital Katsina Vision Video</p>
                  <p className="text-gray-400 mt-2">Coming Soon</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 text-xl sm:text-2xl"
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
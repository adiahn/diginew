import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ArrowRight, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Initiatives', href: '#services' },
    { name: 'News', href: '#blog' },
    { name: 'Join Us', href: '#register' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
      style={{ pointerEvents: 'none' }}
    >
      <div
        className={`pointer-events-auto mx-auto max-w-6xl w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] rounded-full shadow-xl border border-slate-700/40 bg-slate-900/80 backdrop-blur-lg px-4 sm:px-8 py-2 sm:py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'border-emerald-500/40 bg-slate-900/90' : ''
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
            <Globe className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
          </div>
          <div>
            <div className="text-xl lg:text-2xl font-bold text-white">Digital Katsina</div>
            <div className="text-xs lg:text-sm text-emerald-400 font-medium">#DIGIKAT</div>
          </div>
        </motion.div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden lg:flex items-center space-x-4"
        >
          <motion.button
            className="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Join the Revolution</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto rounded-2xl shadow-xl border border-slate-700/40 bg-slate-900/95 backdrop-blur-lg px-4 sm:px-8 py-4 z-50"
            style={{ maxWidth: '40rem' }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium py-2 text-lg text-center"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-4 border-t border-slate-700/50"
              >
                <motion.button
                  className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  <span>Join the Revolution</span>
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Location Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-2 right-2 lg:top-4 lg:right-4"
      >
        <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-3 py-1">
          <MapPin className="w-3 h-3 text-emerald-400" />
          <span className="text-xs text-emerald-400 font-medium">Katsina State</span>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
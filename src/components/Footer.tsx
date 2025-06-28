import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Users, 
  TrendingUp, 
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Initiatives', href: '#services' },
    { name: 'Success Stories', href: '#blog' },
    { name: 'Join Us', href: '#register' },
    { name: 'Contact', href: '#contact' }
  ];

  const initiatives = [
    { name: 'Digital Skills Academy', href: '#' },
    { name: 'Digital Education', href: '#' },
    { name: 'Innovation Hub', href: '#' },
    { name: 'Creative Arts & Media', href: '#' },
    { name: 'Rural Inclusion', href: '#' },
    { name: 'E-Commerce Growth', href: '#' }
  ];

  const resources = [
    { name: 'Training Programs', href: '#' },
    { name: 'Startup Support', href: '#' },
    { name: 'Digital Infrastructure', href: '#' },
    { name: 'Success Stories', href: '#' },
    { name: 'Research & Data', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#' }
  ];

  const stats = [
    { number: "50K+", label: "Youth Trained", icon: <Users className="w-5 h-5" /> },
    { number: "100+", label: "Startups Launched", icon: <Zap className="w-5 h-5" /> },
    { number: "34", label: "LGAs Connected", icon: <Globe className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <div className="text-emerald-400">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Digital Katsina</h3>
                    <p className="text-emerald-400 font-medium">#DIGIKAT</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Transforming Katsina State into Nigeria's digital powerhouse through innovation, 
                  education, and technology-driven growth. Empowering individuals and communities 
                  for a brighter digital future.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-slate-800/50 border border-slate-600/30 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Initiatives */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Our Initiatives</h4>
              <ul className="space-y-3">
                {initiatives.map((initiative, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={initiative.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {initiative.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={resource.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {resource.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Email Us</h4>
                <p className="text-gray-300">info@digitalkatsina.ng</p>
                <p className="text-gray-300">support@digitalkatsina.ng</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Call Us</h4>
                <p className="text-gray-300">+234 803 123 4567</p>
                <p className="text-gray-300">+234 802 987 6543</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">Visit Us</h4>
                <p className="text-gray-300">Katsina Innovation Hub</p>
                <p className="text-gray-300">Katsina State, Nigeria</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Digital Katsina Project. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>in Katsina State, Nigeria</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-full shadow-2xl shadow-emerald-500/25 flex items-center justify-center hover:shadow-emerald-500/40 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
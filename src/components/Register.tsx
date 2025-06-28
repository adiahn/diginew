import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Zap, 
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Award
} from 'lucide-react';

const Register: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Join 50K+ Trained Youth",
      description: "Be part of the largest digital skills training program in Northern Nigeria"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Opportunities",
      description: "Access international job markets and remote work opportunities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cutting-Edge Skills",
      description: "Learn the latest technologies: AI, Blockchain, Cloud Computing"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Certified Programs",
      description: "Receive internationally recognized certifications upon completion"
    }
  ];

  const upcomingEvents = [
    {
      title: "Digital Skills Bootcamp",
      date: "March 15-30, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Katsina Innovation Hub",
      spots: "100 spots available"
    },
    {
      title: "Startup Pitch Competition",
      date: "April 10, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Katsina State University",
      spots: "20 teams"
    },
    {
      title: "E-Governance Workshop",
      date: "April 25, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Government House",
      spots: "50 participants"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Youth Trained", icon: <Users className="w-5 h-5" /> },
    { number: "100+", label: "Startups Launched", icon: <Zap className="w-5 h-5" /> },
    { number: "₦2B+", label: "Funding Raised", icon: <Star className="w-5 h-5" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <section id="register" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
            <span className="text-emerald-400 font-semibold">Join the Revolution</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Be Part of
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Digital Katsina
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of youths, entrepreneurs, and professionals who are already transforming 
            their lives through the Digital Katsina Project. Your future starts here.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-8"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Get Started Today</h3>
              <p className="text-gray-300">Join the digital transformation movement</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Registration Successful!</h4>
                <p className="text-gray-300">We'll contact you within 24 hours with next steps.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select your category</option>
                      <option value="student">Student</option>
                      <option value="youth">Youth (18-35)</option>
                      <option value="entrepreneur">Entrepreneur</option>
                      <option value="civil-servant">Civil Servant</option>
                      <option value="professional">Professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/30 rounded-xl text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your goals and interests..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Join Digital Katsina</span>
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Benefits & Events */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Why Join Us?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-slate-800/30 border border-slate-600/30 rounded-xl hover:border-emerald-500/50 transition-colors duration-300"
                  >
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <div className="text-emerald-400">{benefit.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-600/30 rounded-xl p-4 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-full mb-3">
                    <div className="text-emerald-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Upcoming Events</h3>
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-600/30 rounded-xl p-4 hover:border-emerald-500/50 transition-colors duration-300"
                >
                  <h4 className="text-white font-semibold mb-2">{event.title}</h4>
                  <div className="space-y-1 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="text-emerald-400 font-medium">{event.spots}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-gray-300">Have questions? We're here to help you get started</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                <Mail className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">info@digitalkatsina.ng</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                <Phone className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+234 803 123 4567</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">Katsina Innovation Hub, Katsina State</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
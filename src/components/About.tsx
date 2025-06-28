import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Users, 
  Globe, 
  TrendingUp, 
  Zap, 
  BookOpen, 
  Building2, 
  Smartphone,
  Wifi,
  GraduationCap,
  Briefcase,
  Heart
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const visionItems = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Transform Katsina into Africa's digital powerhouse through innovation and technology-driven growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Youth Empowerment",
      description: "Upskill thousands of youths with cutting-edge digital skills for global competitiveness."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Connectivity",
      description: "Connect local businesses and talent to global opportunities and markets."
    }
  ];

  const impactAreas = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Digital Skills Academy",
      description: "Comprehensive training in coding, data science, and remote work skills",
      color: "from-emerald-500 to-cyan-600"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Smart Government",
      description: "E-governance solutions and digital public service delivery",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Hubs",
      description: "Startup incubation and tech entrepreneurship support",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Digital Infrastructure",
      description: "High-speed internet and smart city systems deployment",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Rural Inclusion",
      description: "Digital access and literacy programs for rural communities",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "E-Commerce Growth",
      description: "Digital payments and logistics technology adoption",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "2M+", label: "People Impacted", icon: <Heart className="w-5 h-5" /> },
    { number: "34", label: "LGAs Connected", icon: <Globe className="w-5 h-5" /> },
    { number: "500+", label: "Jobs Created", icon: <Briefcase className="w-5 h-5" /> },
    { number: "95%", label: "Digital Literacy", icon: <BookOpen className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
            <span className="text-emerald-400 font-semibold">#DIGIKAT</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Transforming Katsina
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Into Nigeria's Smart State
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Digital Katsina Project is a comprehensive initiative aimed at digitally transforming Katsina State, 
            empowering individuals, enhancing public services, and positioning the state as a digital powerhouse in Africa.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To digitally transform Katsina State, Nigeria — empowering individuals, enhancing public service, 
              and positioning the state as a digital powerhouse in Africa.
            </p>
            <div className="space-y-4">
              {visionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <div className="text-emerald-400">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Digitize Katsina by building a digital culture across all communities, providing digital skills training, 
              and creating a favorable environment for tech innovation and entrepreneurship.
            </p>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-3">Core Objectives:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Empower people with digital literacy and tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Create jobs through digital opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Modernize governance and commerce</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Bridge the digital divide in rural areas</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Impact Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Core Components</h3>
            <p className="text-gray-300 text-lg">Building the foundation for a digital future</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{area.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Projected Impact</h3>
            <p className="text-gray-300">Transforming lives through digital innovation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <div className="text-emerald-400">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
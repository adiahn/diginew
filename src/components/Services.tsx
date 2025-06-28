import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Building2, 
  Zap, 
  Wifi, 
  Smartphone, 
  TrendingUp,
  Code,
  Database,
  Globe,
  Users,
  Briefcase,
  Heart,
  ArrowRight,
  Play,
  Star,
  Target,
  Lightbulb
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState(0);

  const initiatives = [
    {
      id: 0,
      title: "Digital Skills Academy",
      subtitle: "Empowering Youth with Future-Ready Skills",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-emerald-500 to-cyan-600",
      description: "Comprehensive digital skills training program designed to equip Katsina's youth with cutting-edge technology skills for global competitiveness.",
      features: [
        "Advanced coding and programming courses",
        "Data science and analytics training",
        "Digital marketing and e-commerce skills",
        "Remote work and freelancing preparation",
        "AI and machine learning fundamentals",
        "Cybersecurity and digital safety"
      ],
      stats: { students: "10,000+", courses: "50+", success: "85%" },
      image: "🎓"
    },
    {
      id: 1,
      title: "Smart Government Initiative",
      subtitle: "Digital Transformation of Public Services",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      description: "Modernizing government services through digital infrastructure, e-governance solutions, and data-driven policy making.",
      features: [
        "E-governance platform development",
        "Digital public service delivery",
        "Data analytics for policy making",
        "Smart city infrastructure",
        "Digital identity management",
        "Transparent governance systems"
      ],
      stats: { services: "100+", efficiency: "60%", citizens: "500K+" },
      image: "🏛️"
    },
    {
      id: 2,
      title: "Innovation & Startup Hub",
      subtitle: "Fostering Tech Entrepreneurship",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      description: "Creating a vibrant ecosystem for tech startups, providing funding, mentorship, and resources for innovation and growth.",
      features: [
        "Startup incubation and acceleration",
        "Funding and investment support",
        "Mentorship and networking programs",
        "Co-working spaces and labs",
        "Market access and partnerships",
        "Innovation challenges and hackathons"
      ],
      stats: { startups: "100+", funding: "₦2B+", jobs: "500+" },
      image: "🚀"
    },
    {
      id: 3,
      title: "Digital Infrastructure",
      subtitle: "Building the Foundation for Digital Growth",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      description: "Deploying high-speed internet, smart city systems, and digital infrastructure across all 34 LGAs of Katsina State.",
      features: [
        "High-speed fiber optic networks",
        "5G and wireless connectivity",
        "Smart city IoT systems",
        "Digital payment infrastructure",
        "Cloud computing facilities",
        "Cybersecurity infrastructure"
      ],
      stats: { coverage: "100%", speed: "1Gbps", lgas: "34" },
      image: "🌐"
    },
    {
      id: 4,
      title: "Rural Digital Inclusion",
      subtitle: "Bridging the Digital Divide",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      description: "Ensuring no community is left behind by bringing digital access, literacy, and opportunities to rural areas.",
      features: [
        "Mobile digital literacy programs",
        "Community digital centers",
        "Local content development",
        "Agricultural tech integration",
        "Healthcare digital solutions",
        "Education technology access"
      ],
      stats: { communities: "500+", centers: "100+", impact: "1M+" },
      image: "🏘️"
    },
    {
      id: 5,
      title: "E-Commerce & Trade",
      subtitle: "Digital Commerce Revolution",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      description: "Transforming traditional commerce through digital platforms, payment systems, and logistics technology.",
      features: [
        "E-commerce platform development",
        "Digital payment systems",
        "Logistics and supply chain tech",
        "Marketplace creation",
        "Export facilitation",
        "Financial inclusion programs"
      ],
      stats: { merchants: "10K+", transactions: "₦5B+", growth: "200%" },
      image: "💼"
    }
  ];

  const testimonials = [
    {
      name: "Aisha Bello",
      role: "Tech Entrepreneur",
      content: "The Digital Katsina Project gave me the skills and support to launch my startup. Now I'm creating jobs for other youths.",
      avatar: "👩‍💼"
    },
    {
      name: "Musa Ibrahim",
      role: "Civil Servant",
      content: "Digital training transformed how I work. I can now serve citizens more efficiently through our new e-governance platform.",
      avatar: "👨‍💼"
    },
    {
      name: "Fatima Usman",
      role: "Student",
      content: "Learning to code changed my life. I'm now working remotely for international companies while staying in Katsina.",
      avatar: "👩‍🎓"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            <Lightbulb className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Our Initiatives</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-white mb-6"
          >
            Comprehensive
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Six core initiatives working together to transform Katsina State into Nigeria's digital powerhouse, 
            creating opportunities for every citizen.
          </motion.p>
        </motion.div>

        {/* Initiative Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {initiatives.map((initiative, index) => (
              <motion.button
                key={initiative.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                onClick={() => setActiveTab(initiative.id)}
                className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                  activeTab === initiative.id
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-2xl shadow-emerald-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-600/30'
                }`}
              >
                <div className="text-2xl mb-2">{initiative.image}</div>
                <div className="text-sm font-medium">{initiative.title.split(' ')[0]}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Initiative Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${initiatives[activeTab].color} rounded-2xl`}>
                    <div className="text-white">{initiatives[activeTab].icon}</div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{initiatives[activeTab].title}</h3>
                    <p className="text-emerald-400 font-medium">{initiatives[activeTab].subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {initiatives[activeTab].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(initiatives[activeTab].stats).map(([key, value]) => (
                    <div key={key} className="bg-slate-800/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-400">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="group bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {initiatives[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-slate-800/50 border border-slate-600/30 rounded-xl p-4 hover:border-emerald-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Success Stories</h3>
            <p className="text-gray-300">Hear from those whose lives have been transformed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-slate-800/50 border border-slate-600/30 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-emerald-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
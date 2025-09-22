import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BarChart3, DatabaseZap, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Interactive Maps',
      description: 'Leverage the power of react-leaflet to plot, analyze, and interact with your location-based data on dynamic, fast-loading maps.',
      gradient: 'from-lime-400 to-green-400',
    },
    {
      icon: BarChart3,
      title: 'Powerful Dashboards',
      description: 'Create beautiful and insightful charts and graphs with recharts. Understand trends and make data-driven decisions at a glance.',
      gradient: 'from-chartreuse to-lime-300',
    },
    {
      icon: DatabaseZap,
      title: 'Secure & Real-time',
      description: 'Built on Supabase, your data is secure and can be updated in real-time, providing a seamless and live user experience.',
      gradient: 'from-lime-300 to-green-300',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, role-based access control, and compliance with industry standards.',
      gradient: 'from-green-400 to-lime-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful{' '}
            <span className="bg-gradient-to-r from-lime-400 to-chartreuse bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform raw data into meaningful insights and beautiful visualizations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 h-full hover:border-lime-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-400/10 hover:-translate-y-2">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-chartreuse/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-lime-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-lime-400/5 rounded-full blur-xl group-hover:bg-lime-400/10 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-chartreuse/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
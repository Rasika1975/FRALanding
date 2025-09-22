import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BarChart3, DatabaseZap, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Interactive Maps',
      description: "Leverage the power of React-Leaflet to plot, analyze, and interact with your location-based data on dynamic, fast-loading maps. Customize markers, layers, and popups to tell your data's story geographically.",
      gradient: 'from-lime-400 to-lime-300',
    },
    {
      icon: BarChart3,
      title: 'Powerful Dashboards',
      description: "Create beautiful and insightful charts and graphs with Recharts. From line charts showing trends over time to complex pie charts for market segments, you can understand your data and make informed decisions at a glance.",
      gradient: 'from-lime-400 to-lime-300',
    },
    {
      icon: DatabaseZap,
      title: 'Secure & Real-time Backend',
      description: "Built on Supabase, your data is protected by robust security features, including Row-Level Security. Experience live data updates on your maps and dashboards, providing a seamless and instantaneous user experience.",
      gradient: 'from-lime-400 to-lime-300',
    },
    {
      icon: Shield,
      title: 'Robust Security',
      description: "Rely on a secure foundation with end-to-end encryption, role-based access control powered by Supabase's policies, and a commitment to modern security standards to keep your data safe.",
      gradient: 'from-lime-400 to-lime-300',
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
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6">
            Core{' '}
            <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Everything you need to transform raw data into meaningful insights and beautiful visualizations.
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
              <div className="relative bg-zinc-950/70 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 h-full hover:border-lime-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-lime-400/10 hover:-translate-y-2">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-lime-300/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <div className="w-full h-full bg-zinc-950 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-lime-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-zinc-100 mb-4 group-hover:text-lime-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
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
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-lime-300/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6 leading-tight">
            Your Data, Mapped and{' '}
            <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              Visualized.
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform complex geographical and statistical data into clear, actionable insights 
            with FRA Atlas. Build interactive maps with React-Leaflet, design real-time dashboards 
            with Recharts, and trust in a secure backend powered by Supabase.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <Link
            to="/signup"
            className="group bg-gradient-to-r from-lime-400 to-lime-300 text-zinc-950 px-6 py-2 rounded-full font-semibold text-sm hover:shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105 flex items-center"
          >
            Proceed to Login
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <button className="group flex items-center px-6 py-2 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 transition-all duration-300 text-sm">
            <div className="w-10 h-10 bg-lime-400/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-lime-400/30 transition-colors duration-300">
              <Play className="w-4 h-4 text-lime-400 ml-0.5" />
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '1M+', label: 'Data Points Processed' },
            { value: '99.9%', label: 'Uptime Guarantee' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-zinc-900/20 rounded-xl">
              <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-lime-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-lime-300/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-lime-300/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
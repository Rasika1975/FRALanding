import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ScanText, Map, BrainCircuit, FileEdit } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: ScanText,
      title: 'AI Data Extraction (Digitization)',
      description: "Extracts key information (village name, claimant, coordinates) from scanned FRA documents using OCR and NER models.",
      gradient: 'from-lime-400 to-lime-300',
    },
    {
      icon: Map,
      title: 'FRA Atlas (WebGIS Viewer)',
      description: "Interactive map showing FRA claims, forest boundaries, land-use, and asset data with GIS layers.",
      gradient: 'from-lime-400 to-lime-300',
    },
    {
      icon: BrainCircuit,
      title: 'Decision Support System (DSS)',
      description: "AI + rule-based engine to recommend relevant government schemes based on land and asset mapping.",
      gradient: 'from-lime-400 to-lime-300',
    },
    {
      icon: FileEdit,
      title: 'Claim Management',
      description: "Submit, edit, and monitor status of IFR/CR/CFR claims; supports geo-tagging and document uploads.",
      gradient: 'from-lime-400 to-lime-300',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-6">
            Core{' '}
            <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-base text-zinc-400 max-w-3xl mx-auto">
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
                  <h3 className="text-base font-bold text-zinc-100 mb-4 group-hover:text-lime-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
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
import React from 'react';
import { motion } from 'framer-motion';
import { Upload, TrendingUp, Lightbulb } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: Upload,
      title: 'Connect Your Data',
      description: 'Import data from multiple sources including CSV files, APIs, databases, or real-time streams. Our platform supports over 50 data formats.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      step: '02',
      icon: TrendingUp,
      title: 'Visualize & Analyze',
      description: 'Create stunning interactive maps and charts with our drag-and-drop interface. Apply filters, customize colors, and design your perfect dashboard.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      step: '03',
      icon: Lightbulb,
      title: 'Gain Insights',
      description: 'Discover hidden patterns, generate automated reports, and make data-driven decisions with our AI-powered analytics and recommendations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-lime-400 to-chartreuse bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights in three simple steps
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="text-6xl md:text-7xl font-bold text-lime-400/20 mr-6">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-chartreuse rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-gray-900" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {step.title}
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-chartreuse/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-lime-400/20 rounded-3xl p-8 hover:border-lime-400/40 transition-all duration-500">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-8 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl flex items-end">
                      <div className="text-white p-4">
                        <div className="text-sm font-medium text-lime-400">{step.step}</div>
                        <div className="text-lg font-bold">{step.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-40 right-10 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-chartreuse/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorksSection;
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, FileCheck, UserCheck, FolderKanban } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'Citizen submits claim 📝',
      description: 'Citizens can easily submit their claims through a simple and secure portal, uploading all necessary documents and information.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      step: '02',
      icon: FileCheck,
      title: 'NGO verifies claim ✅',
      description: 'NGOs review submitted claims for completeness and accuracy, ensuring all required documentation is in order before forwarding.',
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      step: '03',
      icon: UserCheck,
      title: 'Officer reviews & approves/rejects ⚖️',
      description: 'Designated officers access verified claims, review the details on an interactive map, and make the final decision to approve or reject.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      step: '04',
      icon: FolderKanban,
      title: 'Admin oversees process 📂',
      description: 'Administrators have a complete overview of the entire workflow, with real-time dashboards to track claim statuses and processing times.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
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
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-6 leading-tight max-w-4xl mx-auto">
            From Data to Insight in Three Simple{' '}
            <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              Steps
            </span>
          </h2>
        </motion.div>

        <div className="space-y-24">
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
                  <div className="text-4xl md:text-5xl font-bold text-lime-400/20 mr-6">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-lime-300 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-zinc-950" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-6">
                  {step.title}
                </h3>
                
                <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Visual */}
              <div className="flex-1 relative">
                <div className="relative group w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-lime-400/20 to-lime-300/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-zinc-950/70 backdrop-blur-sm border border-lime-400/20 rounded-3xl p-4 hover:border-lime-400/40 transition-all duration-500">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                    <div className="absolute inset-8 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl flex items-end">
                      <div className="text-zinc-100 p-4">
                        <div className="text-xs font-medium text-lime-400">{step.step}</div>
                        <div className="text-sm font-bold">{step.title}</div>
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
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-lime-300/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HowItWorksSection;
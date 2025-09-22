import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-chartreuse/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-lime-400/20 rounded-3xl p-12 md:p-16">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-lime-400 to-chartreuse rounded-2xl flex items-center justify-center">
                <MapPin className="w-10 h-10 text-gray-900" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Unlock Your{' '}
              <span className="bg-gradient-to-r from-lime-400 to-chartreuse bg-clip-text text-transparent">
                Data's Potential?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of companies already transforming their data into powerful insights. 
              Start your free trial today and see the difference in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/signup"
                className="group bg-gradient-to-r from-lime-400 to-chartreuse text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105 flex items-center"
              >
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <button className="text-lime-400 hover:text-white transition-colors duration-200 font-medium">
                Schedule a Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-4">Trusted by leading companies worldwide</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="text-gray-400 font-semibold">TechStart</div>
                <div className="text-gray-400 font-semibold">AI Solutions</div>
                <div className="text-gray-400 font-semibold">FinanceFlow</div>
                <div className="text-gray-400 font-semibold">InnovateHub</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-chartreuse/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
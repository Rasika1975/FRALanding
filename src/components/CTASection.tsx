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
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-lime-300/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-zinc-950/70 backdrop-blur-sm border border-lime-400/20 rounded-3xl p-12 md:p-16">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-lime-400 to-lime-300 rounded-2xl flex items-center justify-center">
                <MapPin className="w-10 h-10 text-zinc-950" />
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-6">
              Ready to Unlock Your{' '}
              <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
                Data's Potential?
              </span>
            </h2>

            <p className="text-base text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of companies already transforming their data into powerful insights. 
              Start your free trial today and see the difference in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/signup"
                className="group bg-gradient-to-r from-lime-400 to-lime-300 text-zinc-950 px-6 py-2 rounded-full font-semibold text-sm hover:shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105 flex items-center"
              >
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <button className="text-lime-400 hover:text-zinc-100 transition-colors duration-200 font-medium text-sm">
                Schedule a Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-zinc-700">
              <p className="text-xs text-zinc-500 mb-4">Trusted by leading companies worldwide</p>
              <div className="flex items-center justify-center space-x-8 opacity-60 text-xs">
                <div className="font-semibold text-zinc-500">TechStart</div>
                <div className="font-semibold text-zinc-500">AI Solutions</div>
                <div className="font-semibold text-zinc-500">FinanceFlow</div>
                <div className="font-semibold text-zinc-500">InnovateHub</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-lime-300/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;
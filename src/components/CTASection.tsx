import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck } from 'lucide-react';
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
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-green-400/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-zinc-950/70 backdrop-blur-md border border-lime-400/20 rounded-3xl p-12 md:p-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-green-400 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-zinc-900" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4 leading-tight">
              Empowering FRA Implementation with{' '}
              <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                AI & Geospatial Technology
              </span>
            </h2>

            <p className="text-base text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Digitize legacy claims, visualize assets using satellite imagery, and unlock scheme benefits through a unified Decision Support System.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/login"
                className="group bg-gradient-to-r from-lime-400 to-green-400 text-zinc-950 px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center"
              >
                Access FRA Atlas
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <a
                href="#contact"
                className="text-lime-400 hover:text-white transition duration-200 font-medium text-sm underline"
              >
                Request Demo Access
              </a>
            </div>

            {/* Institutional Logos or Partners */}
            <div className="mt-12 pt-8 border-t border-zinc-700 text-zinc-500">
              <p className="text-xs mb-4 uppercase tracking-wide">Supported by</p>
              <div className="flex items-center justify-center gap-6 text-sm">
                <span>Ministry of Tribal Affairs</span>
                <span>National Informatics Centre</span>
                <span>ISRO Bhuvan</span>
                <span>DAJGUA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-16 right-10 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CTASection;
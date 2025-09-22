import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../../components/ParticleBackground';

const SignupPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-lime-400/20 rounded-3xl p-8 hover:border-lime-400/40 transition-all duration-500">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-chartreuse rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Get Started Free</h2>
              <p className="text-gray-400">Create your account and start visualizing data today</p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-200"
                  placeholder="Create a password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-400 to-chartreuse text-gray-900 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105"
              >
                Create Account
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-lime-400 hover:text-lime-300 transition-colors duration-200">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Back to home */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <Link
                to="/"
                className="flex items-center text-gray-400 hover:text-lime-400 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
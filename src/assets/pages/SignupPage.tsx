import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignupPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0C0F]">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <div className="bg-zinc-950/70 backdrop-blur-sm border border-lime-400/20 rounded-3xl p-8 hover:border-lime-400/40 transition-all duration-500">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-lime-300 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-zinc-950" />
                </div>
              </div>
              <h2 className="text-lg font-bold text-zinc-100 mb-2">Get Started Free</h2>
              <p className="text-xs text-zinc-500">Create your account and start visualizing data today</p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-100 placeholder-zinc-500 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-all duration-200"
                  placeholder="Create a password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-400 to-lime-300 text-zinc-950 py-2.5 rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-lime-400/25 transition-all duration-300 hover:scale-105"
              >
                Create Account
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-zinc-400 text-xs">
                Already have an account?{' '}
                <Link to="/login" className="text-lime-400 hover:text-lime-300 font-medium transition-colors duration-200">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Back to home */}
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <Link
                to="/"
                className="flex items-center text-xs text-zinc-400 hover:text-lime-400 transition-colors duration-200"
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
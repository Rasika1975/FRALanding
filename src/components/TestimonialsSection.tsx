import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'FRA Atlas transformed our vision into reality. Their expertise in data visualization and attention to detail exceeded our expectations. Our analytics platform launched successfully and scaled beautifully.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Founder, AI Solutions',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Working with FRA Atlas was a game-changer. They integrated mapping capabilities into our platform seamlessly. The team\'s professionalism and technical skills are unmatched in the industry.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'CTO, FinanceFlow',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The scalable architecture FRA Atlas built for us has handled our rapid growth perfectly. Their security-first approach gave us confidence in handling sensitive financial data.',
      rating: 5
    },
    {
       name: 'Jane Doe',
      role: 'Head of Operations, InnovateHub',
      avatar: 'https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: "FRA Atlas provided the exact toolset we needed. We were able to quickly build out an internal dashboard that combined our sales data with geographical mapping. The real-time updates powered by Supabase are a fantastic feature that keeps our team in sync.",
      rating: 5
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the companies we've helped transform
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-lime-500/20 hover:bg-lime-500/40 p-3 rounded-full transition-all duration-300 border border-lime-500/30"
          >
            <ChevronLeft className="w-6 h-6 text-zinc-100" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-lime-500/20 hover:bg-lime-500/40 p-3 rounded-full transition-all duration-300 border border-lime-500/30"
          >
            <ChevronRight className="w-6 h-6 text-zinc-100" />
          </button>

          {/* Testimonial cards */}
          <div className="relative h-96 md:h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-zinc-950/70 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center hover:border-lime-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/20">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-lime-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-zinc-200 italic leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-lime-300 rounded-full blur-sm opacity-60"></div>
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="relative w-16 h-16 rounded-full border-2 border-lime-500"
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-zinc-100 font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-lime-400 font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-lime-500 scale-125'
                    : 'bg-zinc-600 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-lime-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-lime-300/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;
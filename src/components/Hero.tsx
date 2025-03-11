
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pizza-cream to-white pt-16"
      ref={heroRef}
    >
      {/* Background shapes */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-pizza-red/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-pizza-olive/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
        <div className="text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-pizza-red/10 text-pizza-red rounded-full text-sm font-medium mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Artisanal Pizza • Fresh Ingredients
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-pizza-dark leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Savor the <span className="text-pizza-red">Good Karma</span> in Every Slice
          </h1>
          <p className="text-lg text-pizza-dark/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Handcrafted pizzas made with organic ingredients, sustainable practices, and positive vibes. Taste the difference good karma makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="#menu" className="btn-primary font-medium">
              View Our Menu
            </a>
            <a href="#about" className="btn-secondary font-medium">
              Our Story
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-full h-[400px] md:h-[500px] animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-pizza-orange/10 animate-pulse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" 
                alt="Delicious Pizza" 
                className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-cover rounded-full shadow-2xl animate-subtle-bounce"
              />
            </div>
            <div className="absolute top-0 right-0 md:top-10 md:right-10 bg-white rounded-full p-4 shadow-xl animate-fade-in-right" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-pizza-red/10 text-pizza-red font-display font-bold text-xl">
                100% Organic
              </div>
            </div>
            <div className="absolute bottom-0 left-0 md:bottom-10 md:left-10 bg-white rounded-full p-4 shadow-xl animate-fade-in-right" style={{ animationDelay: '1.4s' }}>
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-pizza-olive/10 text-pizza-olive font-display font-bold text-xl">
                Eco Friendly
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-pizza-dark/60 mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

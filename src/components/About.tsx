
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-pizza-cream/50" ref={sectionRef}>
      <div className="section-container reveal">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-pizza-red/10 text-pizza-red rounded-full text-sm font-medium mb-4">Our Story</span>
          <h2 className="section-title text-center mx-auto">The Karma Pizza Philosophy</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-pizza-dark/80">
              <p className="text-lg">
                <span className="font-display text-2xl text-pizza-dark block mb-2">We believe in pizza with purpose.</span>
                At Karma Pizza, we didn't just set out to make delicious pizzas—we wanted to create an experience that gives back to our community and the planet.
              </p>
              <p>
                Our journey began with a simple idea: what if every pizza you enjoyed actually made the world a little better? That's the essence of good karma, and that's the heart of our restaurant.
              </p>
              <p>
                We source our ingredients from local organic farms, use eco-friendly packaging, and donate a portion of every sale to community initiatives. From our sustainable kitchen practices to our living wage commitment for all staff, we're putting positive energy into everything we do.
              </p>
              <div className="pt-4">
                <a href="#menu" className="btn-primary inline-flex">Taste Our Story</a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform translate-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1532634786-c8f8c46a0062?q=80&w=500&auto=format&fit=crop" 
                  alt="Fresh ingredients" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1542834292-a37451df0349?q=80&w=500&auto=format&fit=crop" 
                  alt="Eco-friendly packaging" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 transform translate-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1511689025614-f9261e369f97?q=80&w=500&auto=format&fit=crop" 
                  alt="Local farms" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=500&auto=format&fit=crop" 
                  alt="Kitchen craftsmanship" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center card-hover">
            <div className="w-16 h-16 bg-pizza-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9H9.01" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 9H15.01" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-pizza-dark mb-3">Happy Ingredients</h3>
            <p className="text-pizza-dark/70">
              We source organic, local ingredients from farmers who share our values of sustainability and ethical farming practices.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center card-hover">
            <div className="w-16 h-16 bg-pizza-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V21M18 9L13.3 3.8C12.9 3.3 12.5 3 12 3C11.5 3 11.1 3.3 10.7 3.8L6 9M6 13H18M6 17H18" stroke="#606C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-pizza-dark mb-3">Earth-Friendly</h3>
            <p className="text-pizza-dark/70">
              Our commitment to the planet includes sustainable packaging, energy-efficient kitchen equipment, and zero food waste policies.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center card-hover">
            <div className="w-16 h-16 bg-pizza-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#E79548"/>
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-pizza-dark mb-3">Community Love</h3>
            <p className="text-pizza-dark/70">
              We donate a portion of each pizza sold to local community initiatives, and actively participate in neighborhood outreach programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

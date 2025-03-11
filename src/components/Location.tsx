
import React, { useEffect, useRef } from 'react';

const Location = () => {
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
    <section id="location" className="py-20 bg-pizza-cream/30" ref={sectionRef}>
      <div className="section-container reveal">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-pizza-olive/10 text-pizza-olive rounded-full text-sm font-medium mb-4">Visit Us</span>
          <h2 className="section-title text-center mx-auto">Find Your Pizza Sanctuary</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-display font-bold text-pizza-dark mb-6">Karma Pizza</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-pizza-dark mb-1">Address</h4>
                    <p className="text-pizza-dark/70">123 Wellness Way, <br />Garden District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-pizza-dark mb-1">Hours</h4>
                    <p className="text-pizza-dark/70">
                      Monday - Thursday: 11am - 9pm<br />
                      Friday - Saturday: 11am - 11pm<br />
                      Sunday: 12pm - 8pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-pizza-dark mb-1">Contact</h4>
                    <p className="text-pizza-dark/70">
                      Phone: (555) 123-4567<br />
                      Email: hello@karmapizza.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9L12 16L5 9" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-pizza-dark mb-1">Directions</h4>
                    <p className="text-pizza-dark/70">
                      Subway: Take the A, C, or E to West 4th Street<br />
                      Parking: Available on street and at nearby parking garage
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a href="#" className="btn-primary">
                  Order Online
                </a>
                <a href="#" className="btn-secondary">
                  Reserve a Table
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] rounded-xl overflow-hidden shadow-xl relative">
            <iframe 
              className="absolute inset-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24188.772301666426!2d-74.01016281560667!3d40.730380803095095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f9e02d71f%3A0x4f3a8f87cdddfc51!2sWest%20Village%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1691761978156!5m2!1sen!2sus" 
              allowFullScreen 
              loading="lazy" 
              title="Restaurant Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;


import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reason: 'general',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Thank you for your message! We\'ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        reason: 'general',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-pizza-wood/10 text-pizza-wood rounded-full text-sm font-medium mb-4">Get In Touch</span>
          <h2 className="section-title text-center mx-auto">We'd Love To Hear From You</h2>
          <p className="max-w-2xl mx-auto text-pizza-dark/70 mt-6">
            Have a question, feedback, or want to book a private event? Drop us a message and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="bg-pizza-cream/30 rounded-2xl p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-pizza-dark">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-pizza-cream rounded-lg focus:ring-2 focus:ring-pizza-red focus:border-transparent transition-all outline-none"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-pizza-dark">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-pizza-cream rounded-lg focus:ring-2 focus:ring-pizza-red focus:border-transparent transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-pizza-dark">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-pizza-cream rounded-lg focus:ring-2 focus:ring-pizza-red focus:border-transparent transition-all outline-none"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="reason" className="block text-sm font-medium text-pizza-dark">
                Reason for Contact
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-pizza-cream rounded-lg focus:ring-2 focus:ring-pizza-red focus:border-transparent transition-all outline-none"
              >
                <option value="general">General Inquiry</option>
                <option value="reservation">Reservation</option>
                <option value="catering">Catering Services</option>
                <option value="feedback">Feedback</option>
                <option value="career">Career Opportunities</option>
              </select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-pizza-dark">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-pizza-cream rounded-lg focus:ring-2 focus:ring-pizza-red focus:border-transparent transition-all outline-none resize-none"
                placeholder="Let us know how we can help..."
              />
            </div>
            
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary min-w-[200px] flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pizza-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4" stroke="#C13E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-display font-bold text-pizza-dark mb-2">Call Us</h3>
            <p className="text-pizza-dark/70">(555) 123-4567</p>
            <p className="text-pizza-dark/70">Daily, 10am - 8pm</p>
          </div>
          
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pizza-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#606C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#606C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-display font-bold text-pizza-dark mb-2">Email Us</h3>
            <p className="text-pizza-dark/70">hello@karmapizza.com</p>
            <p className="text-pizza-dark/70">We respond within 24 hours</p>
          </div>
          
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-pizza-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#E79548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#E79548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-lg font-display font-bold text-pizza-dark mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-pizza-dark hover:text-pizza-red transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="text-pizza-dark hover:text-pizza-red transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.217-2.428.463a4.9 4.9 0 00-1.772 1.153A4.9 4.9 0 002.525 5.45c-.247.637-.415 1.363-.465 2.428C2.01 8.944 2 9.283 2 12s.01 3.056.06 4.122c.05 1.065.218 1.79.465 2.428a4.9 4.9 0 001.153 1.772 4.9 4.9 0 001.772 1.153c.637.247 1.363.415 2.428.465 1.066.05 1.405.06 4.122.06s3.056-.01 4.122-.06c1.065-.05 1.79-.218 2.428-.465a4.9 4.9 0 001.772-1.153 4.9 4.9 0 001.153-1.772c.247-.637.415-1.363.465-2.428.05-1.066.06-1.405.06-4.122s-.01-3.056-.06-4.122c-.05-1.065-.218-1.79-.465-2.428a4.9 4.9 0 00-1.153-1.772 4.9 4.9 0 00-1.772-1.153c-.637-.247-1.363-.415-2.428-.465C15.056 2.01 14.717 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 01-.748 1.15c-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.064a5.134 5.134 0 100 10.27 5.134 5.134 0 000-10.27zm0 8.468a3.334 3.334 0 110-6.668 3.334 3.334 0 010 6.668zm6.538-8.669a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" className="text-pizza-dark hover:text-pizza-red transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

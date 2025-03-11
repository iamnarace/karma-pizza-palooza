
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'signature' | 'classic' | 'vegan';
  featured?: boolean;
  ingredients: string[];
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Karmic Garden",
    description: "A veggie lover's dream with seasonal organic produce",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2028&auto=format&fit=crop",
    category: 'signature',
    featured: true,
    ingredients: ["organic tomato sauce", "mozzarella", "bell peppers", "mushrooms", "red onions", "artichokes", "black olives"]
  },
  {
    id: 2,
    name: "Positive Energy",
    description: "Our signature spicy pizza that radiates flavor",
    price: 20.99,
    image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?q=80&w=2070&auto=format&fit=crop",
    category: 'signature',
    featured: true,
    ingredients: ["organic tomato sauce", "mozzarella", "spicy soppressata", "pickled jalapeños", "honey drizzle", "fresh basil"]
  },
  {
    id: 3,
    name: "Giving Margherita",
    description: "Simple perfection with a portion of sales donated to charity",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1595854341625-f33e596b5988?q=80&w=2070&auto=format&fit=crop",
    category: 'classic',
    featured: true,
    ingredients: ["organic tomato sauce", "fresh mozzarella", "basil", "extra virgin olive oil", "sea salt"]
  },
  {
    id: 4,
    name: "Mindful Mushroom",
    description: "A woodsy blend of assorted gourmet mushrooms",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1525518392674-39ba1febe311?q=80&w=2070&auto=format&fit=crop",
    category: 'vegan',
    ingredients: ["truffle cream sauce", "vegan cheese", "shiitake", "portobello", "oyster mushrooms", "thyme", "garlic oil"]
  },
  {
    id: 5,
    name: "Solar Power",
    description: "Bright yellow tomatoes and sunny flavors",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1589840700256-41c5d199f5d9?q=80&w=2029&auto=format&fit=crop",
    category: 'signature',
    ingredients: ["yellow tomato sauce", "smoked mozzarella", "roasted corn", "yellow bell peppers", "caramelized onions"]
  },
  {
    id: 6,
    name: "Plant Harmony",
    description: "100% plant-based perfection with nut-based cheeses",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1620374643809-b69c702d0ed4?q=80&w=2070&auto=format&fit=crop",
    category: 'vegan',
    ingredients: ["tomato sauce", "housemade cashew cheese", "impossible sausage", "roasted red peppers", "spinach", "basil pesto drizzle"]
  },
];

const Menu = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
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

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container reveal">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-pizza-orange/10 text-pizza-orange rounded-full text-sm font-medium mb-4">Our Menu</span>
          <h2 className="section-title text-center mx-auto">Taste The Good Karma</h2>
          <p className="max-w-2xl mx-auto text-pizza-dark/70 mt-6">
            Each pizza is handcrafted with love, using organic ingredients and traditional techniques. 
            We believe that good food creates good karma, which is why we put so much care into every slice.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveCategory('all')}
            className={cn(
              "px-6 py-2 rounded-full transition-all",
              activeCategory === 'all' 
                ? "bg-pizza-red text-white shadow-md" 
                : "bg-pizza-cream text-pizza-dark hover:bg-pizza-red/10"
            )}
          >
            All Pizzas
          </button>
          <button 
            onClick={() => setActiveCategory('signature')}
            className={cn(
              "px-6 py-2 rounded-full transition-all",
              activeCategory === 'signature' 
                ? "bg-pizza-red text-white shadow-md" 
                : "bg-pizza-cream text-pizza-dark hover:bg-pizza-red/10"
            )}
          >
            Signature
          </button>
          <button 
            onClick={() => setActiveCategory('classic')}
            className={cn(
              "px-6 py-2 rounded-full transition-all",
              activeCategory === 'classic' 
                ? "bg-pizza-red text-white shadow-md" 
                : "bg-pizza-cream text-pizza-dark hover:bg-pizza-red/10"
            )}
          >
            Classic
          </button>
          <button 
            onClick={() => setActiveCategory('vegan')}
            className={cn(
              "px-6 py-2 rounded-full transition-all",
              activeCategory === 'vegan' 
                ? "bg-pizza-red text-white shadow-md" 
                : "bg-pizza-cream text-pizza-dark hover:bg-pizza-red/10"
            )}
          >
            Vegan
          </button>
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-pizza-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white text-pizza-dark text-xs font-bold px-3 py-1 rounded-full">
                  {item.category === 'signature' ? 'Signature' : item.category === 'classic' ? 'Classic' : 'Vegan'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-display font-bold text-pizza-dark">{item.name}</h3>
                  <span className="text-lg font-medium text-pizza-red">${item.price}</span>
                </div>
                <p className="text-pizza-dark/70 mb-4">{item.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-pizza-dark mb-2">Ingredients:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ingredient, index) => (
                      <span key={index} className="text-xs bg-pizza-cream px-2 py-1 rounded-full text-pizza-dark/70">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-pizza-olive text-white px-4 py-2 rounded-md hover:bg-pizza-olive/90 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-pizza-dark/70 mb-6">
            Want to see our full menu including sides, drinks, and desserts?
          </p>
          <button className="btn-primary">View Complete Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

import React, { useState, useEffect } from 'react';
import { ChevronRight, Laptop, Recycle, Heart, Users, Target, Zap, ArrowRight, Play, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "I received a laptop through Resurtech and used it to complete my UI/UX course. Today, I've landed my first remote job!",
    author: "Grace E.",
    location: "Lagos",
    impact: "Career Change"
  },
  {
    quote: "I always kept my old gadgets at home because I didn't know what to do with them. Now I donate them to Resurtech, and it feels good to know they're helping someone else.",
    author: "Femi A.",
    location: "Abuja",
    impact: "Donor"
  },
  {
    quote: "Volunteering with Resurtech opened my eyes to how much impact a single laptop can make.",
    author: "Ibrahim Y.",
    location: "Volunteer",
    impact: "Community Impact"
  },
  {
    quote: "The refurbished laptop I received helped me start my coding journey. Now I'm building apps and websites!",
    author: "Kemi O.",
    location: "Ibadan",
    impact: "Tech Career"
  },
  {
    quote: "Resurtech made it so easy to responsibly dispose of my old electronics. I feel good knowing they're being put to good use.",
    author: "Tunde M.",
    location: "Port Harcourt",
    impact: "Environmental"
  },
  {
    quote: "Getting a laptop through Resurtech changed my life. I can now work remotely and support my family.",
    author: "Amina S.",
    location: "Kano",
    impact: "Economic Empowerment"
  }
];

const CountUp = ({ end, duration = 2000, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = progress * end;
      setCount(progress < 1 ? value : end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {Number(count).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
};
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-900 rounded-full animate-pulse opacity-20"></div>
    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-slate-900 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
    <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse opacity-25 animation-delay-2000"></div>
  </div>
);

const GlowingOrb = ({ className }) => (
  <div className={`absolute w-96 h-96 rounded-full bg-gradient-to-r from-slate-900/5 to-slate-500/5 blur-3xl ${className}`}></div>
);

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <GlowingOrb className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <GlowingOrb className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-sm font-medium text-primary-500 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Transforming waste into opportunity</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
              Give Tech Life.
                <br />
                <span className="text-secondary-500">Give Someone Hope.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                Resurtech is on a mission to reduce electronic waste and restore hope—by collecting used or damaged gadgets, repairing what we can, recycling what we can’t, and placing technology in the hands of those who need it most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary-500 hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center gap-2">
                    Recycle Responsibly
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                

                <button className="group flex items-center gap-3 px-8 py-4 border-2 border-secondary-100 rounded-full font-semibold text-lg text-slate-700 transition-all duration-300 hover:border-secondary-100 hover:bg-secondary-100">
                  <div className="w-10 h-10 bg-slate-900/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-slate-900/20">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                 Apply for Help
                </button>
              </div>
            </div>

            {/* Picture Collage */}
            <div className="relative h-96 lg:h-[600px]">
              {/* Main Large Image */}
              <div className="absolute top-0 right-0 w-3/5 h-3/5 group">
                <div className="w-full h-full bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-3xl p-1 transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces"
                    alt="Students collaborating with laptops"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Second Image */}
              <div className="absolute top-1/4 left-0 w-2/5 h-2/5 group">
                <div className="w-full h-full bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-2xl p-1 transition-all duration-500 hover:scale-105 hover:-rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop"
                    alt="Person working on laptop coding"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                  <Laptop className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Third Image */}
              <div className="absolute bottom-0 left-1/4 w-2/5 h-1/3 group">
                <div className="w-full h-full bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-2xl p-1 transition-all duration-500 hover:scale-105 hover:rotate-1">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=150&fit=crop"
                    alt="Electronic waste recycling"
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                  <Recycle className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Fourth Small Image */}
              <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 group">
                <div className="w-full h-full bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-xl p-1 transition-all duration-500 hover:scale-110 hover:-rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=150&h=150&fit=crop&crop=face"
                    alt="Smiling student with laptop"
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
              </div>

              {/* Floating Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 600">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(15 23 42)" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="rgb(15 23 42)" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 80 150 Q 200 100 280 180" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  <path 
                    d="M 120 400 Q 250 350 320 420" 
                    stroke="url(#lineGradient)" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                </svg>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-slate-900/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-slate-900/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Background Floating Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-slate-900/5 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-slate-900/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-slate-900/5 rounded-lg rotate-45 animate-pulse"></div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Real Impact, Real Numbers
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every device donated creates a ripple effect of positive change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Laptop, number: 120, label: "Laptops Revived", color: "from-slate-900 to-slate-700" },
              { icon: Recycle, number: 2.1, label: "Tons eWaste Recycled", color: "from-slate-700 to-slate-500", decimal: true },
              { icon: Heart, number: 40, label: "Volunteers United", color: "from-slate-600 to-slate-400" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">             
    <div className="text-5xl font-black text-slate-900 mb-2">
      <CountUp end={stat.number} decimals={stat.decimal ? 1 : 0} />
      {stat.decimal ? "" : "+"}
    </div>
                    <p className="text-lg font-medium text-slate-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Reimagined */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white relative overflow-hidden">
        <GlowingOrb className="top-1/2 left-1/4 bg-gradient-to-r from-white/5 to-white/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Simple steps, powerful impact
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "You Give",
                  description: "Donate used laptops or recycle any old electronics.",
                  icon: Target
                },
                {
                  step: "02", 
                  title: "We Repair or Recycle",
                  description: "Usable laptops are refurbished and passed on. Damaged items are recycled responsibly.",
                  icon: Zap
                },
                {
                  step: "03",
                  title: "Someone Gets Hope",
                  description: "A student, a job seeker, or an aspiring techie gets a tool for a better tomorrow.",
                  icon: Users
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Stories of Hope
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real people, real impact
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl text-primary-500 mb-6">"</div>
                <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-right">
                    <div className="font-bold text-slate-900 text-lg">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-slate-600">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                  <div className="w-1 h-8 bg-slate-300"></div>
                  <div className="text-sm font-medium text-slate-700 bg-primary-100 px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].impact}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-slate-900 w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white relative overflow-hidden">
        <GlowingOrb className="top-0 right-0 bg-gradient-to-r from-white/5 to-white/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
             Join the Movement
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
You don’t need to be a tech expert to make a difference.            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Donate Technology",
                description: "Turn your old devices into someone's new beginning",
                action: "Start Donating",
                href:"/donate"
              },
              {
                icon: "🙋‍♀️", 
                title: "Volunteer Your Skills",
                description: "Use your expertise to multiply our impact",
                action: "Join Our Team",
                href:"/volunteer"
              },
              {
                icon: "🤝",
                title: "Partner With Us",
                description: "Scale our mission through strategic collaboration",
                action: "Let's Connect",
                href:"/partner"
              }
            ].map((cta, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/10">
                  <div className="text-4xl mb-4">{cta.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{cta.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{cta.description}</p>
                  <a  href={cta.href} className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-100 hover:transform hover:scale-105">
                    {cta.action}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
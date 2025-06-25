import React, { useState, useEffect } from 'react';
import { Target, Heart, Sparkles, ArrowRight, Circle } from 'lucide-react';

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-slate-900/20 rounded-full animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-slate-900/30 rounded-full animate-pulse animation-delay-1000"></div>
    <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-slate-900/25 rounded-full animate-pulse animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/6 w-3 h-3 bg-slate-900/15 rounded-full animate-bounce animation-delay-3000"></div>
  </div>
);

const GlowingOrb = ({ className }) => (
  <div className={`absolute w-96 h-96 rounded-full bg-gradient-to-r from-slate-900/5 to-slate-500/5 blur-3xl ${className}`}></div>
);

const About = () => {
  const [isVisible, setIsVisible] = useState({});

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
      <section className="relative py-20 lg:py-32">
        <GlowingOrb className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-animate id="hero">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/5 rounded-full text-sm font-medium text-slate-700 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Our mission & story</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">About</span> Resurtech
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We believe that technology should empower everyone, not create a digital divide. Our mission is to reduce electronic waste while providing access to technology for those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Mission Card */}
            <div className="group relative" data-animate id="mission">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To reduce electronic waste and empower lives through technology.
                </p>
              </div>
            </div>

            {/* Belief Card */}
            <div className="group relative" data-animate id="belief">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-3xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-400 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Our Belief</h2>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Every gadget has more to give. Every person deserves a chance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 bg-white">
        <GlowingOrb className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div data-animate id="story-text">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Resurtech was born from a simple but powerful observation: while many Nigerians cannot afford the tools to pursue education or tech careers, countless homes and offices hold unused or broken gadgets collecting dust.
                </p>
                <p>
                  We collect gadgets—new, used, or damaged. We fix what can be fixed. We responsibly recycle what cannot. And we put working laptops into the hands of those who need them most.
                </p>
              </div>
            </div>
            
            <div className="relative" data-animate id="story-image">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-slate-900/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900/5 to-slate-900/10 rounded-3xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                  alt="Team working with laptops"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl">
                <span className="text-sm">Since 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Month Operational Cycle */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <GlowingOrb className="top-1/2 left-1/4 bg-gradient-to-r from-white/5 to-white/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-animate id="cycle-header">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our 6-Month Operational Cycle</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">We run our program twice a year in 6-month phases</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="group relative" data-animate id="phase-1">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-l-white border border-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-slate-900 font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Donation Phase</h3>
                </div>
                <p className="text-slate-300 mb-4">
                  <span className="text-white font-semibold">Months 1-2:</span> Collection happens every 2 weeks on Fridays and Saturdays.
                </p>
                <div className="space-y-2">
                  <p className="text-white text-sm">Example: If the month starts on Friday the 1st, we'll collect on:</p>
                  <ul className="space-y-1">
                    <li className="text-slate-300 text-sm flex items-center gap-2">
                      <Circle className="w-1.5 h-1.5 fill-current" />
                      Friday 1st & Saturday 2nd
                    </li>
                    <li className="text-slate-300 text-sm flex items-center gap-2">
                      <Circle className="w-1.5 h-1.5 fill-current" />
                      Friday 15th & Saturday 16th
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="group relative" data-animate id="phase-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-l-slate-400 border border-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Application + Repair Phase</h3>
                </div>
                <p className="text-slate-300">
                  <span className="text-slate-400 font-semibold">Month 3-4:</span> People can apply, while we sort and fix devices.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="group relative" data-animate id="phase-3">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-l-white border border-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 hover:bg-white/10 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-slate-900 font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Distribution + Recycling Phase</h3>
                </div>
                <p className="text-slate-300">
                  <span className="text-white font-semibold">Months 5-6:</span> Qualified applicants receive laptops <span className="font-bold">every 2 weeks on Fridays and Saturdays</span>, while remaining gadgets are sent to recycling partners.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Note */}
          <div className="mt-12 text-center" data-animate id="pickup-note">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <ArrowRight className="w-4 h-4 text-white" />
              <p className="text-white">Pickup is provided in partnership with a logistics company. Drop-off locations are not fixed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-slate-900/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-slate-900/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default About;
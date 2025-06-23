import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


const testimonials = [
    {
      quote: "I received a laptop through Resurtech and used it to complete my UI/UX course. Today, I've landed my first remote job!",
      author: "— Grace E., Lagos"
    },
    {
      quote: "I always kept my old gadgets at home because I didn't know what to do with them. Now I donate them to Resurtech, and it feels good to know they're helping someone else.",
      author: "— Femi A., Abuja"
    },
    {
      quote: "Volunteering with Resurtech opened my eyes to how much impact a single laptop can make.",
      author: "— Ibrahim Y., Volunteer"
    },
    {
      quote: "The refurbished laptop I received helped me start my coding journey. Now I'm building apps and websites!",
      author: "— Kemi O., Ibadan"
    },
    {
      quote: "Resurtech made it so easy to responsibly dispose of my old electronics. I feel good knowing they're being put to good use.",
      author: "— Tunde M., Port Harcourt"
    },
    {
      quote: "Getting a laptop through Resurtech changed my life. I can now work remotely and support my family.",
      author: "— Amina S., Kano"
    }
  ];

const Home = () => {


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/5 to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Give Tech Life.<br></br>
                <span className="text-primary">Give Someone Hope.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
Resurtech is on a mission to reduce electronic waste and restore hope—by collecting used or damaged gadgets, repairing what we can, recycling what we can’t, and placing technology in the hands of those who need it most.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/donate">Donate a Laptop</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  <Link to="/donate">Recycle Responsibly</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/apply">Apply for Help</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Person using laptop for education"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Tracker */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact So Far</h2>
            <p className="text-xl text-gray-600">Together, we're making a difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4">💻</div>
                <div className="text-4xl font-bold text-primary mb-2">120+</div>
                <p className="text-lg text-gray-600">Laptops Given</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4">🌱</div>
                <div className="text-4xl font-bold text-secondary mb-2">2.1</div>
                <p className="text-lg text-gray-600">Tons of eWaste Recycled</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-5xl mb-4">❤️</div>
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <p className="text-lg text-gray-600">Volunteers Joined</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps, powerful impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">You Give</h3>
              <p className="text-gray-600">Donate used laptops or recycle any old electronics. </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Repair or Recycle</h3>
              <p className="text-gray-600">Usable laptops are refurbished and passed on. Damaged items are recycled responsibly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Someone Gets Hope</h3>
              <p className="text-gray-600">A student, a job seeker, or an aspiring techie gets a tool for a better tomorrow.</p>
            </div>
          </div>
        </div>
      </section>
   {/* Testimony Slider */}
<section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
            <p className="text-xl text-gray-600">Real people, real impact</p>
          </div>
         
        <Swiper
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >

          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-500">{testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
</section>

      {/* Join the Movement CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            You don’t need to be a tech expert to make a difference.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Button asChild size="lg" variant="secondary" className="h-auto p-6 flex flex-col items-center space-y-2 bg-white text-primary hover:bg-gray-100">
              <Link to="/donate">
                <div className="text-2xl mb-2">💻</div>
                <span className="font-semibold">Donate Technology</span>
                <span className="text-sm opacity-80">Give laptops a second life</span>
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="secondary" className="h-auto p-6 flex flex-col items-center space-y-2 bg-white text-primary hover:bg-gray-100">
              <Link to="/volunteer">
                <div className="text-2xl mb-2">🙋‍♀️</div>
                <span className="font-semibold">Volunteer Time</span>
                <span className="text-sm opacity-80">Help refurbish and distribute</span>
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="secondary" className="h-auto p-6 flex flex-col items-center space-y-2 bg-white text-primary hover:bg-gray-100">
              <Link to="/partner">
                <div className="text-2xl mb-2">🤝</div>
                <span className="font-semibold">Partner With Us</span>
                <span className="text-sm opacity-80">Collaborate for greater impact</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/5 to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Give Tech Life.{" "}
                <span className="text-primary">Give Someone Hope.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Resurtech is on a mission to reduce electronic waste and restore hope by refurbishing laptops for students, job seekers, and families in need. Together, we can bridge the digital divide.
              </p>
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
              <p className="text-gray-600">Donate your old laptop or contribute funds to help us acquire devices that need new life.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">We Repair or Recycle</h3>
              <p className="text-gray-600">Our volunteers refurbish working devices and responsibly recycle unusable components.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Someone Gets Hope</h3>
              <p className="text-gray-600">Refurbished laptops go to students, job seekers, and families who need technology to thrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Hope</h2>
            <p className="text-xl text-gray-600">Real people, real impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 italic">
                  "Thanks to Resurtech, I was able to complete my online courses and land my dream job. This laptop changed my life."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face" 
                    alt="Maria" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                    <p className="text-sm text-gray-600">Recent Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 italic">
                  "My son can now do his homework from home. As a single parent, I couldn't afford a computer. Resurtech made it possible."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=60&h=60&fit=crop&crop=face" 
                    alt="Jennifer" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Jennifer Chen</p>
                    <p className="text-sm text-gray-600">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 italic">
                  "Volunteering with Resurtech has been incredibly rewarding. We're not just fixing laptops, we're fixing futures."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                    alt="David" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">David Thompson</p>
                    <p className="text-sm text-gray-600">Volunteer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join the Movement CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Every laptop donated, every volunteer hour, and every dollar contributed helps bridge the digital divide. Choose how you want to make an impact.
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

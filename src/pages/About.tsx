
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-primary">About</span> Resurtech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that technology should empower everyone, not create a digital divide. Our mission is to reduce electronic waste while providing access to technology for those who need it most.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To reduce electronic waste and empower lives through technology.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Belief</h2>
              <p className="text-gray-600 leading-relaxed">
                Every gadget has more to give. Every person deserves a chance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Resurtech was born from a simple but powerful observation: while many Nigerians cannot afford the tools to pursue education or tech careers, countless homes and offices hold unused or broken gadgets collecting dust.
                </p>
                <p>
                  We collect gadgets—new, used, or damaged. We fix what can be fixed. We responsibly recycle what cannot. And we put working laptops into the hands of those who need them most.
              </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Team working with laptops"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6-Month Operational Cycle */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Our 6-Month Operational Cycle</h2>
            <p className="text-lg text-gray-900 max-w-3xl mx-auto">We run our program twice a year in 6-month phases</p>
          </div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold">Donation Phase</h3>
                </div>
                <p className="text-gray-600 text-sm"><span className="text-primary">Months 1-2:</span> Collection happens every 2 weeks on Fridays and Saturdays. </p>
                <div className="mt-2">
                  <p className="text-black text-sm">Example: If the month starts on Friday the 1st, we’ll collect on:</p>
                  <ul>
                    <li className="text-gray-600 text-sm">- Friday 1st & Saturday 2nd</li>
                    <li className="text-gray-600 text-sm">- Friday 15th & Saturday 16th</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold">Application + Repair Phase</h3>
                </div>
                <p className="text-gray-600 text-sm"><span className="text-secondary">Month 3-4:</span> People can apply, while we sort and fix devices.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold">Distribution + Recycling Phase</h3>
                </div>
                <p className="text-gray-600 text-sm"><span className="text-primary">Months 5-6:</span> Qualified applicants receive laptops <span className="font-bold">every 2 weeks on Fridays and Saturdays</span>, while remaining gadgets are sent to recycling partners. </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="mt-[50px] text-center text-primary-500">Pickup is provided in partnership with a logistics company. Drop-off locations are not fixed.</p>

        </div>

        {/* Values */}
        {/* <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-sm text-gray-600">Reducing electronic waste through responsible reuse and recycling</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Equity</h3>
              <p className="text-sm text-gray-600">Ensuring everyone has access to the technology they need to succeed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-sm text-gray-600">Building connections and empowering local communities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Finding creative solutions to complex social and environmental challenges</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;

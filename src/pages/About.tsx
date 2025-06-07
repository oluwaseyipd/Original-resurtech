
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">Resurtech</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe that technology should empower everyone, not create a digital divide. Our mission is to reduce electronic waste while providing access to technology for those who need it most.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To bridge the digital divide by refurbishing donated laptops and distributing them to students, job seekers, and families in need, while promoting responsible electronic waste recycling and environmental sustainability.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where everyone has access to the technology they need to learn, work, and thrive, while electronic waste is minimized through responsible reuse and recycling practices.
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
                  Resurtech was founded in 2023 by a group of tech professionals who were troubled by the growing digital divide and the mounting problem of electronic waste. We realized that while many people were upgrading to newer devices, millions of others lacked access to basic technology.
                </p>
                <p>
                  What started as a small community initiative has grown into a nonprofit organization that has already refurbished and distributed over 120 laptops, diverted 2.1 tons of electronic waste from landfills, and built a community of 40+ dedicated volunteers.
                </p>
                <p>
                  Our approach is simple yet powerful: we collect donated laptops, refurbish them to like-new condition, and place them in the hands of students, job seekers, and families who need them most. For devices that can't be refurbished, we ensure responsible recycling.
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our 6-Month Operational Cycle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold">Collection Phase</h3>
                </div>
                <p className="text-gray-600 text-sm">Months 1-2: Gather donated laptops from individuals, businesses, and community partners through collection drives and partnerships.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold">Assessment</h3>
                </div>
                <p className="text-gray-600 text-sm">Month 2: Evaluate each device to determine if it can be refurbished or should be recycled. Catalog repairable devices and parts.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold">Refurbishment</h3>
                </div>
                <p className="text-gray-600 text-sm">Months 3-4: Volunteers repair, clean, and install fresh operating systems on salvageable laptops. Quality testing ensures reliability.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <h3 className="text-lg font-semibold">Distribution</h3>
                </div>
                <p className="text-gray-600 text-sm">Month 5: Partner with schools, nonprofits, and community organizations to identify recipients and distribute refurbished laptops.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <h3 className="text-lg font-semibold">Follow-up</h3>
                </div>
                <p className="text-gray-600 text-sm">Month 6: Check in with recipients, provide basic tech support, and gather feedback to improve our processes for the next cycle.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <h3 className="text-lg font-semibold">Recycling</h3>
                </div>
                <p className="text-gray-600 text-sm">Ongoing: Responsibly recycle unusable components through certified e-waste facilities, ensuring environmental sustainability.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
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
        </div>
      </div>
    </div>
  );
};

export default About;

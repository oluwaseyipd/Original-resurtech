
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GetInvolved = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to bridge the digital divide. Choose how you want to make an impact in your community.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="volunteer" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            <TabsTrigger value="donate">Donate</TabsTrigger>
            <TabsTrigger value="partner">Partner</TabsTrigger>
          </TabsList>

          {/* Volunteer Tab */}
          <TabsContent value="volunteer">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Volunteer Your Time</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join our team of dedicated volunteers who help refurbish laptops, organize distribution events, and support our community outreach efforts.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tech Refurbishment</h4>
                      <p className="text-gray-600">Help repair and refurbish donated laptops</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Community Outreach</h4>
                      <p className="text-gray-600">Help distribute laptops and provide basic training</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Events & Logistics</h4>
                      <p className="text-gray-600">Support collection drives and community events</p>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/volunteer">Join as Volunteer</Link>
                </Button>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                  alt="Volunteers working with laptops"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </TabsContent>

          {/* Donate Tab */}
          <TabsContent value="donate">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Person donating laptop"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Donate Technology</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Give your old laptops a second life while helping someone in need access technology. We accept laptops in any condition.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Card className="p-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Laptop Donations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">Working or broken laptops, we'll handle the rest</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Financial Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">Help us purchase parts and tools for refurbishment</p>
                    </CardContent>
                  </Card>
                </div>

                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Partner Tab */}
          <TabsContent value="partner">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner with Resurtech</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Collaborate with us to amplify our impact. Whether you're a business, school, or nonprofit, together we can reach more people in need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Partners</h3>
                  <p className="text-gray-600">Bulk laptop donations, employee volunteer programs, and financial sponsorship</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏫</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Partners</h3>
                  <p className="text-gray-600">Schools and universities can help identify students in need and facilitate distribution</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nonprofit Partners</h3>
                  <p className="text-gray-600">Community organizations can help us reach underserved populations and provide ongoing support</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/partner">Become a Partner</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every contribution, no matter how small, helps us bridge the digital divide and create opportunities for those in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/volunteer">Start Volunteering</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;

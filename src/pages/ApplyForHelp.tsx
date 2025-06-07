
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ApplyForHelp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    category: "",
    currentSituation: "",
    howWillHelp: "",
    hasInternet: "",
    householdIncome: "",
    householdSize: "",
    additionalInfo: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.category || !formData.currentSituation) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Application submitted:", formData);
    
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and get back to you within 5-7 business days."
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      category: "",
      currentSituation: "",
      howWillHelp: "",
      hasInternet: "",
      householdIncome: "",
      householdSize: "",
      additionalInfo: ""
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply for Help</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help bridge the digital divide. Fill out this application to be considered for a refurbished laptop.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=300&fit=crop" 
            alt="Student using laptop for education"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Application Form */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Laptop Request Application</CardTitle>
            <p className="text-center text-gray-600">
              Please provide accurate information to help us understand your needs better.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">I am a *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="job-seeker">Job Seeker</SelectItem>
                        <SelectItem value="parent">Parent/Guardian</SelectItem>
                        <SelectItem value="senior">Senior Citizen</SelectItem>
                        <SelectItem value="disabled">Person with Disability</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input 
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input 
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Household Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Household Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="householdIncome">Annual Household Income Range</Label>
                    <Select value={formData.householdIncome} onValueChange={(value) => handleInputChange("householdIncome", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-75k">$50,000 - $75,000</SelectItem>
                        <SelectItem value="over-75k">Over $75,000</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="householdSize">Household Size</Label>
                    <Select value={formData.householdSize} onValueChange={(value) => handleInputChange("householdSize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select household size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4 people</SelectItem>
                        <SelectItem value="5+">5+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Internet Access */}
              <div>
                <Label htmlFor="hasInternet">Do you have internet access at home?</Label>
                <Select value={formData.hasInternet} onValueChange={(value) => handleInputChange("hasInternet", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, reliable internet</SelectItem>
                    <SelectItem value="limited">Limited/unreliable internet</SelectItem>
                    <SelectItem value="no">No internet access</SelectItem>
                    <SelectItem value="mobile-only">Mobile data only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Situation Description */}
              <div>
                <Label htmlFor="currentSituation">Please describe your current situation and why you need a laptop *</Label>
                <Textarea 
                  id="currentSituation"
                  value={formData.currentSituation}
                  onChange={(e) => handleInputChange("currentSituation", e.target.value)}
                  placeholder="Tell us about your circumstances, educational goals, job search, or other needs..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              {/* How Will Help */}
              <div>
                <Label htmlFor="howWillHelp">How will having a laptop help you achieve your goals?</Label>
                <Textarea 
                  id="howWillHelp"
                  value={formData.howWillHelp}
                  onChange={(e) => handleInputChange("howWillHelp", e.target.value)}
                  placeholder="Describe how access to a laptop will make a difference in your life..."
                  className="min-h-[80px]"
                />
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea 
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                  placeholder="Anything else you'd like us to know..."
                  className="min-h-[80px]"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Submit Application
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  We review applications weekly and will contact you within 5-7 business days.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyForHelp;

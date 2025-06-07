
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Partner = () => {
  const [formData, setFormData] = useState({
    organizationType: "",
    organizationName: "",
    contactName: "",
    title: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    organizationSize: "",
    partnershipInterests: [] as string[],
    resources: [] as string[],
    timeline: "",
    description: "",
    goals: "",
    additionalInfo: ""
  });

  const { toast } = useToast();

  const partnershipOptions = [
    "Device Donation Programs",
    "Employee Volunteer Programs",
    "Financial Sponsorship",
    "Collection Event Hosting",
    "Distribution Partnership",
    "Technical Expertise Sharing",
    "Student/Client Referrals",
    "Marketing & Promotion",
    "Grant Writing Collaboration",
    "Educational Workshops"
  ];

  const resourceOptions = [
    "Meeting/Event Space",
    "Transportation/Logistics",
    "Technical Equipment",
    "Marketing/Communications",
    "Volunteer Network",
    "Financial Contributions",
    "Expertise/Consulting",
    "Student/Client Access",
    "Government Connections",
    "Media Relationships"
  ];

  const handlePartnershipChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      partnershipInterests: checked 
        ? [...prev.partnershipInterests, interest]
        : prev.partnershipInterests.filter(i => i !== interest)
    }));
  };

  const handleResourceChange = (resource: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      resources: checked 
        ? [...prev.resources, resource]
        : prev.resources.filter(r => r !== resource)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.organizationName || !formData.contactName || !formData.email || formData.partnershipInterests.length === 0) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    console.log("Partnership application submitted:", formData);
    
    toast({
      title: "Partnership Application Submitted!",
      description: "We'll review your proposal and schedule a meeting within 5-7 business days to discuss collaboration opportunities."
    });

    // Reset form
    setFormData({
      organizationType: "",
      organizationName: "",
      contactName: "",
      title: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      organizationSize: "",
      partnershipInterests: [],
      resources: [],
      timeline: "",
      description: "",
      goals: "",
      additionalInfo: ""
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Partner with Resurtech</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join forces with us to amplify our impact. Together, we can reach more people in need and create lasting change in our communities.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Partners</h3>
              <p className="text-gray-600">
                Enhance your CSR initiatives while making a meaningful impact in digital equity and environmental sustainability.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Institutions</h3>
              <p className="text-gray-600">
                Help your students and community members access essential technology while promoting sustainability education.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Organizations</h3>
              <p className="text-gray-600">
                Expand your reach and provide additional resources to the communities you serve through technology access.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Partnership Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop" 
                alt="Partnership meeting"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">TechCorp Inc.</h4>
                <p className="text-gray-600 text-sm">
                  "Partnering with Resurtech has allowed our employees to volunteer while contributing to meaningful change in our community. We've donated 50+ laptops and seen the direct impact on local families."
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop" 
                alt="School partnership"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Lincoln Community College</h4>
                <p className="text-gray-600 text-sm">
                  "Through our partnership, we've been able to provide laptops to 30+ students who couldn't afford them. The collaboration has strengthened our commitment to educational equity."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Application Form */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Partnership Application</CardTitle>
            <p className="text-center text-gray-600">
              Tell us about your organization and how we can work together to make a greater impact.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="organizationType">Organization Type *</Label>
                    <Select value={formData.organizationType} onValueChange={(value) => setFormData(prev => ({ ...prev, organizationType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporation">Corporation/Business</SelectItem>
                        <SelectItem value="nonprofit">Nonprofit Organization</SelectItem>
                        <SelectItem value="school">School/Educational Institution</SelectItem>
                        <SelectItem value="government">Government Agency</SelectItem>
                        <SelectItem value="foundation">Foundation</SelectItem>
                        <SelectItem value="community">Community Group</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="organizationName">Organization Name *</Label>
                    <Input 
                      id="organizationName"
                      value={formData.organizationName}
                      onChange={(e) => setFormData(prev => ({ ...prev, organizationName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="organizationSize">Organization Size</Label>
                    <Select value={formData.organizationSize} onValueChange={(value) => setFormData(prev => ({ ...prev, organizationSize: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input 
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      placeholder="https://"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input 
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Title/Position</Label>
                    <Input 
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Organization Address</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input 
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input 
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Partnership Interests */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Partnership Interests *</h3>
                <p className="text-sm text-gray-600 mb-4">What types of partnership activities interest your organization?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {partnershipOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox 
                        id={interest}
                        checked={formData.partnershipInterests.includes(interest)}
                        onCheckedChange={(checked) => handlePartnershipChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm">{interest}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Resources</h3>
                <p className="text-sm text-gray-600 mb-4">What resources can your organization potentially contribute?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {resourceOptions.map((resource) => (
                    <div key={resource} className="flex items-center space-x-2">
                      <Checkbox 
                        id={resource}
                        checked={formData.resources.includes(resource)}
                        onCheckedChange={(checked) => handleResourceChange(resource, checked as boolean)}
                      />
                      <Label htmlFor={resource} className="text-sm">{resource}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <Label htmlFor="timeline">Preferred Timeline for Partnership</Label>
                <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                    <SelectItem value="short-term">Short-term (1-3 months)</SelectItem>
                    <SelectItem value="medium-term">Medium-term (3-6 months)</SelectItem>
                    <SelectItem value="long-term">Long-term (6+ months)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Organization Description */}
              <div>
                <Label htmlFor="description">Organization Description</Label>
                <Textarea 
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Tell us about your organization's mission, values, and current initiatives..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Partnership Goals */}
              <div>
                <Label htmlFor="goals">Partnership Goals</Label>
                <Textarea 
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                  placeholder="What do you hope to achieve through this partnership? How does it align with your organization's goals?"
                  className="min-h-[100px]"
                />
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea 
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                  placeholder="Any other information you'd like to share about your organization or partnership ideas..."
                  className="min-h-[80px]"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Submit Partnership Application
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll review your application and schedule a meeting within 5-7 business days to discuss collaboration opportunities.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Partner;

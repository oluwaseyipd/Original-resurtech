
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    age: "",
    availability: "",
    skills: [] as string[],
    interests: [] as string[],
    experience: "",
    motivation: "",
    additionalInfo: "",
    hasTransportation: "",
  });

  const { toast } = useToast();

  const skillOptions = [
    "Computer Repair/Hardware",
    "Software Installation",
    "Data Recovery",
    "Quality Testing",
    "Customer Service",
    "Event Planning",
    "Social Media/Marketing",
    "Photography/Videography",
    "Logistics/Transportation",
    "Teaching/Training"
  ];

  const interestOptions = [
    "Laptop Refurbishment",
    "Community Outreach",
    "Collection Events",
    "Distribution Events",
    "Training Recipients",
    "Administrative Support",
    "Social Media Content",
    "Fundraising Events",
    "Partnership Development",
    "Environmental Education"
  ];

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || formData.skills.length === 0) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    console.log("Volunteer application submitted:", formData);
    
    toast({
      title: "Volunteer Application Submitted!",
      description: "We'll review your application and contact you within 3-5 business days for next steps."
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      age: "",
      availability: "",
      skills: [],
      interests: [],
      experience: "",
      motivation: "",
      additionalInfo: "",
      hasTransportation: "",
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4"><span className="text-primary">Volunteer</span> with Resurtech</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of volunteers who are passionate about bridging the digital divide and protecting the environment.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=300&fit=crop" 
            alt="Volunteers working together with laptops"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Volunteer Benefits */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Learn New Skills</h3>
              <p className="text-sm text-gray-600">Gain hands-on experience with computer repair and refurbishment</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Make an Impact</h3>
              <p className="text-sm text-gray-600">Directly help individuals and families access essential technology</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-gray-900 mb-2">Join Community</h3>
              <p className="text-sm text-gray-600">Connect with like-minded people who care about technology and social good</p>
            </CardContent>
          </Card>
        </div> */}

        {/* Application Form */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Volunteer Application</CardTitle>
            <p className="text-center text-gray-600">
              Help us learn more about you and how you'd like to contribute to our mission.
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
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      required
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age Range</Label>
                    <Select value={formData.age} onValueChange={(value) => setFormData(prev => ({ ...prev, age: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="16-17">16-17</SelectItem>
                        <SelectItem value="18-24">18-24</SelectItem>
                        <SelectItem value="25-34">25-34</SelectItem>
                        <SelectItem value="35-44">35-44</SelectItem>
                        <SelectItem value="45-54">45-54</SelectItem>
                        <SelectItem value="55-64">55-64</SelectItem>
                        <SelectItem value="65+">65+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input 
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <Label htmlFor="availability">Availability</Label>
                <Select value={formData.availability} onValueChange={(value) => setFormData(prev => ({ ...prev, availability: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekday-morning">Weekday Mornings</SelectItem>
                    <SelectItem value="weekday-afternoon">Weekday Afternoons</SelectItem>
                    <SelectItem value="weekday-evening">Weekday Evenings</SelectItem>
                    <SelectItem value="weekend-morning">Weekend Mornings</SelectItem>
                    <SelectItem value="weekend-afternoon">Weekend Afternoons</SelectItem>
                    <SelectItem value="weekend-evening">Weekend Evenings</SelectItem>
                    <SelectItem value="flexible">Flexible Schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Experience *</h3>
                <p className="text-sm text-gray-600 mb-4">Select all skills that apply to you:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {skillOptions.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox 
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                      />
                      <Label htmlFor={skill} className="text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas of Interest</h3>
                <p className="text-sm text-gray-600 mb-4">What volunteer activities interest you most?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <div key={interest} className="flex items-center space-x-2">
                      <Checkbox 
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                      />
                      <Label htmlFor={interest} className="text-sm">{interest}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <Label htmlFor="experience">Relevant Experience</Label>
                <Textarea 
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                  placeholder="Tell us about any relevant volunteer experience, technical skills, or other background..."
                  className="min-h-[80px]"
                />
              </div>

              {/* Motivation */}
              <div>
                <Label htmlFor="motivation">Why do you want to volunteer with Resurtech?</Label>
                <Textarea 
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                  placeholder="Share what motivates you to join our mission..."
                  className="min-h-[80px]"
                />
              </div>

              {/* Transportation */}
              <div>
                <Label htmlFor="hasTransportation">Do you have reliable transportation?</Label>
                <Select value={formData.hasTransportation} onValueChange={(value) => setFormData(prev => ({ ...prev, hasTransportation: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, I have my own transportation</SelectItem>
                    <SelectItem value="public">I use public transportation</SelectItem>
                    <SelectItem value="limited">Limited transportation options</SelectItem>
                    <SelectItem value="need-help">I would need transportation assistance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Emergency Contact */}
              {/* <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                    <Input 
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData(prev => ({ ...prev, emergencyContact: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                    <Input 
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => setFormData(prev => ({ ...prev, emergencyPhone: e.target.value }))}
                    />
                  </div>
                </div>
              </div> */}

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea 
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                  placeholder="Anything else you'd like us to know about you or your volunteer interests..."
                  className="min-h-[80px]"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Volunteer;

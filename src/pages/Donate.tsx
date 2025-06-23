
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const [donationForm, setDonationForm] = useState({
    donationType: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    deviceType: "",
    deviceCondition: "",
    deviceAge: "",
    quantity: "",
    additionalInfo: "",
    pickupPreferred: ""
  });

  const [monetaryForm, setMonetaryForm] = useState({
    amount: "",
    fullName: "",
    email: "",
    isRecurring: false
  });

  const { toast } = useToast();

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!donationForm.fullName || !donationForm.email || !donationForm.deviceType) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    console.log("Device donation submitted:", donationForm);
    
    toast({
      title: "Donation Request Submitted!",
      description: "We'll contact you within 2-3 business days to arrange pickup or drop-off."
    });

    // Reset form
    setDonationForm({
      donationType: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      deviceType: "",
      deviceCondition: "",
      deviceAge: "",
      quantity: "",
      additionalInfo: "",
      pickupPreferred: ""
    });
  };

  const handleMonetarySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!monetaryForm.amount || !monetaryForm.fullName || !monetaryForm.email) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    console.log("Monetary donation submitted:", monetaryForm);
    
    toast({
      title: "Thank you for your donation!",
      description: "Your contribution helps us refurbish more laptops for those in need."
    });

    // Reset form
    setMonetaryForm({
      amount: "",
      fullName: "",
      email: "",
      isRecurring: false
    });
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Donate</span> to Resurtech
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Got a laptop you no longer use? Give it a second life and give someone a chance.          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1000&h=300&fit=crop" 
            alt="Laptops ready for donation"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Donation Options */}
        <Tabs defaultValue="devices" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="devices">Donate Devices</TabsTrigger>
            <TabsTrigger value="money">Monetary Donation</TabsTrigger>
          </TabsList>

          {/* Device Donation Tab */}
          <TabsContent value="devices">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Donate Laptops & Devices</CardTitle>
                <p className="text-center text-gray-600">
                  We accept laptops in any condition - working, broken, or outdated. We'll handle the rest!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonationSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input 
                          id="fullName"
                          value={donationForm.fullName}
                          onChange={(e) => setDonationForm(prev => ({ ...prev, fullName: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={donationForm.email}
                          onChange={(e) => setDonationForm(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          value={donationForm.phone}
                          onChange={(e) => setDonationForm(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Address (for pickup/drop-off)</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input 
                          id="address"
                          value={donationForm.address}
                          onChange={(e) => setDonationForm(prev => ({ ...prev, address: e.target.value }))}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input 
                            id="city"
                            value={donationForm.city}
                            onChange={(e) => setDonationForm(prev => ({ ...prev, city: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input 
                            id="state"
                            value={donationForm.state}
                            onChange={(e) => setDonationForm(prev => ({ ...prev, state: e.target.value }))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Device Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="deviceType">Device Type *</Label>
                        <Select value={donationForm.deviceType} onValueChange={(value) => setDonationForm(prev => ({ ...prev, deviceType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select device type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="laptop">Laptop</SelectItem>
                            <SelectItem value="desktop">Desktop Computer</SelectItem>
                            <SelectItem value="tablet">Tablet</SelectItem>
                            <SelectItem value="parts">Computer Parts</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="deviceCondition">Condition</Label>
                        <Select value={donationForm.deviceCondition} onValueChange={(value) => setDonationForm(prev => ({ ...prev, deviceCondition: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="working">Working perfectly</SelectItem>
                            <SelectItem value="minor-issues">Minor issues</SelectItem>
                            <SelectItem value="major-issues">Major issues</SelectItem>
                            <SelectItem value="broken">Not working</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="deviceAge">Approximate Age</Label>
                        <Select value={donationForm.deviceAge} onValueChange={(value) => setDonationForm(prev => ({ ...prev, deviceAge: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-8">6-8 years</SelectItem>
                            <SelectItem value="9+">9+ years</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="quantity">Number of Devices</Label>
                        <Input 
                          id="quantity"
                          type="number"
                          min="1"
                          value={donationForm.quantity}
                          onChange={(e) => setDonationForm(prev => ({ ...prev, quantity: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pickup Preference */}
                  <div>
                    <Label htmlFor="pickupPreferred">Pickup/Drop-off Preference</Label>
                    <Select value={donationForm.pickupPreferred} onValueChange={(value) => setDonationForm(prev => ({ ...prev, pickupPreferred: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pickup">I prefer pickup</SelectItem>
                        <SelectItem value="dropoff">I can drop off</SelectItem>
                        <SelectItem value="either">Either works</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea 
                      id="additionalInfo"
                      value={donationForm.additionalInfo}
                      onChange={(e) => setDonationForm(prev => ({ ...prev, additionalInfo: e.target.value }))}
                      placeholder="Any additional details about the devices, special pickup instructions, etc."
                      className="min-h-[80px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 px-8">
                      Submit Donation Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monetary Donation Tab */}
          <TabsContent value="money">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Donation Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Make a Financial Contribution</CardTitle>
                  <p className="text-gray-600">
                    Your financial support helps us purchase refurbishment supplies, tools, and covers operational costs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleMonetarySubmit} className="space-y-6">
                    {/* Donation Amount */}
                    <div>
                      <Label htmlFor="amount">Donation Amount *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                        {['25', '50', '100', '250'].map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={monetaryForm.amount === amount ? "default" : "outline"}
                            className="h-12"
                            onClick={() => setMonetaryForm(prev => ({ ...prev, amount }))}
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                        <Input 
                          id="amount"
                          type="number"
                          min="1"
                          value={monetaryForm.amount}
                          onChange={(e) => setMonetaryForm(prev => ({ ...prev, amount: e.target.value }))}
                          placeholder="Enter custom amount"
                          className="pl-8"
                          required
                        />
                      </div>
                    </div>

                    {/* Donor Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="donorName">Full Name *</Label>
                        <Input 
                          id="donorName"
                          value={monetaryForm.fullName}
                          onChange={(e) => setMonetaryForm(prev => ({ ...prev, fullName: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="donorEmail">Email Address *</Label>
                        <Input 
                          id="donorEmail"
                          type="email"
                          value={monetaryForm.email}
                          onChange={(e) => setMonetaryForm(prev => ({ ...prev, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-6">
                      <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90 w-full">
                        Donate ${monetaryForm.amount || '0'}
                      </Button>
                      <p className="text-sm text-gray-600 mt-4">
                        Secure payment processing • Tax receipt provided
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Impact Information */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl">Your Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">$25</span>
                      </div>
                      <div>
                        <p className="font-medium">Refurbishment Supplies</p>
                        <p className="text-sm text-gray-600">Covers basic repair materials for one laptop</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">$50</span>
                      </div>
                      <div>
                        <p className="font-medium">Software & OS Licenses</p>
                        <p className="text-sm text-gray-600">Provides essential software for refurbished laptops</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">$100</span>
                      </div>
                      <div>
                        <p className="font-medium">Complete Refurbishment</p>
                        <p className="text-sm text-gray-600">Fully refurbishes one laptop from start to finish</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">$250</span>
                      </div>
                      <div>
                        <p className="font-medium">Community Workshop</p>
                        <p className="text-sm text-gray-600">Sponsors a refurbishment workshop for volunteers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Why Donate to Resurtech?</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>• 100% of donations go directly to our programs</li>
                      <li>• Tax-deductible receipts provided</li>
                      <li>• Transparent impact reporting</li>
                      <li>• Local community focus</li>
                      <li>• Environmental sustainability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Donate;

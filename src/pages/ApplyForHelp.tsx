import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, FileText, Image, File, Laptop, CheckCircle, Heart, Users, Recycle } from "lucide-react";

const ApplyForHelp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age:"",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    category: "",
    reasonforneed: "",
    techaccess: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // File upload handling
  const acceptedFileTypes = {
    'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    'application/pdf': ['.pdf'],
    'application/msword': ['.doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    'text/plain': ['.txt'],
    'application/vnd.ms-excel': ['.xls'],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
  };

  const isFileTypeAccepted = (file: File) => {
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    return Object.values(acceptedFileTypes).some(extensions => 
      extensions.includes(fileExtension)
    ) || file.type.startsWith('image/') || file.type === 'application/pdf';
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files).filter(file => {
      if (!isFileTypeAccepted(file)) {
        toast({
          title: "File type not supported",
          description: `${file.name} is not a supported file type.`,
          variant: "destructive"
        });
        return false;
      }
      
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        toast({
          title: "File too large",
          description: `${file.name} is larger than 10MB.`,
          variant: "destructive"
        });
        return false;
      }
      
      return true;
    });

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Image className="h-5 w-5 text-gray-600" />;
    } else if (file.type === 'application/pdf') {
      return <FileText className="h-5 w-5 text-gray-600" />;
    } else {
      return <File className="h-5 w-5 text-gray-600" />;
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.category || !formData.reasonforneed) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const submissionData = {
      ...formData,
      files: uploadedFiles.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type
      }))
    };
    
    console.log("Application submitted:", submissionData);
    console.log("Files:", uploadedFiles);
    
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and get back to you within 5-7 business days."
    });

    // Reset form
    setFormData({
      fullName: "",
      age: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      category: "",
      reasonforneed: "",
      techaccess: "",
    });
    setUploadedFiles([]);
  };

  const eligibilityItems = [
    { icon: <Users className="h-5 w-5" />, text: "Be a student or aspiring digital professional" },
    { icon: <FileText className="h-5 w-5" />, text: "Show proof of need and commitment" },
    { icon: <Heart className="h-5 w-5" />, text: "Committed to using technology for personal growth" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Applications open during months 3-4 of each cycle" }
  ];

  return (
    <div 
      className="min-h-screen py-12" 
      style={{ 
        backgroundColor: 'hsl(210, 40%, 96.1%)',
        color: 'hsl(222.2, 47.4%, 11.2%)'
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div 
              className="p-3 rounded-full bg-primary-500"
              
            >
              <Recycle className="h-8 w-8 text-white" />
            </div>
            <div 
              className="p-3 rounded-full bg-primary-500"
              
            >
              <Laptop className="h-8 w-8 text-white" />
            </div>
            <div 
              className="p-3 rounded-full bg-primary-500"
              
            >
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
            Apply for Technology Access
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            At RESURTECH, we believe technology should empower everyone. Request a refurbished device 
            and join our mission to reduce e-waste while building your digital future.
          </p>
          
          {/* Mission Statement */}
          <div 
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-primary-500 text-white font-medium"
            
          >
            <Recycle className="h-5 w-5" />
            <span>Reducing E-Waste • Restoring Hope • Rebuilding Communities</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mb-16 relative">
          <div 
            className="rounded-3xl p-12 text-center relative overflow-hidden bg-primary-500"
         
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                From E-Waste to Empowerment
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Every device we refurbish is a step toward a more sustainable future and a bridge to digital opportunity.
              </p>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4">
                <Laptop className="h-16 w-16 text-white" />
              </div>
              <div className="absolute top-8 right-8">
                <Recycle className="h-12 w-12 text-white" />
              </div>
              <div className="absolute bottom-4 left-12">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="absolute bottom-8 right-4">
                <Users className="h-14 w-14 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
            Eligibility Requirements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100"
              >
                <div 
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: 'hsl(210, 40%, 96.1%)' }}
                >
                  <div style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                    {item.icon}
                  </div>
                </div>
                <p className="text-lg font-medium" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <Card className="border-0 shadow-xl bg-white rounded-3xl overflow-hidden">
          <CardHeader 
            className="text-center py-12 relative bg-primary-500"
          
          >
            <div className="mb-4">
              <div 
                className="inline-flex p-4 rounded-full bg-white"
              
              >
                <FileText className="h-8 w-8 text-primary-500" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold mb-4 text-white">
              Technology Request Application
            </CardTitle>
            <p className="text-lg max-w-2xl mx-auto text-white">
              Help us understand your needs so we can match you with the right refurbished device.
            </p>

                        {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4">
                <Laptop className="h-16 w-16 text-white" />
              </div>
              <div className="absolute top-8 right-8">
                <Recycle className="h-12 w-12 text-white" />
              </div>
              <div className="absolute bottom-4 left-12">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="absolute bottom-8 right-4">
                <Users className="h-14 w-14 text-white" />
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-12">
            <div className="space-y-10">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                  Personal Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-base font-medium">Full Name *</Label>
                    <Input 
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="age" className="text-base font-medium">Age *</Label>
                      <Input 
                        id="age"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="category" className="text-base font-medium">I am a *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]">
                          <SelectValue placeholder="Select your category" />
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
              </div>

              {/* Address Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                  Address Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="address" className="text-base font-medium">Street Address</Label>
                    <Input 
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city" className="text-base font-medium">City</Label>
                      <Input 
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-base font-medium">State</Label>
                      <Input 
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-base font-medium">ZIP Code</Label>
                      <Input 
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        className="mt-2 h-12 text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Description */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                  Your Story
                </h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="reasonforneed" className="text-base font-medium">What do you need the device for? *</Label>
                    <Textarea 
                      id="reasonforneed"
                      value={formData.reasonforneed}
                      onChange={(e) => handleInputChange("reasonforneed", e.target.value)}
                      placeholder="Share your story and how this technology will make a difference in your life..."
                      className="mt-2 min-h-[120px] text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="techaccess" className="text-base font-medium">Current Technology Access</Label>
                    <Textarea 
                      id="techaccess"
                      value={formData.techaccess}
                      onChange={(e) => handleInputChange("techaccess", e.target.value)}
                      placeholder="Tell us about any existing devices or technology access you have..."
                      className="mt-2 min-h-[100px] text-base border-2 rounded-xl focus:border-[hsl(222.2,47.4%,11.2%)]"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                  Supporting Documents
                </h3>
                <p className="text-base mb-6 text-gray-600">
                  Upload documents that support your application such as student ID, enrollment proof, 
                  recommendation letters, or income verification. (Max 10MB per file)
                </p>
                
                {/* Drag and Drop Area */}
                <div
                  className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                    isDragOver 
                      ? 'border-[hsl(222.2,47.4%,11.2%)] bg-[hsl(210,70%,78%)]' 
                      : 'border-gray-300 hover:border-[hsl(222.2,47.4%,11.2%)] bg-[hsl(210,40%,98%)]'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div 
                    className="inline-flex p-4 rounded-full mb-6"
                    style={{ backgroundColor: 'hsl(210, 40%, 96.1%)' }}
                  >
                    <Upload className="h-8 w-8" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }} />
                  </div>
                  <p className="text-xl font-semibold mb-3" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                    Drop your files here, or click to browse
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    Supports: JPG, PNG, PDF, DOC, DOCX, TXT, XLS, XLSX
                  </p>
                  
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx,.txt,.xls,.xlsx"
                    onChange={(e) => handleFileSelect(e.target.files)}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('file-upload')?.click()}
                    className="h-12 px-8 text-base rounded-xl border-2"
                    style={{ 
                      borderColor: 'hsl(222.2, 47.4%, 11.2%)',
                      color: 'hsl(222.2, 47.4%, 11.2%)'
                    }}
                  >
                    Choose Files
                  </Button>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                      Uploaded Files ({uploadedFiles.length})
                    </h4>
                    <div className="space-y-3">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-[hsl(210,40%,98%)] rounded-xl border border-gray-200"
                        >
                          <div className="flex items-center space-x-4">
                            <div 
                              className="p-2 rounded-lg"
                              style={{ backgroundColor: 'hsl(222.2, 47.4%, 11.2%)' }}
                            >
                              <div className="text-white">
                                {getFileIcon(file)}
                              </div>
                            </div>
                            <div>
                              <p className="font-medium text-base truncate max-w-xs" style={{ color: 'hsl(222.2, 47.4%, 11.2%)' }}>
                                {file.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-14 px-12 text-lg font-semibold rounded-2xl bg-primary-500 text-white transition-all duration-300 hover:scale-105"
                >
                  Submit Application
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll review your application within 5-7 business days
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyForHelp;
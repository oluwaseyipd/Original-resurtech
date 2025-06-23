import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, FileText, Image, File } from "lucide-react";

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
      return <Image className="h-6 w-6 text-blue-500" />;
    } else if (file.type === 'application/pdf') {
      return <FileText className="h-6 w-6 text-red-500" />;
    } else {
      return <File className="h-6 w-6 text-gray-500" />;
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

    // Here you would typically send the data and files to your backend
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

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply for Help</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need a laptop to learn, study, or work? We can help.
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

        {/* Eligibility */}
        <div className="mb-12">
          <h3 className="text-3xl text-center font-bold text-gray-900 mb-12">Eligibility</h3>

          <ul className="flex flex-col gap-3">
            <li>1. Be a student or aspiring digital professional</li>
            <li>2. Show proof of need</li>
            <li>3. Must be committed to use the laptop for personal growth</li>
            <li>4. Applications are open during months 3-4 of the cycle</li>
          </ul>
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
            <div onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="mb-4">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input 
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input 
                      id="age"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
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

              {/* Situation Description */}
              <div>
                <Label htmlFor="reasonforneed">What do you need the laptop for? *</Label>
                <Textarea 
                  id="reasonforneed"
                  value={formData.reasonforneed}
                  onChange={(e) => handleInputChange("reasonforneed", e.target.value)}
                  placeholder="Tell us your story..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              {/* How Will Help */}
              <div>
                <Label htmlFor="techaccess">Do you have any existing access to tech?</Label>
                <Textarea 
                  id="techaccess"
                  value={formData.techaccess}
                  onChange={(e) => handleInputChange("techaccess", e.target.value)}
                  placeholder="Type here..."
                  className="min-h-[80px]"
                />
              </div>

              {/* File Upload Section */}
              <div>
                <Label className="text-base font-medium">Supporting Documents</Label>
                <p className="text-sm text-gray-600 mb-4">
                  Upload supporting documents such as student ID, recommendation letters, proof of enrollment, etc. 
                  (Images, PDF, Word documents - Max 10MB per file)
                </p>
                
                {/* Drag and Drop Area */}
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    isDragOver 
                      ? 'border-blue-400 bg-blue-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Drop your files here, or click to browse
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
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
                    className="mt-2"
                  >
                    Choose Files
                  </Button>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-gray-900">Uploaded Files ({uploadedFiles.length})</h4>
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                        >
                          <div className="flex items-center space-x-3">
                            {getFileIcon(file)}
                            <div>
                              <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="button" onClick={handleSubmit} size="lg" className="bg-primary hover:bg-primary/90 px-8">
                  Submit Application
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplyForHelp;
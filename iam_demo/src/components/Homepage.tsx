import { useState, FormEvent } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner';
import { FileText, CheckCircle, Search, TrendingUp, Globe } from 'lucide-react';

interface HomepageProps {
  onSignIn: () => void;
}

export function Homepage({ onSignIn }: HomepageProps) {
  const [email, setEmail] = useState('');
  const [showInfluencerForm, setShowInfluencerForm] = useState(false);
  const [showBusinessLogin, setShowBusinessLogin] = useState(false);
  const [influencerFormData, setInfluencerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platform: '',
    handle: '',
    followers: '',
    category: '',
    bio: '',
    consent: false,
  });

  const [businessLoginData, setBusinessLoginData] = useState({
    email: '',
    password: '',
  });

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowBusinessLogin(true);
    }
  };

  const handleInfluencerSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!influencerFormData.consent) {
      toast.error('Please agree to be included in our influencer database');
      return;
    }

    toast.success('Application submitted! We will contact you when we find a matching brand opportunity.');
    
    setInfluencerFormData({
      name: '',
      email: '',
      phone: '',
      platform: '',
      handle: '',
      followers: '',
      category: '',
      bio: '',
      consent: false,
    });
    setShowInfluencerForm(false);
  };

  const handleBusinessLogin = (e: FormEvent) => {
    e.preventDefault();
    
    if (businessLoginData.email && businessLoginData.password) {
      toast.success('Successfully signed in!');
      onSignIn();
    } else {
      toast.error('Please enter your credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">IAM</h1>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Market intelligence</a>
              <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Simulator</a>
              <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">Dashboard</a>
            </nav>
            <div className="flex items-center gap-3">
              <Dialog open={showInfluencerForm} onOpenChange={setShowInfluencerForm}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-slate-700 border-slate-300">
                    Join as Influencer
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Influencer Application</DialogTitle>
                    <DialogDescription>
                      Fill out your information and we'll match you with relevant brand opportunities
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleInfluencerSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="inf-name">Full Name *</Label>
                        <Input
                          id="inf-name"
                          placeholder="Enter your name"
                          value={influencerFormData.name}
                          onChange={(e) => setInfluencerFormData({ ...influencerFormData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inf-email">Email Address *</Label>
                        <Input
                          id="inf-email"
                          type="email"
                          placeholder="your@email.com"
                          value={influencerFormData.email}
                          onChange={(e) => setInfluencerFormData({ ...influencerFormData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inf-phone">Phone Number</Label>
                      <Input
                        id="inf-phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={influencerFormData.phone}
                        onChange={(e) => setInfluencerFormData({ ...influencerFormData, phone: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="inf-platform">Primary Platform *</Label>
                        <Select 
                          value={influencerFormData.platform} 
                          onValueChange={(value) => setInfluencerFormData({ ...influencerFormData, platform: value })}
                          required
                        >
                          <SelectTrigger id="inf-platform">
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="tiktok">TikTok</SelectItem>
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="twitter">Twitter/X</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inf-handle">Social Media Handle *</Label>
                        <Input
                          id="inf-handle"
                          placeholder="@yourusername"
                          value={influencerFormData.handle}
                          onChange={(e) => setInfluencerFormData({ ...influencerFormData, handle: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="inf-followers">Follower Count *</Label>
                        <Select 
                          value={influencerFormData.followers} 
                          onValueChange={(value) => setInfluencerFormData({ ...influencerFormData, followers: value })}
                          required
                        >
                          <SelectTrigger id="inf-followers">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1k-10k">1K - 10K (Nano)</SelectItem>
                            <SelectItem value="10k-100k">10K - 100K (Micro)</SelectItem>
                            <SelectItem value="100k-1m">100K - 1M (Macro)</SelectItem>
                            <SelectItem value="1m+">1M+ (Mega)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inf-category">Content Category *</Label>
                        <Select 
                          value={influencerFormData.category} 
                          onValueChange={(value) => setInfluencerFormData({ ...influencerFormData, category: value })}
                          required
                        >
                          <SelectTrigger id="inf-category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beauty">Beauty & Skincare</SelectItem>
                            <SelectItem value="fashion">Fashion</SelectItem>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="wellness">Health & Wellness</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="food">Food & Cooking</SelectItem>
                            <SelectItem value="travel">Travel</SelectItem>
                            <SelectItem value="fitness">Fitness</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inf-bio">Tell us about your content</Label>
                      <Textarea
                        id="inf-bio"
                        placeholder="Describe your content style, audience demographics, and what makes you unique..."
                        value={influencerFormData.bio}
                        onChange={(e) => setInfluencerFormData({ ...influencerFormData, bio: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <Checkbox
                        id="inf-consent"
                        checked={influencerFormData.consent}
                        onCheckedChange={(checked) => setInfluencerFormData({ ...influencerFormData, consent: checked as boolean })}
                      />
                      <div className="flex-1">
                        <Label htmlFor="inf-consent" className="cursor-pointer">
                          <p className="text-sm text-slate-900 mb-1">
                            I consent to be included in the IAM influencer database *
                          </p>
                          <p className="text-xs text-slate-600">
                            By checking this box, you agree to have your profile shared with potential brand partners. 
                            We will contact you when we find a matching campaign opportunity that aligns with your content and audience.
                          </p>
                        </Label>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button type="button" variant="outline" onClick={() => setShowInfluencerForm(false)} className="flex-1">
                        Cancel
                      </Button>
                      <Button 
                        type="submit" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={!influencerFormData.consent}
                      >
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>

              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">U</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-6xl mb-6">
            Predict the Next Wave of <span className="text-blue-600">Influence.</span>
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            AI-powered platform that forecasts influencer sales performance before you hire.
          </p>
          
          <div className="flex items-center justify-center gap-3 max-w-2xl mx-auto">
            <form onSubmit={handleEmailSubmit} className="flex-1 flex items-center gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-6 rounded-full border-slate-300 bg-white"
                required
              />
              <Button 
                type="submit"
                className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Open Account
              </Button>
            </form>
            <Button 
              variant="outline"
              className="h-12 px-8 rounded-full border-slate-300"
            >
              Join Beta (Coming Soon)
            </Button>
          </div>
        </div>

        {/* Login Dialog */}
        <Dialog open={showBusinessLogin} onOpenChange={setShowBusinessLogin}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Sign in to IAM</DialogTitle>
              <DialogDescription>
                Access your business dashboard
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="signin" className="w-full mt-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <TabsContent value="signin" className="space-y-4 mt-4">
                <form onSubmit={handleBusinessLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@company.com"
                      value={businessLoginData.email}
                      onChange={(e) => setBusinessLoginData({ ...businessLoginData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={businessLoginData.password}
                      onChange={(e) => setBusinessLoginData({ ...businessLoginData, password: e.target.value })}
                      required
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-slate-600">
                      <input type="checkbox" className="rounded" />
                      Remember me
                    </label>
                    <button type="button" className="text-blue-600 hover:text-blue-700">
                      Forgot password?
                    </button>
                  </div>

                  <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="signup" className="space-y-4 mt-4">
                <form onSubmit={handleBusinessLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@company.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl text-slate-900 mb-4">
            Not another influencer<br />dashboard, a predictive engine.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Predictive Accuracy */}
          <Card className="border-slate-200 bg-slate-100/50">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-200 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl text-slate-900 mb-4">Predictive<br />Accuracy</h4>
              <p className="text-sm text-slate-600">
                AI predicts sales conversion based on country, category, and influencer data.
              </p>
            </CardContent>
          </Card>

          {/* Cross-Border Insights */}
          <Card className="border-slate-900 bg-slate-900">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
                <Globe className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-xl text-white mb-4">Cross-Border<br />Insights</h4>
              <p className="text-sm text-slate-300">
                Designed for brands expanding globally from K-Beauty to global markets.
              </p>
            </CardContent>
          </Card>

          {/* Data to Decision */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl text-slate-900 mb-4">Data to Decision</h4>
              <p className="text-sm text-slate-600">
                One platform for data collection, analysis, and prediction.
              </p>
            </CardContent>
          </Card>

          {/* Faster ROI Decisions */}
          <Card className="border-slate-200 bg-slate-100/50">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-200 rounded-2xl flex items-center justify-center">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl text-slate-900 mb-4">Faster ROI<br />Decisions</h4>
              <p className="text-sm text-slate-600">
                Know which influencer will drive sales before you spend your budget.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl text-slate-900 mb-4">IAM</h3>
              <p className="text-sm text-slate-600">
                Influencer Analytics & Marketing Platform
              </p>
            </div>
            <div>
              <h4 className="text-sm text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Features</a></li>
                <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
                <li><a href="#" className="hover:text-slate-900">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">About</a></li>
                <li><a href="#" className="hover:text-slate-900">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-slate-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact</a></li>
                <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-600">
            © 2024 IAM. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

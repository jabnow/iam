import { useState, FormEvent } from 'react';
import { Check, Download, Send, Zap, TrendingUp, Globe, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export function Pricing() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleExportReport = () => {
    toast.success('Generating your business report... Download will begin shortly.');
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! Our team will contact you within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-slate-900 mb-2">Subscription Plans</h2>
        <p className="text-slate-600">Choose the perfect plan for your business needs</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <Card className="border-slate-200 relative">
          <CardHeader>
            <CardTitle>Starter</CardTitle>
            <CardDescription>Perfect for small businesses getting started</CardDescription>
            <div className="mt-4">
              <div className="text-4xl text-slate-900">$59.90</div>
              <p className="text-sm text-slate-600 mt-1">per month</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Up to 50 influencer profiles</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Basic predictive simulator</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">5 campaign predictions/month</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Email support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Monthly reports</span>
              </li>
            </ul>
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Professional Plan */}
        <Card className="border-blue-500 relative shadow-lg scale-105">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-blue-600 text-white hover:bg-blue-700">
              Most Popular
            </Badge>
          </div>
          <CardHeader>
            <CardTitle>Professional</CardTitle>
            <CardDescription>For growing brands and agencies</CardDescription>
            <div className="mt-4">
              <div className="text-4xl text-slate-900">$149.90</div>
              <p className="text-sm text-slate-600 mt-1">per month</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Up to 200 influencer profiles</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Advanced predictive simulator</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Unlimited campaign predictions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Priority support + Account manager</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Weekly reports + Custom analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Microtrend analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">API access</span>
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </CardContent>
        </Card>

        {/* Enterprise Plan */}
        <Card className="border-slate-200 relative">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>Custom solutions for large organizations</CardDescription>
            <div className="mt-4">
              <div className="text-4xl text-slate-900">Custom</div>
              <p className="text-sm text-slate-600 mt-1">contact us</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Unlimited influencer profiles</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Full platform access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">White-label options</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Dedicated support team</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">Custom integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">SLA guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-700">On-premise deployment option</span>
              </li>
            </ul>
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
              Contact Sales
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Add-on Services */}
      <div className="mt-12">
        <h3 className="text-slate-900 mb-6 text-center">Add-on Services & Bundles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <CardTitle className="text-lg">Campaign Boost Bundle</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Enhance your campaigns with premium features
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span>10 additional predictions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span>Priority influencer matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span>Advanced analytics dashboard</span>
                </li>
              </ul>
              <div className="pt-4">
                <div className="text-2xl text-slate-900">$5.99</div>
                <p className="text-xs text-slate-600">one-time purchase</p>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Add to Plan
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <CardTitle className="text-lg">Market Intelligence Plus</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Deep dive into market trends and competitor analysis
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600" />
                  <span>Competitor tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600" />
                  <span>Trend forecasting reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-orange-600" />
                  <span>Industry benchmarking</span>
                </li>
              </ul>
              <div className="pt-4">
                <div className="text-2xl text-slate-900">$3.49</div>
                <p className="text-xs text-slate-600">per transaction</p>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Add to Plan
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-600" />
                <CardTitle className="text-lg">Global Expansion Pack</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Cross-border insights and international influencer access
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Multi-region analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Currency conversion tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Local market expertise</span>
                </li>
              </ul>
              <div className="pt-4">
                <div className="text-2xl text-slate-900">$14.99</div>
                <p className="text-xs text-slate-600">per month</p>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Add to Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* One-Time Business Report */}
      <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white mt-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-blue-600" />
                <CardTitle>One-Time Business Report Export</CardTitle>
              </div>
              <CardDescription className="mt-2">
                Get a comprehensive PDF report of your campaign performance, influencer analytics, and ROI insights
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl text-slate-900">$24.90</div>
              <p className="text-sm text-slate-600">one-time</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm text-slate-900 mb-3">Report Includes:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Complete campaign performance metrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Influencer ROI analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Audience demographic breakdown</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Competitive positioning insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Future campaign recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600" />
                  <span>Custom branding options</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="p-6 bg-white rounded-lg border border-blue-200">
                <p className="text-sm text-slate-600 mb-4">
                  Professional business reports ready for stakeholder presentations and board meetings
                </p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleExportReport}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Purchase & Export Report
                </Button>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  Delivered within 24 hours
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Company Rep */}
      <Card className="border-slate-200 mt-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-700" />
            <CardTitle>Have an Inquiry? Contact Our Team</CardTitle>
          </div>
          <CardDescription>
            Have questions about pricing or need a custom solution? Our team is here to help.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Your Name *</Label>
                <Input
                  id="contact-name"
                  placeholder="John Doe"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email Address *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="john@company.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-company">Company Name</Label>
              <Input
                id="contact-company"
                placeholder="Your Company Inc."
                value={contactForm.company}
                onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Message *</Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us about your needs or ask any questions..."
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                rows={5}
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <Button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <p className="text-sm text-slate-600">
                We typically respond within 24 hours
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState } from 'react';
import { Play, Info, TrendingUp, DollarSign, ExternalLink, MapPin, BarChart3, ArrowRight, Sparkles, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SimulatorFormData {
  origin: string;
  market: string;
  category: string;
  customer: string;
  channel: string;
  contentType: string;
  budget: string;
  tier: string;
}

interface PredictionResult {
  conversionRate: number;
  audienceScore: number;
  roas: number;
  cpc: number;
  insights: string[];
}

interface SimulatorProps {
  onViewRecommendations: (data: { formData: SimulatorFormData; prediction: PredictionResult }) => void;
  simulatorData?: any;
}

const influencers = [
  {
    id: 1,
    name: '@miahan',
    realName: 'Mia Han',
    location: 'Seoul, South Korea',
    tier: 'Micro',
    categories: ['Skincare & Lifestyle', 'Fashion'],
    followers: '79.6k',
    engagementRate: '6.8%',
    conversionPotential: '7.8%',
    avgReach: '45.2k',
    badges: ['High Engagement Rate'],
    previousCampaigns: [
      { name: 'Beauty Products', roi: '+12.4% ROI' },
      { name: 'Wellness Brands', roi: '+8.7% ROI' },
      { name: 'Lifestyle Goods', roi: '+15.2% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: '@avaskinjournal',
    realName: 'Ava Martinez',
    location: 'New York, NY',
    tier: 'Micro',
    categories: ['Beauty', 'Skincare'],
    followers: '84.2k',
    engagementRate: '7.2%',
    conversionPotential: '8.4%',
    avgReach: '52.1k',
    badges: ['Verified Match'],
    previousCampaigns: [
      { name: 'K-Beauty Products', roi: '+18.2% ROI' },
      { name: 'Clean Beauty', roi: '+11.5% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1696907572729-1a91e89a7cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzI1MjM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: '@lily.and.co',
    realName: 'Lily Anderson',
    location: 'Los Angeles, CA',
    tier: 'Micro',
    categories: ['Lifestyle', 'Wellness'],
    followers: '92.3k',
    engagementRate: '5.9%',
    conversionPotential: '6.5%',
    avgReach: '58.7k',
    badges: ['Top Rated'],
    previousCampaigns: [
      { name: 'Wellness Products', roi: '+14.8% ROI' },
      { name: 'Fitness Brands', roi: '+9.3% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1598040796012-297aaa2ec113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MzI1MjM5MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: '@thehanbytte',
    realName: 'Hannah Blythe',
    location: 'San Francisco, CA',
    tier: 'Micro',
    categories: ['Tech', 'Lifestyle'],
    followers: '67.8k',
    engagementRate: '8.1%',
    conversionPotential: '7.2%',
    avgReach: '42.3k',
    badges: ['High Engagement'],
    previousCampaigns: [
      { name: 'Tech Accessories', roi: '+16.7% ROI' },
      { name: 'Smart Home', roi: '+10.2% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1664891419647-5dfe3d310226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNzIzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: '@chloe.adams',
    realName: 'Chloe Adams',
    location: 'Chicago, IL',
    tier: 'Micro',
    categories: ['Fashion', 'Beauty'],
    followers: '103.5k',
    engagementRate: '5.2%',
    conversionPotential: '6.9%',
    avgReach: '65.8k',
    badges: ['Verified'],
    previousCampaigns: [
      { name: 'Fashion Brands', roi: '+13.4% ROI' },
      { name: 'Accessories', roi: '+11.8% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1558975285-193b2c315c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzIyNjI2MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: '@sophia.skin',
    realName: 'Sophia Kim',
    location: 'Philadelphia, PA',
    tier: 'Micro',
    categories: ['Skincare', 'Beauty'],
    followers: '71.2k',
    engagementRate: '7.8%',
    conversionPotential: '8.9%',
    avgReach: '48.5k',
    badges: ['Rising Star'],
    previousCampaigns: [
      { name: 'Skincare Lines', roi: '+19.3% ROI' },
      { name: 'Clean Beauty', roi: '+14.1% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1704054006064-2c5b922e7a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTc0NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Simulator({ onViewRecommendations, simulatorData }: SimulatorProps) {
  const [formData, setFormData] = useState<SimulatorFormData>({
    origin: '',
    market: '',
    category: '',
    customer: '',
    channel: '',
    contentType: '',
    budget: '',
    tier: 'micro',
  });
  
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleInputChange = (field: keyof SimulatorFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const runPrediction = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Generate realistic predictions based on inputs
      const baseConversion = Math.random() * 5 + 5; // 5-10%
      const tierMultiplier = formData.tier === 'nano' ? 1.2 : formData.tier === 'micro' ? 1.1 : 0.9;
      const channelMultiplier = formData.channel === 'tiktok' ? 1.15 : formData.channel === 'instagram' ? 1.05 : 1.0;
      
      const conversionRate = parseFloat((baseConversion * tierMultiplier * channelMultiplier).toFixed(1));
      const audienceScore = Math.floor(Math.random() * 10 + 90); // 90-100
      const roas = Math.floor((conversionRate / 100) * 3000 + 150); // 150-450%
      const cpc = parseFloat((Math.random() * 1 + 0.3).toFixed(2)); // $0.30-$1.30

      const insights = [
        `Micro influencers show ${(Math.random() * 20 + 30).toFixed(0)}% higher engagement in this category`,
        `Target market has strong affinity for this product type`,
        `Optimal posting time: ${['Weekday evenings', 'Weekend mornings', 'Tuesday-Thursday afternoons'][Math.floor(Math.random() * 3)]}`,
      ];

      const newPrediction = {
        conversionRate,
        audienceScore,
        roas,
        cpc,
        insights,
      };

      setPrediction(newPrediction);
      setShowRecommendations(true);
      onViewRecommendations({ formData, prediction: newPrediction });
      
      setIsLoading(false);
    }, 1500);
  };

  const isFormComplete = Object.entries(formData).every(([key, value]) => 
    key === 'tier' || value !== ''
  );

  // Get top 3 recommendations based on simulator data
  const getTopRecommendations = () => {
    if (!simulatorData) return [];
    
    // Sort by conversion potential and get top 3
    const sorted = [...influencers].sort((a, b) => 
      parseFloat(b.conversionPotential) - parseFloat(a.conversionPotential)
    );
    
    return sorted.slice(0, 3);
  };

  const topRecommendations = getTopRecommendations();

  return (
    <div className="space-y-8">
      {/* Simulator Section */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-slate-900 mb-1">Predictive Simulator</h2>
          <p className="text-slate-600">Configure campaign parameters to predict conversion outcomes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Campaign Configuration</CardTitle>
              <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg mt-2">
                <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-700">
                  The more detailed the input you provide, the more accurate the results will be
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin">Product Origin</Label>
                  <Select value={formData.origin} onValueChange={(value) => handleInputChange('origin', value)}>
                    <SelectTrigger id="origin">
                      <SelectValue placeholder="Select origin country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="kr">South Korea</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                      <SelectItem value="fr">France</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="market">Target Market</Label>
                  <Select value={formData.market} onValueChange={(value) => handleInputChange('market', value)}>
                    <SelectTrigger id="market">
                      <SelectValue placeholder="Select target market" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="kr">South Korea</SelectItem>
                      <SelectItem value="jp">Japan</SelectItem>
                      <SelectItem value="eu">Europe</SelectItem>
                      <SelectItem value="global">Global</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Product Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beauty">Beauty & Skincare</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="wellness">Wellness</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customer">Target Customer</Label>
                  <Select value={formData.customer} onValueChange={(value) => handleInputChange('customer', value)}>
                    <SelectTrigger id="customer">
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-24">20-30</SelectItem>
                      <SelectItem value="25-40">30-40</SelectItem>
                      <SelectItem value="41-56">40-50</SelectItem>
                      <SelectItem value="all">All Ages</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="channel">Channel</Label>
                  <Select value={formData.channel} onValueChange={(value) => handleInputChange('channel', value)}>
                    <SelectTrigger id="channel">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="reels">Reels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contenttype">Content Type</Label>
                  <Select value={formData.contentType} onValueChange={(value) => handleInputChange('contentType', value)}>
                    <SelectTrigger id="contenttype">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="review">Product Review</SelectItem>
                      <SelectItem value="tutorial">Tutorial</SelectItem>
                      <SelectItem value="unboxing">Unboxing</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle Integration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Marketing Budget</Label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select marketing budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1k-5k">USD 300,000-400,000</SelectItem>
                    <SelectItem value="5k-10k">USD 400,000-500,000</SelectItem>
                    <SelectItem value="10k-25k">USD 500,000-600,000</SelectItem>
                    <SelectItem value="25k-50k">USD 600,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Label>Influencer Tier</Label>
                  <div className="relative group">
                    <Info className="w-4 h-4 text-slate-400 cursor-help" />
                    <div className="absolute left-0 top-6 w-64 p-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      Select the influencer tier that best matches your campaign goals
                    </div>
                  </div>
                </div>
                <RadioGroup value={formData.tier} onValueChange={(value) => handleInputChange('tier', value)} className="space-y-3">
                  <div className={`flex items-start space-x-3 p-3 border rounded-lg transition-colors ${formData.tier === 'nano' ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                    <RadioGroupItem value="nano" id="nano" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="nano" className="cursor-pointer">
                        <div className="text-slate-900">Nano (1K - 10K followers)</div>
                        <p className="text-xs text-slate-500 mt-1">High engagement, niche audiences</p>
                      </Label>
                    </div>
                  </div>
                  <div className={`flex items-start space-x-3 p-3 border rounded-lg transition-colors ${formData.tier === 'micro' ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                    <RadioGroupItem value="micro" id="micro" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="micro" className="cursor-pointer">
                        <div className="text-slate-900">Micro (10K - 100K followers)</div>
                        <p className="text-xs text-slate-500 mt-1">Balanced reach and engagement</p>
                      </Label>
                    </div>
                  </div>
                  <div className={`flex items-start space-x-3 p-3 border rounded-lg transition-colors ${formData.tier === 'mega' ? 'border-blue-300 bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}>
                    <RadioGroupItem value="mega" id="mega" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="mega" className="cursor-pointer">
                        <div className="text-slate-900">Mega (100K+ followers)</div>
                        <p className="text-xs text-slate-500 mt-1">Maximum reach, brand awareness</p>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white"
                onClick={runPrediction}
                disabled={!isFormComplete || isLoading}
              >
                {isLoading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Run Prediction
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <div>
            {!prediction ? (
              <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white h-full">
                <CardContent className="flex flex-col items-center justify-center py-16 px-8 text-center h-full">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Play className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-slate-900 mb-2">Configure parameters and run prediction to see results</h3>
                  <p className="text-sm text-slate-600 max-w-md">
                    Our AI-powered simulator will analyze your campaign configuration and provide detailed predictions for conversion outcomes, ROI estimates, and recommended influencers.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Prediction result about your product</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Conversion Rate Circle */}
                  <div className="flex flex-col items-center py-6">
                    <p className="text-sm text-blue-600 mb-4">Predicted Conversion Rate</p>
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="80"
                          stroke="#e2e8f0"
                          strokeWidth="16"
                          fill="none"
                        />
                        <circle
                          cx="96"
                          cy="96"
                          r="80"
                          stroke="#3b82f6"
                          strokeWidth="16"
                          fill="none"
                          strokeDasharray={`${(prediction.conversionRate / 10) * 502.4} 502.4`}
                          strokeLinecap="round"
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-4xl text-slate-900">{prediction.conversionRate}%</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mt-4">Your audience score is {prediction.audienceScore}%</p>
                    <Badge className="mt-2 bg-green-100 text-green-700 hover:bg-green-200">
                      Confidence
                    </Badge>
                  </div>

                  {/* Key Insights */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-slate-900">Key Insights</span>
                    </div>
                    <ul className="space-y-2">
                      {prediction.insights.map((insight, index) => (
                        <li key={index} className="text-sm text-slate-600 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600">
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-600">Expected ROAS</span>
                        <Info className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="text-2xl text-slate-900">{prediction.roas}%</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-600">Expected CPC</span>
                        <Info className="w-3 h-3 text-slate-400" />
                      </div>
                      <div className="text-2xl text-slate-900">${prediction.cpc}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Influencers Section - Shows below simulator after prediction */}
      {showRecommendations && simulatorData && (
        <div className="space-y-6">
          {/* Top 3 Recommendations */}
          <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -mr-16 -mt-16" />
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <div>
                    <CardTitle className="text-slate-900">Top 3 AI-Recommended Influencers</CardTitle>
                    <CardDescription>Based on your campaign prediction (Conversion: {simulatorData.prediction?.conversionRate}%)</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowRecommendations(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topRecommendations.map((influencer, index) => (
                  <Card key={influencer.id} className="border-slate-200 hover:shadow-lg transition-all overflow-hidden group relative">
                    {index === 0 && (
                      <div className="absolute top-3 left-3 z-10">
                        <Badge className="bg-yellow-500 text-white hover:bg-yellow-600">
                          #1 Match
                        </Badge>
                      </div>
                    )}
                    <div className="relative">
                      <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                        <ImageWithFallback
                          src={influencer.image}
                          alt={influencer.realName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {influencer.badges.map((badge) => (
                          <Badge key={badge} className="bg-green-500 text-white hover:bg-green-600 text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="text-slate-900">{influencer.name}</h3>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                            {influencer.tier}
                          </Badge>
                          {influencer.categories.slice(0, 1).map((cat) => (
                            <Badge key={cat} variant="outline" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {influencer.location}
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-slate-600">
                            <TrendingUp className="w-3 h-3" />
                            <span>Followers</span>
                          </div>
                          <span className="text-sm text-slate-900">{influencer.followers}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-slate-600">
                            <BarChart3 className="w-3 h-3" />
                            <span>Engagement</span>
                          </div>
                          <span className="text-sm text-green-600">{influencer.engagementRate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-slate-600">
                            <BarChart3 className="w-3 h-3" />
                            <span>Conversion</span>
                          </div>
                          <span className="text-sm text-blue-600">{influencer.conversionPotential}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-xs text-slate-500 mb-2">Previous Campaigns:</p>
                        {influencer.previousCampaigns.slice(0, 2).map((campaign, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-600">{campaign.name}</span>
                            <span className="text-green-600">{campaign.roi}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                        Contact Influencer
                        <ArrowRight className="w-3 h-3 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Influencer Profiles */}
          <div>
            <div className="mb-4">
              <h3 className="text-slate-900 mb-1">All Matched Influencers</h3>
              <p className="text-slate-600 text-sm">Explore additional influencers that match your campaign criteria</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {influencers.map((influencer) => (
                <Card key={influencer.id} className="border-slate-200 hover:shadow-lg transition-all overflow-hidden group">
                  <div className="relative">
                    <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                      <ImageWithFallback
                        src={influencer.image}
                        alt={influencer.realName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {influencer.badges.map((badge) => (
                        <Badge key={badge} className="bg-green-500 text-white hover:bg-green-600 text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3 className="text-slate-900">{influencer.name}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                          {influencer.tier}
                        </Badge>
                        {influencer.categories.slice(0, 1).map((cat) => (
                          <Badge key={cat} variant="outline" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {influencer.location}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <TrendingUp className="w-3 h-3" />
                          <span>Followers</span>
                        </div>
                        <span className="text-sm text-slate-900">{influencer.followers}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <BarChart3 className="w-3 h-3" />
                          <span>Engagement Rate</span>
                        </div>
                        <span className="text-sm text-green-600">{influencer.engagementRate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <BarChart3 className="w-3 h-3" />
                          <span>Conversion Potential</span>
                        </div>
                        <span className="text-sm text-blue-600">{influencer.conversionPotential}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-slate-900 hover:bg-slate-800" size="sm">
                      View Details
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

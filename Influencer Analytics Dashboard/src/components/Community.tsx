import { MapPin, TrendingUp, BarChart3, ArrowRight, Info, X, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CommunityProps {
  showRecommendations?: boolean;
  simulatorData?: any;
  onCloseRecommendations?: () => void;
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
  {
    id: 7,
    name: '@carternomad',
    realName: 'Carter Lee',
    location: 'Phoenix, AZ',
    tier: 'Micro',
    categories: ['Travel', 'Lifestyle'],
    followers: '88.9k',
    engagementRate: '6.3%',
    conversionPotential: '7.1%',
    avgReach: '54.2k',
    badges: ['Consistent'],
    previousCampaigns: [
      { name: 'Travel Gear', roi: '+12.9% ROI' },
      { name: 'Lifestyle Brands', roi: '+10.6% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 8,
    name: '@ellabeauty',
    realName: 'Ella Martinez',
    location: 'Atlanta, GA',
    tier: 'Micro',
    categories: ['Beauty', 'Makeup'],
    followers: '95.7k',
    engagementRate: '6.7%',
    conversionPotential: '7.6%',
    avgReach: '61.3k',
    badges: ['Top Performer'],
    previousCampaigns: [
      { name: 'Makeup Brands', roi: '+17.2% ROI' },
      { name: 'Beauty Tools', roi: '+13.8% ROI' },
    ],
    image: 'https://images.unsplash.com/photo-1696907572729-1a91e89a7cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzI1MjM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Community({ showRecommendations, simulatorData, onCloseRecommendations }: CommunityProps) {
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
    <div className="space-y-6">
      {/* Top 3 Recommendations Section */}
      {showRecommendations && simulatorData && (
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
              <Button variant="ghost" size="sm" onClick={onCloseRecommendations}>
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
      )}

      {/* Header */}
      <div>
        <p className="text-sm text-blue-600 mb-1">#recommendations</p>
        <h2 className="text-slate-900 mb-1">Recommendations</h2>
        <p className="text-slate-600">Curated influencers for optimal campaign performance</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="beauty">Beauty</SelectItem>
            <SelectItem value="lifestyle">Lifestyle</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="tech">Tech</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="instagram">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
            <SelectItem value="all">All Platforms</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="us">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="kr">South Korea</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="all">All Locations</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="micro">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tier" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="micro">Micro Tiers</SelectItem>
            <SelectItem value="nano">Nano</SelectItem>
            <SelectItem value="mega">Mega</SelectItem>
            <SelectItem value="all">All Tiers</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sort By */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
        <p className="text-sm text-slate-600">{influencers.length} influencers found</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">Sort by</span>
          <Select defaultValue="match">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match">High Brand Match</SelectItem>
              <SelectItem value="engagement">Engagement Rate</SelectItem>
              <SelectItem value="followers">Followers</SelectItem>
              <SelectItem value="conversion">Conversion Rate</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Influencer Grid */}
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
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                    {influencer.tier}
                  </Badge>
                  {influencer.categories.map((cat) => (
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
  );
}
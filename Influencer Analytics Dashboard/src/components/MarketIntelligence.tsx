import { TrendingUp, Users, DollarSign, Target, ArrowUp, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Microtrends } from './Microtrends';

const trendingCategories = [
  {
    category: 'Skincare',
    growth: '+45%',
    avgEngagement: '7.2%',
    topInfluencers: 847,
    avgPrice: '$3.2K',
    trending: 'up',
  },
  {
    category: 'Sustainable Fashion',
    growth: '+38%',
    avgEngagement: '6.8%',
    topInfluencers: 623,
    avgPrice: '$4.1K',
    trending: 'up',
  },
  {
    category: 'Wellness',
    growth: '+32%',
    avgEngagement: '8.1%',
    topInfluencers: 921,
    avgPrice: '$2.8K',
    trending: 'up',
  },
  {
    category: 'Tech Reviews',
    growth: '+28%',
    avgEngagement: '5.4%',
    topInfluencers: 412,
    avgPrice: '$5.6K',
    trending: 'up',
  },
  {
    category: 'Beauty',
    growth: '-12%',
    avgEngagement: '6.1%',
    topInfluencers: 1234,
    avgPrice: '$3.8K',
    trending: 'down',
  },
];

const marketInsights = [
  {
    title: 'Micro-Influencers Dominate',
    description: 'Campaigns with micro-influencers (10K-100K) show 3x better ROI than mega influencers',
    impact: 'High',
    category: 'Trend',
  },
  {
    title: 'Video Content Outperforms',
    description: 'Video content generates 48% more engagement than static posts across all platforms',
    impact: 'High',
    category: 'Content',
  },
  {
    title: 'Authenticity Matters',
    description: 'Influencers with authentic voice and consistent brand alignment see 65% higher conversion',
    impact: 'Medium',
    category: 'Strategy',
  },
  {
    title: 'Multi-Platform Campaigns',
    description: 'Cross-platform campaigns reach 2.3x more unique users compared to single-platform',
    impact: 'Medium',
    category: 'Platform',
  },
];

const platformStats = [
  { platform: 'Instagram', avgROI: '287%', topTier: 'Micro', engagement: '6.8%' },
  { platform: 'TikTok', avgROI: '342%', topTier: 'Nano', engagement: '8.9%' },
  { platform: 'YouTube', avgROI: '198%', topTier: 'Mega', engagement: '4.2%' },
  { platform: 'Twitter', avgROI: '156%', topTier: 'Micro', engagement: '3.1%' },
];

export function MarketIntelligence() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-slate-900 mb-1">Market Intelligence</h2>
        <p className="text-slate-600">Stay ahead with real-time insights and market trends</p>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2">
          <TabsTrigger value="overview">Market Overview</TabsTrigger>
          <TabsTrigger value="microtrends">Microtrends Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Platform Performance */}
          <div>
            <h3 className="text-slate-900 mb-4">Platform Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platformStats.map((stat) => (
                <Card key={stat.platform} className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900">{stat.platform}</CardTitle>
                    <CardDescription>Average campaign metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Avg. ROI</span>
                      <span className="text-green-600">{stat.avgROI}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Top Tier</span>
                      <Badge variant="outline" className="text-xs">
                        {stat.topTier}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Engagement</span>
                      <span className="text-sm text-slate-900">{stat.engagement}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trending Categories */}
          <div>
            <h3 className="text-slate-900 mb-4">Trending Categories</h3>
            <Card className="border-slate-200">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="text-left p-4 text-sm text-slate-600">Category</th>
                        <th className="text-left p-4 text-sm text-slate-600">Growth</th>
                        <th className="text-left p-4 text-sm text-slate-600">Avg. Engagement</th>
                        <th className="text-left p-4 text-sm text-slate-600">Top Influencers</th>
                        <th className="text-left p-4 text-sm text-slate-600">Avg. Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trendingCategories.map((item, index) => (
                        <tr key={item.category} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-slate-900">{item.category}</span>
                              {index < 3 && (
                                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs">
                                  Hot
                                </Badge>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div
                              className={`flex items-center gap-1 ${
                                item.trending === 'up' ? 'text-green-600' : 'text-red-600'
                              }`}
                            >
                              {item.trending === 'up' ? (
                                <ArrowUp className="w-4 h-4" />
                              ) : (
                                <ArrowDown className="w-4 h-4" />
                              )}
                              <span className="text-sm">{item.growth}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-slate-900">{item.avgEngagement}</span>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-slate-900">{item.topInfluencers}</span>
                          </td>
                          <td className="p-4">
                            <span className="text-sm text-slate-900">{item.avgPrice}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Insights */}
          <div>
            <h3 className="text-slate-900 mb-4">Key Market Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {marketInsights.map((insight, index) => (
                <Card key={index} className="border-slate-200 hover:border-blue-300 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-slate-900">{insight.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className={
                          insight.impact === 'High'
                            ? 'border-green-200 text-green-700 bg-green-50'
                            : 'border-yellow-200 text-yellow-700 bg-yellow-50'
                        }
                      >
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      {insight.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{insight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Total Influencers</CardDescription>
                  <Users className="w-4 h-4 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-slate-900">24,587</div>
                <p className="text-xs text-green-600 mt-1">+12.4% this month</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Avg. Campaign ROI</CardDescription>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-slate-900">287%</div>
                <p className="text-xs text-green-600 mt-1">+8.2% vs last quarter</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Active Campaigns</CardDescription>
                  <Target className="w-4 h-4 text-purple-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-slate-900">1,847</div>
                <p className="text-xs text-green-600 mt-1">+18.7% this month</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardDescription>Total Budget Managed</CardDescription>
                  <DollarSign className="w-4 h-4 text-orange-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-slate-900">$12.4M</div>
                <p className="text-xs text-green-600 mt-1">+24.3% this month</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="microtrends" className="space-y-6 mt-6">
          <Microtrends />
        </TabsContent>
      </Tabs>
    </div>
  );
}
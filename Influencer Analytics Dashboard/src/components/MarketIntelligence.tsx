import { TrendingUp, Users, DollarSign, Target, ArrowUp, ArrowDown, Heart, MessageCircle, Repeat2, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Microtrends } from './Microtrends';
import { Button } from './ui/button';
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Line, 
  LineChart, 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  Tooltip,
  Legend,
  ComposedChart
} from 'recharts';

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

const weeklyPostingData = [
  { date: '2025-07-29', posts: 45, performance: 8500 },
  { date: '2025-08-05', posts: 78, performance: 6200 },
  { date: '2025-08-12', posts: 52, performance: 7100 },
  { date: '2025-08-19', posts: 51, performance: 8900 },
  { date: '2025-08-26', posts: 75, performance: 34000 },
  { date: '2025-09-02', posts: 62, performance: 33500 },
  { date: '2025-09-09', posts: 56, performance: 16200 },
  { date: '2025-09-16', posts: 68, performance: 59800 },
  { date: '2025-09-23', posts: 214, performance: 19500 },
];

const topPerformingPosts = [
  { id: 1, metric: 'ER', value: '8.4%', likes: 'great', comments: 245, reposts: 89 },
  { id: 2, metric: 'ER', value: '7.9%', likes: '2.3K', comments: 189, reposts: 64 },
  { id: 3, metric: 'ER', value: '7.2%', likes: '1.8K', comments: 156, reposts: 52 },
];

const contentCategories = [
  { name: 'Tutorial', posts: 202, percentage: 49.3, avgViews: 28200, score: 67, color: '#FF6B6B' },
  { name: 'Review', posts: 151, percentage: 36.8, avgViews: 25500, score: 77, color: '#4ECDC4' },
  { name: 'Daily', posts: 40, percentage: 9.8, avgViews: 34400, score: 100, color: '#45B7D1' },
  { name: 'Unboxing', posts: 11, percentage: 2.7, avgViews: 20500, score: 5, color: '#96CEB4' },
  { name: 'Event', posts: 6, percentage: 1.5, avgViews: 22000, score: 100, color: '#FFEAA7' },
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

          {/* Weekly Postings and Performance */}
          <div>
            <h3 className="text-slate-900 mb-4">Weekly Postings and Performance</h3>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <ResponsiveContainer width="100%" height={350}>
                  <ComposedChart data={weeklyPostingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#64748b"
                      fontSize={12}
                    />
                    <YAxis 
                      yAxisId="left"
                      stroke="#64748b"
                      fontSize={12}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      stroke="#64748b"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Bar 
                      yAxisId="left"
                      dataKey="posts" 
                      fill="#14b8a6" 
                      name="Posts"
                      radius={[8, 8, 0, 0]}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="performance" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      name="Performance"
                      dot={{ fill: '#ef4444', r: 4 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Analysis by Content Category */}
          <div>
            <h3 className="text-slate-900 mb-4">Analysis by Content Category</h3>
            <Card className="border-slate-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Donut Chart Placeholder */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {/* Tutorial - Red */}
                        <circle
                          cx="50"
                          cy="50"
                          r="30"
                          fill="none"
                          stroke="#FF6B6B"
                          strokeWidth="20"
                          strokeDasharray={`${49.3 * 1.884} ${188.4 - (49.3 * 1.884)}`}
                        />
                        {/* Review - Teal */}
                        <circle
                          cx="50"
                          cy="50"
                          r="30"
                          fill="none"
                          stroke="#4ECDC4"
                          strokeWidth="20"
                          strokeDasharray={`${36.8 * 1.884} ${188.4 - (36.8 * 1.884)}`}
                          strokeDashoffset={`-${49.3 * 1.884}`}
                        />
                        {/* Daily - Blue */}
                        <circle
                          cx="50"
                          cy="50"
                          r="30"
                          fill="none"
                          stroke="#45B7D1"
                          strokeWidth="20"
                          strokeDasharray={`${9.8 * 1.884} ${188.4 - (9.8 * 1.884)}`}
                          strokeDashoffset={`-${(49.3 + 36.8) * 1.884}`}
                        />
                        {/* Unboxing - Green */}
                        <circle
                          cx="50"
                          cy="50"
                          r="30"
                          fill="none"
                          stroke="#96CEB4"
                          strokeWidth="20"
                          strokeDasharray={`${2.7 * 1.884} ${188.4 - (2.7 * 1.884)}`}
                          strokeDashoffset={`-${(49.3 + 36.8 + 9.8) * 1.884}`}
                        />
                        {/* Event - Yellow */}
                        <circle
                          cx="50"
                          cy="50"
                          r="30"
                          fill="none"
                          stroke="#FFEAA7"
                          strokeWidth="20"
                          strokeDasharray={`${1.5 * 1.884} ${188.4 - (1.5 * 1.884)}`}
                          strokeDashoffset={`-${(49.3 + 36.8 + 9.8 + 2.7) * 1.884}`}
                        />
                      </svg>
                    </div>
                    <div className="ml-8 space-y-2">
                      {contentCategories.map((cat) => (
                        <div key={cat.name} className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: cat.color }}
                          />
                          <span className="text-sm text-slate-600">{cat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details by Category */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-600 mb-4">Details by category</h4>
                    <div className="space-y-3">
                      {contentCategories.map((cat) => (
                        <div 
                          key={cat.name}
                          className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-2 h-2 rounded-full" 
                                style={{ backgroundColor: cat.color }}
                              />
                              <h5 className="font-semibold text-slate-900">{cat.name}</h5>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-slate-900">{cat.score}</div>
                              <div className="text-xs text-slate-500">/100</div>
                            </div>
                          </div>
                          <div className="text-sm text-slate-600">
                            {cat.posts} posts ({cat.percentage}%) • {(cat.avgViews / 1000).toFixed(1)}K avg views
                          </div>
                          <div className="text-xs text-slate-500 mt-1">Performance Score</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Posts */}
          <div>
            <h3 className="text-slate-900 mb-4">Top Performing Posts</h3>
            <div className="space-y-3">
              {topPerformingPosts.map((post) => (
                <Card key={post.id} className="border-slate-200 hover:border-blue-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg">
                          <BarChart3 className="w-4 h-4 text-slate-600" />
                          <span className="text-sm font-semibold text-slate-900">{post.metric}</span>
                        </div>
                        <div className="text-lg font-bold text-slate-900">{post.value}</div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:border-pink-300 hover:bg-pink-50 transition-colors">
                          <Heart className="w-4 h-4 text-slate-600" />
                          <span className="text-sm text-slate-700">{post.likes}</span>
                        </button>
                        
                        <Button variant="outline" className="gap-2 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">Comments</span>
                        </Button>
                        
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-colors">
                          <Repeat2 className="w-4 h-4 text-slate-600" />
                          <span className="text-sm text-slate-700">Repost</span>
                        </button>
                      </div>
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
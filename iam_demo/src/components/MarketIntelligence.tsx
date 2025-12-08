import { TrendingUp, Users, DollarSign, Target, ArrowUp, ArrowDown, BarChart3, MessageSquare, Heart, TrendingUp as TrendingIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Microtrends } from './Microtrends';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

const weeklyData = [
  { date: '2025-07-29', posts: 45, performance: 9800 },
  { date: '2025-08-05', posts: 78, performance: 6200 },
  { date: '2025-08-12', posts: 55, performance: 7400 },
  { date: '2025-08-19', posts: 52, performance: 8800 },
  { date: '2025-08-26', posts: 82, performance: 34200 },
  { date: '2025-09-02', posts: 68, performance: 33800 },
  { date: '2025-09-09', posts: 58, performance: 16400 },
  { date: '2025-09-16', posts: 72, performance: 59800 },
  { date: '2025-09-23', posts: 215, performance: 19200 },
];

const contentCategories = [
  { name: 'Tutorial', posts: 202, value: 49.3, avgViews: '28.2K', score: 67, color: '#FF6B6B' },
  { name: 'Review', posts: 151, value: 36.8, avgViews: '25.5K', score: 77, color: '#4ECDC4' },
  { name: 'Daily', posts: 40, value: 9.8, avgViews: '34.4K', score: 100, color: '#45B7D1' },
  { name: 'Unboxing', posts: 11, value: 2.7, avgViews: '20.5K', score: 5, color: '#96CEB4' },
  { name: 'Event', posts: 6, value: 1.5, avgViews: '22.0K', score: 100, color: '#FFEAA7' },
];

const topPosts = [
  { id: 1, metric: 'ER', value: '12.4%', label: 'Engagement Rate' },
  { id: 2, metric: 'Likes', value: '847K', label: 'Total Likes' },
  { id: 3, metric: 'Comments', value: '23.5K', label: 'Total Comments' },
  { id: 4, metric: 'Shares', value: '145K', label: 'Total Shares' },
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

          {/* Weekly Postings and Performance Chart */}
          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <CardTitle>Weekly postings and performance</CardTitle>
              </div>
              <CardDescription>Track posting frequency and engagement metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="date" 
                      stroke="#64748b"
                      tick={{ fontSize: 12 }}
                      tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    />
                    <YAxis 
                      yAxisId="left"
                      stroke="#64748b"
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Posts', angle: -90, position: 'insideLeft' }}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      stroke="#64748b"
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Performance', angle: 90, position: 'insideRight' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '12px'
                      }}
                    />
                    <Legend />
                    <Bar yAxisId="left" dataKey="posts" fill="#10b981" name="Posts" />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="performance" 
                      stroke="#ff6b6b" 
                      strokeWidth={2}
                      dot={{ fill: '#ff6b6b', r: 6 }}
                      name="Performance"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Content Category Analysis */}
          <div>
            <h3 className="text-slate-900 mb-4">Analysis by content category</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pie Chart */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">Content Distribution</CardTitle>
                  <CardDescription>Breakdown by content type</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div style={{ width: '100%', height: '400px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={contentCategories}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          innerRadius={70}
                          fill="#8884d8"
                          paddingAngle={3}
                          label={(entry) => `${entry.name}: ${entry.value}%`}
                        >
                          {contentCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Category Details */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement by category</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contentCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div 
                          className="w-3 h-3 rounded-full flex-shrink-0" 
                          style={{ backgroundColor: category.color }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm text-slate-900">{category.name}</p>
                          </div>
                          <p className="text-xs text-slate-500">
                            {category.posts} posts ({category.value} %) • {category.avgViews} avg views
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg text-slate-900">{category.score}</div>
                        <p className="text-xs text-slate-500">/100</p>
                        <p className="text-xs text-slate-400">Performance Score</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Performing Posts */}
          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingIcon className="w-5 h-5 text-green-600" />
                <CardTitle>Top Performing Posts</CardTitle>
              </div>
              <CardDescription>Key metrics from your best-performing content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {topPosts.map((post) => (
                  <button
                    key={post.id}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    {post.metric === 'ER' && <TrendingUp className="w-4 h-4 text-green-600" />}
                    {post.metric === 'Likes' && <Heart className="w-4 h-4 text-red-500" />}
                    {post.metric === 'Comments' && <MessageSquare className="w-4 h-4 text-blue-500" />}
                    {post.metric === 'Shares' && <ArrowUp className="w-4 h-4 text-purple-500" />}
                    <div className="text-left">
                      <div className="text-sm text-slate-900">{post.metric}</div>
                      <div className="text-xs text-slate-500">{post.label}</div>
                    </div>
                    <div className="text-lg font-semibold text-slate-900 ml-2">{post.value}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="microtrends" className="space-y-6 mt-6">
          <Microtrends />
        </TabsContent>
      </Tabs>
    </div>
  );
}
import { Calendar, Download, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const platformData = [
  { name: 'Instagram', value: 35, color: '#e1306c' },
  { name: 'YouTube', value: 28, color: '#ff0000' },
  { name: 'TikTok', value: 22, color: '#000000' },
  { name: 'Twitter', value: 15, color: '#1da1f2' },
];

const weeklyData = [
  { day: 'Mon', posts: 3, engagement: 8.2 },
  { day: 'Tue', posts: 2, engagement: 6.8 },
  { day: 'Wed', posts: 4, engagement: 12.4 },
  { day: 'Thu', posts: 3, engagement: 9.1 },
  { day: 'Fri', posts: 5, engagement: 15.2 },
  { day: 'Sat', posts: 2, engagement: 7.5 },
  { day: 'Sun', posts: 1, engagement: 4.3 },
];

const audienceData = [
  { age: '13-17', percentage: 8 },
  { age: '18-24', percentage: 32 },
  { age: '25-34', percentage: 41 },
  { age: '35-44', percentage: 14 },
  { age: '45+', percentage: 5 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900 mb-1">Analytics Deep Dive 📊</h2>
          <p className="text-slate-600">Comprehensive insights into your performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </Button>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-white border border-slate-200">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Platform Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Platform Distribution</CardTitle>
                <CardDescription>Where your audience engages most</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Posts and engagement by day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="day" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="posts" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardDescription>Average Post Reach</CardDescription>
                <CardTitle className="text-slate-900">27.8K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Across all platforms</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardDescription>Best Posting Time</CardDescription>
                <CardTitle className="text-slate-900">Friday 3PM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">Peak engagement window</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardDescription>Content Type Winner</CardDescription>
                <CardTitle className="text-slate-900">Video</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-600">2.3x more engagement</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6 mt-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Age distribution of your followers</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={audienceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" stroke="#64748b" />
                  <YAxis dataKey="age" type="category" stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="percentage" fill="#3b82f6" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Top Locations</CardTitle>
                <CardDescription>Where your audience is located</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { country: 'United States', percentage: 42 },
                  { country: 'United Kingdom', percentage: 18 },
                  { country: 'Canada', percentage: 12 },
                  { country: 'Australia', percentage: 9 },
                  { country: 'Germany', percentage: 8 },
                ].map((location) => (
                  <div key={location.country} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-700">{location.country}</span>
                      <span className="text-slate-900">{location.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${location.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Gender Split</CardTitle>
                <CardDescription>Audience gender distribution</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">Female</span>
                    <span className="text-slate-900">54%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-pink-500 h-2 rounded-full" style={{ width: '54%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">Male</span>
                    <span className="text-slate-900">44%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '44%' }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">Other/Prefer not to say</span>
                    <span className="text-slate-900">2%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '2%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { type: 'Videos', posts: 42, avgEngagement: '12.4%', performance: 'Excellent' },
              { type: 'Images', posts: 68, avgEngagement: '8.7%', performance: 'Good' },
              { type: 'Carousels', posts: 24, avgEngagement: '10.2%', performance: 'Great' },
              { type: 'Stories', posts: 156, avgEngagement: '6.1%', performance: 'Average' },
              { type: 'Reels', posts: 38, avgEngagement: '15.3%', performance: 'Excellent' },
              { type: 'Text Posts', posts: 12, avgEngagement: '4.8%', performance: 'Fair' },
            ].map((content) => (
              <Card key={content.type} className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">{content.type}</CardTitle>
                  <CardDescription>{content.posts} posts total</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Avg. Engagement</span>
                      <span className="text-slate-900">{content.avgEngagement}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">Performance</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          content.performance === 'Excellent'
                            ? 'bg-green-100 text-green-700'
                            : content.performance === 'Great'
                            ? 'bg-blue-100 text-blue-700'
                            : content.performance === 'Good'
                            ? 'bg-cyan-100 text-cyan-700'
                            : content.performance === 'Average'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {content.performance}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

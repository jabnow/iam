import { Calendar, Clock, Hash, TrendingUp, Plus, CheckCircle2, Send, Edit3, Eye, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const scheduledPosts = [
  {
    id: 1,
    content: 'Excited to share my morning routine! 🌅 What does your ideal morning look like?',
    platform: 'Instagram',
    scheduledFor: 'Today, 9:00 AM',
    status: 'scheduled',
    seoScore: 87,
    hashtags: ['#morningroutine', '#wellness', '#productivity'],
    estimatedReach: '12-15K',
  },
  {
    id: 2,
    content: 'New video dropping tomorrow! Behind the scenes of my latest collaboration 🎥',
    platform: 'YouTube',
    scheduledFor: 'Tomorrow, 2:00 PM',
    status: 'scheduled',
    seoScore: 92,
    hashtags: ['#BTS', '#collaboration', '#creator'],
    estimatedReach: '18-22K',
  },
  {
    id: 3,
    content: 'Quick tips for content creators struggling with consistency 💡',
    platform: 'TikTok',
    scheduledFor: 'Tomorrow, 6:30 PM',
    status: 'draft',
    seoScore: 78,
    hashtags: ['#creatortips', '#contentcreation'],
    estimatedReach: '25-30K',
  },
];

const seoSuggestions = [
  {
    title: 'Optimize posting time',
    description: 'Your audience is most active on weekdays between 6-9 PM',
    impact: 'High',
    category: 'Timing',
  },
  {
    title: 'Add trending hashtags',
    description: '#creatoreconomy is trending in your niche (+340% growth)',
    impact: 'Medium',
    category: 'Hashtags',
  },
  {
    title: 'Improve content description',
    description: 'Add more keywords related to your niche for better discoverability',
    impact: 'Medium',
    category: 'SEO',
  },
  {
    title: 'Cross-post to Instagram Reels',
    description: 'Similar content performs 2x better on Reels',
    impact: 'High',
    category: 'Platform',
  },
];

const contentMetrics = [
  { label: 'Scheduled Posts', value: '12', icon: Calendar },
  { label: 'Avg. SEO Score', value: '85/100', icon: TrendingUp },
  { label: 'Est. Weekly Reach', value: '180K', icon: Eye },
  { label: 'Optimal Times Used', value: '9/12', icon: Clock },
];

export function Channels() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900 mb-1">Content Management 📝</h2>
          <p className="text-slate-600">Schedule posts, optimize SEO, and manage your content strategy</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4" />
          New Post
        </Button>
      </div>

      {/* Content Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {contentMetrics.map((metric) => (
          <Card key={metric.label} className="border-slate-200">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>{metric.label}</CardDescription>
                <metric.icon className="w-4 h-4 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900">{metric.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scheduled Posts */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Scheduled Posts</CardTitle>
                  <CardDescription>Upcoming content across all platforms</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  View Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="p-4 bg-slate-50 rounded-lg space-y-3 hover:bg-slate-100 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {post.platform}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            post.status === 'scheduled'
                              ? 'border-green-200 text-green-700 bg-green-50'
                              : 'border-yellow-200 text-yellow-700 bg-yellow-50'
                          }
                        >
                          {post.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-900">{post.content}</p>
                      <div className="flex flex-wrap gap-1">
                        {post.hashtags.map((tag) => (
                          <span key={tag} className="text-xs text-blue-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <div className="flex items-center gap-4 text-xs text-slate-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.scheduledFor}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.estimatedReach}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-slate-600">SEO:</span>
                      <Badge
                        className={
                          post.seoScore >= 85
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : post.seoScore >= 70
                            ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }
                      >
                        {post.seoScore}/100
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Post Creator */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle>Quick Post Creator</CardTitle>
              <CardDescription>Create and schedule a new post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="What would you like to share?"
                  className="min-h-[100px] resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select>
                    <SelectTrigger id="platform">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schedule">Schedule</Label>
                  <Input id="schedule" type="datetime-local" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="hashtags">Hashtags</Label>
                <Input id="hashtags" placeholder="#example #content #creator" />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4 mr-2" />
                  Schedule Post
                </Button>
                <Button variant="outline" className="flex-1">
                  Save Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SEO & Optimization */}
        <div className="space-y-4">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-blue-600" />
                SEO Insights
              </CardTitle>
              <CardDescription>Boost your content discoverability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {seoSuggestions.map((suggestion, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded-lg space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-sm text-slate-900 mb-1">{suggestion.title}</div>
                      <p className="text-xs text-slate-600">{suggestion.description}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        suggestion.impact === 'High'
                          ? 'border-green-200 text-green-700 bg-green-50'
                          : 'border-yellow-200 text-yellow-700 bg-yellow-50'
                      }
                    >
                      {suggestion.impact}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {suggestion.category}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Trending Hashtags */}
          <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle>🔥 Trending Now</CardTitle>
              <CardDescription>Popular hashtags in your niche</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-sm text-blue-600">#creatoreconomy</span>
                <span className="text-xs text-slate-500">+340%</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-sm text-blue-600">#contentcreation</span>
                <span className="text-xs text-slate-500">+210%</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-sm text-blue-600">#influencerlife</span>
                <span className="text-xs text-slate-500">+180%</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white rounded-lg">
                <span className="text-sm text-blue-600">#brandpartner</span>
                <span className="text-xs text-slate-500">+156%</span>
              </div>
              <Button variant="outline" className="w-full mt-2" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Explore More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { TrendingUp, Flame, Users, Calendar, Clock, Target, Sparkles, Eye, Heart, MessageSquare, Share2, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';

const microtrends = [
  {
    id: 1,
    name: 'Clean Beauty Minimalism',
    niche: 'Beauty & Skincare',
    trendScore: 94,
    growth: '+187%',
    originators: [
      {
        name: '@emilyweirdo',
        realName: 'Emily Weiss',
        followers: '847k',
        contribution: 'Started the "skin first, makeup second" movement',
        image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
      },
      {
        name: '@hyram',
        realName: 'Hyram Yarbro',
        followers: '1.2M',
        contribution: 'Popularized ingredient-focused skincare education',
        image: 'https://images.unsplash.com/photo-1696907572729-1a91e89a7cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzI1MjM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    topCreators: {
      engagement: [
        { 
          name: '@miahan', 
          handle: 'Mia Han', 
          engagementRate: '8.9%', 
          avgLikes: '71k', 
          image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '487K',
            avgViews: '342K',
            totalPosts: 1247,
            avgComments: '3.2K',
            avgShares: '892',
            growthRate: '+24%',
            reachRate: '42%',
            saveRate: '12.4%'
          }
        },
        { 
          name: '@skinbyava', 
          handle: 'Ava Martinez', 
          engagementRate: '8.2%', 
          avgLikes: '68k', 
          image: 'https://images.unsplash.com/photo-1696907572729-1a91e89a7cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzI1MjM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '523K',
            avgViews: '398K',
            totalPosts: 982,
            avgComments: '2.9K',
            avgShares: '745',
            growthRate: '+31%',
            reachRate: '38%',
            saveRate: '10.8%'
          }
        },
        { 
          name: '@cleanbeautyco', 
          handle: 'Sophie Kim', 
          engagementRate: '7.8%', 
          avgLikes: '62k', 
          image: 'https://images.unsplash.com/photo-1704054006064-2c5b922e7a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTc0NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '412K',
            avgViews: '287K',
            totalPosts: 1456,
            avgComments: '2.5K',
            avgShares: '623',
            growthRate: '+18%',
            reachRate: '35%',
            saveRate: '9.2%'
          }
        },
      ],
      consistency: [
        { 
          name: '@dailyskincare', 
          handle: 'Emma Daily', 
          postsPerWeek: '5.2', 
          consistency: '96%', 
          image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '628K',
            avgViews: '445K',
            totalPosts: 2103,
            avgComments: '4.1K',
            avgShares: '1.1K',
            growthRate: '+27%',
            reachRate: '45%',
            saveRate: '14.2%'
          }
        },
        { 
          name: '@skinroutine247', 
          handle: 'Lisa Chen', 
          postsPerWeek: '4.8', 
          consistency: '93%', 
          image: 'https://images.unsplash.com/photo-1696907572729-1a91e89a7cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzI1MjM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '391K',
            avgViews: '312K',
            totalPosts: 1876,
            avgComments: '2.8K',
            avgShares: '742',
            growthRate: '+22%',
            reachRate: '40%',
            saveRate: '11.5%'
          }
        },
      ],
    },
    peakDays: ['Tuesday', 'Thursday', 'Sunday'],
    peakTimes: '6-9 PM EST',
  },
  {
    id: 2,
    name: 'Sustainable Fashion Hauls',
    niche: 'Fashion & Lifestyle',
    trendScore: 89,
    growth: '+142%',
    originators: [
      {
        name: '@venetialamanna',
        realName: 'Venetia La Manna',
        followers: '523k',
        contribution: 'Pioneered #rememberwhomadeyourclothes movement',
        image: 'https://images.unsplash.com/photo-1664891419647-5dfe3d310226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNzIzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    topCreators: {
      engagement: [
        { 
          name: '@ecofashionista', 
          handle: 'Chloe Adams', 
          engagementRate: '7.6%', 
          avgLikes: '58k', 
          image: 'https://images.unsplash.com/photo-1558975285-193b2c315c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzIyNjI2MXww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '356K',
            avgViews: '267K',
            totalPosts: 892,
            avgComments: '2.1K',
            avgShares: '578',
            growthRate: '+19%',
            reachRate: '37%',
            saveRate: '8.9%'
          }
        },
        { 
          name: '@thriftwithme', 
          handle: 'Maya Johnson', 
          engagementRate: '7.1%', 
          avgLikes: '54k', 
          image: 'https://images.unsplash.com/photo-1664891419647-5dfe3d310226?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNzIzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '298K',
            avgViews: '221K',
            totalPosts: 1034,
            avgComments: '1.8K',
            avgShares: '512',
            growthRate: '+26%',
            reachRate: '33%',
            saveRate: '7.4%'
          }
        },
      ],
      consistency: [
        { 
          name: '@sustainablestyle', 
          handle: 'Zara Thompson', 
          postsPerWeek: '4.5', 
          consistency: '91%', 
          image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '445K',
            avgViews: '334K',
            totalPosts: 1567,
            avgComments: '2.6K',
            avgShares: '689',
            growthRate: '+21%',
            reachRate: '39%',
            saveRate: '10.1%'
          }
        },
      ],
    },
    peakDays: ['Saturday', 'Sunday'],
    peakTimes: '10 AM - 2 PM EST',
  },
  {
    id: 3,
    name: 'Wellness Morning Routines',
    niche: 'Health & Wellness',
    trendScore: 86,
    growth: '+124%',
    originators: [
      {
        name: '@wellnesswithwhitney',
        realName: 'Whitney Simmons',
        followers: '3.2M',
        contribution: 'Created the "5 AM club" wellness movement',
        image: 'https://images.unsplash.com/photo-1598040796012-297aaa2ec113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MzI1MjM5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    topCreators: {
      engagement: [
        { 
          name: '@morningmindset', 
          handle: 'Lily Anderson', 
          engagementRate: '6.9%', 
          avgLikes: '48k', 
          image: 'https://images.unsplash.com/photo-1598040796012-297aaa2ec113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZsdWVuY2VyJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2MzI1MjM5MXww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '289K',
            avgViews: '198K',
            totalPosts: 743,
            avgComments: '1.6K',
            avgShares: '445',
            growthRate: '+15%',
            reachRate: '31%',
            saveRate: '6.8%'
          }
        },
      ],
      consistency: [
        { 
          name: '@dailywellness', 
          handle: 'Sarah Park', 
          postsPerWeek: '5.8', 
          consistency: '98%', 
          image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
          kpis: {
            followers: '512K',
            avgViews: '389K',
            totalPosts: 1923,
            avgComments: '3.4K',
            avgShares: '876',
            growthRate: '+29%',
            reachRate: '41%',
            saveRate: '13.1%'
          }
        },
      ],
    },
    peakDays: ['Monday', 'Wednesday', 'Friday'],
    peakTimes: '5-7 AM EST',
  },
];

type CreatorProfile = {
  name: string;
  handle: string;
  engagementRate?: string;
  avgLikes?: string;
  postsPerWeek?: string;
  consistency?: string;
  image: string;
  kpis: {
    followers: string;
    avgViews: string;
    totalPosts: number;
    avgComments: string;
    avgShares: string;
    growthRate: string;
    reachRate: string;
    saveRate: string;
  };
};

export function Microtrends() {
  const [selectedNiche, setSelectedNiche] = useState('all');
  const [selectedTrend, setSelectedTrend] = useState(microtrends[0]);
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('weekly');
  const [selectedCreator, setSelectedCreator] = useState<CreatorProfile | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreatorClick = (creator: CreatorProfile) => {
    setSelectedCreator(creator);
    setIsDialogOpen(true);
  };

  const filteredTrends = selectedNiche === 'all' 
    ? microtrends 
    : microtrends.filter(t => t.niche.toLowerCase().includes(selectedNiche.toLowerCase()));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-sm text-blue-600 mb-1">#microtrends</p>
        <h2 className="text-slate-900 mb-1">Niche Microtrend Analysis</h2>
        <p className="text-slate-600">
          Discover emerging trends, track originators, and identify top performers in specific niches
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Select value={selectedNiche} onValueChange={setSelectedNiche}>
          <SelectTrigger className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Niches</SelectItem>
            <SelectItem value="beauty">Beauty & Skincare</SelectItem>
            <SelectItem value="fashion">Fashion & Lifestyle</SelectItem>
            <SelectItem value="wellness">Health & Wellness</SelectItem>
            <SelectItem value="tech">Technology</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Trending Topics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredTrends.map((trend) => (
          <Card
            key={trend.id}
            className={`border-slate-200 cursor-pointer transition-all hover:shadow-lg ${
              selectedTrend.id === trend.id ? 'border-blue-500 shadow-md' : ''
            }`}
            onClick={() => setSelectedTrend(trend)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{trend.name}</CardTitle>
                  <CardDescription className="mt-1">{trend.niche}</CardDescription>
                </div>
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span>Trend Score</span>
                  <span className="text-slate-900">{trend.trendScore}/100</span>
                </div>
                <Progress value={trend.trendScore} className="h-2" />
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                {trend.growth} growth
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Trend Analysis */}
      <Card className="border-slate-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{selectedTrend.name}</CardTitle>
              <CardDescription>Comprehensive trend analysis and key contributors</CardDescription>
            </div>
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              Trending
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Trend Originators */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-slate-900">Trend Originators</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedTrend.originators.map((originator, idx) => (
                <Card key={idx} className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                        <ImageWithFallback
                          src={originator.image}
                          alt={originator.realName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-slate-900">{originator.name}</p>
                          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 text-xs">
                            Originator
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{originator.realName}</p>
                        <p className="text-xs text-slate-500 mt-2">{originator.contribution}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Users className="w-3 h-3 text-slate-400" />
                          <span className="text-xs text-slate-600">{originator.followers} followers</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Creators Tabs */}
          <div>
            <h3 className="text-slate-900 mb-4">Top Creators in This Niche</h3>
            <Tabs defaultValue="engagement" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3">
                <TabsTrigger value="engagement">Most Engaged Audience</TabsTrigger>
                <TabsTrigger value="consistency">Consistency</TabsTrigger>
                <TabsTrigger value="daily">Daily/Weekly Stats</TabsTrigger>
              </TabsList>

              <TabsContent value="engagement" className="space-y-3 mt-4">
                <p className="text-sm text-slate-600 mb-3">
                  Creators with the highest audience engagement rates in this trend
                </p>
                {selectedTrend.topCreators.engagement.map((creator, idx) => (
                  <Card 
                    key={idx} 
                    className="border-slate-200 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all"
                    onClick={() => handleCreatorClick(creator)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-slate-400">#{idx + 1}</div>
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                          <ImageWithFallback
                            src={creator.image}
                            alt={creator.handle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-900">{creator.name}</p>
                          <p className="text-xs text-slate-600">{creator.handle}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg text-green-600">{creator.engagementRate}</div>
                          <p className="text-xs text-slate-500">Engagement Rate</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg text-slate-900">{creator.avgLikes}</div>
                          <p className="text-xs text-slate-500">Avg. Likes</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="consistency" className="space-y-3 mt-4">
                <p className="text-sm text-slate-600 mb-3">
                  Creators with the most consistent posting schedules
                </p>
                {selectedTrend.topCreators.consistency.map((creator, idx) => (
                  <Card 
                    key={idx} 
                    className="border-slate-200 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all"
                    onClick={() => handleCreatorClick(creator)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-slate-400">#{idx + 1}</div>
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                          <ImageWithFallback
                            src={creator.image}
                            alt={creator.handle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-900">{creator.name}</p>
                          <p className="text-xs text-slate-600">{creator.handle}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg text-blue-600">{creator.postsPerWeek}</div>
                          <p className="text-xs text-slate-500">Posts/Week</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg text-slate-900">{creator.consistency}</div>
                          <p className="text-xs text-slate-500">Consistency Score</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="daily" className="space-y-3 mt-4">
                <p className="text-sm text-slate-600 mb-3">
                  Performance breakdown by posting frequency
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Top Daily Performers</CardTitle>
                      <CardDescription>Creators posting daily content</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {selectedTrend.topCreators.consistency.map((creator, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                              <ImageWithFallback
                                src={creator.image}
                                alt={creator.handle}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm text-slate-900">{creator.name}</p>
                              <p className="text-xs text-slate-500">Daily posts</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                              7 posts/week
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Top Weekly Performers</CardTitle>
                      <CardDescription>Creators with strategic weekly posting</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {selectedTrend.topCreators.engagement.map((creator, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
                              <ImageWithFallback
                                src={creator.image}
                                alt={creator.handle}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm text-slate-900">{creator.name}</p>
                              <p className="text-xs text-slate-500">Strategic posting</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                              3-4 posts/week
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Optimal Posting Schedule */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <CardTitle>Optimal Posting Schedule</CardTitle>
              </div>
              <CardDescription>Based on analysis of top-performing content in this trend</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-slate-600">Peak Days</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrend.peakDays.map((day) => (
                      <Badge key={day} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-slate-600">Peak Times</span>
                  </div>
                  <div className="text-lg text-slate-900">{selectedTrend.peakTimes}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Creator KPI Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-4">
              {selectedCreator && (
                <>
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                    <ImageWithFallback
                      src={selectedCreator.image}
                      alt={selectedCreator.handle}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xl text-slate-900">{selectedCreator.name}</div>
                    <div className="text-sm text-slate-600 font-normal">{selectedCreator.handle}</div>
                  </div>
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              Detailed KPI metrics and performance analytics
            </DialogDescription>
          </DialogHeader>

          {selectedCreator && (
            <div className="space-y-6 mt-6">
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <p className="text-xs text-slate-600">Followers</p>
                    </div>
                    <div className="text-2xl text-slate-900">{selectedCreator.kpis.followers}</div>
                    <p className="text-xs text-green-600 mt-1">{selectedCreator.kpis.growthRate} growth</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-gradient-to-br from-purple-50 to-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye className="w-4 h-4 text-purple-600" />
                      <p className="text-xs text-slate-600">Avg. Views</p>
                    </div>
                    <div className="text-2xl text-slate-900">{selectedCreator.kpis.avgViews}</div>
                    <p className="text-xs text-slate-500 mt-1">per post</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-gradient-to-br from-green-50 to-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-green-600" />
                      <p className="text-xs text-slate-600">Total Posts</p>
                    </div>
                    <div className="text-2xl text-slate-900">{selectedCreator.kpis.totalPosts}</div>
                    <p className="text-xs text-slate-500 mt-1">all time</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-gradient-to-br from-orange-50 to-white">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-orange-600" />
                      <p className="text-xs text-slate-600">Reach Rate</p>
                    </div>
                    <div className="text-2xl text-slate-900">{selectedCreator.kpis.reachRate}</div>
                    <p className="text-xs text-slate-500 mt-1">audience reach</p>
                  </CardContent>
                </Card>
              </div>

              {/* Engagement Metrics */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Breakdown</CardTitle>
                  <CardDescription>Average performance per post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-900">Average Likes</p>
                        <p className="text-xs text-slate-500">Per post engagement</p>
                      </div>
                    </div>
                    <div className="text-xl text-slate-900">{selectedCreator.avgLikes || selectedCreator.kpis.avgViews}</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-900">Average Comments</p>
                        <p className="text-xs text-slate-500">Community interaction</p>
                      </div>
                    </div>
                    <div className="text-xl text-slate-900">{selectedCreator.kpis.avgComments}</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Share2 className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-900">Average Shares</p>
                        <p className="text-xs text-slate-500">Viral potential</p>
                      </div>
                    </div>
                    <div className="text-xl text-slate-900">{selectedCreator.kpis.avgShares}</div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-900">Save Rate</p>
                        <p className="text-xs text-slate-500">Content value indicator</p>
                      </div>
                    </div>
                    <div className="text-xl text-slate-900">{selectedCreator.kpis.saveRate}</div>
                  </div>

                  {selectedCreator.engagementRate && (
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-900 font-medium">Engagement Rate</p>
                          <p className="text-xs text-slate-500">Overall performance</p>
                        </div>
                      </div>
                      <div className="text-2xl text-green-600 font-semibold">{selectedCreator.engagementRate}</div>
                    </div>
                  )}

                  {selectedCreator.consistency && (
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-900 font-medium">Posting Consistency</p>
                          <p className="text-xs text-slate-500">{selectedCreator.postsPerWeek} posts per week</p>
                        </div>
                      </div>
                      <div className="text-2xl text-blue-600 font-semibold">{selectedCreator.consistency}</div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Performance Insights */}
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-lg">Performance Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mt-1">High</Badge>
                    <p className="text-sm text-slate-700">Strong audience engagement with consistent growth trajectory</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mt-1">Trend</Badge>
                    <p className="text-sm text-slate-700">Content resonates well within the niche microtrend</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mt-1">Quality</Badge>
                    <p className="text-sm text-slate-700">High save rate indicates valuable, re-watchable content</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
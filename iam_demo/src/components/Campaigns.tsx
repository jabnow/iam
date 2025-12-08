import { useState, FormEvent } from 'react';
import { Calendar, Users, Clock, MessageSquare, Send, CheckCircle, AlertCircle, PlayCircle, ThumbsUp, ThumbsDown, Download, Eye, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Campaign data with hierarchical tasks
const campaigns = [
  {
    id: 1,
    name: 'Summer Beauty Launch',
    brand: 'GlowSkin Co.',
    status: 'active',
    startDate: '2025-12-01',
    endDate: '2025-12-31',
    progress: 65,
    budget: '$50,000',
    influencers: 12,
    contentPieces: 24,
    engagement: '287K',
    tasks: [
      {
        id: '1.1',
        name: 'Content Creation Phase',
        type: 'phase',
        startDate: '2025-12-01',
        endDate: '2025-12-15',
        progress: 80,
        color: 'from-green-400 to-green-500',
        subtasks: [
          {
            id: '1.1.1',
            name: 'Product Review Videos',
            startDate: '2025-12-01',
            endDate: '2025-12-08',
            progress: 100,
            color: 'from-blue-400 to-blue-500',
            assignedInfluencers: [1, 2],
            contentIds: [1, 2],
          },
          {
            id: '1.1.2',
            name: 'Tutorial Content',
            startDate: '2025-12-05',
            endDate: '2025-12-12',
            progress: 70,
            color: 'from-cyan-400 to-cyan-500',
            assignedInfluencers: [1],
            contentIds: [1],
          },
          {
            id: '1.1.3',
            name: 'Before/After Posts',
            startDate: '2025-12-08',
            endDate: '2025-12-15',
            progress: 60,
            color: 'from-teal-400 to-teal-500',
            assignedInfluencers: [2, 3],
            contentIds: [3],
          },
        ],
      },
      {
        id: '1.2',
        name: 'Publishing & Promotion',
        type: 'phase',
        startDate: '2025-12-16',
        endDate: '2025-12-31',
        progress: 40,
        color: 'from-purple-400 to-purple-500',
        subtasks: [
          {
            id: '1.2.1',
            name: 'Social Media Posts',
            startDate: '2025-12-16',
            endDate: '2025-12-23',
            progress: 50,
            color: 'from-pink-400 to-pink-500',
            assignedInfluencers: [1, 2, 3],
            contentIds: [2],
          },
          {
            id: '1.2.2',
            name: 'Story Campaigns',
            startDate: '2025-12-20',
            endDate: '2025-12-31',
            progress: 30,
            color: 'from-rose-400 to-rose-500',
            assignedInfluencers: [3],
            contentIds: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Holiday Fashion Campaign',
    brand: 'StyleHub',
    status: 'active',
    startDate: '2025-12-05',
    endDate: '2026-01-15',
    progress: 40,
    budget: '$75,000',
    influencers: 8,
    contentPieces: 18,
    engagement: '156K',
    tasks: [
      {
        id: '2.1',
        name: 'Lookbook Creation',
        type: 'phase',
        startDate: '2025-12-05',
        endDate: '2025-12-20',
        progress: 60,
        color: 'from-green-400 to-green-500',
        subtasks: [
          {
            id: '2.1.1',
            name: 'Outfit Videos',
            startDate: '2025-12-05',
            endDate: '2025-12-15',
            progress: 80,
            color: 'from-blue-400 to-blue-500',
            assignedInfluencers: [4],
            contentIds: [4],
          },
          {
            id: '2.1.2',
            name: 'Style Guide Posts',
            startDate: '2025-12-10',
            endDate: '2025-12-20',
            progress: 40,
            color: 'from-indigo-400 to-indigo-500',
            assignedInfluencers: [4],
            contentIds: [],
          },
        ],
      },
    ],
  },
];

const influencerAssignments = [
  {
    id: 1,
    campaignId: 1,
    name: '@emilyweirdo',
    realName: 'Emily Weiss',
    avatar: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzE3MzA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    followers: '847K',
    deliverables: 3,
    submitted: 2,
    approved: 1,
    status: 'active',
  },
  {
    id: 2,
    campaignId: 1,
    name: '@skinbyava',
    realName: 'Ava Martinez',
    avatar: 'https://images.unsplash.com/photo-1696907572729-1a91e89a7cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MzI1MjM5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    followers: '523K',
    deliverables: 2,
    submitted: 2,
    approved: 2,
    status: 'completed',
  },
  {
    id: 3,
    campaignId: 1,
    name: '@beautyguru',
    realName: 'Sophie Kim',
    avatar: 'https://images.unsplash.com/photo-1704054006064-2c5b922e7a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTc0NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    followers: '412K',
    deliverables: 2,
    submitted: 0,
    approved: 0,
    status: 'pending',
  },
  {
    id: 4,
    campaignId: 2,
    name: '@fashionforward',
    realName: 'Chloe Adams',
    avatar: 'https://images.unsplash.com/photo-1558975285-193b2c315c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzIyNjI2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    followers: '678K',
    deliverables: 3,
    submitted: 1,
    approved: 1,
    status: 'active',
  },
];

const contentSubmissions = [
  {
    id: 1,
    influencerId: 1,
    campaignId: 1,
    type: 'video',
    title: 'GlowSkin Morning Routine',
    thumbnail: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3R8ZW58MHx8fHwxNzMzNjI0MDAwfDA&ixlib=rb-4.1.0&q=80&w=400',
    submittedDate: '2025-12-08',
    status: 'pending',
    views: '0',
    engagement: '0',
  },
  {
    id: 2,
    influencerId: 1,
    campaignId: 1,
    type: 'reel',
    title: 'Quick Glow-Up Tips',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0fGVufDB8fHx8MTczMzYyNDAwMHww&ixlib=rb-4.1.0&q=80&w=400',
    submittedDate: '2025-12-06',
    status: 'approved',
    views: '45.2K',
    engagement: '3.8K',
  },
  {
    id: 3,
    influencerId: 2,
    campaignId: 1,
    type: 'post',
    title: 'Before & After Results',
    thumbnail: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxza2luY2FyZSUyMHByb2R1Y3R8ZW58MHx8fHwxNzMzNjI0MDAwfDA&ixlib=rb-4.1.0&q=80&w=400',
    submittedDate: '2025-12-07',
    status: 'revision',
    views: '12.1K',
    engagement: '890',
  },
  {
    id: 4,
    influencerId: 4,
    campaignId: 2,
    type: 'video',
    title: 'Holiday Outfit Ideas',
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MHx8fHwxNzMzNjI0MDAwfDA&ixlib=rb-4.1.0&q=80&w=400',
    submittedDate: '2025-12-08',
    status: 'pending',
    views: '0',
    engagement: '0',
  },
];

const chatMessages = [
  {
    id: 1,
    contentId: 1,
    sender: 'Brand Manager',
    message: 'Great work on this! Can you add more emphasis on the product benefits in the first 10 seconds?',
    timestamp: '10:30 AM',
    isUser: true,
  },
  {
    id: 2,
    contentId: 1,
    sender: '@emilyweirdo',
    message: 'Sure! I\'ll re-edit and upload a new version by tomorrow.',
    timestamp: '10:45 AM',
    isUser: false,
  },
  {
    id: 3,
    contentId: 3,
    sender: 'Brand Manager',
    message: 'The lighting looks a bit dark. Can you brighten it up? Also, add our hashtag #GlowWithUs',
    timestamp: '2:15 PM',
    isUser: true,
  },
];

export function Campaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState(campaigns[0]);
  const [selectedTask, setSelectedTask] = useState<any>(campaigns[0].tasks[0].subtasks[0]);
  const [selectedContent, setSelectedContent] = useState(contentSubmissions[0]);
  const [chatMessage, setChatMessage] = useState('');
  const [expandedTasks, setExpandedTasks] = useState<string[]>(['1.1', '1.2', '2.1']);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      toast.success('Message sent to influencer');
      setChatMessage('');
    }
  };

  const handleApproveContent = (contentId: number) => {
    toast.success('Content approved!');
  };

  const handleRequestRevision = (contentId: number) => {
    toast.info('Revision requested');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'planning':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
      case 'completed':
        return 'bg-slate-100 text-slate-700 hover:bg-slate-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
      case 'approved':
        return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'revision':
        return 'bg-orange-100 text-orange-700 hover:bg-orange-200';
      default:
        return 'bg-slate-100 text-slate-700 hover:bg-slate-200';
    }
  };

  const toggleTaskExpand = (taskId: string) => {
    setExpandedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };

  const filteredInfluencers = influencerAssignments.filter(
    (inf) => inf.campaignId === selectedCampaign.id
  );

  // Filter content based on selected task
  const filteredContent = selectedTask?.contentIds
    ? contentSubmissions.filter((content) => selectedTask.contentIds.includes(content.id))
    : contentSubmissions.filter((content) => content.campaignId === selectedCampaign.id);

  const selectedChatMessages = chatMessages.filter(
    (msg) => msg.contentId === selectedContent.id
  );

  const getInfluencerById = (id: number) => {
    return influencerAssignments.find((inf) => inf.id === id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900 mb-1">Campaign Management</h2>
          <p className="text-slate-600">Monitor campaigns, manage influencers, and review content</p>
        </div>
        <Select
          value={selectedCampaign.id.toString()}
          onValueChange={(value) => {
            const campaign = campaigns.find((c) => c.id === parseInt(value));
            if (campaign) {
              setSelectedCampaign(campaign);
              setSelectedTask(campaign.tasks[0]?.subtasks[0]);
            }
          }}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {campaigns.map((campaign) => (
              <SelectItem key={campaign.id} value={campaign.id.toString()}>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(campaign.status)} variant="outline">
                    {campaign.status}
                  </Badge>
                  <span>{campaign.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>Active Campaigns</CardDescription>
              <PlayCircle className="w-4 h-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">
              {campaigns.filter((c) => c.status === 'active').length}
            </div>
            <p className="text-xs text-slate-500 mt-1">of {campaigns.length} total</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>Total Influencers</CardDescription>
              <Users className="w-4 h-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{influencerAssignments.length}</div>
            <p className="text-xs text-green-600 mt-1">Active partnerships</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-gradient-to-br from-purple-50 to-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>Pending Review</CardDescription>
              <Clock className="w-4 h-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">
              {contentSubmissions.filter((c) => c.status === 'pending').length}
            </div>
            <p className="text-xs text-slate-500 mt-1">Content pieces</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-gradient-to-br from-orange-50 to-white">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardDescription>Total Engagement</CardDescription>
              <MessageSquare className="w-4 h-4 text-orange-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">888K</div>
            <p className="text-xs text-green-600 mt-1">+24% this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Gantt Chart - Campaign Timeline */}
      <Card className="border-slate-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <CardTitle>{selectedCampaign.name} - Timeline</CardTitle>
          </div>
          <CardDescription>Detailed task breakdown with assignments</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Timeline Header */}
            <div className="flex gap-2 mb-3 border-b-2 border-slate-200 pb-2">
              <div className="w-64 text-sm font-semibold text-slate-700">Task Name</div>
              <div className="flex-1 flex">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <div
                    key={day}
                    className={`flex-1 text-xs text-center ${
                      day % 7 === 0 || day % 7 === 6 ? 'text-blue-600 font-semibold' : 'text-slate-500'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Task Rows */}
            <div className="space-y-1">
              {selectedCampaign.tasks.map((task) => {
                const isExpanded = expandedTasks.includes(task.id);
                const taskStartDay = new Date(task.startDate).getDate();
                const taskEndDay = new Date(task.endDate).getDate();
                
                return (
                  <div key={task.id}>
                    {/* Main Phase Row */}
                    <div className="flex gap-2 items-center py-2 hover:bg-slate-50 rounded">
                      <div className="w-64 flex items-center gap-2">
                        <button
                          onClick={() => toggleTaskExpand(task.id)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-slate-200 rounded"
                        >
                          <span className="text-sm">{isExpanded ? '▼' : '▶'}</span>
                        </button>
                        <span className="text-sm font-semibold text-slate-900">{task.name}</span>
                      </div>
                      
                      <div className="flex-1 relative h-10">
                        {/* Background with grid */}
                        <div className="absolute inset-0 flex border border-slate-200 rounded">
                          {Array.from({ length: 31 }).map((_, i) => (
                            <div key={i} className="flex-1 border-r border-slate-100 last:border-r-0" />
                          ))}
                        </div>
                        
                        {/* Phase Bar */}
                        <div
                          className="absolute top-2 h-6 rounded-md bg-green-400 opacity-50 flex items-center justify-center"
                          style={{
                            left: `${((taskStartDay - 1) / 31) * 100}%`,
                            width: `${((taskEndDay - taskStartDay + 1) / 31) * 100}%`,
                          }}
                        >
                          <span className="text-xs font-medium text-white">{task.progress}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Subtask Rows */}
                    {isExpanded && task.subtasks.map((subtask) => {
                      const subtaskStartDay = new Date(subtask.startDate).getDate();
                      const subtaskEndDay = new Date(subtask.endDate).getDate();
                      const assignedInfluencers = subtask.assignedInfluencers.map(getInfluencerById).filter(Boolean);
                      
                      return (
                        <div
                          key={subtask.id}
                          className={`flex gap-2 items-center py-2 ml-8 rounded cursor-pointer ${
                            selectedTask?.id === subtask.id ? 'bg-blue-50' : 'hover:bg-slate-50'
                          }`}
                          onClick={() => setSelectedTask(subtask)}
                        >
                          <div className="w-64 pl-4">
                            <span className="text-sm text-slate-700">{subtask.name}</span>
                          </div>
                          
                          <div className="flex-1 relative h-10">
                            {/* Background with grid */}
                            <div className="absolute inset-0 flex border border-slate-200 rounded">
                              {Array.from({ length: 31 }).map((_, i) => (
                                <div key={i} className="flex-1 border-r border-slate-100 last:border-r-0" />
                              ))}
                            </div>
                            
                            {/* Task Bar */}
                            <div
                              className="absolute top-1.5 h-7 rounded-lg shadow-md flex items-center justify-center group hover:shadow-lg transition-all"
                              style={{
                                left: `${((subtaskStartDay - 1) / 31) * 100}%`,
                                width: `${((subtaskEndDay - subtaskStartDay + 1) / 31) * 100}%`,
                                backgroundColor: subtask.color.includes('blue') ? '#3b82f6' : 
                                               subtask.color.includes('cyan') ? '#06b6d4' :
                                               subtask.color.includes('teal') ? '#14b8a6' :
                                               subtask.color.includes('pink') ? '#ec4899' :
                                               subtask.color.includes('rose') ? '#f43f5e' :
                                               subtask.color.includes('indigo') ? '#6366f1' : '#3b82f6',
                              }}
                            >
                              {/* Progress overlay */}
                              <div
                                className="absolute left-0 top-0 h-full bg-white/20 rounded-l-lg"
                                style={{ width: `${subtask.progress}%` }}
                              />
                              
                              <span className="relative text-xs font-medium text-white z-10">
                                {subtask.progress}%
                              </span>
                              
                              {/* Tooltip */}
                              <div className="absolute -top-14 left-1/2 -translate-x-1/2 hidden group-hover:block bg-slate-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg z-20">
                                <div className="font-medium">{subtask.name}</div>
                                <div className="text-slate-300 text-xs">
                                  {new Date(subtask.startDate).toLocaleDateString()} - {new Date(subtask.endDate).toLocaleDateString()}
                                </div>
                                <div className="text-slate-300 text-xs">
                                  {assignedInfluencers.length} influencer{assignedInfluencers.length !== 1 ? 's' : ''}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign Info & Influencers */}
        <div className="lg:col-span-1 space-y-6">
          {/* Selected Task Details */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">{selectedTask?.name || 'Select a task'}</CardTitle>
              <CardDescription>{selectedCampaign.brand} • {selectedCampaign.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedTask && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Task ID</span>
                    <Badge variant="outline">{selectedTask.id}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Timeline</span>
                    <span className="text-sm text-slate-900 font-medium">
                      {new Date(selectedTask.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} -{' '}
                      {new Date(selectedTask.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Progress</span>
                    <span className="text-sm text-slate-900 font-medium">{selectedTask.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${selectedTask.color} h-2 rounded-full transition-all`}
                      style={{ width: `${selectedTask.progress}%` }}
                    />
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-sm text-slate-600">Assigned Influencers</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedTask.assignedInfluencers?.map((infId: number) => {
                        const inf = getInfluencerById(infId);
                        return inf ? (
                          <div key={inf.id} className="flex items-center gap-2 bg-slate-50 rounded-lg p-2">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                              <ImageWithFallback
                                src={inf.avatar}
                                alt={inf.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-xs text-slate-900">{inf.name}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-sm text-slate-600">Content Pieces</span>
                    <div className="text-lg text-slate-900 font-semibold mt-1">
                      {selectedTask.contentIds?.length || 0}
                    </div>
                    <p className="text-xs text-slate-500">submissions linked to this task</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Assigned Influencers */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg">Campaign Influencers</CardTitle>
              <CardDescription>
                {selectedTask?.assignedInfluencers?.length || 0} assigned to selected task
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-3">
                  {filteredInfluencers.map((influencer) => (
                    <div
                      key={influencer.id}
                      className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                        <ImageWithFallback
                          src={influencer.avatar}
                          alt={influencer.realName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-slate-900 font-medium">{influencer.name}</p>
                          <Badge className={`text-xs ${getStatusColor(influencer.status)}`}>
                            {influencer.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{influencer.realName}</p>
                        <p className="text-xs text-slate-500 mt-1">{influencer.followers} followers</p>
                        <div className="flex items-center gap-3 mt-2 text-xs">
                          <span className="text-slate-600">
                            <CheckCircle className="w-3 h-3 inline mr-1 text-green-600" />
                            {influencer.approved}/{influencer.deliverables}
                          </span>
                          <span className="text-slate-600">
                            <Clock className="w-3 h-3 inline mr-1 text-blue-600" />
                            {influencer.submitted - influencer.approved} pending
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Content Review & Chat */}
        <div className="lg:col-span-2">
          <Card className="border-slate-200 h-full">
            <Tabs defaultValue="review" className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <CardTitle className="text-lg">Task Content Review</CardTitle>
                    <CardDescription>
                      {selectedTask?.name || 'Select a task'} • {filteredContent.length} submissions
                    </CardDescription>
                  </div>
                </div>
                <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2">
                  <TabsTrigger value="review">Content Review</TabsTrigger>
                  <TabsTrigger value="chat">Chat & Feedback</TabsTrigger>
                </TabsList>
              </CardHeader>

              <TabsContent value="review" className="flex-1 mt-0">
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredContent.map((content) => {
                      const influencer = influencerAssignments.find((inf) => inf.id === content.influencerId);
                      return (
                        <Card
                          key={content.id}
                          className={`border-2 cursor-pointer transition-all hover:shadow-md ${
                            selectedContent.id === content.id ? 'border-blue-500' : 'border-slate-200'
                          }`}
                          onClick={() => setSelectedContent(content)}
                        >
                          <CardContent className="p-0">
                            <div className="relative">
                              <ImageWithFallback
                                src={content.thumbnail}
                                alt={content.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                              />
                              <Badge
                                className={`absolute top-2 right-2 ${getStatusColor(content.status)}`}
                              >
                                {content.status}
                              </Badge>
                            </div>
                            <div className="p-4 space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                                  <ImageWithFallback
                                    src={influencer?.avatar || ''}
                                    alt={influencer?.name || ''}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="text-xs text-slate-600">{influencer?.name}</span>
                              </div>
                              <h4 className="text-sm text-slate-900 font-medium">{content.title}</h4>
                              <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  {content.views}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="w-3 h-3" />
                                  {content.engagement}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500">
                                Submitted {new Date(content.submittedDate).toLocaleDateString()}
                              </p>

                              {content.status === 'pending' && (
                                <div className="flex gap-2 mt-3">
                                  <Button
                                    size="sm"
                                    className="flex-1 bg-green-600 hover:bg-green-700"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleApproveContent(content.id);
                                    }}
                                  >
                                    <ThumbsUp className="w-3 h-3 mr-1" />
                                    Approve
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="flex-1"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleRequestRevision(content.id);
                                    }}
                                  >
                                    <ThumbsDown className="w-3 h-3 mr-1" />
                                    Revise
                                  </Button>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </TabsContent>

              <TabsContent value="chat" className="flex-1 mt-0 flex flex-col">
                <CardContent className="flex-1 flex flex-col">
                  {/* Selected Content Header */}
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg mb-4">
                    <ImageWithFallback
                      src={selectedContent.thumbnail}
                      alt={selectedContent.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm text-slate-900 font-medium">{selectedContent.title}</h4>
                      <p className="text-xs text-slate-600">
                        {influencerAssignments.find((inf) => inf.id === selectedContent.influencerId)?.name}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>

                  {/* Chat Messages */}
                  <ScrollArea className="flex-1 pr-4 mb-4">
                    <div className="space-y-4">
                      {selectedChatMessages.length > 0 ? (
                        selectedChatMessages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[70%] rounded-lg p-3 ${
                                msg.isUser
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 text-slate-900'
                              }`}
                            >
                              <p className="text-xs font-medium mb-1">{msg.sender}</p>
                              <p className="text-sm">{msg.message}</p>
                              <p
                                className={`text-xs mt-1 ${
                                  msg.isUser ? 'text-blue-100' : 'text-slate-500'
                                }`}
                              >
                                {msg.timestamp}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <MessageSquare className="w-12 h-12 mx-auto text-slate-300 mb-2" />
                          <p className="text-sm text-slate-500">No messages yet</p>
                          <p className="text-xs text-slate-400 mt-1">
                            Start a conversation to provide feedback
                          </p>
                        </div>
                      )}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Textarea
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      placeholder="Type your feedback here..."
                      className="flex-1 min-h-[60px] max-h-[120px]"
                    />
                    <Button type="submit" className="self-end">
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}

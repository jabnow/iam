import { useState } from 'react';
import { Plus, Trash2, Instagram, Youtube, Twitter, Facebook, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { toast } from 'sonner@2.0.3';

const engagementData = [
  { date: 'Nov 25', instagram: 4200, tiktok: 3800, youtube: 2100 },
  { date: 'Nov 26', instagram: 4800, tiktok: 4200, youtube: 2400 },
  { date: 'Nov 27', instagram: 5200, tiktok: 4600, youtube: 2800 },
  { date: 'Nov 28', instagram: 4900, tiktok: 4400, youtube: 2600 },
  { date: 'Nov 29', instagram: 5600, tiktok: 5100, youtube: 3200 },
  { date: 'Nov 30', instagram: 6100, tiktok: 5800, youtube: 3800 },
  { date: 'Dec 1', instagram: 6800, tiktok: 6400, youtube: 4200 },
];

const conversionData = [
  { date: 'Nov 25', sales: 1200, conversion: 3.2 },
  { date: 'Nov 26', sales: 1450, conversion: 3.5 },
  { date: 'Nov 27', sales: 1680, conversion: 3.8 },
  { date: 'Nov 28', sales: 1520, conversion: 3.4 },
  { date: 'Nov 29', sales: 1890, conversion: 4.1 },
  { date: 'Nov 30', sales: 2150, conversion: 4.5 },
  { date: 'Dec 1', sales: 2420, conversion: 4.8 },
];

export function Settings() {
  const [socialAccounts, setSocialAccounts] = useState([
    { id: 1, platform: 'Instagram', handle: '@beautybrands', status: 'connected' },
    { id: 2, platform: 'TikTok', handle: '@beautybrands', status: 'connected' },
  ]);

  const [ecommerceStores, setEcommerceStores] = useState([
    { id: 1, platform: 'Shopify', storeName: 'beautybrands.com', status: 'connected' },
  ]);

  const [newSocial, setNewSocial] = useState({ platform: '', handle: '' });
  const [newStore, setNewStore] = useState({ platform: '', storeName: '' });

  const addSocialAccount = () => {
    if (newSocial.platform && newSocial.handle) {
      setSocialAccounts([
        ...socialAccounts,
        {
          id: Date.now(),
          platform: newSocial.platform,
          handle: newSocial.handle,
          status: 'connected',
        },
      ]);
      setNewSocial({ platform: '', handle: '' });
      toast.success('Social media account connected!');
    }
  };

  const addEcommerceStore = () => {
    if (newStore.platform && newStore.storeName) {
      setEcommerceStores([
        ...ecommerceStores,
        {
          id: Date.now(),
          platform: newStore.platform,
          storeName: newStore.storeName,
          status: 'connected',
        },
      ]);
      setNewStore({ platform: '', storeName: '' });
      toast.success('E-commerce store connected!');
    }
  };

  const removeSocialAccount = (id: number) => {
    setSocialAccounts(socialAccounts.filter((acc) => acc.id !== id));
    toast.success('Account disconnected');
  };

  const removeStore = (id: number) => {
    setEcommerceStores(ecommerceStores.filter((store) => store.id !== id));
    toast.success('Store disconnected');
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'tiktok':
        return <TrendingUp className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'twitter':
      case 'x':
        return <Twitter className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      default:
        return <ShoppingBag className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900 mb-1">Settings</h2>
        <p className="text-slate-600">Manage your connected accounts and track performance</p>
      </div>

      {/* Social Media Accounts */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Connected Social Media Accounts</CardTitle>
          <CardDescription>
            Link your social media accounts to track engagement metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Connected Accounts List */}
          <div className="space-y-2">
            {socialAccounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {getPlatformIcon(account.platform)}
                  </div>
                  <div>
                    <p className="text-sm text-slate-900">{account.platform}</p>
                    <p className="text-xs text-slate-500">{account.handle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                    Connected
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSocialAccount(account.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Account */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 space-y-3">
            <h4 className="text-sm text-slate-900">Add Social Media Account</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label htmlFor="socialPlatform" className="text-xs">Platform</Label>
                <Input
                  id="socialPlatform"
                  placeholder="Instagram, TikTok, etc."
                  value={newSocial.platform}
                  onChange={(e) => setNewSocial({ ...newSocial, platform: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="socialHandle" className="text-xs">Handle</Label>
                <Input
                  id="socialHandle"
                  placeholder="@yourusername"
                  value={newSocial.handle}
                  onChange={(e) => setNewSocial({ ...newSocial, handle: e.target.value })}
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={addSocialAccount}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* E-commerce Stores */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>E-commerce Store Accounts</CardTitle>
          <CardDescription>
            Link your online stores to track sales conversions from influencer campaigns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Connected Stores List */}
          <div className="space-y-2">
            {ecommerceStores.map((store) => (
              <div
                key={store.id}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-900">{store.platform}</p>
                    <p className="text-xs text-slate-500">{store.storeName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                    Connected
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeStore(store.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Store */}
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 space-y-3">
            <h4 className="text-sm text-slate-900">Add E-commerce Store</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1">
                <Label htmlFor="storePlatform" className="text-xs">Platform</Label>
                <Input
                  id="storePlatform"
                  placeholder="Shopify, WooCommerce, etc."
                  value={newStore.platform}
                  onChange={(e) => setNewStore({ ...newStore, platform: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="storeName" className="text-xs">Store URL</Label>
                <Input
                  id="storeName"
                  placeholder="yourstore.com"
                  value={newStore.storeName}
                  onChange={(e) => setNewStore({ ...newStore, storeName: e.target.value })}
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={addEcommerceStore}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Engagement Analytics */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Social Media Engagement Trends</CardTitle>
          <CardDescription>Track engagement across your connected platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line
                type="monotone"
                dataKey="instagram"
                name="Instagram"
                stroke="#e4405f"
                strokeWidth={2}
                dot={{ fill: '#e4405f', r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="tiktok"
                name="TikTok"
                stroke="#000000"
                strokeWidth={2}
                dot={{ fill: '#000000', r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="youtube"
                name="YouTube"
                stroke="#ff0000"
                strokeWidth={2}
                dot={{ fill: '#ff0000', r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Conversion Analytics */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle>Sales & Conversion Tracking</CardTitle>
          <CardDescription>Monitor sales generated from influencer campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="border-slate-200 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Total Sales</span>
                  <DollarSign className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-2xl text-slate-900">$12,310</div>
                <Badge className="mt-2 bg-green-100 text-green-700 hover:bg-green-200 text-xs">
                  +23% vs last week
                </Badge>
              </CardContent>
            </Card>
            <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Avg. Conversion</span>
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-2xl text-slate-900">4.1%</div>
                <Badge className="mt-2 bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs">
                  +0.8% vs last week
                </Badge>
              </CardContent>
            </Card>
            <Card className="border-slate-200 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">ROAS</span>
                  <DollarSign className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-2xl text-slate-900">4.2x</div>
                <Badge className="mt-2 bg-purple-100 text-purple-700 hover:bg-purple-200 text-xs">
                  Above target
                </Badge>
              </CardContent>
            </Card>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="sales" name="Sales ($)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState } from 'react';
import { LayoutDashboard, TrendingUp, Zap, LineChart, Settings as SettingsIcon, CreditCard, ChevronDown, User, LogOut } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { Community } from './components/Community';
import { Simulator } from './components/Simulator';
import { MarketIntelligence } from './components/MarketIntelligence';
import { Homepage } from './components/Homepage';
import { SignIn } from './components/SignIn';
import { Onboarding } from './components/Onboarding';
import { Settings } from './components/Settings';
import { Pricing } from './components/Pricing';
import { Toaster } from './components/ui/sonner';
import { Button } from './components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';

export default function App() {
  const [appState, setAppState] = useState<'homepage' | 'signin' | 'onboarding' | 'pricing' | 'app'>('homepage');
  const [activeTab, setActiveTab] = useState('simulator');
  const [simulatorData, setSimulatorData] = useState<any>(null);

  const handleViewRecommendations = (data: any) => {
    setSimulatorData(data);
  };

  const handleSignIn = () => {
    setAppState('signin');
  };

  const handleSignInComplete = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = () => {
    setAppState('pricing');
  };

  const handlePricingComplete = () => {
    setAppState('app');
    setActiveTab('simulator');
  };

  const handleBackToHomepage = () => {
    setAppState('homepage');
  };

  // Show homepage
  if (appState === 'homepage') {
    return (
      <>
        <Homepage onSignIn={handleSignIn} />
        <Toaster />
      </>
    );
  }

  // Show sign in
  if (appState === 'signin') {
    return (
      <>
        <SignIn onSignIn={handleSignInComplete} onBack={handleBackToHomepage} />
        <Toaster />
      </>
    );
  }

  // Show onboarding
  if (appState === 'onboarding') {
    return (
      <>
        <Onboarding onComplete={handleOnboardingComplete} />
        <Toaster />
      </>
    );
  }

  // Show pricing
  if (appState === 'pricing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button 
                onClick={handleBackToHomepage}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <h1 className="text-slate-900">IAM</h1>
              </button>
              
              <div className="flex items-center gap-3">
                <Button
                  onClick={handlePricingComplete}
                  variant="outline"
                  className="text-slate-600"
                >
                  Skip for now
                </Button>
                <button
                  onClick={handleBackToHomepage}
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <span className="text-white text-sm">U</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Pricing />
        </main>
        
        <Toaster />
      </div>
    );
  }

  // Main app
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <h1 className="text-slate-900">IAM</h1>
                  <ChevronDown className="w-4 h-4 text-slate-600" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setActiveTab('pricing')}>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pricing
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleBackToHomepage}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Back to Homepage
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <nav className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'simulator'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Simulator
              </button>
              <button
                onClick={() => setActiveTab('market')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'market'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Market Intelligence
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'dashboard'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dashboard
              </button>
            </nav>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                  <span className="text-white text-sm">U</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setActiveTab('settings')}>
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleBackToHomepage}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'simulator' && <Simulator onViewRecommendations={handleViewRecommendations} simulatorData={simulatorData} />}
        {activeTab === 'market' && <MarketIntelligence />}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'pricing' && <Pricing />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'analytics' && <Analytics />}
      </main>
      
      <Toaster />
    </div>
  );
}
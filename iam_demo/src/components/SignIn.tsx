import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

interface SignInProps {
  onSignIn: () => void;
  onBack: () => void;
}

export function SignIn({ onSignIn, onBack }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    if (email && password) {
      toast.success('Successfully signed in!');
      onSignIn();
    } else {
      toast.error('Please enter your credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-slate-900 mb-2">IAM</h1>
          <p className="text-slate-600">Sign in to your business account</p>
        </div>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <button type="button" className="text-blue-600 hover:text-blue-700">
                  Forgot password?
                </button>
              </div>

              <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white">
                Sign In
              </Button>

              <div className="text-center text-sm text-slate-600">
                New to IAM?{' '}
                <button type="button" className="text-blue-600 hover:text-blue-700">
                  Create an account
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-4">
          <button
            onClick={onBack}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

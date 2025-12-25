'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Lock, Eye, EyeOff, User, Shield, ArrowRight, 
  Cpu, ChevronDown, Menu, X, AlertCircle, Info,
  Heart, Activity, DollarSign, Link as LinkIcon, Box,
  Check, Sparkles, Database, Cloud
} from 'lucide-react';

const ProductsPortal = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    accountKey: '',
    product: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { code: 'ehp', name: 'eHP - Enterprise Health Platform', icon: Heart },
    { code: 'oims', name: 'OIMS - Incident Management System', icon: Activity },
    { code: 'paynet', name: 'PayNet - Payment Network', icon: DollarSign },
    { code: 'clickconnect', name: 'ClickConnect - Customer Suite', icon: LinkIcon },
    { code: 'blok', name: 'BloK - Blockchain Kit', icon: Box }
  ];

  const formatAccountKey = (value: string) => {
    const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    const parts = [];
    
    if (cleaned.length > 0) parts.push(cleaned.slice(0, 3));
    if (cleaned.length > 3) parts.push(cleaned.slice(3, 7));
    if (cleaned.length > 7) parts.push(cleaned.slice(7, 11));
    
    return parts.join('-');
  };

  const handleAccountKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAccountKey(e.target.value);
    setFormData({ ...formData, accountKey: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate form
    if (!formData.username || !formData.password || !formData.accountKey || !formData.product) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Validate account key format
    const keyPattern = /^[A-Z]{3}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if (!keyPattern.test(formData.accountKey)) {
      setError('Invalid account key format');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Store token
        localStorage.setItem('token', data.token);
        localStorage.setItem('selectedProduct', formData.product);
        
        // Redirect to product dashboard
        router.push(`/products/${formData.product}/dashboard`);
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Omniverity
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
            <a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="/industries" className="text-gray-300 hover:text-cyan-400 transition-colors">Industries</a>
            <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Info */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8 w-fit">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Enterprise Products Portal</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Access Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Products
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Secure portal for enterprise AI solutions. Access your licensed products with three-factor authentication.
              </p>

              {/* Product Cards */}
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.code} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <product.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-gray-300">{product.name}</span>
                  </div>
                ))}
              </div>

              {/* Security Features */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>256-bit SSL encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Three-factor authentication</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>SOC 2 Type II compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-2xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-center mb-8">Secure Login</h2>

                  {error && (
                    <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
                      <span className="text-sm text-red-400">{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Username */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Username
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          value={formData.username}
                          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="Enter your username"
                          autoComplete="username"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full pl-10 pr-12 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Account Key */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-300">
                          Account Key
                        </label>
                        <div className="group relative">
                          <Info className="w-4 h-4 text-gray-500 cursor-help" />
                          <div className="absolute right-0 bottom-6 w-64 p-2 bg-slate-800 rounded-lg text-xs text-gray-400 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                            Account Key shared in your invitation letter or contact support
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          value={formData.accountKey}
                          onChange={handleAccountKeyChange}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono tracking-wider"
                          placeholder="XXX-XXXX-XXXX"
                          maxLength={13}
                        />
                      </div>
                    </div>

                    {/* Product Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Select Product
                      </label>
                      <div className="relative">
                        <Database className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-slate-900">Choose a product</option>
                          {products.map((product) => (
                            <option key={product.code} value={product.code} className="bg-slate-900">
                              {product.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Authenticating...
                        </>
                      ) : (
                        <>
                          Access Products
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Footer Links */}
                  <div className="mt-6 text-center space-y-2">
                    <a href="/forgot-password" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                      Forgot your credentials?
                    </a>
                    <p className="text-xs text-gray-500">
                      Need help? Contact{' '}
                      <a href="mailto:support@omniverity.com" className="text-cyan-400 hover:text-cyan-300">
                        support@omniverity.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPortal;
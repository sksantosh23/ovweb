'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Lock, Eye, EyeOff, User, Shield, ArrowRight, 
  Cpu, ChevronDown, Menu, X, AlertCircle, Info,
  Heart, Activity, DollarSign, Link as LinkIcon, Box,
  Check, Sparkles, Loader2, ArrowLeft
} from 'lucide-react';

// Types
interface FormData {
  username: string;
  password: string;
  accountKey: string;
  product: string;
}

interface Product {
  code: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

// Products configuration
const products: Product[] = [
  { 
    code: 'ehp', 
    name: 'eHP', 
    description: 'Enterprise Health Platform',
    icon: Heart,
    image: '/images/products/ehp-preview.jpg'
  },
  { 
    code: 'oims', 
    name: 'OIMS', 
    description: 'Incident Management System',
    icon: Activity,
    image: '/images/products/oims-preview.jpg'
  },
  { 
    code: 'paynet', 
    name: 'PayNet', 
    description: 'Payment Network',
    icon: DollarSign,
    image: '/images/products/paynet-preview.jpg'
  },
  { 
    code: 'clickconnect', 
    name: 'ClickConnect', 
    description: 'Customer Suite',
    icon: LinkIcon,
    image: '/images/products/clickconnect-preview.jpg'
  },
  { 
    code: 'blok', 
    name: 'BloK', 
    description: 'Blockchain Kit',
    icon: Box,
    image: '/images/products/blok-preview.jpg'
  }
];

// Navigation items
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

// Image Placeholder Component
const ImagePlaceholder = ({ 
  className = '', 
  icon: Icon 
}: { 
  className?: string; 
  icon?: React.ComponentType<{ className?: string }>;
}) => (
  <div className={`image-placeholder ${className}`} role="img" aria-label="Product preview placeholder">
    {Icon && <Icon className="w-12 h-12 text-slate-600" aria-hidden="true" />}
  </div>
);

// Main Component
export default function ProductsPortalClient() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [imageError, setImageError] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    accountKey: '',
    product: ''
  });

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Update selected product when form data changes
  useEffect(() => {
    const product = products.find(p => p.code === formData.product);
    setSelectedProduct(product || null);
    setImageError(false); // Reset image error when product changes
  }, [formData.product]);

  // Format account key as user types
  const formatAccountKey = useCallback((value: string): string => {
    const cleaned = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    const parts: string[] = [];
    
    if (cleaned.length > 0) parts.push(cleaned.slice(0, 3));
    if (cleaned.length > 3) parts.push(cleaned.slice(3, 7));
    if (cleaned.length > 7) parts.push(cleaned.slice(7, 11));
    
    return parts.join('-');
  }, []);

  const handleAccountKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAccountKey(e.target.value);
    setFormData(prev => ({ ...prev, accountKey: formatted }));
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Client-side validation
    if (!formData.username || !formData.password || !formData.accountKey || !formData.product) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Validate account key format
    const keyPattern = /^[A-Z]{3}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    if (!keyPattern.test(formData.accountKey)) {
      setError('Invalid account key format (XXX-XXXX-XXXX)');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        router.push(`/products/${formData.product}/dashboard`);
      } else {
        setError(data.message || 'Authentication failed');
      }
    } catch {
      setError('Connection error. Please check your internet and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <header>
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center space-x-3 group"
                aria-label="OMNIVERITY - Go to homepage"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                  <Cpu className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Omniverity
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href} 
                    className={`transition-colors text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1 ${
                      item.href === '/products'
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    aria-current={item.href === '/products' ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="md:hidden p-2 text-gray-300 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div 
                id="mobile-menu"
                className="md:hidden py-4 border-t border-slate-700 bg-slate-900/95 backdrop-blur-lg"
                role="menu"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block py-3 min-h-[44px] flex items-center transition-colors ${
                      item.href === '/products'
                        ? 'text-white font-semibold'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    role="menuitem"
                    aria-current={item.href === '/products' ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 opacity-10 grid-pattern" />
        
        {/* Floating particles - reduced for performance on mobile */}
        <div className="hidden md:block">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.3 + 0.1
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main id="main-content" role="main" className="relative z-10 min-h-screen flex items-center justify-center py-24 md:py-20 px-4">
        <div className="w-full max-w-6xl">
          {/* Back Link */}
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded p-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Info */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6 md:mb-8 w-fit">
                <Shield className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span className="text-sm font-medium text-cyan-400">Enterprise Products Portal</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Access Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Products
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
                Secure portal for enterprise AI solutions. Access your licensed products with three-factor authentication.
              </p>

              {/* Product Preview - Shows selected product image */}
              <div 
                className="relative mb-6 rounded-xl overflow-hidden border border-slate-700 aspect-video bg-slate-800"
                aria-live="polite"
                aria-label="Selected product preview"
              >
                {selectedProduct && !imageError ? (
                  <>
                    <Image
                      src={selectedProduct.image}
                      alt={`${selectedProduct.name} - ${selectedProduct.description} preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
                      onError={() => setImageError(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-lg font-bold text-white">{selectedProduct.name}</h2>
                      <p className="text-sm text-gray-300">{selectedProduct.description}</p>
                    </div>
                  </>
                ) : (
                  <ImagePlaceholder className="w-full h-full" icon={Sparkles} />
                )}
              </div>

              {/* Product Cards */}
              <fieldset className="border-0 p-0 m-0">
                <legend className="sr-only">Select a product</legend>
                <div 
                  className="space-y-2 md:space-y-3 max-h-[200px] md:max-h-none overflow-y-auto md:overflow-visible pr-2 md:pr-0"
                  role="radiogroup"
                  aria-label="Available products"
                >
                  {products.map((product) => {
                    const Icon = product.icon;
                    const isSelected = formData.product === product.code;
                    
                    return (
                      <button
                        key={product.code}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setFormData(prev => ({ ...prev, product: product.code }))}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left min-h-[44px] focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                          isSelected 
                            ? 'bg-cyan-500/20 border-cyan-500/50' 
                            : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isSelected 
                            ? 'bg-gradient-to-br from-cyan-500 to-purple-500' 
                            : 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20'
                        }`}>
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-cyan-400'}`} aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-gray-300 font-medium">{product.name}</span>
                          <span className="text-gray-500 text-sm ml-2 hidden sm:inline">- {product.description}</span>
                          <span className="text-gray-500 text-sm block sm:hidden">{product.description}</span>
                        </div>
                        {isSelected && <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" aria-hidden="true" />}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Security Features - Hidden on mobile to save space */}
              <div className="hidden md:block mt-8 space-y-3">
                {[
                  '256-bit SSL encryption',
                  'Three-factor authentication',
                  'SOC 2 Type II compliant'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Login Form */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="w-full max-w-md">
                <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Lock className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">Secure Login</h2>

                  {/* Error Message */}
                  {error && (
                    <div 
                      className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3"
                      role="alert"
                      aria-live="assertive"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-red-400">{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5" noValidate>
                    {/* Username */}
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                        Username
                        <span className="text-red-400 ml-1" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                        <input
                          id="username"
                          type="text"
                          value={formData.username}
                          onChange={handleInputChange('username')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all min-h-[44px]"
                          placeholder="Enter your username"
                          autoComplete="username"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                        <span className="text-red-400 ml-1" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={handleInputChange('password')}
                          className="w-full pl-10 pr-12 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all min-h-[44px]"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          required
                          aria-required="true"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 p-1 min-w-[32px] min-h-[32px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          aria-pressed={showPassword}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" aria-hidden="true" /> : <Eye className="w-5 h-5" aria-hidden="true" />}
                        </button>
                      </div>
                    </div>

                    {/* Account Key */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="accountKey" className="text-sm font-medium text-gray-300">
                          Account Key
                          <span className="text-red-400 ml-1" aria-hidden="true">*</span>
                        </label>
                        <div className="group relative">
                          <button
                            type="button"
                            className="p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                            aria-label="Account key help information"
                            aria-describedby="accountKey-tooltip"
                          >
                            <Info className="w-4 h-4 text-gray-500" aria-hidden="true" />
                          </button>
                          <div 
                            id="accountKey-tooltip"
                            className="absolute right-0 bottom-6 w-64 p-2 bg-slate-800 rounded-lg text-xs text-gray-400 opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-10 shadow-xl"
                            role="tooltip"
                          >
                            Account Key shared in your invitation letter or contact support
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                        <input
                          id="accountKey"
                          type="text"
                          value={formData.accountKey}
                          onChange={handleAccountKeyChange}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono tracking-wider min-h-[44px]"
                          placeholder="XXX-XXXX-XXXX"
                          maxLength={13}
                          required
                          aria-required="true"
                          aria-describedby="accountKey-format"
                        />
                      </div>
                      <p id="accountKey-format" className="text-xs text-gray-500 mt-1">
                        Format: XXX-XXXX-XXXX
                      </p>
                    </div>

                    {/* Product Selection */}
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-gray-300 mb-2">
                        Select Product
                        <span className="text-red-400 ml-1" aria-hidden="true">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="product"
                          value={formData.product}
                          onChange={handleInputChange('product')}
                          className="w-full pl-4 pr-10 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all appearance-none cursor-pointer min-h-[44px]"
                          required
                          aria-required="true"
                        >
                          <option value="" className="bg-slate-900">Choose a product</option>
                          {products.map((product) => (
                            <option key={product.code} value={product.code} className="bg-slate-900">
                              {product.name} - {product.description}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                          <span>Authenticating...</span>
                        </>
                      ) : (
                        <>
                          <span>Access Products</span>
                          <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Footer Links */}
                  <div className="mt-6 text-center space-y-2">
                    <Link 
                      href="/forgot-password" 
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                    >
                      Forgot your credentials?
                    </Link>
                    <p className="text-xs text-gray-500">
                      Need help? Contact{' '}
                      <a 
                        href="mailto:support@omniverity.com" 
                        className="text-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
                      >
                        support@omniverity.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="relative z-10 py-8 border-t border-slate-800"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} OMNIVERITY. All rights reserved.</p>
            <nav aria-label="Footer navigation">
              <ul className="flex gap-4">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

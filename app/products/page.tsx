'use client'
import React, { useState } from 'react';
import { 
  Lock, 
  User, 
  Key, 
  Info, 
  ChevronDown, 
  Shield, 
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Package,
  Eye,
  EyeOff,
  HelpCircle
} from 'lucide-react';

const ProductsPortal = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    accountKey: '',
    product: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  const products = [
    { id: 'ehp', name: 'eHP', description: 'Enterprise Health Platform', color: 'blue' },
    { id: 'oims', name: 'OIMS', description: 'Omni Incident Management System', color: 'green' },
    { id: 'paynet', name: 'PayNet', description: 'Payment Processing Network', color: 'purple' },
    { id: 'clickconnect', name: 'ClickConnect', description: 'Customer Engagement Suite', color: 'orange' },
    { id: 'blok', name: 'BloK', description: 'Blockchain Operations Kit', color: 'indigo' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Account Key validation (format: XXX-XXXX-XXXX)
    if (!formData.accountKey) {
      newErrors.accountKey = 'Account Key is required';
    } else if (!/^[A-Z0-9]{3}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(formData.accountKey.toUpperCase())) {
      newErrors.accountKey = 'Invalid format. Expected: XXX-XXXX-XXXX';
    }
    
    // Product selection
    if (!formData.product) {
      newErrors.product = 'Please select a product to access';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    setErrors({});
    setLoginAttempts(prev => prev + 1);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', {
        ...formData,
        password: '[REDACTED]',
        accountKey: '[REDACTED]'
      });
      setIsLoading(false);
      
      // After 3 failed attempts, show account lock warning
      if (loginAttempts >= 2) {
        alert('Warning: Your account will be locked after 5 failed attempts. Please contact support if you need assistance.');
      }
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    // Auto-format Account Key
    if (field === 'accountKey') {
      value = value.toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (value.length > 3 && value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3);
      } else if (value.length > 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const selectedProduct = products.find(p => p.id === formData.product);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation Bar */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                Omniverity
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-white/70 hover:text-white transition-colors">Home</a>
              <a href="/products" className="text-white font-medium">Products</a>
              <a href="/services" className="text-white/70 hover:text-white transition-colors">Services</a>
              <a href="/support" className="text-white/70 hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full flex gap-8">
          {/* Left Panel - Product Info */}
          <div className="hidden lg:block flex-1 text-white">
            <h2 className="text-4xl font-bold mb-4">Enterprise Products Portal</h2>
            <p className="text-xl text-blue-200 mb-8">
              Access your licensed enterprise solutions with enhanced security
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Multi-Factor Authentication</h3>
                  <p className="text-sm text-blue-200">Secure access with Account Key verification</p>
                </div>
              </div>
              <div className="flex items-start">
                <Lock className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">End-to-End Encryption</h3>
                  <p className="text-sm text-blue-200">Your data is protected with AES-256 encryption</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">SOC 2 Type II Certified</h3>
                  <p className="text-sm text-blue-200">Audited for security, availability & confidentiality</p>
                </div>
              </div>
            </div>

            {/* Product Cards Preview */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wide">Available Products</h3>
              {products.map(product => (
                <div 
                  key={product.id}
                  className={`p-3 rounded-lg bg-white/5 border border-white/10 ${
                    formData.product === product.id ? 'ring-2 ring-white/50' : ''
                  }`}
                >
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-blue-200">{product.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="flex-1 max-w-md">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-3">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                <p className="text-sm text-gray-600 mt-1">Access your enterprise products</p>
              </div>

              {/* Security Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-6 flex items-center justify-center text-xs">
                <Lock className="h-3 w-3 text-green-600 mr-1" />
                <span className="text-green-800">Secure SSL Connection Active</span>
              </div>

              <div className="space-y-5">
                {/* Username Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.username ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Enter your username"
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-1 text-xs text-red-600 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className={`block w-full pl-10 pr-10 py-2 border ${
                        errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Account Key Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <span className="flex items-center">
                      Account Key
                      <div className="relative ml-2">
                        <div
                          onMouseEnter={() => setShowTooltip(true)}
                          onMouseLeave={() => setShowTooltip(false)}
                          className="cursor-help"
                        >
                          <Info className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                        </div>
                        {showTooltip && (
                          <div className="absolute z-20 w-72 p-3 -left-32 bottom-6 bg-gray-900 text-white text-xs rounded-lg shadow-xl">
                            <div className="font-semibold mb-1">Where to find your Account Key?</div>
                            <p>Account Key shared in your invitation letter or please contact support team</p>
                            <div className="mt-2 pt-2 border-t border-gray-700">
                              <p className="text-yellow-300">Format: XXX-XXXX-XXXX</p>
                            </div>
                            <div className="absolute -bottom-1 left-36 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                          </div>
                        )}
                      </div>
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Key className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={formData.accountKey}
                      onChange={(e) => handleInputChange('accountKey', e.target.value)}
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.accountKey ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono transition-colors`}
                      placeholder="XXX-XXXX-XXXX"
                      maxLength="13"
                    />
                  </div>
                  {errors.accountKey && (
                    <p className="mt-1 text-xs text-red-600 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.accountKey}
                    </p>
                  )}
                </div>

                {/* Product Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Product
                  </label>
                  <div className="relative">
                    <select
                      value={formData.product}
                      onChange={(e) => handleInputChange('product', e.target.value)}
                      className={`block w-full pl-3 pr-10 py-2 border ${
                        errors.product ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white transition-colors`}
                    >
                      <option value="">Choose a product to access...</option>
                      {products.map(product => (
                        <option key={product.id} value={product.id}>
                          {product.name} - {product.description}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {errors.product && (
                    <p className="mt-1 text-xs text-red-600 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.product}
                    </p>
                  )}
                  
                  {selectedProduct && (
                    <div className="mt-2 p-2 bg-blue-50 rounded-lg text-xs text-blue-700">
                      <span className="font-medium">{selectedProduct.name}</span> will open in a new secure session
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Access Product
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>

                {/* Additional Links */}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <a href="/forgot-password" className="text-blue-600 hover:text-blue-700 flex items-center">
                    <HelpCircle className="h-3 w-3 mr-1" />
                    Forgot credentials?
                  </a>
                  <a href="/support" className="text-gray-600 hover:text-gray-800">
                    Contact Support
                  </a>
                </div>
              </div>
            </div>

            {/* Support Information */}
            <div className="mt-6 text-center">
              <p className="text-sm text-white/70">
                24/7 Enterprise Support
              </p>
              <p className="text-sm font-medium text-white mt-1">
                support@omniverity.com | +1 (640) 250-1520
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPortal;
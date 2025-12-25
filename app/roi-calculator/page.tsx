'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Calculator, TrendingUp, DollarSign, Users, Clock,
  Building2, Cpu, ChevronRight, BarChart3, PieChart,
  Activity, Zap, Target, Award, Download, Send,
  ArrowRight, CheckCircle, X, Menu, Info
} from 'lucide-react';

const ROICalculator = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  
  const [formData, setFormData] = useState({
    // Company Info
    companyName: '',
    industry: '',
    employees: '',
    revenue: '',
    
    // Current State
    manualProcesses: 50,
    dataProcessingTime: 40,
    errorRate: 15,
    customerServiceTime: 30,
    
    // AI Goals
    aiUseCase: '',
    implementationTimeline: '12',
    budget: '',
    
    // Contact
    email: '',
    phone: ''
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    roiPercentage: 0,
    paybackPeriod: 0,
    efficiencyGain: 0,
    revenueIncrease: 0,
    costReduction: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Technology',
    'Telecommunications',
    'Transportation',
    'Energy',
    'Education',
    'Government'
  ];

  const aiUseCases = [
    'Process Automation',
    'Predictive Analytics',
    'Customer Service AI',
    'Computer Vision',
    'Natural Language Processing',
    'Fraud Detection',
    'Supply Chain Optimization',
    'Personalization',
    'Quality Control',
    'Risk Management'
  ];

  const calculateROI = () => {
    const employees = parseInt(formData.employees) || 1000;
    const revenue = parseFloat(formData.revenue) || 100;
    const budget = parseFloat(formData.budget) || 1;
    
    // Calculate efficiency gains
    const processAutomation = (formData.manualProcesses / 100) * 0.7;
    const timeReduction = (formData.dataProcessingTime / 100) * 0.6;
    const errorReduction = (formData.errorRate / 100) * 0.8;
    const serviceImprovement = (formData.customerServiceTime / 100) * 0.5;
    
    // Base calculations
    const avgSalary = 75000;
    const hoursPerYear = 2080;
    const hourlyRate = avgSalary / hoursPerYear;
    
    // Labor savings
    const laborSavings = employees * hourlyRate * processAutomation * 500;
    
    // Error reduction savings
    const errorCost = revenue * 0.03;
    const errorSavings = errorCost * errorReduction;
    
    // Revenue increase from efficiency
    const revenueIncrease = revenue * (timeReduction * 0.1 + serviceImprovement * 0.05);
    
    // Total annual savings
    const annualSavings = laborSavings + errorSavings + (revenueIncrease * 1000000);
    
    // ROI calculations
    const totalInvestment = budget * 1000000;
    const roi = ((annualSavings - totalInvestment) / totalInvestment) * 100;
    const paybackPeriod = totalInvestment / annualSavings * 12;
    
    // Efficiency metrics
    const efficiencyGain = (processAutomation + timeReduction + errorReduction + serviceImprovement) * 25;
    const costReduction = (laborSavings / (revenue * 1000000)) * 100;
    
    setResults({
      annualSavings: Math.round(annualSavings),
      roiPercentage: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      efficiencyGain: Math.round(efficiencyGain),
      revenueIncrease: Math.round(revenueIncrease * 10) / 10,
      costReduction: Math.round(costReduction)
    });
    
    setShowResults(true);
  };

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Omniverity
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">Products</Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            <Link href="/contact" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
              Get Started
            </Link>
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

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-12">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
            currentStep >= step 
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
              : 'bg-slate-800 text-gray-500 border border-slate-700'
          }`}>
            {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
          </div>
          {step < 4 && (
            <div className={`w-24 h-1 mx-2 transition-all ${
              currentStep > step ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : 'bg-slate-800'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="">Select industry</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Number of Employees</label>
                <input
                  type="number"
                  value={formData.employees}
                  onChange={(e) => setFormData({...formData, employees: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="e.g., 500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Annual Revenue (Million $)</label>
                <input
                  type="number"
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="e.g., 50"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Current State Assessment</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Manual Processes</label>
                  <span className="text-cyan-400 font-mono">{formData.manualProcesses}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.manualProcesses}
                  onChange={(e) => setFormData({...formData, manualProcesses: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Data Processing Time (Hours/Day)</label>
                  <span className="text-cyan-400 font-mono">{formData.dataProcessingTime}h</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.dataProcessingTime}
                  onChange={(e) => setFormData({...formData, dataProcessingTime: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Error Rate</label>
                  <span className="text-cyan-400 font-mono">{formData.errorRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={formData.errorRate}
                  onChange={(e) => setFormData({...formData, errorRate: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Customer Service Response Time (Minutes)</label>
                  <span className="text-cyan-400 font-mono">{formData.customerServiceTime}min</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={formData.customerServiceTime}
                  onChange={(e) => setFormData({...formData, customerServiceTime: parseInt(e.target.value)})}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">AI Implementation Goals</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Primary AI Use Case</label>
                <select
                  value={formData.aiUseCase}
                  onChange={(e) => setFormData({...formData, aiUseCase: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="">Select use case</option>
                  {aiUseCases.map(useCase => (
                    <option key={useCase} value={useCase}>{useCase}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Implementation Timeline (Months)</label>
                <select
                  value={formData.implementationTimeline}
                  onChange={(e) => setFormData({...formData, implementationTimeline: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                >
                  <option value="3">3 months</option>
                  <option value="6">6 months</option>
                  <option value="12">12 months</option>
                  <option value="18">18 months</option>
                  <option value="24">24 months</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Budget (Million $)</label>
                <input
                  type="number"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="e.g., 2.5"
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get Your ROI Report</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <div className="text-sm text-gray-400">
                    We'll send you a detailed ROI report with:
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Customized implementation roadmap
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Industry benchmarks & comparisons
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Risk assessment & mitigation strategies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  const ResultsSection = () => (
    <div className="mt-12 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-cyan-500/30">
      <h3 className="text-3xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Your AI ROI Projection
        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-slate-900/50 rounded-xl">
          <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-400" />
          <div className="text-3xl font-bold text-white mb-1">
            ${(results.annualSavings / 1000000).toFixed(1)}M
          </div>
          <div className="text-sm text-gray-400">Annual Savings</div>
        </div>
        
        <div className="text-center p-6 bg-slate-900/50 rounded-xl">
          <TrendingUp className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
          <div className="text-3xl font-bold text-white mb-1">
            {results.roiPercentage}%
          </div>
          <div className="text-sm text-gray-400">ROI Percentage</div>
        </div>
        
        <div className="text-center p-6 bg-slate-900/50 rounded-xl">
          <Clock className="w-8 h-8 mx-auto mb-2 text-purple-400" />
          <div className="text-3xl font-bold text-white mb-1">
            {results.paybackPeriod} mo
          </div>
          <div className="text-sm text-gray-400">Payback Period</div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg">
          <span className="text-gray-400">Efficiency Gain</span>
          <span className="text-xl font-bold text-cyan-400">{results.efficiencyGain}%</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg">
          <span className="text-gray-400">Revenue Increase</span>
          <span className="text-xl font-bold text-green-400">${results.revenueIncrease}M</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-900/30 rounded-lg">
          <span className="text-gray-400">Cost Reduction</span>
          <span className="text-xl font-bold text-purple-400">{results.costReduction}%</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform transition-all hover:scale-105 flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          Download Full Report
        </button>
        <Link href="/contact" className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
          <Send className="w-5 h-5" />
          Schedule Consultation
        </Link>
      </div>
    </div>
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
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">AI ROI Calculator</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Calculate Your AI ROI
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Discover the potential value of AI transformation for your enterprise
            </p>
          </div>
          
          {/* Calculator Form */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <StepIndicator />
            
            {renderStep()}
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Previous
                </button>
              )}
              
              {currentStep < 4 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="ml-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform transition-all hover:scale-105 flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={calculateROI}
                  className="ml-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transform transition-all hover:scale-105 flex items-center gap-2"
                >
                  Calculate ROI
                  <BarChart3 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
          
          {/* Results */}
          {showResults && <ResultsSection />}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
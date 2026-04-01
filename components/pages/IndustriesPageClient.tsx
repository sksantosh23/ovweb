'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, Factory, ShoppingCart, Plane, 
  Banknote, GraduationCap, Shield, Truck,
  Cpu, ArrowRight, CheckCircle,
  TrendingUp, Users, Clock, BarChart3,
  Zap, Brain, Globe, Menu, X
} from 'lucide-react';

// Navigation items (should match your site navigation)
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

// Industry data with comprehensive information
const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    shortDescription: 'Transform patient care with AI-powered diagnostics',
    fullDescription: 'Revolutionize healthcare delivery with intelligent solutions that improve patient outcomes, streamline operations, and reduce costs.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    stats: [
      { value: '40%', label: 'Faster Diagnostics' },
      { value: '25%', label: 'Cost Reduction' },
      { value: '99.2%', label: 'Accuracy Rate' },
    ],
    solutions: [
      'AI-Powered Diagnostics',
      'Electronic Health Records (EHR)',
      'Telemedicine Platforms',
      'Predictive Analytics',
      'Medical Imaging AI',
      'Patient Engagement',
    ],
    caseStudy: {
      client: 'Regional Hospital Network',
      result: 'Reduced diagnostic time by 40% using AI imaging analysis',
    },
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: Banknote,
    shortDescription: 'Enhance security with intelligent financial AI',
    fullDescription: 'Protect assets, detect fraud, and deliver personalized financial experiences with cutting-edge AI and automation.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    stats: [
      { value: '95%', label: 'Fraud Detection' },
      { value: '60%', label: 'Process Automation' },
      { value: '$2M+', label: 'Savings/Year' },
    ],
    solutions: [
      'Fraud Detection & Prevention',
      'Algorithmic Trading',
      'Risk Assessment AI',
      'Customer Analytics',
      'Regulatory Compliance',
      'Chatbot Banking',
    ],
    caseStudy: {
      client: 'National Bank',
      result: 'Prevented $50M in fraud with real-time AI detection',
    },
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    shortDescription: 'Optimize production with smart automation',
    fullDescription: 'Achieve operational excellence with predictive maintenance, quality control AI, and intelligent supply chain management.',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    stats: [
      { value: '30%', label: 'Downtime Reduction' },
      { value: '20%', label: 'Quality Improvement' },
      { value: '15%', label: 'Cost Savings' },
    ],
    solutions: [
      'Predictive Maintenance',
      'Quality Control AI',
      'Supply Chain Optimization',
      'Industrial IoT',
      'Digital Twin Technology',
      'Robotics Integration',
    ],
    caseStudy: {
      client: 'Auto Parts Manufacturer',
      result: 'Reduced unplanned downtime by 45% with predictive AI',
    },
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    icon: ShoppingCart,
    shortDescription: 'Personalize shopping experiences at scale',
    fullDescription: 'Drive sales and customer loyalty with AI-powered personalization, inventory optimization, and omnichannel experiences.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    stats: [
      { value: '35%', label: 'Conversion Increase' },
      { value: '50%', label: 'Cart Abandonment Drop' },
      { value: '3x', label: 'Customer Engagement' },
    ],
    solutions: [
      'Personalization Engines',
      'Inventory Management AI',
      'Dynamic Pricing',
      'Customer Analytics',
      'Visual Search',
      'Chatbot Support',
    ],
    caseStudy: {
      client: 'Fashion Retailer',
      result: 'Increased online conversions by 45% with AI recommendations',
    },
  },
  {
    id: 'logistics',
    name: 'Logistics & Transportation',
    icon: Truck,
    shortDescription: 'Streamline operations with intelligent routing',
    fullDescription: 'Optimize fleet management, reduce delivery times, and cut costs with AI-powered logistics solutions.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    stats: [
      { value: '25%', label: 'Fuel Savings' },
      { value: '40%', label: 'Faster Delivery' },
      { value: '99%', label: 'On-Time Rate' },
    ],
    solutions: [
      'Route Optimization',
      'Fleet Management',
      'Demand Forecasting',
      'Warehouse Automation',
      'Last-Mile Delivery AI',
      'Real-Time Tracking',
    ],
    caseStudy: {
      client: 'Global Logistics Company',
      result: 'Reduced delivery times by 35% with AI route optimization',
    },
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    shortDescription: 'Transform learning with adaptive AI',
    fullDescription: 'Create personalized learning experiences that improve outcomes and engage students at every level.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    stats: [
      { value: '45%', label: 'Better Outcomes' },
      { value: '60%', label: 'Engagement Increase' },
      { value: '30%', label: 'Time Savings' },
    ],
    solutions: [
      'Adaptive Learning Platforms',
      'Student Analytics',
      'Automated Grading',
      'Virtual Classrooms',
      'Content Personalization',
      'Administrative AI',
    ],
    caseStudy: {
      client: 'University System',
      result: 'Improved student retention by 25% with adaptive learning',
    },
  },
];

export default function IndustriesPageClient() {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState('healthcare');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Get active industry data
  const activeIndustryData = industries.find(i => i.id === activeIndustry) || industries[0];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <header>
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-slate-900/80 backdrop-blur-md'
          } border-b border-gray-800`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center space-x-2 group"
                aria-label="OMNIVERITY - Go to homepage"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                  <span className="text-white font-bold text-lg md:text-xl" aria-hidden="true">O</span>
                </div>
                <span className="text-white font-bold text-lg md:text-xl">OMNIVERITY</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href} 
                    className={`transition-colors text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1 ${
                      item.href === '/industries' 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    aria-current={item.href === '/industries' ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div 
                id="mobile-menu"
                className="lg:hidden py-4 border-t border-gray-800"
                role="menu"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block py-3 min-h-[44px] flex items-center transition-colors ${
                      item.href === '/industries' 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                    aria-current={item.href === '/industries' ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section 
          className="pt-24 md:pt-32 pb-16 px-4"
          aria-labelledby="industries-heading"
        >
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
                Industry Expertise
              </span>
              <h1 
                id="industries-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Industry{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Solutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Specialized AI and digital transformation solutions tailored to your industry&apos;s unique challenges and opportunities.
              </p>
            </div>

            {/* Industry Selector Tabs */}
            <div className="mb-12">
              <div 
                className="flex flex-wrap justify-center gap-2 md:gap-4"
                role="tablist"
                aria-label="Select an industry"
              >
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  const isActive = activeIndustry === industry.id;
                  return (
                    <button
                      key={industry.id}
                      onClick={() => setActiveIndustry(industry.id)}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`${industry.id}-panel`}
                      id={`${industry.id}-tab`}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        isActive
                          ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                          : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span className="hidden sm:inline font-medium">{industry.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Industry Detail */}
            <div 
              id={`${activeIndustryData.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${activeIndustryData.id}-tab`}
              className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10">
                {/* Left Column - Info */}
                <div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${activeIndustryData.bgColor} ${activeIndustryData.borderColor} border mb-6`}>
                    <activeIndustryData.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    <span className="font-semibold">{activeIndustryData.name}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {activeIndustryData.shortDescription}
                  </h2>
                  
                  <p className="text-gray-400 mb-8">
                    {activeIndustryData.fullDescription}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {activeIndustryData.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${activeIndustryData.color} text-transparent bg-clip-text`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                      <span className="font-semibold text-green-500">Success Story</span>
                    </div>
                    <p className="text-gray-300 mb-1">
                      <strong>{activeIndustryData.caseStudy.client}</strong>
                    </p>
                    <p className="text-gray-400 text-sm">
                      {activeIndustryData.caseStudy.result}
                    </p>
                  </div>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 btn btn-primary px-6 py-3"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </div>

                {/* Right Column - Solutions */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Solutions We Offer</h3>
                  <ul className="space-y-3" aria-label={`${activeIndustryData.name} solutions`}>
                    {activeIndustryData.solutions.map((solution, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeIndustryData.color}`} aria-hidden="true" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Additional CTA */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/20">
                    <h4 className="font-bold mb-2">Need a Custom Solution?</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Our experts can design a tailored solution for your specific needs.
                    </p>
                    <Link 
                      href="/services" 
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center gap-1"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Industries Grid */}
        <section 
          className="py-16 px-4 bg-slate-800/30"
          aria-labelledby="all-industries-heading"
        >
          <div className="container mx-auto">
            <h2 id="all-industries-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
              All Industries We Serve
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <article 
                    key={industry.id}
                    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all group"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${industry.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {industry.shortDescription}
                    </p>
                    <button
                      onClick={() => {
                        setActiveIndustry(industry.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-16 md:py-20 px-4"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Let&apos;s discuss how our industry-specific solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="btn btn-primary px-8 py-4 min-h-[48px]"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/case-studies" 
                  className="btn btn-secondary px-8 py-4 min-h-[48px]"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer 
        className="py-12 border-t border-gray-800"
        role="contentinfo"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} OMNIVERITY. All rights reserved.</p>
            <nav aria-label="Footer navigation">
              <ul className="flex gap-4">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors">
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

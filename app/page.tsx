'use client'

import React, { useState, useEffect } from 'react';
import { 
  Brain, Code, Puzzle, Eye, MessageSquare, TrendingUp, 
  Cog, Shield, GraduationCap, ChevronRight, Check, Users,
  Zap, Target, ArrowRight, Menu, X, Star, BarChart3,
  Activity, Globe, Lock, Sparkles, Cpu, Network,
  Phone, Mail, MapPin, Linkedin, Twitter, Facebook, 
  Instagram, Heart, DollarSign, Link, Box, Database,
  GitBranch, Layers, Award, ChevronDown, ExternalLink,
  ArrowUpRight, CircuitBoard, Atom
} from 'lucide-react';

const OmniversityDarkHomepage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    { 
      icon: Brain, 
      title: 'AI Strategy & Transformation', 
      desc: 'Transform your enterprise with AI-first approach and measurable ROI',
      link: '/services/ai-strategy',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      icon: Code, 
      title: 'Custom AI Development', 
      desc: 'Build intelligent applications powered by cutting-edge ML models',
      link: '/services/ai-development',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      icon: Puzzle, 
      title: 'Enterprise AI Integration', 
      desc: 'Seamlessly integrate AI into your existing infrastructure',
      link: '/services/ai-integration',
      color: 'from-green-400 to-teal-500'
    },
    { 
      icon: Eye, 
      title: 'Computer Vision Solutions', 
      desc: 'Advanced image recognition and visual analytics systems',
      link: '/services/computer-vision',
      color: 'from-orange-400 to-red-500'
    },
    { 
      icon: MessageSquare, 
      title: 'Natural Language Processing', 
      desc: 'Understand and process human language at scale',
      link: '/services/nlp',
      color: 'from-indigo-400 to-purple-500'
    },
    { 
      icon: TrendingUp, 
      title: 'Predictive Analytics', 
      desc: 'Data-driven predictions and business intelligence',
      link: '/services/analytics',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      icon: Cog, 
      title: 'Intelligent Automation', 
      desc: 'Automate complex processes with AI-powered decisions',
      link: '/services/automation',
      color: 'from-pink-400 to-rose-500'
    },
    { 
      icon: Shield, 
      title: 'AI Security & Governance', 
      desc: 'Secure, compliant, and ethical AI implementations',
      link: '/services/ai-security',
      color: 'from-red-400 to-pink-500'
    },
    { 
      icon: GraduationCap, 
      title: 'AI Training & CoE', 
      desc: 'Build internal AI capabilities and centers of excellence',
      link: '/services/ai-training',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  const products = [
    { 
      icon: Heart,
      code: 'ehp', 
      name: 'eHP',
      full: 'Enterprise Health Platform',
      desc: 'AI-powered healthcare management with predictive diagnostics',
      metric: '45% faster diagnosis',
      features: ['Predictive Diagnostics', 'Patient Risk Scoring', 'Clinical Decision Support'],
      gradient: 'from-red-500 to-pink-500'
    },
    { 
      icon: Activity,
      code: 'oims', 
      name: 'OIMS',
      full: 'Omni Incident Management System',
      desc: 'Intelligent incident detection and automated resolution',
      metric: '60% reduced downtime',
      features: ['Auto-categorization', 'Root Cause Analysis', 'Predictive Maintenance'],
      gradient: 'from-green-500 to-teal-500'
    },
    { 
      icon: DollarSign,
      code: 'paynet', 
      name: 'PayNet',
      full: 'Payment Processing Network',
      desc: 'Real-time fraud detection and secure transactions',
      metric: '99.9% fraud accuracy',
      features: ['Fraud Detection', 'Risk Scoring', 'Transaction Analytics'],
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: Link,
      code: 'clickconnect', 
      name: 'ClickConnect',
      full: 'Customer Engagement Suite',
      desc: 'AI-driven customer insights and personalization',
      metric: '3x engagement rate',
      features: ['Behavior Prediction', 'Sentiment Analysis', 'Churn Prevention'],
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Box,
      code: 'blok', 
      name: 'BloK',
      full: 'Blockchain Operations Kit',
      desc: 'Smart contract optimization with AI-powered auditing',
      metric: '50% gas savings',
      features: ['Smart Contract Audit', 'Gas Optimization', 'Anomaly Detection'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const locations = [
    { country: 'USA', city: 'New York', phone: '+1 (917) 687-0318', primary: true },
    { country: 'Australia', city: 'Sydney', phone: '+61 (424) 017-928' },
    { country: 'India', city: 'Hyderabad', phone: '+91 996-340-1117' }
  ];

  const stats = [
    { value: '500+', label: 'Enterprises Transformed', icon: Users },
    { value: '40%', label: 'Average ROI Increase', icon: TrendingUp },
    { value: '99.9%', label: 'Model Accuracy', icon: Target },
    { value: '24/7', label: 'AI Operations', icon: Activity }
  ];

  // Neural network animation background
  const NeuralBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
        }}
      />
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.25
            }}
          />
        ))}
      </div>
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Omniverity
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {servicesDropdown && (
                  <div className="absolute left-0 mt-2 w-72 bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl py-2 border border-cyan-500/20">
                    {services.slice(0, 5).map((service) => (
                      <a
                        key={service.title}
                        href={service.link}
                        className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all"
                      >
                        <service.icon className="h-4 w-4 mr-3" />
                        {service.title}
                      </a>
                    ))}
                    <a
                      href="/services"
                      className="flex items-center px-4 py-3 text-sm text-cyan-400 hover:bg-cyan-500/10 border-t border-slate-700 transition-all"
                    >
                      View All Services
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>
              <a href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Products Portal
              </a>
              <a href="/industries" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Industries
              </a>
              <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105">
                Get AI Assessment
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-cyan-400"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Services</a>
              <a href="/products" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Products Portal</a>
              <a href="/industries" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Industries</a>
              <a href="/about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">About</a>
              <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <NeuralBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">AI-First Enterprise Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform with
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Modernize legacy systems, integrate cutting-edge AI, and achieve measurable ROI 
            with our comprehensive AI solutions and enterprise platforms
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start AI Transformation</span>
              <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all">
              Calculate ROI
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Services & Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              End-to-end AI capabilities for enterprise transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
                onMouseEnter={() => setActiveService(i)}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${service.color.replace('from-', '').replace(' to-', ', ')})`
                  }}
                />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-6`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4">
                    {service.desc}
                  </p>
                  
                  <a href={service.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Products Section */}
      <section className="relative py-32 bg-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-purple-900/10 to-pink-900/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Products
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-ready platforms with built-in AI capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div
                key={i}
                className="group relative bg-slate-900/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 hover:border-transparent transition-all hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-[1px] bg-slate-900 rounded-2xl" />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-400">{product.full}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.gradient} p-2.5 opacity-80`}>
                      <product.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {product.desc}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center text-sm text-gray-400">
                        <Check className="w-4 h-4 mr-2 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                      <span className="text-xs font-medium text-green-400">{product.metric}</span>
                    </div>
                    <a href="/products" className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center">
                      Access
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/products" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105"
            >
              <Lock className="mr-2 h-5 w-5" />
              Access Products Portal
            </a>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our AI Technology Stack
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Powered by cutting-edge AI frameworks and tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'TensorFlow', category: 'ML Framework' },
              { name: 'PyTorch', category: 'Deep Learning' },
              { name: 'OpenAI GPT', category: 'Language Models' },
              { name: 'AWS SageMaker', category: 'MLOps' },
              { name: 'Kubernetes', category: 'Orchestration' },
              { name: 'Apache Spark', category: 'Big Data' },
              { name: 'LangChain', category: 'LLM Framework' },
              { name: 'Pinecone', category: 'Vector Database' }
            ].map((tech, i) => (
              <div key={i} className="group text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all">
                  <Database className="w-10 h-10 text-gray-400 group-hover:text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="relative py-32 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <BarChart3 className="w-16 h-16 mx-auto mb-8 text-cyan-400" />
            <h3 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Calculate Your AI ROI
              </span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Discover how much you could save with AI transformation
            </p>
            <div className="inline-flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                Try ROI Calculator
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Download Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Global Presence
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Serving enterprises worldwide with 24/7 AI support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, i) => (
              <div
                key={i}
                className={`relative bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border transition-all hover:transform hover:scale-105 ${
                  location.primary 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-purple-500/50'
                }`}
              >
                {location.primary && (
                  <div className="absolute -top-3 left-8 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                    <span className="text-xs font-semibold">Headquarters</span>
                  </div>
                )}
                
                <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{location.city}</h3>
                <p className="text-gray-400 mb-4">{location.country}</p>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  {location.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900 border-t border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Omniverity
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Leading the AI revolution with enterprise-grade artificial intelligence solutions, 
                custom development, and digital transformation services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Facebook className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <Instagram className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Services</a></li>
                <li><a href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors">Products Portal</a></li>
                <li><a href="/industries" className="text-gray-400 hover:text-cyan-400 transition-colors">Industries</a></li>
                <li><a href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors">Case Studies</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-400">
                  <Mail className="w-4 h-4 mr-2 mt-1 text-cyan-400" />
                  info@omniverity.com
                </li>
                <li className="flex items-start text-gray-400">
                  <Phone className="w-4 h-4 mr-2 mt-1 text-cyan-400" />
                  <div>
                    <p>USA: +1 (917) 687-0318</p>
                    <p className="text-sm">AU: +61 (424) 017-928</p>
                    <p className="text-sm">IN: +91 996-340-1117</p>
                  </div>
                </li>
                <li className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 mt-1 text-cyan-400" />
                  New York, USA
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Omniverity. All Rights Reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="/security" className="text-gray-400 hover:text-cyan-400 transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OmniversityDarkHomepage;
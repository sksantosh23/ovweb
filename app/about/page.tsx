'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, Award, Globe, Zap, Building2, Calendar,
  Target, Brain, Shield, Sparkles, ChevronRight,
  Cpu, Menu, X, ArrowRight, CheckCircle, Star,
  TrendingUp, Rocket, Heart, Code, GitBranch,
  Linkedin, Twitter, Github
} from 'lucide-react';

const AboutPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '500+', label: 'Enterprises Served', icon: Building2 },
    { value: '50+', label: 'AI Models Deployed', icon: Brain },
    { value: '99.9%', label: 'Uptime SLA', icon: Shield },
    { value: '24/7', label: 'Global Support', icon: Globe }
  ];

  const timeline = [
    { year: '2018', title: 'Foundation', desc: 'Started with a vision to democratize AI for enterprises' },
    { year: '2019', title: 'First AI Product', desc: 'Launched eHP - Enterprise Health Platform with predictive diagnostics' },
    { year: '2020', title: 'Global Expansion', desc: 'Opened offices in Sydney and Hyderabad to serve global clients' },
    { year: '2021', title: 'Series B Funding', desc: 'Secured $50M to accelerate AI research and development' },
    { year: '2022', title: '100+ Enterprises', desc: 'Reached milestone of serving over 100 enterprise clients' },
    { year: '2023', title: 'AI Innovation Award', desc: 'Recognized as Leader in Enterprise AI Solutions by Gartner' },
    { year: '2024', title: 'Platform Evolution', desc: 'Launched comprehensive AI suite with 5 flagship products' }
  ];

  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Pushing the boundaries of AI to solve complex enterprise challenges'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our mission - we deliver measurable ROI'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Enterprise-grade security and ethical AI practices'
    },
    {
      icon: Heart,
      title: 'Human-Centric AI',
      description: 'Augmenting human intelligence, not replacing it'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former Google AI Research Lead with 15+ years in ML',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Michael Roberts',
      role: 'Chief Technology Officer',
      bio: 'Ex-Microsoft Azure AI, architect of enterprise AI systems',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief AI Officer',
      bio: 'Stanford PhD, published 50+ papers on deep learning',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'David Kim',
      role: 'Chief Product Officer',
      bio: 'Built AI products at Amazon, Salesforce, and Oracle',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const partners = [
    'Microsoft', 'AWS', 'Google Cloud', 'NVIDIA', 'OpenAI', 'Databricks', 'Snowflake', 'MongoDB'
  ];

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
            <Link href="/industries" className="text-gray-300 hover:text-cyan-400 transition-colors">Industries</Link>
            <Link href="/about" className="text-cyan-400">About</Link>
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

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">About Omniverity</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pioneering the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                of Enterprise AI
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We're on a mission to transform enterprises with artificial intelligence, 
              making cutting-edge AI accessible, practical, and profitable for businesses worldwide.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="group">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="relative py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              From startup to industry leader in enterprise AI
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-purple-600"></div>
            
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-slate-900/80 backdrop-blur-lg rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                    <div className="text-cyan-400 font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div 
                key={i}
                className="group relative bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
                onMouseEnter={() => setActiveValue(i)}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 p-3 mb-6">
                  <value.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Visionaries driving AI innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-slate-900/80 backdrop-blur-lg rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <Users className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-1 text-center">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3 text-center">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 text-center">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  <a href={member.linkedin} className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                  </a>
                  <a href={member.twitter} className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                    <Twitter className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technology Partners
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Collaborating with industry leaders
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center justify-center p-8 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all">
                <span className="text-xl font-semibold text-gray-400 hover:text-purple-400 transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Enterprise?
            </span>
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ companies already revolutionizing their operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/case-studies" className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all">
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
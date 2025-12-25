'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, Bot, Cloud, Shield, BarChart3, Rocket, 
  Briefcase, Wifi, GraduationCap, ChevronRight, 
  Menu, X, ArrowRight, Sparkles, Users, Target,
  TrendingUp, Award, Clock, CheckCircle
} from 'lucide-react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeServiceHover, setActiveServiceHover] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (mounted) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [mounted]);

  // Navigation Items
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Industries', href: '/industries' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  // All Services
  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-600 to-blue-600',
      link: '/services/ai-solutions',
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Deep Learning']
    },
    {
      id: 'automation',
      title: 'Automation Services',
      description: 'Streamline operations and eliminate manual tasks with intelligent automation.',
      icon: <Bot className="w-8 h-8" />,
      color: 'from-blue-600 to-purple-600',
      link: '/services/automation',
      features: ['RPA', 'Workflow Automation', 'Process Mining', 'AI Automation']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Build, scale, and optimize your cloud environment with enterprise solutions.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-cyan-600 to-blue-600',
      link: '/services/cloud-infrastructure',
      features: ['Cloud Migration', 'DevOps', 'Multi-Cloud', 'Kubernetes']
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with military-grade security solutions.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-600 to-orange-600',
      link: '/services/cybersecurity',
      features: ['Zero Trust', 'Threat Detection', 'Compliance', 'SOC']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn data into actionable insights with advanced analytics and BI.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-600',
      link: '/services/data-analytics',
      features: ['Business Intelligence', 'Big Data', 'Predictive Analytics', 'Visualization']
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Navigate digital disruption with comprehensive transformation strategies.',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-600',
      link: '/services/digital-transformation',
      features: ['Strategy', 'Change Management', 'Innovation', 'Modernization']
    },
    {
      id: 'consulting',
      title: 'Strategic Consulting',
      description: 'Expert guidance to solve complex challenges and accelerate growth.',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-blue-600 to-indigo-600',
      link: '/services/consulting',
      features: ['Business Strategy', 'Technology Advisory', 'Operations', 'M&A']
    },
    {
      id: 'iot-solutions',
      title: 'IoT Solutions',
      description: 'Connect and control everything with intelligent IoT implementations.',
      icon: <Wifi className="w-8 h-8" />,
      color: 'from-teal-600 to-cyan-600',
      link: '/services/iot-solutions',
      features: ['Industrial IoT', 'Smart Cities', 'Edge Computing', 'Sensors']
    },
    {
      id: 'ai-training',
      title: 'AI Training',
      description: 'Empower your team with world-class training and certifications.',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600',
      link: '/services/ai-training',
      features: ['Corporate Training', 'Certifications', 'Workshops', 'Online Learning']
    }
  ];

  // Stats
  const stats = [
    { value: '100+', label: 'Enterprise Clients' },
    { value: '95%', label: 'Success Rate' },
    { value: '10K+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support' }
  ];

  // Industries
  const industries = [
    { name: 'Banking & Finance', icon: '🏦' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Retail', icon: '🛍️' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Technology', icon: '💻' },
    { name: 'Energy', icon: '⚡' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-white font-bold text-xl">OMNIVERITY</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/roi-calculator" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Calculate ROI
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/roi-calculator" 
                className="block mt-4 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg text-white font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculate ROI
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Mouse Effect */}
      <section className="relative min-h-screen flex items-center justify-center mt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        {/* Mouse Follow Effect */}
        {mounted && (
          <div 
            className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
            }}
          />
        )}
        
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400">Enterprise AI & Digital Transformation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text animate-gradient">
              Transforming Business Through Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of AI, automation, and cloud technology to revolutionize 
              your enterprise. From strategy to implementation, we deliver tomorrow's solutions today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/services" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Schedule Consultation
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end technology solutions designed to accelerate your digital journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group relative bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-600 transform hover:scale-105"
                onMouseEnter={() => setActiveServiceHover(service.id)}
                onMouseLeave={() => setActiveServiceHover(null)}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 mb-4`}>
                    <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, activeServiceHover === service.id ? 4 : 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <ChevronRight className="w-3 h-3 mr-1 text-gray-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400">Specialized solutions for every sector</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-black border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all transform hover:scale-105">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="font-semibold text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose OMNIVERITY?</h2>
            <p className="text-xl text-gray-400">What sets us apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Industry Leaders',
                desc: '20+ years of expertise in enterprise technology'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Expert Team',
                desc: '100+ certified professionals worldwide'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Proven Results',
                desc: '95% client satisfaction and retention rate'
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: '24/7 Support',
                desc: 'Round-the-clock assistance and monitoring'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-purple-400">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-gray-400">Enterprise platforms for digital excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'eHP', desc: 'Health Platform' },
              { name: 'OIMS', desc: 'Intelligence System' },
              { name: 'PayNet', desc: 'Payment Solution' },
              { name: 'ClickConnect', desc: 'Engagement Hub' },
              { name: 'BloK', desc: 'Blockchain Platform' }
            ].map((product, idx) => (
              <div key={idx} className="bg-black/50 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
              <span>Explore All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join 100+ enterprises that have accelerated their digital journey with OMNIVERITY
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105">
                Get Started Today
              </Link>
              <Link href="/roi-calculator" className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="text-white font-bold">OMNIVERITY</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming enterprises through intelligent technology solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 5).map(service => (
                  <li key={service.id}>
                    <Link href={service.link} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Industries', 'Case Studies', 'Contact'].map(item => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with our latest insights and innovations
              </p>
              <Link href="/contact" className="inline-block bg-purple-600 px-4 py-2 rounded text-sm font-semibold hover:bg-purple-700 transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2025 OMNIVERITY. All rights reserved. | 
              <Link href="/privacy-policy" className="hover:text-white mx-2">Privacy Policy</Link> | 
              <Link href="/terms-of-service" className="hover:text-white mx-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
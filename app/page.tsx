'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Brain, Bot, Cloud, Shield, BarChart3, Rocket, 
  Briefcase, Wifi, GraduationCap, ChevronRight, 
  Menu, X, ArrowRight, Sparkles, Users, Target,
  TrendingUp, Award, Clock, CheckCircle, Play, 
  ChevronDown, Zap, Globe, Phone, Mail
} from 'lucide-react';

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  features: string[];
  image: string;
}

interface NavItem {
  label: string;
  href: string;
}

// Navigation Items
const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

// All Services with images
const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence and machine learning.',
    icon: <Brain className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-purple-600 to-blue-600',
    link: '/services/ai-solutions',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Deep Learning'],
    image: '/images/services/ai-solutions.jpg'
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Streamline operations and eliminate manual tasks with intelligent automation.',
    icon: <Bot className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-blue-600 to-purple-600',
    link: '/services/automation',
    features: ['RPA', 'Workflow Automation', 'Process Mining', 'AI Automation'],
    image: '/images/services/automation.jpg'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description: 'Build, scale, and optimize your cloud environment with enterprise solutions.',
    icon: <Cloud className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-cyan-600 to-blue-600',
    link: '/services/cloud-infrastructure',
    features: ['Cloud Migration', 'DevOps', 'Multi-Cloud', 'Kubernetes'],
    image: '/images/services/cloud.jpg'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with military-grade security solutions.',
    icon: <Shield className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-red-600 to-orange-600',
    link: '/services/cybersecurity',
    features: ['Zero Trust', 'Threat Detection', 'Compliance', 'SOC'],
    image: '/images/services/security.jpg'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Turn data into actionable insights with advanced analytics and BI.',
    icon: <BarChart3 className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-green-600 to-emerald-600',
    link: '/services/data-analytics',
    features: ['Business Intelligence', 'Big Data', 'Predictive Analytics', 'Visualization'],
    image: '/images/services/analytics.jpg'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Navigate digital disruption with comprehensive transformation strategies.',
    icon: <Rocket className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-purple-600 to-pink-600',
    link: '/services/digital-transformation',
    features: ['Strategy', 'Change Management', 'Innovation', 'Modernization'],
    image: '/images/services/transformation.jpg'
  },
  {
    id: 'consulting',
    title: 'Strategic Consulting',
    description: 'Expert guidance to solve complex challenges and accelerate growth.',
    icon: <Briefcase className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-blue-600 to-indigo-600',
    link: '/services/consulting',
    features: ['Business Strategy', 'Technology Advisory', 'Operations', 'M&A'],
    image: '/images/services/consulting.jpg'
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    description: 'Connect and control everything with intelligent IoT implementations.',
    icon: <Wifi className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-teal-600 to-cyan-600',
    link: '/services/iot-solutions',
    features: ['Industrial IoT', 'Smart Cities', 'Edge Computing', 'Sensors'],
    image: '/images/services/iot.jpg'
  },
  {
    id: 'ai-training',
    title: 'AI Training',
    description: 'Empower your team with world-class training and certifications.',
    icon: <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />,
    color: 'from-orange-600 to-red-600',
    link: '/services/ai-training',
    features: ['Corporate Training', 'Certifications', 'Workshops', 'Online Learning'],
    image: '/images/services/training.jpg'
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

// Products
const productsList = [
  { name: 'eHP', desc: 'Health Platform', image: '/images/products/ehp-thumb.jpg' },
  { name: 'OIMS', desc: 'Intelligence System', image: '/images/products/oims-thumb.jpg' },
  { name: 'PayNet', desc: 'Payment Solution', image: '/images/products/paynet-thumb.jpg' },
  { name: 'ClickConnect', desc: 'Engagement Hub', image: '/images/products/clickconnect-thumb.jpg' },
  { name: 'BloK', desc: 'Blockchain Platform', image: '/images/products/blok-thumb.jpg' }
];

// Image Placeholder Component
const ImagePlaceholder = ({ className = '' }: { className?: string }) => (
  <div className={`bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center ${className}`}>
    <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center">
      <Sparkles className="w-8 h-8 text-slate-600" />
    </div>
  </div>
);

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeServiceHover, setActiveServiceHover] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse move for hero effect (disabled on mobile for performance)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (window.innerWidth > 768) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [mounted, handleMouseMove]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black/80 backdrop-blur-md'
        } border-b border-gray-800`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-lg md:text-xl">O</span>
              </div>
              <span className="text-white font-bold text-lg md:text-xl">OMNIVERITY</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/roi-calculator" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm"
              >
                Calculate ROI
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white touch-target"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              id="mobile-menu"
              className="lg:hidden py-4 border-t border-gray-800 animate-fade-in"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/roi-calculator" 
                className="block mt-4 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 rounded-lg text-white font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculate ROI
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Mouse Effect */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        
        {/* Mouse Follow Effect - Desktop only */}
        {mounted && (
          <div 
            className="hidden md:block absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`,
            }}
            aria-hidden="true"
          />
        )}
        
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
        <div className="absolute bottom-20 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} aria-hidden="true" />
        
        <div className="container mx-auto px-4 relative z-10 py-12 md:py-0">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-3 md:px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-400" aria-hidden="true" />
              <span className="text-purple-400 text-sm md:text-base">Enterprise AI & Digital Transformation</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Transforming Business
              </span>
              <br />
              <span className="text-white">Through Intelligence</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Harness the power of AI, automation, and cloud technology to revolutionize 
              your enterprise. From strategy to implementation, we deliver tomorrow&apos;s solutions today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link 
                href="/services" 
                className="btn btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="btn btn-secondary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Video Play Button (Optional) */}
            <button 
              className="hidden md:inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
              aria-label="Watch introduction video"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Play className="w-5 h-5 text-white ml-1" />
              </div>
              <span>Watch intro video</span>
            </button>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 relative" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end technology solutions designed to accelerate your digital journey
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group relative bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-600 transform hover:scale-[1.02]"
                onMouseEnter={() => setActiveServiceHover(service.id)}
                onMouseLeave={() => setActiveServiceHover(null)}
              >
                {/* Service Image */}
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} illustration`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 p-2 md:p-3 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-90`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm md:text-base line-clamp-2">
                    {service.description}
                  </p>
                  
                  {/* Features - Show more on hover */}
                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, activeServiceHover === service.id ? 4 : 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <ChevronRight className="w-3 h-3 mr-1 text-gray-600" aria-hidden="true" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center text-sm font-semibold group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-10 md:mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center space-x-2 btn btn-primary px-6 py-3"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-gray-400">Specialized solutions for every sector</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {industries.map((industry, idx) => (
              <div 
                key={idx} 
                className="card p-4 md:p-6 text-center hover:border-purple-500/50 transition-all"
              >
                <div className="text-3xl md:text-4xl mb-3" aria-hidden="true">{industry.icon}</div>
                <p className="font-semibold text-sm md:text-base">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose OMNIVERITY?</h2>
            <p className="text-lg md:text-xl text-gray-400">What sets us apart</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Award className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Industry Leaders',
                desc: '20+ years of expertise in enterprise technology'
              },
              {
                icon: <Users className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Expert Team',
                desc: '100+ certified professionals worldwide'
              },
              {
                icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />,
                title: 'Proven Results',
                desc: '95% client satisfaction and retention rate'
              },
              {
                icon: <Clock className="w-10 h-10 md:w-12 md:h-12" />,
                title: '24/7 Support',
                desc: 'Round-the-clock assistance and monitoring'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-purple-400">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-lg md:text-xl text-gray-400">Enterprise platforms for digital excellence</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {productsList.map((product, idx) => (
              <div 
                key={idx} 
                className="card p-4 md:p-6 text-center hover:border-purple-500/50 transition-all group"
              >
                {/* Product Image Placeholder */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} logo`}
                    fill
                    className="object-cover"
                    sizes="80px"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/products" 
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Join 100+ enterprises that have accelerated their digital journey with OMNIVERITY
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="btn btn-primary px-6 md:px-8 py-3 md:py-4"
              >
                Get Started Today
              </Link>
              <Link 
                href="/roi-calculator" 
                className="btn btn-secondary px-6 md:px-8 py-3 md:py-4"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">O</span>
                </div>
                <span className="text-white font-bold">OMNIVERITY</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Transforming enterprises through intelligent technology solutions.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                  <Zap className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Services Links */}
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
            
            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Industries', 'Case Studies', 'Careers', 'Contact'].map(item => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:info@omniverity.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    info@omniverity.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
              <Link 
                href="/contact" 
                className="inline-block mt-4 bg-purple-600 px-4 py-2 rounded text-sm font-semibold hover:bg-purple-700 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2025 OMNIVERITY. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
